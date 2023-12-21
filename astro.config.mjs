import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import robotsTxt from 'astro-robots-txt';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aprendiendodesarrollo.com',
  integrations: [tailwind(), mdx(), sitemap(), react(), preact(), robotsTxt()],
  base: '/',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});