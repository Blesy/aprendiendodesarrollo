import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import svelte from '@astrojs/svelte';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkModifiedTime } from '/remark-modified-time.mjs';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aprendiendodesarrollo.com',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkModifiedTime],
      rehypePlugins: [[ rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
      gfm: true,
      smartypants: true
    })
  },
  integrations: [mdx(), sitemap(), robotsTxt(), svelte(), pagefind()],
  base: '/',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});