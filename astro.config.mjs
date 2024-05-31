import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import robotsTxt from 'astro-robots-txt';
import react from "@astrojs/react";
import { remarkModifiedTime } from '/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aprendiendodesarrollo.com',
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    gfm: true,
    smartypants: true
  },
  integrations: [tailwind(), mdx(), sitemap(), react(), preact(), robotsTxt()],
  base: '/',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});