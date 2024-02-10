declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"apis/index.md": {
	id: "apis/index.md";
  slug: "apis";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"aprende-un-lenguaje/index.md": {
	id: "aprende-un-lenguaje/index.md";
  slug: "aprende-un-lenguaje";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"backend.md": {
	id: "backend.md";
  slug: "backend";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bd-relacionales/index.md": {
	id: "bd-relacionales/index.md";
  slug: "bd-relacionales";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cache/index.md": {
	id: "cache/index.md";
  slug: "cache";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ci-cd/index.mdx": {
	id: "ci-cd/index.mdx";
  slug: "ci-cd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"computer-science.md": {
	id: "computer-science.md";
  slug: "computer-science";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"control-versiones/index.md": {
	id: "control-versiones/index.md";
  slug: "control-versiones";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"estructura-datos/index.md": {
	id: "estructura-datos/index.md";
  slug: "estructura-datos";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"internet/como-funciona-internet.mdx": {
	id: "internet/como-funciona-internet.mdx";
  slug: "internet/como-funciona-internet";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"internet/index.md": {
	id: "internet/index.md";
  slug: "internet";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"internet/que-es-http.mdx": {
	id: "internet/que-es-http.mdx";
  slug: "internet/que-es-http";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"libros/the-c-programming-language/inicio.mdx": {
	id: "libros/the-c-programming-language/inicio.mdx";
  slug: "libros/the-c-programming-language/inicio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"libros/the-c-programming-language/introduccion.md": {
	id: "libros/the-c-programming-language/introduccion.md";
  slug: "libros/the-c-programming-language/introduccion";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/the-c-programming-language/prefacio.md": {
	id: "libros/the-c-programming-language/prefacio.md";
  slug: "libros/the-c-programming-language/prefacio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/the-c-programming-language/prefacio1ed.md": {
	id: "libros/the-c-programming-language/prefacio1ed.md";
  slug: "libros/the-c-programming-language/prefacio1ed";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/README.md": {
	id: "libros/you-dont-know-js-yet/README.md";
  slug: "libros/you-dont-know-js-yet/readme";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/README.md": {
	id: "libros/you-dont-know-js-yet/get-started/README.md";
  slug: "libros/you-dont-know-js-yet/get-started/readme";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/apA.md": {
	id: "libros/you-dont-know-js-yet/get-started/apA.md";
  slug: "libros/you-dont-know-js-yet/get-started/apa";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/apB.md": {
	id: "libros/you-dont-know-js-yet/get-started/apB.md";
  slug: "libros/you-dont-know-js-yet/get-started/apb";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/ch1.md": {
	id: "libros/you-dont-know-js-yet/get-started/ch1.md";
  slug: "libros/you-dont-know-js-yet/get-started/ch1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/ch2.md": {
	id: "libros/you-dont-know-js-yet/get-started/ch2.md";
  slug: "libros/you-dont-know-js-yet/get-started/ch2";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/ch3.md": {
	id: "libros/you-dont-know-js-yet/get-started/ch3.md";
  slug: "libros/you-dont-know-js-yet/get-started/ch3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/ch4.md": {
	id: "libros/you-dont-know-js-yet/get-started/ch4.md";
  slug: "libros/you-dont-know-js-yet/get-started/ch4";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/foreword.md": {
	id: "libros/you-dont-know-js-yet/get-started/foreword.md";
  slug: "libros/you-dont-know-js-yet/get-started/foreword";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/get-started/toc.md": {
	id: "libros/you-dont-know-js-yet/get-started/toc.md";
  slug: "libros/you-dont-know-js-yet/get-started/toc";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"libros/you-dont-know-js-yet/preface.md": {
	id: "libros/you-dont-know-js-yet/preface.md";
  slug: "libros/you-dont-know-js-yet/preface";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"scaling-db/index.mdx": {
	id: "scaling-db/index.mdx";
  slug: "scaling-db";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"seguridad-web/buenas-practicas-apis/access-control.md": {
	id: "seguridad-web/buenas-practicas-apis/access-control.md";
  slug: "seguridad-web/buenas-practicas-apis/access-control";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/autenticacion.md": {
	id: "seguridad-web/buenas-practicas-apis/autenticacion.md";
  slug: "seguridad-web/buenas-practicas-apis/autenticacion";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/ci-cd.md": {
	id: "seguridad-web/buenas-practicas-apis/ci-cd.md";
  slug: "seguridad-web/buenas-practicas-apis/ci-cd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/entrada.md": {
	id: "seguridad-web/buenas-practicas-apis/entrada.md";
  slug: "seguridad-web/buenas-practicas-apis/entrada";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/index.md": {
	id: "seguridad-web/buenas-practicas-apis/index.md";
  slug: "seguridad-web/buenas-practicas-apis";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/jwt.md": {
	id: "seguridad-web/buenas-practicas-apis/jwt.md";
  slug: "seguridad-web/buenas-practicas-apis/jwt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/monitoring.md": {
	id: "seguridad-web/buenas-practicas-apis/monitoring.md";
  slug: "seguridad-web/buenas-practicas-apis/monitoring";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/oauth.md": {
	id: "seguridad-web/buenas-practicas-apis/oauth.md";
  slug: "seguridad-web/buenas-practicas-apis/oauth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/processing.md": {
	id: "seguridad-web/buenas-practicas-apis/processing.md";
  slug: "seguridad-web/buenas-practicas-apis/processing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/buenas-practicas-apis/salida.md": {
	id: "seguridad-web/buenas-practicas-apis/salida.md";
  slug: "seguridad-web/buenas-practicas-apis/salida";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"seguridad-web/index.md": {
	id: "seguridad-web/index.md";
  slug: "seguridad-web";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"servicio-alojamiento-repo/index.md": {
	id: "servicio-alojamiento-repo/index.md";
  slug: "servicio-alojamiento-repo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"testing/index.mdx": {
	id: "testing/index.mdx";
  slug: "testing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
