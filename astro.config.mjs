import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: true,
    }),
  ],
  site: 'https://www.mastericmimarlik.com',
  output: 'server',
  adapter: vercel(),
});
