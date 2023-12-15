// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE = {
  title: 'Mi Vitacora de aprendizaje',
  description: 'Bienvenido a mi blog, aquí encontrarás recursos en español de varios temas, desde libros a recursos en línea sobre lenguajes, conceptos, backend, frontend, videojuegos, etc.',
  defaultLanguage: 'es-mx'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export type Sidebar = Record<string,
  Record<string, { text: string; link: string }[]>
>

export const SITE_TITLE = 'Blesy Aprendiendo Desarrollo';
export const SITE_DESCRIPTION = 'Bienvenido a mi blog, aquí encontrarás recursos en español de varios temas, desde libros a recursos en línea sobre lenguajes, conceptos, backend, frontend, videojuegos, etc.';

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`
export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export const SIDEBAR: Sidebar = {
  Backend: {
    Internet: [
      { text: '¿Cómo funciona el internet?', link: 'Backend/internet/como-funciona-internet' },
    ],
  },
  //Libros
  The_C_Programming_Language: {
    'The C Programming Language': [
      { text: 'Inicio', link: 'The_C_Programming_Language/libros/the-c-programming-language/inicio' },
      { text: 'Prefacio', link: 'The_C_Programming_Language/libros/the-c-programming-language/prefacio' },
      { text: 'Prefacio de la primera edición', link: 'The_C_Programming_Language/libros/the-c-programming-language/prefacio1ed' },
      { text: 'Introducción', link: 'The_C_Programming_Language/libros/the-c-programming-language/introduccion' },
    ]
  }
}
