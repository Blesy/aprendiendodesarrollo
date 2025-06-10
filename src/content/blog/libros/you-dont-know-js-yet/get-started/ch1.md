---
rutas: [You_Dont_Know_JS_Yet]
title: 'Capítulo 1: ¿Qué Es JavaScript?'

---

No conoces JS, todavía. Yo tampoco, al menos no completamente. Ninguno de nosotros lo hace. Pero todos podemos empezar a conocer mejor a JS.

En este primer capítulo del primer libro de la serie *You Don't Know JS Yet* (YDKJSY), dedicaremos tiempo a construir una base para avanzar. Necesitamos comenzar cubriendo una variedad de detalles importantes de mantenimiento, desmitificando algunos mitos y malentendidos sobre lo que realmente es el lenguaje (¡y lo que no es!).

Esta es una perspicacia valiosa sobre la identidad y el proceso de cómo está organizado y mantenido JS; todos los desarrolladores de JS deberían entenderlo. Si quieres conocer a JS, así es como *comenzar* dando los primeros pasos en ese viaje.

## Sobre Este Libro

Enfatizo la palabra viaje porque *conocer JS* no es un destino, es una dirección. No importa cuánto tiempo pases con el lenguaje, siempre podrás encontrar algo más que aprender y entender un poco mejor. Así que no veas este libro como algo para apresurarte y lograr un logro rápido. En cambio, la paciencia y la persistencia son lo mejor mientras das estos primeros pasos.

Después de este capítulo introductorio, el resto del libro presenta un mapa de alto nivel de lo que encontrarás mientras profundizas y estudias JS con los libros de YDKJSY.

En particular, el Capítulo 4 identifica tres pilares principales alrededor de los cuales está organizado el lenguaje JS: scope/closures (alcance/cierres), prototypes/objects (prototipos/objetos) y types/coercion (tipos/coerción). JS es un lenguaje amplio y sofisticado, con muchas características y capacidades. Pero todo JS se basa en estos tres pilares fundamentales.

Ten en cuenta que, aunque este libro tiene el título "Get Started", **no está destinado como un libro para principiantes o una introducción**. El trabajo principal de este libro es prepararte para estudiar JS en profundidad a lo largo del resto de la serie; está escrito asumiendo que ya tienes familiaridad con JS y al menos varios meses de experiencia antes de avanzar en YDKJSY. Entonces, para aprovechar al máximo *Get Started*, asegúrate de pasar mucho tiempo escribiendo código JS para acumular experiencia.

Incluso si ya has escrito mucho JS antes, este libro no debe pasarse por alto o saltarse; tómate tu tiempo para procesar completamente el material aquí. **Un buen comienzo siempre depende de un primer paso sólido.**

## ¿Qué significa ese nombre?

El nombre JavaScript es probablemente el nombre de un lenguaje de programación más malinterpretado y comprendido.

¿Está este lenguaje relacionado con Java? ¿Es solo la forma de script para Java? ¿Solo sirve para escribir scripts y no programas reales?

La verdad es que el nombre JavaScript es un resultado de artimañas de marketing. Cuando Brendan Eich concibió por primera vez el lenguaje, lo denominó Mocha. Internamente en Netscape, se utilizaba la marca LiveScript. Pero cuando llegó el momento de nombrar públicamente el lenguaje, "JavaScript" ganó la votación.

¿Por qué? Porque este lenguaje fue diseñado originalmente para atraer a una audiencia compuesta en su mayoría por programadores de Java, y porque la palabra "script" estaba de moda en ese momento para referirse a programas livianos. Estos "scripts" livianos serían los primeros en incrustarse en páginas en esta nueva cosa llamada web!

En otras palabras, JavaScript fue un truco de marketing para tratar de posicionar este lenguaje como una alternativa aceptable para escribir el más pesado y más conocido Java de la época. Podría haberse llamado igualmente "WebJava", por así decirlo.

Existen algunas similitudes superficiales entre el código de JavaScript y el código de Java. Esas similitudes no provienen especialmente de un desarrollo compartido, sino porque ambos lenguajes apuntan a desarrolladores con expectativas de sintaxis asumidas de C (y en cierta medida, C++).

Por ejemplo, usamos la `{` para comenzar un bloque de código y la `}` para finalizar ese bloque de código, al igual que en C/C++ y Java. También usamos el `;` para poner fin a una declaración.

De alguna manera, las relaciones legales van aún más allá de la sintaxis. Oracle (a través de Sun), la empresa que aún posee y opera Java, también posee la marca registrada oficial para el nombre "JavaScript" (a través de Netscape). Esta marca registrada casi nunca se hace valer y probablemente no podría hacerse en este momento.

Por estas razones, algunos han sugerido que usemos JS en lugar de JavaScript. Esa es una abreviatura muy común, aunque no es un buen candidato para la marca oficial del lenguaje. De hecho, estos libros utilizan JS casi exclusivamente para referirse al lenguaje.

Para distanciar aún más al lenguaje de la marca registrada propiedad de Oracle, el nombre oficial del lenguaje especificado por TC39 y formalizado por el organismo de normas ECMA es **ECMAScript**. Y de hecho, desde 2016, el nombre oficial del lenguaje también ha sido seguido por el año de revisión; al momento de escribir esto, eso es ECMAScript 2019, o de lo contrario abreviado como ES2019.

En otras palabras, el JavaScript/JS que se ejecuta en tu navegador o en Node.js, es *una* implementación del estándar ES2019.

| NOTA: |
| :--- |
| No uses términos como "JS6" o "ES8" para referirte al lenguaje. Algunos lo hacen, pero esos términos solo sirven para perpetuar la confusión. "ES20xx" o simplemente "JS" son los términos a los que debes ceñirte. |

Ya sea que lo llames JavaScript, JS, ECMAScript o ES2019, ¡definitivamente no es una variante del lenguaje Java!

> "Java es a JavaScript como jamón es a hámster." --Jeremy Keith, 2009

## Especificación del Lenguaje.

