// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE = {
  title: 'Aprendiendo Desarrollo',
  description: 'Aquí encontrarás recursos en español, desde libros a otras webs sobre diferentes áreas, como: Backend, Frontend, IA, Videojuegos, Ciencia de datos, etc.',
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

export const SITE_TITLE = 'Aprendiendo Desarrollo';
export const SITE_DESCRIPTION = 'Aquí encontrarás recursos en español, desde libros a otras webs sobre diferentes áreas, como: Backend, Frontend, IA, Videojuegos, Ciencia de datos, etc.';

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`
export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export const SIDEBAR: Sidebar = {
  Internet: {
    '': [
      {text: 'Otros Recursos en español', link: 'Internet/internet'}
    ],
    '¿Cómo funciona el internet?': [
      { text: '¿Cómo funciona el internet? - 1', link: 'Internet/internet/como-funciona-internet/como-funciona-internet-1' },
      { text: '¿Cómo funciona el internet? - 2', link: 'Internet/internet/como-funciona-internet/como-funciona-internet-2' },
      { text: 'Internet, explicado', link: 'Internet/internet/como-funciona-internet/internet-explicado'}
    ],
  },
  Aprende_un_lenguaje: {
    '': [
      { text: 'Otros Recursos en español', link: 'Aprende_un_lenguaje/aprende-un-lenguaje' },
    ],
  },
  Control_Versiones: {
    '': [
      { text: 'Otros Recursos en español', link: 'Control_Versiones/control-versiones' },
    ]
  },
  Servicio_Alojamiento_Repo: {
    '': [
      { text: 'Otros Recursos en español', link: 'Servicio_Alojamiento_Repo/servicio-alojamiento-repo' },
    ]
  },
  Bases_Datos_Relacionales: {
    '': [
      { text: 'Otros Recursos en español', link: 'Bases_Datos_Relacionales/bd-relacionales' },
    ]
  },
  APIs: {
    '': [
      { text: 'Otros Recursos en español', link: 'APIs/apis' },
    ]
  },
  Cache: {
    '': [
      { text: 'Otros Recursos en español', link: 'Cache/cache' },
    ]
  },
  Seguridad_Web: {
    '': [
      { text: 'Otros Recursos en español', link: 'Seguridad_Web/seguridad-web' },
    ],
    'Buenas prácticas de seguridad en APIs': [
      { text: 'Introducción', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis' },
      { text: 'Autenticación', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/autenticacion' },
      { text: 'JWT', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/jwt' },
      { text: 'Control de Acceso', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control' },
      { text: 'OAuth', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/oauth' },
      { text: 'Procesamiento', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/processing' },
      { text: 'Entrada', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada' },
      { text: 'Salida', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/salida' },
      { text: 'CI & CD', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/ci-cd' },
      { text: 'Monitorización', link: 'Seguridad_Web/seguridad-web/buenas-practicas-apis/monitoring' },
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
  },
  You_Dont_Know_JS_Yet: {
    'You Dont Know JS Yet (Serie)': [
      { text: 'Inicio', link: 'You_Dont_Know_JS_Yet/libros/you-dont-know-js-yet/readme' },
      { text: 'Prefacio', link: 'You_Dont_Know_JS_Yet/libros/you-dont-know-js-yet/preface' },
    ],
    'Get Started': [
      { text: 'Inicio', link: 'You_Dont_Know_JS_Yet/libros/you-dont-know-js-yet/get-started/readme' },
      { text: 'Prologo', link: 'You_Dont_Know_JS_Yet/libros/you-dont-know-js-yet/get-started/foreword' },
      { text: 'Capitulo 1', link: 'You_Dont_Know_JS_Yet/libros/you-dont-know-js-yet/get-started/ch1' },
      { text: 'Capitulo 2', link: 'You_Dont_Know_JS_Yet/libros/you-dont-know-js-yet/get-started/ch2' },
    ],
  },
}
