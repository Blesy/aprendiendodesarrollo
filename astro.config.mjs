import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import robotsTxt from 'astro-robots-txt';
import react from "@astrojs/react";
import svelte from '@astrojs/svelte';
import { remarkModifiedTime } from '/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aprendiendodesarrollo.com',
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    gfm: true,
    smartypants: true
  },
  integrations: [tailwind(), mdx(), sitemap(), react(), preact(), robotsTxt(), svelte()],
  base: '/',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});