Mencioné TC39, el comité de dirección técnica que gestiona JS. Su tarea principal es gestionar la especificación oficial del lenguaje. Se reúnen regularmente para votar sobre cualquier cambio acordado, que luego envían a ECMA, la organización de estándares.

La sintaxis y el comportamiento de JS están definidos en la especificación ES.

ES2019 resulta ser la décima especificación/revisión numerada principal desde el inicio de JS en 1995, así que en la URL oficial de la especificación alojada por ECMA, encontrarás "10.0":

https://www.ecma-international.org/ecma-262/10.0/

El comité TC39 está compuesto por entre 50 y aproximadamente 100 personas de una amplia variedad de empresas relacionadas con la web, como fabricantes de navegadores (Mozilla, Google, Apple) y fabricantes de dispositivos (Samsung, etc). Todos los miembros del comité son voluntarios, aunque muchos de ellos son empleados de estas empresas y pueden recibir compensación en parte por sus funciones en el comité.

TC39 se reúne generalmente aproximadamente cada dos meses, por lo general durante unos tres días, para revisar el trabajo realizado por los miembros desde la última reunión, discutir problemas y votar sobre propuestas. Las ubicaciones de las reuniones rotan entre las empresas miembros dispuestas a ser anfitrionas.

Todas las propuestas de TC39 avanzan a través de un proceso de cinco etapas, por supuesto, ya que somos programadores, ¡comienza en 0! Desde la Etapa 0 hasta la Etapa 4. Puedes obtener más información sobre el proceso de etapas aquí: https://tc39.es/process-document/

La Etapa 0 significa aproximadamente que alguien en TC39 piensa que es una idea valiosa y planea respaldarla y trabajar en ella. Eso significa que muchas ideas que los no miembros de TC39 "proponen", a través de medios informales como las redes sociales o publicaciones en blogs, son realmente "pre-etapa 0". Debes conseguir que un miembro de TC39 respalde una propuesta para que sea considerada oficialmente "Etapa 0".

Una vez que una propuesta alcanza el estado de "Etapa 4", es elegible para ser incluida en la próxima revisión anual del lenguaje. Puede tomar desde varios meses hasta unos pocos años para que una propuesta avance a través de estas etapas.

Todas las propuestas se gestionan de manera abierta, en el repositorio de Github de TC39: https://github.com/tc39/proposals

Cualquier persona, ya sea miembro de TC39 o no, puede participar en estas discusiones públicas y en los procesos para trabajar en las propuestas. Sin embargo, solo los miembros de TC39 pueden asistir a las reuniones y votar sobre las propuestas y los cambios. Por lo tanto, en efecto, la voz de un miembro de TC39 tiene mucho peso en la dirección que tomará JS.

Contrariamente a algún mito establecido y frustrantemente perpetuado, *no* hay múltiples versiones de JavaScript en circulación. Solo existe **un JS**, el estándar oficial mantenido por TC39 y ECMA.

En la década de los 2000s, cuando Microsoft mantenía una versión bifurcada e ingenierizada en reversa (y no del todo compatible) de JS llamada "JScript", realmente existían "versiones múltiples" de JS. Pero esos días han quedado atrás. Es obsoleto y inexacto hacer tales afirmaciones sobre JS hoy en día.

Todos los principales navegadores y fabricantes de dispositivos se han comprometido a mantener sus implementaciones de JS compatibles con esta única especificación central. Por supuesto, los motores implementan características en diferentes momentos. Pero nunca debería ser el caso de que el motor V8 (el motor JS de Chrome) implemente una característica especificada de manera diferente o incompatible en comparación con el motor SpiderMonkey (el motor JS de Mozilla).

Esto significa que puedes aprender un **solo JS** y confiar en ese mismo JS en todas partes.

### La Web Lo Gobierna Todo (JS)

Mientras que la variedad de entornos que ejecutan JS está en constante expansión (desde navegadores, hasta servidores (Node.js), pasando por robots, bombillas, hasta...), el único entorno que domina JS es la web. En otras palabras, cómo se implementa JS para los navegadores web es, en la práctica, la única realidad que importa.

En su mayor parte, el JS definido en la especificación y el JS que se ejecuta en los motores de JS basados en el navegador es el mismo. Pero hay algunas diferencias que deben tenerse en cuenta.

A veces, la especificación de JS dictará algún comportamiento nuevo o refinado, y aún así, eso no coincidirá exactamente con cómo funciona en los motores de JS basados en el navegador. Tal desajuste es histórico: los motores de JS han tenido más de 20 años de comportamientos observables en casos particulares de características en las que el contenido web ha llegado a depender. Como tal, a veces los motores de JS se negarán a conformarse a un cambio dictado por la especificación porque rompería ese contenido web.

En estos casos, a menudo TC39 retrocederá y simplemente elegirá ajustar la especificación a la realidad de la web. Por ejemplo, TC39 planeaba agregar un método `contains(..)` para Arrays, pero se descubrió que este nombre entraba en conflicto con antiguos frameworks de JS que aún se utilizan en algunos sitios, así que cambiaron el nombre a un `includes(..)` que no tenía conflictos. Lo mismo ocurrió con una cómica/trágica *crisis comunitaria* de JS llamada "smooshgate", donde el método planeado `flatten(..)` fue finalmente renombrado a `flat(..)`.

Pero ocasionalmente, TC39 decidirá que la especificación debe mantenerse firme en algún punto, aunque es poco probable que los motores de JS basados en el navegador se conformen.

¿La solución? Apéndice B, "Características Adicionales de ECMAScript para Navegadores Web".[^specApB] La especificación de JS incluye este apéndice para detallar cualquier desajuste conocido entre la especificación oficial de JS y la realidad de JS en la web. En otras palabras, estas son excepciones permitidas *solo* para JS web; otros entornos de JS deben ceñirse al pie de la letra de la ley.

La Sección B.1 y B.2 cubren *adiciones* a JS (sintaxis y APIs) que JS web incluye, nuevamente por razones históricas, pero que TC39 no planea especificar formalmente en el núcleo de JS. Ejemplos incluyen literales octales con prefijo `0`, las utilidades globales `escape(..)` / `unescape(..)`, "helpers" de String como `anchor(..)` y `blink()`, y el método `compile(..)` de RegExp.

