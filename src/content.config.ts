import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';
import { SITE } from './consts'

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        rutas: z.array(z.string()),
        title: z.string().default(SITE.title),
        lang: z.literal('es').default(SITE.defaultLanguage),
        dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
        ogLocale: z.string().optional()
    })
})

export const collections = { blog };
