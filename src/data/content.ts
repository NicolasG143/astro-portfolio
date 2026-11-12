import { getCollection } from 'astro:content';

export const getJobs = async () =>
  (await getCollection('jobs')).sort(
    (a, b) =>
      b.data.end - a.data.end ||
      b.data.start - a.data.start ||
      a.data.company.localeCompare(b.data.company),
  );

export const getProjects = async () =>
  (await getCollection('projects')).sort((a, b) => b.data.year - a.data.year);