La Sección B.3 incluye algunos conflictos donde el código puede ejecutarse tanto en motores de JS web como en motores de JS no web, pero donde el comportamiento *podría* ser observadamente diferente, entregando resultados diferentes. La mayoría de los cambios enumerados involucran situaciones etiquetadas como errores tempranos cuando el código se ejecuta en strict mode.

No se encuentran *problemas* del Apéndice B muy a menudo, pero aún así es buena idea evitar estas construcciones para estar a salvo en el futuro. Siempre que sea posible, adhiérete a la especificación de JS y no confíes en comportamientos que solo son aplicables en ciertos entornos de motores de JS.

### No Todo JS (Web)...

¿Es este código un programa de JS?

```js
alert("Hello, JS!");
```

Depende de cómo lo veas. La función `alert(..)` mostrada aquí no está incluida en la especificación de JS, pero sí *está* en todos los entornos web de JS. Sin embargo, no la encontrarás en el Apéndice B, ¿entonces qué pasa?

Varios entornos de JS (como los motores de JS de los navegadores, Node.js, etc.) añaden APIs al ámbito global de tus programas de JS que te proporcionan capacidades específicas del entorno, como la capacidad de mostrar una ventana de alerta en el navegador del usuario.

De hecho, una amplia variedad de APIs que se parecen a JS, como `fetch(..)`, `getCurrentLocation(..)`, y `getUserMedia(..)`, son todas APIs web que parecen JS. En Node.js, podemos acceder a cientos de métodos de API de varios módulos integrados, como `fs.write(..)`.

Otro ejemplo común es `console.log(..)` (¡y todos los demás métodos de `console.*` !). Estos no están especificados en JS, pero debido a su utilidad universal, son definidos por prácticamente todos los entornos de JS, según un consenso aproximado.

Entonces, `alert(..)` y `console.log(..)` no están definidos por JS. Pero *parecen* JS. Son funciones y métodos de objetos y siguen las reglas de sintaxis de JS. Los comportamientos detrás de ellos son controlados por el entorno que ejecuta el motor de JS, pero en la superficie definitivamente tienen que cumplir con JS para poder jugar en el patio de juegos de JS.

La mayoría de las diferencias entre navegadores de las que la gente se queja con afirmaciones como "¡JS es tan inconsistente!" son en realidad debidas a diferencias en cómo funcionan esos comportamientos del entorno, no en cómo funciona el propio JS.

Entonces, una llamada a `alert(..)` *es* JS, pero `alert` en sí mismo es realmente solo un invitado, no parte de la especificación oficial de JS.

### No siempre es JS

Usar la consola/REPL (Read-Evaluate-Print-Loop) en las Herramientas para Desarrolladores de tu navegador (o en Node) parece ser un entorno de JS bastante directo a primera vista. Pero en realidad no lo es.

Las Herramientas para Desarrolladores son... herramientas para desarrolladores. Su propósito principal es hacer la vida más fácil para los desarrolladores. Priorizan la DX (Experiencia del Desarrollador). *No* es una meta de tales herramientas reflejar con precisión y purismo todas las sutilezas del comportamiento estricto de JS. Como tal, hay muchas peculiaridades que pueden actuar como "trampas" si estás tratando la consola como un entorno de JS *puro*.

Esta conveniencia es algo bueno, ¡por cierto! Me alegra que las Herramientas para Desarrolladores faciliten la vida de los desarrolladores. Me alegra que tengamos encantos de UX agradables como el autocompletado de variables/propiedades, etc. Solo estoy señalando que no podemos ni debemos esperar que tales herramientas se adhieran *siempre* estrictamente a la manera en que se manejan los programas de JS, porque ese no es el propósito de estas herramientas.

Dado que tales herramientas varían en comportamiento de un navegador a otro, y dado que cambian (a veces bastante frecuentemente), no voy a "codificar" específicamente detalles en este texto, asegurando así que el texto de este libro esté desactualizado rápidamente.

Pero solo daré algunas pistas de ejemplos de peculiaridades que han sido verdaderas en varios momentos en diferentes entornos de consolas de JS, para reforzar mi punto acerca de no asumir el comportamiento nativo de JS mientras las usas:

* Si una declaración `var` o `function` en el "ámbito global" superior de la consola realmente crea una variable global real (¡y una propiedad `window` reflejada, y viceversa!).

* Qué sucede con múltiples declaraciones `let` y `const` en el "ámbito global" superior.

* Si `"use strict";` en una entrada de una sola línea (presionar `<enter>` después) habilita el strict mode para el resto de esa sesión de consola, de la misma manera que lo haría en la primera línea de un archivo .js, y también si puedes usar `"use strict";` más allá de la "primera línea" y aún así activar el strict mode para esa sesión.

* Cómo funciona el enlace predeterminado de `this` en el modo no estricto para las llamadas de funciones, y si el "objeto global" utilizado contendrá las variables globales esperadas.

* Cómo funciona el izado (consulte el Libro 2, *Scope & Closures*) en múltiples entradas de líneas.

* ...varias otras

La consola del desarrollador no está tratando de fingir ser un compilador de JS que maneje tu código ingresado exactamente de la misma manera que el motor de JS maneja un archivo .js. Está tratando de facilitarte la entrada rápida de unas pocas líneas de código y ver los resultados de inmediato. Estos son casos de uso completamente diferentes, y como tal, es irrazonable esperar que una herramienta maneje ambos de manera equitativa.

No confíes en el comportamiento que ves en una consola de desarrollador como que representa la semántica *exacta* de JS al pie de la letra; para eso, lee la especificación. En cambio, piensa en la consola como un entorno "amigable con JS". Eso es útil por sí mismo.

## Muchas Caras

El término "paradigma" en el contexto de lenguajes de programación se refiere a una mentalidad y enfoque amplio (casi universal) para estructurar el código. Dentro de un paradigma, hay una miríada de variaciones de estilo y forma que distinguen programas, incluyendo innumerables bibliotecas y marcos diferentes que dejan su firma única en cualquier código dado.

