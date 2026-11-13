import { getCollection, type CollectionEntry } from 'astro:content';
import { homePath, jobPath, langs, projectPath, type Lang } from '../i18n/ui';

// Entries live in a folder per locale (jobs/es/xubit.md -> id "es/xubit"); the slug is shared across locales.
const inLang = (lang: Lang) => (entry: { id: string }) => entry.id.startsWith(`${lang}/`);

export const slugOf = (entry: { id: string }) => entry.id.slice(entry.id.indexOf('/') + 1);

export const getJobs = async (lang: Lang): Promise<CollectionEntry<'jobs'>[]> =>
  (await getCollection('jobs', inLang(lang))).sort(
    (a, b) =>
      b.data.end - a.data.end ||
      b.data.start - a.data.start ||
      a.data.company.localeCompare(b.data.company),
  );

/**
 * Static paths for a locale's detail pages, each with the next entry and its alternates.
 * An entry missing in another locale links to that locale's home.
 */
const detailStaticPaths = async <T extends { id: string }>(
  lang: Lang,
  getEntries: (lang: Lang) => Promise<T[]>,
  pathOf: (lang: Lang, slug: string) => string,
) => {
  const entries = await getEntries(lang);
  const slugsByLang = Object.fromEntries(
    await Promise.all(
      langs.map(async (l) => [l, new Set((await getEntries(l)).map(slugOf))] as const),
    ),
  ) as Record<Lang, Set<string>>;

  return entries.map((entry, index) => {
    const slug = slugOf(entry);
    const alternates = Object.fromEntries(
      langs.map((l) => [l, slugsByLang[l].has(slug) ? pathOf(l, slug) : homePath(l)]),
    ) as Record<Lang, string>;
    return { slug, entry, next: entries[(index + 1) % entries.length], alternates };
  });
};

export const jobStaticPaths = async (lang: Lang) =>
  (await detailStaticPaths(lang, getJobs, jobPath)).map(({ slug, entry, next, alternates }) => ({
    params: { id: slug },
    props: { job: entry, next, alternates },
  }));

export const homeAlternates = Object.fromEntries(langs.map((l) => [l, homePath(l)])) as Record<Lang, string>;

export const getProjects = async (lang: Lang): Promise<CollectionEntry<'projects'>[]> =>
  (await getCollection('projects', inLang(lang))).sort(
    (a, b) => b.data.year - a.data.year || a.data.name.localeCompare(b.data.name),
  );

export const projectStaticPaths = async (lang: Lang) =>
  (await detailStaticPaths(lang, getProjects, projectPath)).map(({ slug, entry, next, alternates }) => ({
    params: { id: slug },
    props: { project: entry, next, alternates },
  }));
