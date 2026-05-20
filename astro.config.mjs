import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://hassandevelopment.github.io',
  base: '/Hasan-Mansouri',
  integrations: [
    sitemap(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/index.asp': '/',
    '/aboutus.asp': '/about',
    '/subsidaries.asp': '/subsidiaries',
    '/subsidiaries.asp': '/subsidiaries',
  },
});