Pero, sin importar cuál sea el estilo individual de un programa, las divisiones a gran escala en torno a los paradigmas casi siempre son evidentes a primera vista de cualquier programa.

Las categorías típicas de código a nivel de paradigma incluyen estilo procedural, orientado a objetos (OO/clases) y funcional (FP):

* El estilo procedural organiza el código en una progresión lineal de arriba hacia abajo a través de un conjunto predefinido de operaciones, generalmente recopiladas en unidades relacionadas llamadas procedimientos.

* El estilo OO organiza el código al reunir la lógica y los datos en unidades llamadas clases.

* El estilo FP organiza el código en funciones (cálculos puros en lugar de procedimientos) y las adaptaciones de esas funciones como valores.

Los paradigmas no son ni correctos ni incorrectos. Son orientaciones que guían y moldean cómo los programadores abordan problemas y soluciones, cómo estructuran y mantienen su código.

Algunos lenguajes están fuertemente inclinados hacia un paradigma en particular; por ejemplo, C es procedural, Java/C++ es casi totalmente orientado a clases, y Haskell es completamente funcional.

Pero muchos lenguajes también admiten patrones de código que pueden provenir, e incluso combinarse, de diferentes paradigmas. Los llamados "lenguajes multi-paradigma" ofrecen flexibilidad máxima. En algunos casos, un solo programa incluso puede tener dos o más expresiones de estos paradigmas conviviendo uno al lado del otro.

JS es definitivamente un lenguaje multi-paradigma. Puedes escribir código procedural, orientado a clases o en estilo FP, y puedes tomar esas decisiones línea por línea en lugar de estar obligado a elegir todo-o-nada.

## Hacia atrás y hacia adelante

Uno de los principios fundamentales que guía a JS es la preservación de la *compatibilidad hacia atrás*. Muchos se confunden con las implicaciones de este término y a menudo lo confunden con un término relacionado pero diferente: *compatibilidad hacia adelante*.

Vamos a aclarar las cosas.

La compatibilidad hacia atrás significa que, una vez que algo se acepta como código JS válido, no habrá un cambio futuro en el lenguaje que haga que ese código deje de ser válido. El código escrito en 1995, ¡por primitivo o limitado que fuera!, debería seguir funcionando hoy. Como a menudo proclaman los miembros de TC39, "¡no rompemos la web!"

La idea es que los desarrolladores de JS pueden escribir código con la confianza de que su código no dejará de funcionar de manera impredecible porque se lance una actualización del navegador. Esto hace que la decisión de elegir JS para un programa sea una inversión más sabia y segura, durante años en el futuro.

Esa "garantía" no es algo pequeño. Mantener la compatibilidad hacia atrás, extendida a lo largo de casi 25 años de la historia del lenguaje, crea una enorme carga y una serie de desafíos únicos. Sería difícil encontrar muchos otros ejemplos en informática de un compromiso tan firme con la compatibilidad hacia atrás.

Los costos de adherirse a este principio no deben ser desestimados. Esto crea una barrera muy alta para incluir cambios o extensiones en el lenguaje; cualquier decisión se vuelve efectivamente permanente, con errores y todo. Una vez que está en JS, no se puede quitar porque podría romper programas, ¡incluso si realmente quisiéramos eliminarlo!

Hay algunas pequeñas excepciones a esta regla. JS ha tenido algunos cambios incompatibles hacia atrás, pero TC39 es extremadamente cauteloso al hacerlo. Estudian el código existente en la web (a través de la recopilación de datos del navegador) para estimar el impacto de tales cambios, y los navegadores finalmente deciden y votan si están dispuestos a enfrentar las críticas de los usuarios por un cambio de muy pequeña escala frente a los beneficios de corregir o mejorar algún aspecto del lenguaje para muchos más sitios (y usuarios).

Estos cambios son raros y casi siempre se dan en casos marginales de uso que es poco probable que se rompan de manera observable en muchos sitios.

Comparado con la *compatibilidad hacia atrás*, su contraparte, la *compatibilidad hacia adelante*. Ser hacia adelante-compatible significa que incluir una nueva adición al lenguaje en un programa no haría que ese programa se rompiera si se ejecutara en un motor JS más antiguo. **JS no es compatible hacia adelante**, a pesar de que muchos lo desean e incluso creen incorrectamente en el mito de que lo es.

HTML y CSS, en cambio, son hacia adelante compatibles pero no hacia atrás. Si desenterrases algo de HTML o CSS escrito en 1995, es completamente posible que no funcione (o funcione de la misma manera) hoy. Pero, si usas una nueva función de 2019 en un navegador de 2010, la página no está "rota" -- el CSS/HTML no reconocido se pasa por alto, mientras que el resto de la CSS/HTML se procesaría según corresponda.

Puede parecer deseable incluir la compatibilidad hacia adelante en el diseño de lenguajes de programación, pero generalmente es impráctico hacerlo. La marcación (HTML) o el estilo (CSS) son de naturaleza declarativa, por lo que es mucho más fácil "pasar por alto" declaraciones no reconocidas con un impacto mínimo en otras declaraciones reconocidas.

Pero el caos y la no determinismo se producirían si un motor de lenguaje de programación selectivamente omitiera declaraciones (¡incluso expresiones!) que no entendiera, ya que es imposible asegurar que una parte posterior del programa no esperara que la parte omitida haya sido procesada.

Aunque JavaScript no es, ni puede ser, compatible hacia adelante, es fundamental reconocer la compatibilidad hacia atrás de JavaScript, incluidos los beneficios duraderos para la web y las limitaciones y dificultades que impone a JavaScript como resultado.

### Saltando las brechas

Dado que JavaScript no es compatible hacia adelante, significa que siempre existe el potencial de una brecha entre el código que puedes escribir que es válido en JavaScript y el motor más antiguo que tu sitio o aplicación necesita admitir. Si ejecutas un programa que utiliza una característica de ES2019 en un motor de 2016, es muy probable que veas que el programa se rompe y falla.

