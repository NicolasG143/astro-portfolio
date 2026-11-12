// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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
  server: {
    allowedHosts: ['defence-kits-purposes-victory.trycloudflare.com'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
