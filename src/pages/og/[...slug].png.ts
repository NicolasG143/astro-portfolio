import type { APIRoute, GetStaticPaths } from 'astro';
import { getJobs, getProjects, slugOf } from '../../data/content';
import { getProfile, yearRange } from '../../data/profile';
import { langs, useTranslations } from '../../i18n/ui';
import { clip, renderOgPng, type OgCard } from '../../lib/og';

// One card per page and locale: /og/es.png, /og/es/<job>.png, /og/es/projects/<project>.png (same for en).
export const getStaticPaths = (async () => {
  const paths: { params: { slug: string }; props: { card: OgCard } }[] = [];

  for (const lang of langs) {
    const t = useTranslations(lang);
    const profile = getProfile(lang);

    paths.push({
      params: { slug: lang },
      props: {
        card: {
          label: 'tuty.dev',
          title: 'software engineer',
          description: t('hero.body').split('. ')[0] + '.',
          footer: profile.name,
          badge: profile.location,
        },
      },
    });

    for (const job of await getJobs(lang)) {
      const { company, summary, start, end } = job.data;
      paths.push({
        params: { slug: `${lang}/${slugOf(job)}` },
        props: {
          card: {
            label: t('nav.work'),
            title: company,
            description: clip(summary),
            footer: profile.name,
            badge: yearRange(start, end),
          },
        },
      });
    }

    for (const project of await getProjects(lang)) {
      const { name, summary, year } = project.data;
      paths.push({
        params: { slug: `${lang}/projects/${slugOf(project)}` },
        props: {
          card: {
            label: t('project.label'),
            title: name,
            description: clip(summary),
            footer: profile.name,
            badge: String(year),
          },
        },
      });
    }
  }

  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgPng((props as { card: OgCard }).card);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