Si la característica es una nueva sintaxis, el programa generalmente fallará por completo al compilar y ejecutarse, generalmente arrojando un error de sintaxis. Si la característica es una API (como `Object.is(..)` en ES6), el programa puede ejecutarse hasta cierto punto, pero luego arrojará una excepción en tiempo de ejecución y se detendrá una vez que encuentre la referencia a la API desconocida.

¿Significa esto que los desarrolladores de JavaScript siempre deben quedarse atrás en el ritmo del progreso, utilizando solo código que esté en la vanguardia de los entornos de motor JS más antiguos que necesitan admitir? ¡No!

Pero sí significa que los desarrolladores de JavaScript deben tener un cuidado especial para abordar esta brecha.

Para la nueva sintaxis e incompatible, la solución es la transpilación. La transpilación es un término inventado por la comunidad para describir el uso de una herramienta para convertir el código fuente de un programa de una forma a otra (pero aún como código fuente textual). Por lo general, los problemas de compatibilidad hacia adelante relacionados con la sintaxis se resuelven utilizando un transpilador (el más común siendo Babel (https://babeljs.io)) para convertir esa nueva versión de sintaxis de JavaScript a una sintaxis más antigua equivalente.

Por ejemplo, un desarrollador puede escribir un fragmento de código como:

```js
if (something) {
    let x = 3;
    console.log(x);
}
else {
    let x = 4;
    console.log(x);
}
```

Así es como se vería el código en el árbol de código fuente de esa aplicación. Pero al producir el archivo (o archivos) para implementar en el sitio web público, el transpilador Babel podría convertir ese código para que se vea así:

```js
var x$0, x$1;
if (something) {
    x$0 = 3;
    console.log(x$0);
}
else {
    x$1 = 4;
    console.log(x$1);
}
```

El fragmento original dependía de `let` para crear variables `x` con ámbito de bloque en las cláusulas `if` y `else`, que no interferían entre sí. Un programa equivalente (con mínimas modificaciones) que Babel puede producir simplemente elige nombrar dos variables diferentes con nombres únicos, logrando el mismo resultado de no interferencia.

| NOTA: |
| :--- |
| La palabra clave `let` se agregó en ES6 (en 2015). El ejemplo anterior de transpilación solo sería necesario aplicarlo si una aplicación necesita ejecutarse en un entorno JS compatible con versiones anteriores a ES6. El ejemplo aquí es solo para simplificar la ilustración. Cuando ES6 era nuevo, la necesidad de esa transpilación era bastante común, pero en 2020 es mucho menos común necesitar admitir entornos pre-ES6. El "objetivo" utilizado para la transpilación es, por lo tanto, una ventana deslizante que se desplaza hacia arriba solo cuando se toman decisiones para que un sitio/aplicación deje de admitir algún navegador/motor antiguo. |

Puede preguntarse: ¿por qué molestarse en usar una herramienta para convertir desde una versión de sintaxis más nueva a una más antigua? ¿No podríamos simplemente escribir las dos variables y evitar el uso de la palabra clave `let`? La razón es que se recomienda encarecidamente que los desarrolladores utilicen la última versión de JS para que su código sea limpio y comunique sus ideas de manera más efectiva.

Los desarrolladores deben centrarse en escribir las formas de sintaxis nuevas y limpias, y permitir que las herramientas se encarguen de producir una versión compatible con el futuro de ese código que sea adecuada para implementar y ejecutar en los entornos de motor JS admitidos más antiguos.

### Llenando los vacíos

Si el problema de la compatibilidad futura no está relacionado con la nueva sintaxis, sino con un método de API faltante que se agregó recientemente, la solución más común es proporcionar una definición para ese método de API faltante que funcione como si el entorno más antiguo ya lo hubiera tenido definido de forma nativa. Este patrón se llama polyfill (también conocido como "shim").

Considera este código:

```js
// getSomeRecords() nos regresa una promesa para algunos
// datos que recuperará
var pr = getSomeRecords();

// mostrar el spinner UI mientras obtenemos los datos
startSpinner();

pr
.then(renderRecords)   // renderizar si tiene éxito
.catch(showError)      // mostrar un error si no
.finally(hideSpinner)  // siempre oculta el spinner
```

Este código utiliza una característica de ES2019, el método `finally(..)` en el prototipo de la promesa. Si este código se usara en un entorno anterior a ES2019, el método `finally(..)` no existiría y se produciría un error.

Un polyfill para `finally(..)` en entornos previos a ES2019 podría verse así:

```js
if (!Promise.prototype.finally) {
    Promise.prototype.finally = function f(fn){
        return this.then(
            function t(v){
                return Promise.resolve( fn() )
                    .then(function t(){
                        return v;
                    });
            },
            function c(e){
                return Promise.resolve( fn() )
                    .then(function t(){
                        throw e;
                    });
            }
        );
    };
}
```

| ADVERTENCIA: |
| :--- |
| Esta es solo una ilustración simple de un polyfill básico (que no cumple completamente con las especificaciones) para `finally(..)`. No uses este polyfill en tu código; siempre utiliza un polyfill oficial y robusto cuando sea posible, como la colección de polyfills/shims en ES-Shim. |

La declaración `if` protege la definición del polyfill al evitar que se ejecute en cualquier entorno donde el motor JS ya haya definido ese método. En entornos más antiguos, el polyfill se define, pero en entornos más nuevos, la declaración `if` se salta silenciosamente.

Los transpiladores como Babel generalmente detectan qué polyfills necesita tu código y los proporcionan automáticamente. Pero ocasionalmente puede ser necesario incluirlos/definirlos explícitamente, lo cual funciona de manera similar al fragmento que acabamos de ver.

Siempre escribe código utilizando las características más apropiadas para comunicar sus ideas e intenciones de manera efectiva. En general, esto significa usar la versión más reciente y estable de JS. Evita afectar negativamente la legibilidad del código tratando de ajustar manualmente las lagunas de sintaxis/API. ¡Para eso están las herramientas!

La transpilación y el polyfilling son dos técnicas altamente efectivas para abordar la brecha entre el código que utiliza las características más recientes y estables del lenguaje y los antiguos entornos que un sitio o aplicación aún necesita admitir. Dado que JS no dejará de mejorar, la brecha nunca desaparecerá. Ambas técnicas deberían ser adoptadas como parte estándar de la cadena de producción de cada proyecto de JS en el futuro.

## ¿Qué hay en una interpretación?

Durante mucho tiempo, ha existido un debate sobre si el código escrito en JS es un script interpretado o un programa compilado. La opinión mayoritaria parece ser que JS es un lenguaje interpretado (de scripting). Sin embargo, la verdad es más complicada que eso.

Durante gran parte de la historia de los lenguajes de programación, los lenguajes "interpretados" y los lenguajes "de scripting" han sido considerados inferiores en comparación con sus contrapartes compiladas. Las razones para esta animosidad son numerosas, incluyendo la percepción de una falta de optimización de rendimiento, así como la aversión a ciertas características del lenguaje, como el uso de tipos dinámicos en lugar de los "más maduros" lenguajes de tipos estáticos.

Los lenguajes considerados "compilados" generalmente producen una representación (binaria) portátil del programa que se distribuye para su ejecución posterior. Dado que no observamos realmente ese tipo de modelo con JS (distribuimos el código fuente, no la forma binaria), muchos afirman que esto descalifica a JS de esa categoría. En realidad, el modelo de distribución de la forma "ejecutable" de un programa se ha vuelto drásticamente más variado y también menos relevante en las últimas décadas; para la pregunta en cuestión, ya no importa tanto la forma en que se distribuye un programa.

Estas afirmaciones y críticas desinformadas deben ser dejadas de lado. La verdadera razón por la que importa tener una imagen clara de si JS es interpretado o compilado se relaciona con la forma en que se manejan los errores.

Históricamente, los lenguajes scriptados o interpretados se ejecutaban generalmente de arriba hacia abajo y línea por línea; por lo general, no hay un pase inicial a través del programa para procesarlo antes de que comience la ejecución (ver Figura 1).

<figure>
    <img src="/images/you-dont-know-js-yet/get-started/fig1.png" width="650" alt="Interpretar un script para ejecutarlo" align="center">
    <figcaption><em>Fig. 1: Ejecución Interpretada/Scripted</em></figcaption>
    <br><br>
</figure>

En lenguajes scriptados o interpretados, un error en la línea 5 de un programa no se descubrirá hasta que las líneas 1 a 4 ya se hayan ejecutado. Es importante destacar que el error en la línea 5 puede deberse a una condición en tiempo de ejecución, como algún valor o variable que tiene un valor inadecuado para una operación, o puede deberse a una declaración o comando mal formado en esa línea. Dependiendo del contexto, posponer el manejo de errores hasta la línea en la que ocurre el error puede ser un efecto deseable o indeseable.

Comparado con lenguajes que sí pasan por una etapa de procesamiento (normalmente llamada análisis) antes de que ocurra cualquier ejecución, como se ilustra en la Figura 2:

<figure>
    <img src="/images/you-dont-know-js-yet/get-started/fig2.png" width="650" alt="Parsear, compilar y ejecutar un programa" align="center">
    <figcaption><em>Fig. 2: Parseo + Compilación + Ejecución</em></figcaption>
    <br><br>
</figure>

En este modelo de procesamiento, un comando no válido (como una sintaxis incorrecta) en la línea 5 se detectaría durante la fase de análisis, antes de que comience cualquier ejecución, y ninguno de los programas se ejecutaría. Para capturar errores de sintaxis (o errores "estáticos"), generalmente es preferible conocerlos antes de cualquier ejecución parcial condenada.

Entonces, ¿qué tienen en común los lenguajes "parseados" con los lenguajes "compilados"? Primero, todos los lenguajes compilados son parseados. Por lo tanto, un lenguaje parseado está bastante avanzado en el camino hacia ser compilado. En la teoría clásica de la compilación, el último paso restante después del análisis es la generación de código: producir una forma ejecutable.

Una vez que se ha parseado completamente un programa fuente, es muy común que su ejecución posterior incluya, de alguna forma, una traducción desde la forma parseada del programa, generalmente llamada Árbol de Sintaxis Abstracta (AST), hasta esa forma ejecutable.

En otras palabras, los lenguajes parseados suelen realizar la generación de código antes de la ejecución, por lo que no es tan exagerado decir que, en espíritu, son lenguajes compilados.

El código fuente de JS se parsea antes de ejecutarse. La especificación lo requiere, porque exige "errores tempranos" —errores estáticamente determinados en el código, como un nombre de parámetro duplicado— que se informen antes de que el código comience a ejecutarse. Esos errores no se pueden reconocer sin que el código haya sido parseado.

Entonces, **JS es un lenguaje parseado**, pero ¿está compilado?

La respuesta está más cerca del sí que del no. El JS parseado se convierte en una forma optimizada (binaria), y ese "código" se ejecuta posteriormente (Figura 2); el motor no suele cambiar a un modo de ejecución línea por línea (como en la Figura 1) después de haber terminado todo el trabajo duro de análisis, ya que eso sería altamente ineficiente.

Para ser específicos, esta "compilación" produce un código binario (de alguna manera), que luego se entrega a la "máquina virtual de JS" para ejecutarlo. A algunos les gusta decir que esta MV está "interpretando" el código binario. Pero eso significaría que Java, y una docena de otros lenguajes impulsados por JVM, por cierto, se interpretan en lugar de compilarse. Por supuesto, eso contradice la afirmación típica de que Java/etc. son lenguajes compilados.

Curiosamente, aunque Java y JavaScript son lenguajes muy diferentes, la pregunta de interpretación/compilación está bastante relacionada entre ellos.

Otra complicación es que los motores de JS pueden emplear múltiples pasadas de procesamiento/optimización JIT (Just-In-Time) en el código generado (post análisis), que nuevamente podría etiquetarse razonablemente como "compilación" o "interpretación" dependiendo de la perspectiva. De hecho, es una situación fantásticamente compleja bajo el capó de un motor de JS.

Entonces, ¿en qué se reducen estos detalles minuciosos? Retrocede y considera todo el flujo de un programa fuente de JS:

1. Después de que un programa sale del editor de un desarrollador, se transpila con Babel, luego se empaca con Webpack (y tal vez media docena de otros procesos de construcción), luego se entrega en esa forma muy diferente a un motor de JS.

2. El motor de JS parsea el código a un AST.

3. Luego, el motor convierte ese AST en una especie de código binario, una representación intermedia binaria (IR), que luego es refinada/convertida aún más por el compilador JIT optimizado.

4. Finalmente, la MV de JS ejecuta el programa.

Para visualizar esos pasos, nuevamente:

<figure>
    <img src="/images/you-dont-know-js-yet/get-started/fig3.png" width="650" alt="Pasos de compilación y ejecución de JS" align="center">
    <figcaption><em>Fig. 3: Parseando, Compilando, y Ejecutando JS</em></figcaption>
    <br><br>
</figure>

¿JS se maneja más como un script interpretado, línea por línea, como en la Figura 1, o se maneja más como un lenguaje compilado que se procesa en uno o varios pasos primero, antes de la ejecución (como en las Figuras 2 y 3)?

Creo que está claro que en espíritu, si no en la práctica, **JS es un lenguaje compilado**.

Y nuevamente, la razón por la que esto importa es que, como JS está compilado, se nos informa de errores estáticos (como sintaxis malformada) antes de que se ejecute nuestro código. ¡Ese es un modelo de interacción sustancialmente diferente al que obtenemos con los programas de "scripting" tradicionales y podría argumentarse que es más útil!

### Web Assembly (WASM)

Una preocupación dominante que ha impulsado gran parte de la evolución de JS es el rendimiento, tanto en cuanto a la rapidez con la que JS puede ser parseado/compilado como a la velocidad con la que se puede ejecutar ese código compilado.

En 2013, ingenieros de Mozilla Firefox demostraron la portabilidad del motor de juegos Unreal 3 desde C a JS. La capacidad de que este código se ejecutara en un motor JS del navegador a una velocidad completa de 60 fps se basaba en un conjunto de optimizaciones que el motor JS podía realizar específicamente porque la versión JS del código del motor Unreal utilizaba un estilo de código que favorecía a un subconjunto del lenguaje JS, llamado "ASM.js".

Este subconjunto es JS válido escrito de maneras que son algo inusuales en la programación normal, pero que señalan cierta información de tipado importante al motor que le permiten realizar optimizaciones clave. ASM.js se introdujo como una forma de abordar las presiones sobre el rendimiento en tiempo de ejecución de JS.

Pero es importante destacar que ASM.js nunca se pretendió que fuera código escrito por desarrolladores, sino más bien una representación de un programa que se había transpilado desde otro lenguaje (como C), donde estas "anotaciones" de tipado se insertaron automáticamente mediante las herramientas.

Varios años después de que ASM.js demostrara la validez de versiones de programas creadas por herramientas que pueden procesarse de manera más eficiente en el motor JS, otro grupo de ingenieros (también, inicialmente, de Mozilla) lanzó WebAssembly (WASM).

WASM es similar a ASM.js en el sentido de que su intención original era proporcionar un camino para que los programas no JS (C, etc.) se convirtieran en una forma que pudiera ejecutarse en el motor JS. A diferencia de ASM.js, WASM eligió además sortear algunos de los retrasos inherentes en el análisis/compilación de JS antes de que un programa pueda ejecutarse, representando el programa en una forma que es completamente diferente a JS.

WASM es un formato de representación más parecido a Assembly (de ahí su nombre) que puede ser procesado por un motor JS al omitir el análisis/compilación que normalmente realiza el motor JS. El análisis/compilación de un programa dirigido a WASM se realiza antes de tiempo (AOT); lo que se distribuye es un programa binario empaquetado listo para que el motor JS lo ejecute con un procesamiento mínimo.

Una motivación inicial para WASM fue claramente la mejora potencial de rendimiento. Aunque eso sigue siendo un enfoque, WASM también está motivado por el deseo de llevar más paridad a las lenguas no JS a la plataforma web. Por ejemplo, si un lenguaje como Go admite la programación con hilos, pero JS (el lenguaje) no lo hace, WASM ofrece la posibilidad de que dicho programa Go se convierta a una forma que el motor JS pueda entender, sin necesidad de una función de hilos en el propio lenguaje JS.

En otras palabras, WASM alivia la presión de agregar características a JS que están mayormente/exclusivamente destinadas a ser utilizadas por programas transpilados de otros lenguajes. Eso significa que el desarrollo de características de JS puede ser evaluado (por TC39) sin verse sesgado por intereses/demandas en otros ecosistemas de lenguajes, al tiempo que permite que esos lenguajes tengan una vía viable hacia la web.

Otra perspectiva sobre WASM que está surgiendo es, interesantemente, ni siquiera está directamente relacionada con la web (W). WASM está evolucionando para convertirse en una especie de máquina virtual (VM) multiplataforma, donde los programas pueden compilarse una vez y ejecutarse en una variedad de entornos de sistemas diferentes.

Entonces, WASM no es solo para la web, y WASM tampoco es JS. Irónicamente, aunque WASM se ejecuta en el motor JS, el lenguaje JS es uno de los menos adecuados para generar programas WASM, porque WASM depende en gran medida de información de tipado estático. Incluso TypeScript (TS), ostensiblemente JS + tipos estáticos, no es del todo adecuado (tal como está) para transpilarse a WASM, aunque variantes de lenguaje como AssemblyScript están tratando de cerrar la brecha entre JS/TS y WASM.

Este libro no trata sobre WASM, así que no dedicaré mucho más tiempo a discutirlo, excepto para hacer un último punto. *Algunas* personas han sugerido que WASM apunta a un futuro en el que JS sea excluido o minimizado en la web. Estas personas a menudo albergan sentimientos negativos sobre JS y quieren que algún otro lenguaje, ¡cualquier otro lenguaje!, lo reemplace. Dado que WASM permite que otros lenguajes se ejecuten en el motor JS, en principio, esto no es un cuento de hadas completamente fantástico.

Pero permíteme decir simplemente: WASM no reemplazará a JS. WASM aumenta significativamente lo que la web (incluido JS) puede lograr. Eso es algo excelente, totalmente independiente de si algunas personas lo usarán como una salida para no tener que escribir JS.

## E*strict*amente hablando

En 2009, con el lanzamiento de ES5, JS añadió el *strict mode* como un mecanismo opcional para fomentar la creación de programas JS de mejor calidad.

Los beneficios del strict mode superan con creces los costos, pero las viejas costumbres son difíciles de cambiar y la inercia de las bases de código existentes (también conocidas como bases de código "heredadas") es realmente difícil de modificar. Lamentablemente, más de 10 años después, la *opcionabilidad* del strict mode significa que no es necesariamente la configuración predeterminada para los programadores JS.

¿Por qué el strict mode? El strict mode no debería ser considerado como una restricción de lo que no se puede hacer, sino más bien como una guía sobre la mejor manera de hacer las cosas para que el motor JS tenga la mejor oportunidad de optimizar y ejecutar eficientemente el código. La mayoría de los códigos JS son trabajados por equipos de desarrolladores, por lo que la estrictitud del *strict* mode (¡junto con herramientas como linters!) a menudo ayuda en la colaboración en el código al evitar algunos de los errores más problemáticos que se pasan por alto en el modo no estricto.

La mayoría de los controles del strict mode están en forma de *errores tempranos*, lo que significa errores que no son estrictamente errores de sintaxis, pero que aún se lanzan en tiempo de compilación (antes de que se ejecute el código). Por ejemplo, el strict mode prohíbe nombrar dos parámetros de función iguales y genera un error temprano. Otros controles del strict mode solo se observan en tiempo de ejecución, como cómo `this` se establece en `undefined` en lugar del objeto global.

En lugar de luchar y discutir con el strict mode, como un niño que simplemente quiere desafiar lo que le dicen sus padres que no haga, la mejor mentalidad es que el strict mode es como un linter que te recuerda cómo *debería* escribirse JS para tener la mejor calidad y la mejor oportunidad de rendimiento. Si te encuentras sintiéndote limitado, tratando de evitar el strict mode, eso debería ser una señal de advertencia clara de que necesitas retroceder y reconsiderar todo el enfoque.

El strict mode se activa por archivo con una pragma especial (nada permitido antes de ella excepto comentarios/espacios en blanco):

```js
// sólo se permiten espacios en blanco y comentarios
// antes del uso de use-strict
"use strict";
// el resto del archivo se ejecuta en strict mode
```

| ADVERTENCIA: |
| :--- |
| Algo importante a tener en cuenta es que incluso un `;` solitario que aparece justo antes de la pragma del strict mode hará que la pragma sea ineficaz; no se lanzarán errores porque es válido tener una expresión literal de cadena en una posición de declaración, ¡pero *tampoco* se activará silenciosamente el strict mode! |

El strict mode también se puede activar alternativamente por ámbito de función, con exactamente las mismas reglas sobre su entorno:

```js
function someOperations() {
    // Los espacios en blanco y los comentarios están bien aquí
    "use strict";

    // todo este código se ejecutará en strict mode
}
```
De manera interesante, si un archivo tiene activado el strict mode, se prohíben los pragmas de strict mode a nivel de función. Por lo tanto, debes elegir uno u otro.

La **única** razón válida para utilizar un enfoque por función para el strict mode es cuando estás convirtiendo un archivo de programa existente que no está en strict mode y necesitas realizar los cambios poco a poco con el tiempo. De lo contrario, es mucho mejor activar el strict mode para todo el archivo/programa.

Muchos se han preguntado si habrá algún momento en que JS haga del strict mode la opción predeterminada. La respuesta es casi seguramente no. Como discutimos anteriormente en cuanto a la compatibilidad con versiones anteriores, si una actualización del motor de JS comenzara a asumir que el código está en strict mode incluso si no está marcado como tal, es posible que este código se rompa como resultado de los controles del strict mode.

Sin embargo, hay algunos factores que reducen el impacto futuro de esta "oscuridad" no predeterminada del strict mode.

En primer lugar, prácticamente todo el código transpilado termina en strict mode incluso si el código fuente original no está escrito de esa manera. La mayoría del código JS en producción ha sido transpilado, lo que significa que la mayoría del código JS ya se adhiere al strict mode. Es posible deshacer esa suposición, pero realmente debes esforzarte por hacerlo, por lo que es muy poco probable.

Además, está ocurriendo un cambio importante hacia que más/mayoría del nuevo código JS se escriba utilizando el formato de módulo ES6. Los módulos ES6 asumen el strict mode, por lo que todo el código en dichos archivos se establece automáticamente en el strict mode.

En conjunto, el strict mode es en gran medida la opción predeterminada de facto, aunque técnicamente no lo sea.

## Definido

JS es una implementación del estándar ECMAScript (versión ES2019 en el momento de escribir esto), que está guiado por el comité TC39 y alojado por ECMA. Se ejecuta en navegadores y otros entornos de JS, como Node.js.

JS es un lenguaje multiparadigma, lo que significa que la sintaxis y las capacidades permiten a un desarrollador combinar y mezclar (¡y doblar y remodelar!) conceptos de varios paradigmas importantes, como el procedural, orientado a objetos (OO/clases) y funcional (FP).

JS es un lenguaje compilado, lo que significa que las herramientas (incluido el motor de JS) procesan y verifican un programa (¡informando de cualquier error!) antes de que se ejecute.

Con nuestro lenguaje ahora *definido*, comencemos a conocer sus detalles y peculiaridades.

[^specApB]: ECMAScript 2019 Language Specification, Appendix B: Additional ECMAScript Features for Web Browsers, https://www.ecma-international.org/ecma-262/10.0/#sec-additional-ecmascript-features-for-web-browsers (la última versión disponible en el momento de escribir esto en enero de 2020)