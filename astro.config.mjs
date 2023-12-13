import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aprendiendodesarrollo.com',
  integrations: [mdx(), sitemap(), react()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});