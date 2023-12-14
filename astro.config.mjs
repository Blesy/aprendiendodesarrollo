import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aprendiendodesarrollo.com',
  integrations: [tailwind(), mdx(), sitemap(), react()],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});