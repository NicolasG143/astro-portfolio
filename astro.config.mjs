// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tuty.dev',
  trailingSlash: 'ignore',
  server: {
    allowedHosts: ['defence-kits-purposes-victory.trycloudflare.com'],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
