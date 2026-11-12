import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  url: z.url(),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/jobs' }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      role: z.string(),
      start: z.number().int(),
      end: z.number().int(),
      summary: z.string(),
      stack: z.array(z.string()).min(1),
      links: z.array(link).default([]),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string() }))
        .default([]),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    year: z.number().int(),
    summary: z.string(),
    stack: z.array(z.string()).min(1),
    links: z.array(link).default([]),
  }),
});

export const collections = { jobs, projects };
