import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';
import { SITE } from './consts'

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        rutas: z.array(z.string()),
        title: z.string().default(SITE.title),
        lang: z.literal('es').default(SITE.defaultLanguage),
        dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
        ogLocale: z.string().optional(),
        // Nav section label this page belongs to within each of its `rutas`
        group: z.string(),
        // Position within its `group`, ascending
        order: z.number().default(0),
        // Overrides `title` as the sidebar link text (e.g. 'Descripción general' for section overviews)
        navTitle: z.string().optional()
    })
})

export const collections = { blog };
