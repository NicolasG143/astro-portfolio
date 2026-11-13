import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  url: z.url(),
});

// The first shot is the cover; the rest are shown below the write-up.
const gallery = (image: SchemaContext['image']) =>
  z.array(z.object({ src: image(), alt: z.string(), caption: z.string() })).default([]);

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
      gallery: gallery(image),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      year: z.number().int(),
      summary: z.string(),
      stack: z.array(z.string()).min(1),
      links: z.array(link).default([]),
      gallery: gallery(image),
    }),
});

export const collections = { jobs, projects };
