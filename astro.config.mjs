// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tuty.dev',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Links each page with its translation (xhtml:link alternates) in the sitemap.
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en-US' },
      },
      filter: (page) => !page.includes('/404'),
      // The i18n option pairs pages by path, but job pages use a translated segment
      // (/trabajos/<slug>/ vs /en/work/<slug>/), so pair those explicitly.
      serialize: (item) => {
        const match = item.url.match(/^(https?:\/\/[^/]+)\/(?:trabajos|en\/work)\/([^/]+)\/$/);
        if (match) {
          const [, origin, slug] = match;
          item.links = [
            { lang: 'es-AR', url: `${origin}/trabajos/${slug}/` },
            { lang: 'en-US', url: `${origin}/en/work/${slug}/` },
          ];
        }
        return item;
      },
    }),
  ],
  server: {
    allowedHosts: ['defence-kits-purposes-victory.trycloudflare.com'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
