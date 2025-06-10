import { defineCollection, z } from 'astro:content';
import { SITE } from '../consts'

const blog = defineCollection({
	schema: z.object({
		rutas: z.array(z.string()),
		title: z.string().default(SITE.title),
		lang: z.literal('es').default(SITE.defaultLanguage),
		dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
		ogLocale: z.string().optional()
	})
})

export const collections = { blog };
