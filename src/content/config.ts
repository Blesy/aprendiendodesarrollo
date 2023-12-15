import { defineCollection, z } from 'astro:content';
import { SITE } from '../consts'

const blog = defineCollection({
	schema: z.object({
		rutas: z.array(z.string()),
		title: z.string().default(SITE.title),
		sortOrder: z.number().optional(),
		description: z.string().default(SITE.description),
		lang: z.literal('es-mx').default(SITE.defaultLanguage),
		dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date(),
		heroImage: z.string().optional(),
		image: z
		  .object({
			src: z.string(),
			alt: z.string()
		  })
		  .optional(),
		ogLocale: z.string().optional()
	})
})

export const collections = { blog };
