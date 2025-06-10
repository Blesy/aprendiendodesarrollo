// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE = {
  title: 'Aprendiendo Desarrollo',
  description: 'Aquí encontrarás recursos en español, desde libros a otras webs sobre diferentes áreas, como: Backend, Frontend, IA, Videojuegos, Ciencia de datos, etc.',
  defaultLanguage: 'es'
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
  AISecurity: {
    "Redes y protocolos": [
      { text: "Descripcion general", link: "AISecurity/redes-protocolos" },
      { text: "Modelo OSI y TCP/IP", link: "AISecurity/redes-protocolos/osi-tcp-ip" }
    ]
  },
  ComputerScience: {
    'Ciencias de la Computación': [
      { text: 'Descripción general', link: 'ComputerScience/computer-science' },
    ],
    'Aprende un lenguaje': [
      { text: 'Descripción general', link: 'ComputerScience/aprende-un-lenguaje' },
      { text: 'Fundamentos de Javascript', link: 'ComputerScience/aprende-un-lenguaje/js-basico' },
    ],
    'Estructuras de Datos': [
      { text: 'Descripción general', link: 'ComputerScience/estructura-datos' },
      { text: 'Arrays o Arreglos', link: 'ComputerScience/estructura-datos/array' },
      { text: 'Listas Enlazadas', link: 'ComputerScience/estructura-datos/lista-enlazada' },
      { text: 'Pilas', link: 'ComputerScience/estructura-datos/pila' },
      { text: 'Colas', link: 'ComputerScience/estructura-datos/cola' },
      { text: 'Tablas Hash', link: 'ComputerScience/estructura-datos/tabla-hash' },
      { text: 'Árboles', link: 'ComputerScience/estructura-datos/arbol' },
      { text: 'Grafo', link: 'ComputerScience/estructura-datos/grafo' },
      { text: 'Heap', link: 'ComputerScience/estructura-datos/heap' },
    ],
    'Notación Asintótica': [
      { text: 'Descripción general', link: 'ComputerScience/notaciones-asintoticas' },
    ],
    'Algoritmos': [
      { text: 'Descripción general', link: 'ComputerScience/algoritmos' },
      { text: 'Ordenamiento', link: 'ComputerScience/algoritmos/sorting' },
      { text: 'Recursividad', link: 'ComputerScience/algoritmos/recursion' },
      { text: 'Búsqueda', link: 'ComputerScience/algoritmos/busqueda' },
      { text: 'Cache', link: 'ComputerScience/algoritmos/cache' },
      { text: 'Grafos', link: 'ComputerScience/algoritmos/algoritmos-grafos' },
      { text: 'Arboles', link: 'ComputerScience/algoritmos/algoritmos-arbol' },
      { text: 'Voraces', link: 'ComputerScience/algoritmos/greedy' },
    ],

  },
  Backend: {
    'Ruta Backend': [
      {text: 'Descripción general', link: 'Backend/backend'},
    ],
    'Internet': [
      { text: 'Descripción general', link: 'Backend/internet'},
      { text: '¿Cómo funciona internet?', link: 'Backend/internet/como-funciona-internet' },
      { text: '¿Qué es HTTP?', link: 'Backend/internet/que-es-http' },
    ],
    'Aprende un lenguaje': [
      { text: 'Descripción general', link: 'Backend/aprende-un-lenguaje' },
    ],
    'Control de Versiones': [
      { text: 'Descripción general', link: 'Backend/control-versiones' },
    ],
    'Servicios de Alojamiento de Repos': [
      { text: 'Descripción general', link: 'Backend/servicio-alojamiento-repo' },
    ],
    'Bases de Datos Relacionales': [
      { text: 'Descripción general', link: 'Backend/bd-relacionales' },
    ],
    'APIs': [
      { text: 'Descripción general', link: 'Backend/apis' },
    ],
    'Cache': [
      { text: 'Descripción general', link: 'Backend/cache' },
    ],
    'Seguridad Web': [
      { text: 'Descripción general', link: 'Backend/seguridad-web' },
    ],
    'Buenas prácticas de seguridad en APIs': [
      { text: 'Introducción', link: 'Backend/seguridad-web/buenas-practicas-apis' },
      { text: 'Autenticación', link: 'Backend/seguridad-web/buenas-practicas-apis/autenticacion' },
      { text: 'JWT', link: 'Backend/seguridad-web/buenas-practicas-apis/jwt' },
      { text: 'Control de Acceso', link: 'Backend/seguridad-web/buenas-practicas-apis/access-control' },
      { text: 'OAuth', link: 'Backend/seguridad-web/buenas-practicas-apis/oauth' },
      { text: 'Procesamiento', link: 'Backend/seguridad-web/buenas-practicas-apis/processing' },
      { text: 'Entrada', link: 'Backend/seguridad-web/buenas-practicas-apis/entrada' },
      { text: 'Salida', link: 'Backend/seguridad-web/buenas-practicas-apis/salida' },
      { text: 'CI & CD', link: 'Backend/seguridad-web/buenas-practicas-apis/ci-cd' },
      { text: 'Monitorización', link: 'Backend/seguridad-web/buenas-practicas-apis/monitoring' },
    ],
    'Pruebas': [
      { text: 'Descripción general', link: 'Backend/testing' },
    ],
    'CI & CD': [
      { text: 'Descripción general', link: 'Backend/ci-cd' },
    ],
    'Escalando Bases de datos': [
      { text: 'Descripción general', link: 'Backend/scaling-db' },
    ]
  },
  /* Libros
                                                 @@                                                 
                                       @@@@@@@%#+=+%@@@                                             
                             @@@@@@@@%#*=:.         .:*%@@@                                         
                     @@@@@@@@@*=.                        :#@@@                                      
           @@@@@@@@@#+-::.                                  .-%@@@                                  
       @@@%#*=-..                                               .+%@@@                              
      @@#.:+:.                                                      :*@@@@                          
      @%.   .-%-                                                      ..:#@@@                       
     @@*       .=#+.                                                      ..=%@@@                   
     @@*          .+#+..                                                       :+%@@@               
      @@.             =%+..                                                        :*@@@@           
      @@%:              .=%*.                                                         .-#@@@@       
        @@@*.              .=%*:                                                          .=%@@@@   
      @@@@@*%@=.              .=%*:.                                                  ..:-*%@@@@@   
     @@%.:.+*.+@%:                -@#.                                           .=#@@@@@@@@@@@@    
     @@:    ..-#%%@#:               .-%#:.                               .-*#%@@@@@@@@@#=::%@@      
  @@@@@:        .:+@@@+.               .-##-.                    .:=*#@@@@@@@@@%*+-..-===-=@@       
 @@@-+@#:.          .-#@@-.               .-%*:.         ..:-*%@@@@@@@@@@%+-.:=*##=:      :@@@      
 @@+ ..*@@@*.          ..#@%:                ..+*.  :+%@@@@@@@@@@@#=.:+%%*-.... .:=-.     .%@@@@@@  
@@@:     .*@@@#=.         .-%@*.                .%@@@@@@@@@#==+*++=-.. .:=**+=-..  .:+*%@@@@@@@@@@@@
@@@:       .=@@@@@*-.        .+@@=.            :@%#%#+-.:-=:. .:-=+**+-.   .:-=*@@@@@@@@@@@@@@@@@@@ 
 @@*          .#@@%@@@+:.       .#@@-.        .%@%#. ...:+#%*=..   ...:+%@@@@@@@@@@@@@@@@@@@@*:.=@  
  @@*.          .=@@*=%@@%=.      .:%@#:      :@@@- .:...:=*=::=#%@@@@@@@@@@@@@@@@@@@@@%+-*=:..*@@  
  @@@@#:          .:#@%-:+@@@#-.     .=@@*.   :@%@+===+++*%@@@@@@@@@@@@@%**#%@@@@@#+++=-.-=--=%@@@  
 @@%.=%@@=.          .=@@+. -#@@@+:.    .*@@=..%@@@@@@@@@@@@@@@@@%#=--*@@@@@@#+-=+-.-=++=*@@@@@@@@@ 
 @@#   .%@@*.           .#@#.   =@@@@-     :%@%+@%@@@@@@@@@#=. .=%@@@@@@@=.+#- .+*:-%@@@@@@@@@      
  @@.    .=@@%:           .-@%-.  .:+@@@#-   .=@@@@@*=::. .+%@@@@@@#==#*-:-+=-+#@@@@@@@@@@          
  @@#.      -%@@=.           :*@+.    .-#@@@*:  ..      .+@@@@*=++*=:-==++#@@@@@@@@@@@@             
   @@@=.      .#@@*.            -%#.      .+@@@%=..     :@@@: ...-+-=%@@@@@@@@@@%*=-@@              
     @@%.       .=@@%:            .+%:      ..:*@@@%:.  :@@##..+@@@@@@@@@%=.... :+*@@@              
  @@ @@@@=        .:%@@+.           .:+:    ..-+#%@@@@%*-%@@%@@@@@@@%+=:  :---:. .-%@@              
 @@@%@%.+@%.        .=@@@*:.            -%@@@@@@@@@@@@@@@@@@@@@@%*=-..  ..:-=+*=--+@@@@@@           
@@%:  .-..%@=.        .*@@@@-.         -@@@@@@@@@@#=....:=%#-.  ....-*#=:.:=#@@@@@@@@@@@@@          
@@*.    .+%#@%.         :%##@@+.      .#@@#@:.....=*+::..  .-*#+-:..=#%@@@@@@@@@@@@@@@@             
@@=       .:*@@=          -%==@@#:    .%@#@-:--:.     .-=-:..-+#@@@@@@@@@@@@@@@@@@                  
@@#.          =@%:         .+%::#@@-. .#@*@=        ..-=#@@@@@@@@@@@@@@@@@@@@@@@@                   
@@@%.          .#@+.         .#= .+@@+ =@%%#   .-#@@@@@@@@@@@@@@@@@%*-..    -@@@@@@@                
 @@@@@+.        .-@%:         ..=.-*@@@%%@*@@@@@@@@@@@@@@@%+:.. .-==-:.. .:=*@%-.-#@@@@@            
    @@@@%-.       .*@+.       :%@@@@@@@@@@@%@@@@@@@%#*+=====-:..:-=====-==*#@@@@@##@@@@@            
      @@@@@*..      -@%:    .=@@@@@#:....*@@@%%*+-..          ..::+#@@@@@@@@@@@@@@@@@@@             
         @@@@@+.     .*@*.  .%@@..--:........     .-++-..:+%@@@@@@@@@@@@@@@@@@@@*:=@@               
           @@@@@#-    .:@%: :@%%      .:=+*+=--:::=*#@@@@@@@@@@@@@@@@@@@@@@#=-=--:@@                
              @@@@@*:.  .*@+:@%@++*+-:. .:-+#@@@@@@@@@@@@@@#***#@@@@@@%*=:--.     #@@@              
                 @@@@@=.  :%%*@%@-:+#@@@@@@@@@@@@@@@#=:..-#@@@@@@@#-:=-...  ...-::#@@@@@            
                   @@@@@#: .=@@@@@@@@@@@@@@@@+::..  -#@@@@@@@%=:. .:+=:. .+=:=#@@@@@@@@@@           
                      @@@@@*..#@@@@@#+=:.   .:-.=%@@@@@@%+-. .:==-...==--+%@@@@@@@@@@@              
                         @@@@@-.           .#@@@@@@@#=.  .:==. .:=+:-*@@@@@@@@@@@                   
                           @@@@@%.         +@@@@@+   .-*:.  -*-.-%@@@@@@@@@@@                       
                              @@@@@+.     .%@@%..=+::. .=-::*%@@@@@@@@@@@                           
                                @@@@@%=.  :@@%%-.  .:::=*@@@@@@@@@@@                                
                                   @@@@@#:.%@%@: ..=%@@@@@@@@@@@                                    
                                      @@@@@@@@*@@@@@@@@@@@@                                         
                                        @@@@@@@@@@@@@@@                                             
                                           @@@@@@@@                                                 
  Libros
  */
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
