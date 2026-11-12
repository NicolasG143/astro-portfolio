import { getCollection, type CollectionEntry } from 'astro:content';
import { homePath, jobPath, langs, type Lang } from '../i18n/ui';

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

/** Static paths for a locale's job pages. A job missing in another locale links to that locale's home. */
export const jobStaticPaths = async (lang: Lang) => {
  const jobs = await getJobs(lang);
  const slugsByLang = Object.fromEntries(
    await Promise.all(
      langs.map(async (l) => [l, new Set((await getJobs(l)).map(slugOf))] as const),
    ),
  ) as Record<Lang, Set<string>>;

  return jobs.map((job, index) => {
    const slug = slugOf(job);
    const alternates = Object.fromEntries(
      langs.map((l) => [l, slugsByLang[l].has(slug) ? jobPath(l, slug) : homePath(l)]),
    ) as Record<Lang, string>;
    return {
      params: { id: slug },
      props: { job, next: jobs[(index + 1) % jobs.length], alternates },
    };
  });
};

export const homeAlternates = Object.fromEntries(langs.map((l) => [l, homePath(l)])) as Record<Lang, string>;

export const getProjects =async (lang: Lang): Promise<CollectionEntry<'projects'>[]> =>
  (await getCollection('projects', inLang(lang))).sort((a, b) => b.data.year - a.data.year);
