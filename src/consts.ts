// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE = {
  title: 'Aprendiendo Desarrollo',
  description: 'Aquí encontrarás recursos en español, desde libros a otras webs sobre diferentes áreas, como: Backend, Frontend, IA, Videojuegos, Ciencia de datos, etc.',
  defaultLanguage: 'es'
} as const

export type Sidebar = Record<string,
  Record<string, { text: string; link: string }[]>
>

export const SITE_TITLE = 'Aprendiendo Desarrollo';
export const SITE_DESCRIPTION = 'Aquí encontrarás recursos en español, desde libros a otras webs sobre diferentes áreas, como: Backend, Frontend, IA, Videojuegos, Ciencia de datos, etc.';
