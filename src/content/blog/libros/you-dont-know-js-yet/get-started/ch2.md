---
rutas: [You_Dont_Know_JS_Yet]
title: 'Capítulo 2: Topografía JS'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/You_Dont_Know_JS_Yet/libros/you-dont-know-js-yet/get-started/ch2'
---

La mejor manera de aprender JS es comenzar a escribir JS.

Para hacer eso, necesitas entender cómo funciona el lenguaje, y eso es en lo que nos enfocaremos aquí. Incluso si has programado en otros lenguajes antes, tómate tu tiempo para familiarizarte con JS y asegúrate de practicar cada elemento.

Este capítulo no es una referencia exhaustiva de cada aspecto de la sintaxis del lenguaje JS. Tampoco pretende ser un manual completo de "introducción a JS".

En cambio, simplemente vamos a explorar algunas de las áreas temáticas principales del lenguaje. Nuestro objetivo es obtener una mejor *sensación* por él, para poder avanzar escribiendo nuestros propios programas con más confianza. Volveremos a muchos de estos temas con más detalle a medida que avances en el resto de este libro y de la serie.

Por favor, no esperes que este capítulo sea una lectura rápida. Es extenso y hay muchos detalles para analizar. Tómate tu tiempo.

| CONSEJO: |
| :--- |
| Si aún estás familiarizándote con JS, te sugiero que reserves mucho tiempo adicional para trabajar en este capítulo. Tómate cada sección, reflexiona y explora el tema durante un tiempo. Examina programas JS existentes y compara lo que ves en ellos con el código y las explicaciones (¡y opiniones!) presentadas aquí. Obtendrás mucho más del resto del libro y de la serie con una sólida comprensión de la *naturaleza* de JS. |

## Cada archivo es un programa

Casi todos los sitios web (aplicaciones web) que utilizas están compuestos por muchos archivos JS diferentes (normalmente con la extensión de archivo .js). Es tentador pensar en todo el conjunto (la aplicación) como un solo programa. Pero JS lo ve de manera diferente.

En JS, cada archivo independiente es su propio programa separado.

La razón por la que esto es importante se relaciona principalmente con el manejo de errores. Dado que JS trata los archivos como programas, un archivo puede fallar (durante el análisis/compilación o la ejecución) y eso no necesariamente evitará que el siguiente archivo se procese. Obviamente, si tu aplicación depende de cinco archivos .js y uno de ellos falla, es probable que la aplicación general solo funcione parcialmente, como máximo. Es importante asegurarse de que cada archivo funcione correctamente y, en la medida de lo posible, manejar los fallos en otros archivos de la manera más elegante posible.

Puede sorprenderte considerar archivos .js separados como programas JS independientes. Desde la perspectiva de tu uso de una aplicación, parece que es un solo programa grande. Eso se debe a que la ejecución de la aplicación permite que estos *programas* individuales cooperen y actúen como un solo programa.

| NOTA: |
| :--- |
| Muchos proyectos utilizan herramientas de procesamiento de compilación que combinan archivos separados del proyecto en un solo archivo para ser entregado a una página web. Cuando esto sucede, JS trata este único archivo combinado como el programa completo. |

La única forma en que varios archivos .js independientes actúan como un solo programa es compartiendo su estado (y acceso a su funcionalidad pública) a través del "ámbito global". Se mezclan en este espacio de nombres de ámbito global, por lo que en tiempo de ejecución actúan como un conjunto.

Desde ES6, JS también admite un formato de módulo además del formato típico de programa JS independiente. Los módulos también están basados en archivos. Si un archivo se carga a través de un mecanismo de carga de módulos, como una declaración `import` o una etiqueta `<script type=module>`, todo su código se trata como un solo módulo.

Aunque normalmente no pensarías en un módulo, una colección de estado y métodos expuestos públicamente para operar en ese estado, como un programa independiente, JS trata cada módulo por separado. De manera similar a cómo el "ámbito global" permite que los archivos independientes se mezclen en tiempo de ejecución, la importación de un módulo en otro permite la interacción en tiempo de ejecución entre ellos.

Independientemente del patrón de organización de código (y mecanismo de carga) que se utilice para un archivo (independiente o módulo), aún debes considerar cada archivo como su propio programa (mini), que luego puede cooperar con otros programas (mini) para realizar las funciones de tu aplicación en general.

## Valores

La unidad más fundamental de información en un programa es un valor. Los valores son datos. Son cómo el programa mantiene el estado. Los valores se presentan en dos formas en JS: **primitivos** y **objetos**.

Los valores se incorporan en los programas mediante *literales*:

```js
greeting("My name is Kyle.");
```

En este programa, el valor `"My name is Kyle."` es un literal primitivo de cadena; las cadenas son colecciones ordenadas de caracteres, generalmente utilizadas para representar palabras y oraciones.

Usé el carácter de comillas dobles `"` para *delimitar* (encerrar, separar, definir) el valor de la cadena. Pero también podría haber utilizado el carácter de comillas simples `'`. La elección del carácter de comillas es completamente estilística. Lo importante, para la legibilidad y el mantenimiento del código, es elegir uno y usarlo consistentemente en todo el programa.

Otra opción para delimitar un literal de cadena es usar el carácter de tilde invertida `` ` ``. Sin embargo, esta elección no es simplemente estilística; también hay una diferencia de comportamiento. Considera:

```js
console.log("My name is ${ firstName }.");
// My name is ${ firstName }.

console.log('My name is ${ firstName }.');
// My name is ${ firstName }.

console.log(`My name is ${ firstName }.`);
// My name is Kyle.
```

Suponiendo que este programa ya ha definido una variable `firstName` con el valor de cadena `"Kyle"`, la cadena delimitada por `` ` `` resuelve la expresión de variable (indicada con `${ .. }`) a su valor actual. Esto se llama **interpolación**.

La cadena delimitada por la tilde invertida `` ` `` se puede usar sin incluir expresiones interpoladas, pero eso va en contra del propósito de esa sintaxis alternativa de literales de cadena:

```js
console.log(
    `¿Te estoy confundiendo al omitir la interpolación?`
);
// ¿Te estoy confundiendo al omitir la interpolación?
```

La mejor manera es usar `"` o `'` (nuevamente, ¡elige uno y quédate con él!) para las cadenas *a menos que necesites* interpolación; reserva `` ` `` solo para cadenas que incluirán expresiones interpoladas.

Además de las cadenas, los programas de JS a menudo contienen otros valores literales primitivos como booleanos y números:

```js
while (false) {
    console.log(3.141592);
}
```

`while` representa un tipo de bucle, una forma de repetir operaciones *mientras* su condición sea verdadera.

En este caso, el bucle nunca se ejecutará (y no se imprimirá nada), porque usamos el valor booleano `false` como condición del bucle. `true` habría resultado en un bucle que seguiría ejecutándose para siempre, ¡así que ten cuidado!

El número `3.141592` es, como sabrás, una aproximación de PI matemático a las primeras seis cifras. En lugar de incrustar dicho valor, sin embargo, normalmente usarías el valor predefinido `Math.PI` para ese propósito. Otra variante de los números es el tipo primitivo `bigint` (número entero grande), que se utiliza para almacenar números arbitrariamente grandes.

Los números se utilizan más a menudo en los programas para contar pasos, como las iteraciones de un bucle, y para acceder a la información en posiciones numéricas (por ejemplo, un índice de matriz). Cubriremos arrays/objetos en un momento, pero como ejemplo, si hubiera un array llamado `names`, podríamos acceder al elemento en su segunda posición de esta manera:

```js
console.log(`My name is ${ names[1] }.`);
// My name is Kyle.
```

Usamos `1` para el elemento en la segunda posición, en lugar de `2`, porque al igual que en la mayoría de los lenguajes de programación, los índices de arrays en JS comienzan en 0 (`0` es la primera posición).

Además de las cadenas de texto, los números y los booleanos, otros dos valores *primitivos* en los programas de JS son `null` e `undefined`. Aunque hay diferencias entre ellos (algunas históricas y otras contemporáneas), en su mayor parte ambos valores sirven para indicar la *falta* (o ausencia) de un valor.

Muchos desarrolladores prefieren tratarlos de manera consistente de esta manera, es decir, asumir que los valores son indistinguibles. Si se tiene cuidado, esto a menudo es posible. Sin embargo, es más seguro y mejor usar solo `undefined` como el único valor vacío, aunque `null` pueda parecer atractivo por ser más corto de escribir.

```js
while (value != undefined) {
    console.log("Still got something!");
}
```

El último valor primitivo del que debes tener conocimiento es el símbolo, que es un valor de propósito especial que se comporta como un valor oculto e impredecible. Los símbolos se utilizan casi exclusivamente como claves especiales en objetos:

```js
hitchhikersGuide[ Symbol("meaning of life") ];
// 42
```
No encontrarás el uso directo de símbolos muy a menudo en programas JS típicos. Se utilizan principalmente en código de bajo nivel, como en bibliotecas y frameworks.

### Arrays y Objects

Además de los primitivos, el otro tipo de valor en JS es el valor objeto.

Como se mencionó anteriormente, los arrays son un tipo especial de objeto que está compuesto por una lista ordenada e indexada numéricamente de datos:

```js
var names = [ "Frank", "Kyle", "Peter", "Susan" ];

names.length;
// 4

names[0];
// Frank

names[1];
// Kyle
```

Los arrays de JS pueden contener cualquier tipo de valor, ya sea primitivo u objeto (incluyendo otros arrays). Como veremos hacia el final del Capítulo 3, incluso las funciones son valores que se pueden almacenar en arrays u objetos.

| NOTA: |
| :--- |
| Las funciones, al igual que los arrays, son un tipo especial (también conocido como subtipo) de objeto. Cubriremos las funciones con más detalle en un momento. |

Los objetos son más generales: una colección desordenada y con claves de varios valores. En otras palabras, accedes al elemento mediante un nombre de ubicación de cadena (también conocido como "clave" o "propiedad") en lugar de por su posición numérica (como en los arrays). Por ejemplo:

```js
var me = {
    first: "Kyle",
    last: "Simpson",
    age: 39,
    specialties: [ "JS", "Table Tennis" ]
};

console.log(`My name is ${ me.first }.`);
```

Aquí, `me` representa un objeto, y `first` representa el nombre de una ubicación de información en ese objeto (colección de valores). Otra opción de sintaxis que accede a la información en un objeto por su propiedad/clave utiliza corchetes cuadrados `[ ]`, como `me["first"]`.

### Determinación del tipo de valor

Para distinguir valores, el operador `typeof` te dice su tipo incorporado, si es primitivo, o `"object"` en caso contrario:

```js
typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof undefined;           // "undefined"
typeof null;                // "object" -- oops, bug!
typeof { "a": 1 };          // "object"
typeof [1,2,3];             // "object"
typeof function hello(){};  // "function"
```

| ADVERTENCIA: |
| :--- |
| `typeof null` desafortunadamente devuelve `"object"` en lugar del esperado `"null"`. Además, `typeof` devuelve el específico `"function"` para funciones, pero no el esperado `"array"` para arrays. |

La conversión de un tipo de valor a otro, como de cadena a número, se denomina "coerción" en JS. Cubriremos esto con más detalle más adelante en este capítulo.

Los valores primitivos y los valores de objeto se comportan de manera diferente cuando se asignan o se pasan. Cubriremos estos detalles en el Apéndice A, "Valores vs Referencias".

## Declaración y uso de variables


Para ser explícito acerca de algo que quizás no fue evidente en la sección anterior: en los programas de JS, los valores pueden aparecer como valores literales (como muchos de los ejemplos anteriores ilustran), o pueden estar contenidos en variables; piensa en las variables como simples contenedores para valores.

Las variables deben declararse (crearse) antes de ser utilizadas. Hay varias formas de sintaxis que declaran variables (también conocidas como "identificadores"), y cada forma tiene comportamientos implícitos diferentes.

Por ejemplo, considera la declaración `var`:

```js
var myName = "Kyle";
var age;
```

La palabra clave `var` declara una variable para ser utilizada en esa parte del programa y opcionalmente permite una asignación inicial de un valor.

Otra palabra clave similar es `let`:

```js
let myName = "Kyle";
let age;
```

La palabra clave `let` tiene algunas diferencias con `var`, siendo la más evidente que `let` permite un acceso más limitado a la variable que `var`. Esto se llama "block scoping" (ámbito de bloque) en lugar de ámbito regular o de función.

Considera:

```js
var adult = true;

if (adult) {
    var myName = "Kyle";
    let age = 39;
    console.log("Shhh, this is a secret!");
}

console.log(myName);
// Kyle

console.log(age);
// Error!
```

El intento de acceder a `age` fuera de la declaración `if` resulta en un error porque `age` tiene un ámbito de bloque limitado al `if`, mientras que `myName` no lo tiene.

El ámbito de bloque es muy útil para limitar la extensión de las declaraciones de variables en nuestros programas, lo que ayuda a evitar la superposición accidental de sus nombres.

Pero `var` aún es útil porque comunica "esta variable será vista por un ámbito más amplio (de toda la función)". Ambas formas de declaración pueden ser apropiadas en cualquier parte de un programa, según las circunstancias.

| NOTA: |
| :--- |
| Es muy común sugerir que se evite `var` a favor de `let` (¡o `const`!), generalmente debido a la percepción de confusión sobre cómo ha funcionado el comportamiento de ámbito de `var` desde el principio de JS. Creo que este consejo es demasiado restrictivo y, en última instancia, poco útil. Está asumiendo que no puedes aprender y usar una característica correctamente en combinación con otras características. ¡Creo que *puedes* y *debes* aprender todas las características disponibles y usarlas donde sea apropiado! |

Una tercera forma de declaración es `const`. Es similar a `let` pero tiene una limitación adicional: debe recibir un valor en el momento de su declaración y no se le puede asignar un valor diferente más tarde.

Considera:

```js
const myBirthday = true;
let age = 39;

if (myBirthday) {
    age = age + 1;    // OK!
    myBirthday = false;  // Error!
}
```

La constante `myBirthday` no se permite volver a asignarse.

Las variables declaradas con `const` no son "inmutables", simplemente no se les puede volver a asignar. No se recomienda usar `const` con valores de objetos, porque esos valores aún se pueden cambiar aunque la variable no pueda volver a asignarse. Esto lleva a posibles confusiones más adelante, por lo que creo que es prudente evitar situaciones como:

```js
const actors = [
    "Morgan Freeman", "Jennifer Aniston"
];

actors[2] = "Tom Cruise";   // OK :(
actors = [];                // Error!
```

El mejor uso semántico de un `const` es cuando tiene un valor primitivo simple al que desea darle un nombre útil, como usar `myBirthday` en lugar de `true`. Esto hace que los programas sean más fáciles de leer.

| CONSEJO: |
| :--- |
| Si te limitas a usar `const` solo con valores primitivos, evitas cualquier confusión entre la reasignación (no permitida) y la mutación (permitida). ¡Esa es la forma más segura y mejor de usar `const`! |

Además de `var` / `let` / `const`, hay otras formas sintácticas que declaran identificadores (variables) en varios ámbitos. Por ejemplo:

```js
function hello(myName) {
    console.log(`Hello, ${ myName }.`);
}

hello("Kyle");
// Hello, Kyle.
```

El identificador `hello` se crea en el ámbito externo, y también se asocia automáticamente para que haga referencia a la función. Pero el parámetro con nombre `myName` se crea solo dentro de la función y, por lo tanto, solo es accesible dentro del ámbito de esa función. `hello` y `myName` generalmente se comportan como si fueran declarados con `var`.

Otra sintaxis que declara una variable es una cláusula `catch`:

```js
try {
    someError();
}
catch (err) {
    console.log(err);
}
```

La variable `err` es una variable con ámbito de bloque que existe solo dentro de la cláusula `catch`, como si hubiera sido declarada con `let`.

## Functions

La palabra "function" tiene una variedad de significados en programación. Por ejemplo, en el mundo de la Programación Funcional, "function" tiene una definición matemática precisa e implica un conjunto estricto de reglas a seguir.

En JS, deberíamos considerar "function" con el significado más amplio de otro término relacionado: "procedure" (procedimiento). Un procedimiento es una colección de declaraciones que se pueden invocar una o más veces, puede recibir algunos inputs y puede devolver uno o más outputs.

Desde los primeros días de JS, la definición de función se veía así:

```js
function awesomeFunction(coolThings) {
    // ..
    return amazingStuff;
}
```

Esto se llama una declaración de función porque aparece como una declaración por sí misma, no como una expresión en otra declaración. La asociación entre el identificador `awesomeFunction` y el valor de la función ocurre durante la fase de compilación del código, antes de que ese código se ejecute.

En contraste con una declaración de función, una expresión de función se puede definir y asignar de la siguiente manera:

```js
// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function(coolThings) {
    // ..
    return amazingStuff;
};
```

Esta función es una expresión que se asigna a la variable `awesomeFunction`. A diferencia de la forma de declaración de función, una expresión de función no se asocia con su identificador hasta esa declaración durante el tiempo de ejecución.

Es extremadamente importante señalar que en JS, las funciones son valores que se pueden asignar (como se muestra en este fragmento) y pasar alrededor. De hecho, las funciones de JS son un tipo especial del tipo de valor objeto. No todos los lenguajes tratan las funciones como valores, pero es esencial que un lenguaje admita el patrón de programación funcional, como lo hace JS.

Las funciones de JS pueden recibir parámetros de entrada:

```js
function greeting(myName) {
    console.log(`Hello, ${ myName }!`);
}

greeting("Kyle");   // Hello, Kyle!
```

En este fragmento, `myName` se llama un parámetro, que actúa como una variable local dentro de la función. Las funciones pueden definirse para recibir cualquier cantidad de parámetros, desde ninguno hacia arriba, según lo consideres apropiado. A cada parámetro se le asigna el valor del argumento que pases en esa posición (`"Kyle"`, aquí) de la llamada.

Las funciones también pueden devolver valores usando la palabra clave `return`:

```js
function greeting(myName) {
    return `Hello, ${ myName }!`;
}

var msg = greeting("Kyle");

console.log(msg);   // Hello, Kyle!
```

Solo puedes `return` un único valor, pero si tienes más valores para devolver, puedes agruparlos en un solo objeto o matriz.

Dado que las funciones son valores, se pueden asignar como propiedades en objetos:

```js
var whatToSay = {
    greeting() {
        console.log("Hello!");
    },
    question() {
        console.log("What's your name?");
    },
    answer() {
        console.log("My name is Kyle.");
    }
};

whatToSay.greeting();
// Hello!
```

En este fragmento, se incluyen referencias a tres funciones (`greeting()`, `question()` y `answer()`) en el objeto contenido por `whatToSay`. Cada función se puede llamar accediendo a la propiedad para recuperar el valor de referencia de la función. Compara este estilo directo de definir funciones en un objeto con la sintaxis más sofisticada de `class` que se discute más adelante en este capítulo.

Existen muchas formas variadas que pueden tener las funciones en JS. Exploraremos estas variaciones en el Apéndice A, "Tantas Formas de Funciones".

## Comparaciones

Tomar decisiones en los programas requiere comparar valores para determinar su identidad y relación entre sí. JS tiene varios mecanismos para permitir la comparación de valores, así que echemos un vistazo más de cerca a ellos.

### Equal...ish

La comparación más común en los programas de JS hace la pregunta: "¿Este valor X es *igual que* ese valor Y?" ¿Qué significa realmente "igual que" para JS?

Sin embargo, por razones ergonómicas e históricas, el significado es más complicado que el obvio tipo de coincidencia de *identidad exacta*. A veces, una comparación de igualdad pretende coincidencia *exacta*, pero otras veces la comparación deseada es un poco más amplia, permitiendo coincidencias *cercanamente similares* o *intercambiables*. En otras palabras, debemos ser conscientes de las diferencias matizadas entre una comparación de **igualdad** y una de **equivalencia**.

Si has pasado algún tiempo trabajando y leyendo sobre JS, seguramente has visto el llamado operador "triple igual" `===`, también conocido como el operador de "igualdad estricta". Eso parece bastante sencillo, ¿verdad? Seguramente, "estricto" significa estricto, como en estrecho y *exacto*.

No exactamente.

Sí, la mayoría de los valores que participan en una comparación de igualdad `===` se ajustarán a esa intuición *exactamente la misma*. Considera algunos ejemplos:

```js
3 === 3.0;              // true
"yes" === "yes";        // true
null === null;          // true
false === false;        // true

42 === "42";            // false
"hello" === "Hello";    // false
true === 1;             // false
0 === null;             // false
"" === null;            // false
null === undefined;     // false
```

| NOTA: |
| :--- |
| Otra forma en que a menudo se describe la comparación de igualdad de `===` es "verificar tanto el valor como el tipo". En varios de los ejemplos que hemos visto hasta ahora, como `42 === "42"`, el *tipo* de ambos valores (número, cadena, etc.) parece ser el factor distintivo. Sin embargo, hay más que eso. **Todas** las comparaciones de valores en JS consideran el tipo de los valores que se están comparando, no *solo* el operador `===`. Específicamente, `===` prohíbe cualquier tipo de conversión de tipo (también conocida como "coerción") en su comparación, mientras que otras comparaciones en JS *sí* permiten la coerción. |

Pero el operador `===` tiene cierta complejidad, un hecho que muchos desarrolladores de JS pasan por alto, en detrimento propio. El operador `===` está diseñado para *mentir* en dos casos de valores especiales: `NaN` y `-0`. Considera:

```js
NaN === NaN;            // false
0 === -0;               // true
```

En el caso de `NaN`, el operador `===` *miente* y dice que una ocurrencia de `NaN` no es igual a otro `NaN`. En el caso de `-0` (sí, este es un valor real y distinto que puedes usar intencionalmente en tus programas), el operador `===` *miente* y dice que es igual al valor regular `0`.

Dado que *mentir* acerca de tales comparaciones puede resultar molesto, es mejor evitar el uso de `===` para ellas. Para comparaciones de `NaN`, utiliza la utilidad `Number.isNaN(..)`, que no *miente*. Para la comparación de `-0`, utiliza la utilidad `Object.is(..)`, que también no *miente*. `Object.is(..)` también se puede utilizar para comprobaciones de `NaN` sin *mentir*, si lo prefieres. Irónicamente, podrías pensar en `Object.is(..)` como el "cuádruple igual" `====,` ¡la comparación realmente realmente estricta!

Hay razones históricas y técnicas más profundas para estos *engaños*, pero eso no cambia el hecho de que `===` no es realmente una comparación *estrictamente exactamente igual* en el sentido *más estricto*.

La historia se vuelve aún más complicada cuando consideramos comparaciones de valores de objeto (no primitivos). Considera:

```js
[ 1, 2, 3 ] === [ 1, 2, 3 ];    // false
{ a: 42 } === { a: 42 }         // false
(x => x * 2) === (x => x * 2)   // false
```

¿Qué está pasando aquí?

Puede parecer razonable asumir que una comprobación de igualdad considera la *naturaleza* o *contenido* del valor; después de todo, `42 === 42` considera el valor `42` real y lo compara. Pero cuando se trata de objetos, una comparación consciente del contenido se denomina generalmente "igualdad estructural".

JS no define `===` como *igualdad estructural* para valores de objeto. En cambio, `===` utiliza *igualdad por identidad* para valores de objeto.

En JS, todos los valores de objeto se mantienen por referencia (consulta "Valores vs Referencias" en el Apéndice A), se asignan y pasan por referencia-copia, **y** para nuestra discusión actual, se comparan por igualdad de referencia (identidad). Considera:

```js
var x = [ 1, 2, 3 ];

// la asignación es por copia de referencia, así que
// y hace referencia al *mismo* array que x,
// no a otra copia de él.
var y = x;

y === x;              // true
y === [ 1, 2, 3 ];    // false
x === [ 1, 2, 3 ];    // false
```

En este fragmento, `y === x` es verdadero porque ambas variables tienen una referencia al mismo array inicial. Pero las comparaciones `=== [1,2,3]` fallan porque `y` y `x`, respectivamente, se comparan con nuevos *diferentes* arrays `[1,2,3]`. La estructura y el contenido del array no importan en esta comparación, solo la **identidad de la referencia**.

JS no proporciona un mecanismo para la comparación de igualdad estructural de valores de objeto, solo la comparación de identidad de referencia. Para hacer una comparación de igualdad estructural, deberás implementar las verificaciones tú mismo.

Pero ten cuidado, es más complicado de lo que asumirás. Por ejemplo, ¿cómo determinarías si dos referencias a funciones son "estructuralmente equivalentes"? Incluso convertir a cadena para comparar su código fuente no tendría en cuenta cosas como el cierre. JS no proporciona una comparación de igualdad estructural porque es casi inabordable manejar todos los casos particulares.

### Comparaciones coercitivas

La coerción significa que un valor de un tipo se convierte en su representación respectiva en otro tipo (en la medida de lo posible). Como discutiremos en el Capítulo 4, la coerción es un pilar fundamental del lenguaje JS, no alguna característica opcional que se pueda evitar razonablemente.

Pero cuando la coerción se encuentra con operadores de comparación (como la igualdad), la confusión y la frustración desafortunadamente surgen con más frecuencia de la deseada.

Pocos aspectos de JS generan más críticas en la comunidad JS en general que el operador `==`, generalmente conocido como el operador de "igualdad laxa". La mayoría de los escritos y el discurso público sobre JS condenan este operador como mal diseñado y peligroso o lleno de errores cuando se usa en programas de JS. Incluso el creador del lenguaje, Brendan Eich, ha lamentado cómo se diseñó como un gran error.

Según lo que puedo decir, la mayor parte de esta frustración proviene de una lista bastante corta de casos confusos, pero un problema más profundo es la concepción extremadamente extendida de que realiza sus comparaciones sin considerar los tipos de los valores que compara.

El operador == realiza una comparación de igualdad de manera similar a como lo hace `===`. De hecho, ambos operadores consideran el tipo de los valores que se están comparando. Y si la comparación es entre el mismo tipo de valor, tanto `==` como `===` **hacen exactamente lo mismo, ninguna diferencia en absoluto**.

Si los tipos de valor que se están comparando son diferentes, el `==` difiere de `===` en que permite la coerción antes de la comparación. En otras palabras, ambos quieren comparar valores del mismo tipo, pero `==` permite conversiones de tipo *primero*, y una vez que los tipos se han convertido para que sean iguales en ambos lados, entonces `==` hace lo mismo que `===`. En lugar de "igualdad laxa", el operador `==` debería describirse como "igualdad coercitiva".

Considera:

```js
42 == "42";             // true
1 == true;              // true
```

En ambas comparaciones, los tipos de valor son diferentes, por lo que el `==` hace que los valores no numéricos (`"42"` y `true`) se conviertan a números (`42` y `1`, respectivamente) antes de realizar las comparaciones.

Ser consciente de esta naturaleza de `==`—que prefiere comparaciones numéricas primitivas—te ayuda a evitar la mayoría de los casos problemáticos, como alejarte de situaciones confusas como `"" == 0` o `0 == false`.

Puede que estés pensando, "Bueno, simplemente evitaré cualquier comparación de igualdad coercitiva (usando `===` en su lugar) para evitar esos casos especiales". Eh, lo siento, no es tan probable como esperarías.

Hay una buena probabilidad de que utilices operadores de comparación relacional como `<`, `>` (e incluso `<=` y `>=`).

Al igual que `==`, estos operadores se comportarán como "estrictos" si los tipos que se están comparando relacionalmente ya coinciden, pero permitirán la coerción primero (generalmente, a números) si los tipos difieren.

Considera:

```js
var arr = [ "1", "10", "100", "1000" ];
for (let i = 0; i < arr.length && arr[i] < 500; i++) {
    // will run 3 times
}
```

La comparación `i < arr.length` es "segura" contra la coerción porque `i` y `arr.length` siempre son números. Sin embargo, la comparación `arr[i] < 500` invoca la coerción, ya que los valores de `arr[i]` son todos cadenas. Estas comparaciones se convierten en `1 < 500`, `10 < 500`, `100 < 500` y `1000 < 500`. Dado que esta última es falsa, el bucle se detiene después de su tercera iteración.

Estos operadores relacionales suelen utilizar comparaciones numéricas, excepto en el caso en que **ambos** valores que se están comparando ya son cadenas; en este caso, utilizan la comparación alfabética (similar a un diccionario) de las cadenas:

```js
var x = "10";
var y = "9";

x < y;      // true, watch out!
```

No hay forma de evitar la coerción con estos operadores relacionales, aparte de simplemente no usar tipos incompatibles en las comparaciones. Eso puede ser loable como objetivo, pero aún es bastante probable que te encuentres con un caso en el que los tipos *puedan* diferir.

La estrategia más sabia no es evitar las comparaciones coercitivas, sino abrazarlas y aprender sus pormenores.

Las comparaciones coercitivas surgen en otros lugares en JS, como en las condicionales (`if`, etc.), que volveremos a visitar en el Apéndice A, "Comparación Condicional Coercitiva".

## Cómo nos organizamos en JS

Dos patrones principales para organizar código (datos y comportamiento) se utilizan ampliamente en todo el ecosistema de JS: clases y módulos. Estos patrones no son mutuamente excluyentes; muchos programas pueden y de hecho utilizan ambos. Otros programas se limitarán a usar solo un patrón, o incluso ninguno.

En algunos aspectos, estos patrones son muy diferentes. Pero curiosamente, en otros aspectos, son simplemente diferentes caras de la misma moneda. Ser competente en JS requiere comprender ambos patrones y dónde son apropiados (¡y dónde no!).

### Classes

Los términos "orientado a objetos", "orientado a clases" y "clases" están cargados de detalles y matices; no tienen una definición universal.

Utilizaremos una definición común y algo tradicional aquí, la que es más probable que sea familiar para aquellos con antecedentes en lenguajes "orientados a objetos" como C++ y Java.

Una clase en un programa es una definición de un "tipo" de estructura de datos personalizada que incluye tanto datos como comportamientos que operan en esos datos. Las clases definen cómo funciona tal estructura de datos, pero las clases en sí no son valores concretos. Para obtener un valor concreto que se pueda usar en el programa, una clase debe ser *instanciada* (con la palabra clave `new`) una o más veces.

Considera:

```js
class Page {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(this.text);
    }
}

class Notebook {
    constructor() {
        this.pages = [];
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");

mathNotes.print();
// ..
```

En la clase `Page`, los datos son una cadena de texto almacenada en una propiedad miembro `this.text`. El comportamiento es `print()`, un método que muestra el texto en la consola.

Para la clase `Notebook`, los datos son una matriz de instancias de `Page`. El comportamiento es `addPage(..)`, un método que instancia nuevas páginas `Page` y las agrega a la lista, así como `print()` (que imprime todas las páginas en el cuaderno).

La declaración `mathNotes = new Notebook()` crea una instancia de la clase `Notebook`, y `page = new Page(text)` es donde se crean instancias de la clase `Page`.

Los comportamientos (métodos) solo se pueden llamar en instancias (no en las propias clases), como `mathNotes.addPage(..)` y `page.print()`.

El mecanismo de `class` permite organizar datos (`text` y `pages`) junto con sus comportamientos (por ejemplo, `addPage(..)` e `print()`). El mismo programa podría haberse construido sin ninguna definición de `class`, pero probablemente habría sido mucho menos organizado, más difícil de leer y entender, y más propenso a errores y un mantenimiento deficiente.

#### Herencia de clase

Otro aspecto inherente al diseño tradicional "orientado a clases", aunque se utiliza un poco menos comúnmente en JS, es la "herencia" (y "polimorfismo"). Considera:

```js
class Publication {
    constructor(title,author,pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            ${ this.pubDate }
        `);
    }
}
```

Esta clase `Publication` define un conjunto de comportamientos comunes que cualquier publicación podría necesitar.

Ahora consideremos tipos más específicos de publicaciones, como `Book` y `BlogPost`:

```js
class Book extends Publication {
    constructor(bookDetails) {
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.publishedOn
        );
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${ this.publisher }
            ISBN: ${ this.ISBN }
        `);
    }
}

class BlogPost extends Publication {
    constructor(title,author,pubDate,URL) {
        super(title,author,pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}
```

Ambos, `Book` y `BlogPost`, utilizan la cláusula `extends` para *extender* la definición general de `Publication` e incluir comportamientos adicionales. La llamada `super(..)` en cada constructor delega al constructor de la clase padre `Publication` para su trabajo de inicialización, y luego realizan cosas más específicas según su tipo de publicación respectivo (también conocido como "subclase" o "clase hija").

Ahora considera el uso de estas clases hijas:

```js
var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = new BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```

Es importante destacar que ambas instancias de la clase hija tienen un método `print()`, que es una anulación (override) del método `print()` *heredado* de la clase principal `Publication`. Cada uno de esos métodos `print()` anulados en las clases hijas llama a `super.print()` para invocar la versión heredada del método `print()`.

El hecho de que tanto los métodos heredados como los anulados puedan tener el mismo nombre y coexistir se llama *polimorfismo*.

La herencia es una herramienta poderosa para organizar datos y comportamientos en unidades lógicas separadas (clases), permitiendo que la clase hija coopere con la clase padre accediendo y utilizando su comportamiento y datos.

### Modulos

El patrón de módulo tiene esencialmente el mismo objetivo que el patrón de clase, que es agrupar datos y comportamientos en unidades lógicas. Al igual que las clases, los módulos pueden "incluir" o "acceder" a los datos y comportamientos de otros módulos, por cooperación.

Pero los módulos tienen algunas diferencias importantes con respecto a las clases. Sobre todo, la sintaxis es completamente diferente.

#### Módulos clásicos

ES6 agregó una forma de sintaxis de módulo a la sintaxis nativa de JS, que veremos en un momento. Pero desde los primeros días de JS, el uso de módulos fue un patrón importante y común que se aprovechó en innumerables programas de JS, incluso sin una sintaxis dedicada.

Las características clave de un *módulo clásico* son una función externa (que se ejecuta al menos una vez), que devuelve una "instancia" del módulo con una o más funciones expuestas que pueden operar sobre los datos internos (ocultos) del módulo.

Dado que un módulo de esta forma es *simplemente una función*, y llamarla produce una "instancia" del módulo, otra descripción para estas funciones es "fábricas de módulos".

Considera la forma de módulo clásico de las anteriores clases `Publication`, `Book`, y `BlogPost`:

```js
function Publication(title,author,pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${ title }
                By: ${ author }
                ${ pubDate }
            `);
        }
    };

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${ bookDetails.publisher }
                ISBN: ${ bookDetails.ISBN }
            `);
        }
    };

    return publicAPI;
}

function BlogPost(title,author,pubDate,URL) {
    var pub = Publication(title,author,pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };

    return publicAPI;
}
```

Al comparar estas formas con las formas `class`, hay más similitudes que diferencias.

La forma `class` almacena métodos y datos en una instancia de objeto, que debe ser accedida con el prefijo `this`.. Con los módulos, los métodos y datos se acceden como variables de identificador en el ámbito, sin ningún prefijo `this`.

Con `class`, la "API" de una instancia es implícita en la definición de la `clase`; además, todos los datos y métodos son públicos. Con la función de fábrica del módulo, creas explícitamente y devuelves un objeto con cualquier método expuesto públicamente, y cualquier dato u otros métodos no referenciados permanecen privados dentro de la función de fábrica.

Hay otras variaciones de esta forma de función de fábrica que son bastante comunes en JS, incluso en 2020; puedes encontrarte con estas formas en diferentes programas de JS: AMD (Asynchronous Module Definition), UMD (Universal Module Definition) y CommonJS (módulos clásicos de Node.js). Las variaciones son menores (no son completamente compatibles). Sin embargo, todas estas formas se basan en los mismos principios básicos.

Considera también el uso (también conocido como "instanciación") de estas funciones de fábrica de módulos:

```js
var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```

La única diferencia observable aquí es la falta de uso de `new`, llamando a las funciones de fábrica de módulos como funciones normales.

#### ES Modules

ES modules (ESM), introducidos en el lenguaje JS en ES6, están destinados a servir en gran medida al mismo espíritu y propósito que los *módulos clásicos* existentes que acabo de describir, especialmente teniendo en cuenta variaciones importantes y casos de uso de AMD, UMD y CommonJS.

Sin embargo, el enfoque de implementación difiere significativamente.

En primer lugar, no hay una función de envoltura para *definir* un módulo. El contexto de envoltura es un archivo. Los ESM siempre se basan en archivos; un archivo, un módulo.

En segundo lugar, no interactúas con la "API" de un módulo explícitamente, sino que utilizas la palabra clave `export` para agregar una variable o método a su definición de API pública. Si algo está definido en un módulo pero no se `export`a, permanece oculto (igual que con los *módulos clásicos*).

En tercer lugar, y quizás lo más notablemente diferente de los patrones discutidos anteriormente, no "instancias" un módulo ES, simplemente lo `import`as para usar su instancia única. Los ESM son, de hecho, "singleton", en el sentido de que solo se crea una instancia en el primer `import` en tu programa, y todos los demás `import`s simplemente reciben una referencia a esa misma instancia única. Si tu módulo necesita admitir múltiples instanciaciones, debes proporcionar una función de fábrica de *estilo de módulo clásico* en tu definición de ESM con ese propósito.

En nuestro ejemplo en ejecución, asumimos la posibilidad de múltiples instanciaciones, por lo que estos fragmentos siguientes mezclarán tanto ESM como *módulos clásicos*.

Considera el archivo `publication.js`:

```js
function printDetails(title,author,pubDate) {
    console.log(`
        Title: ${ title }
        By: ${ author }
        ${ pubDate }
    `);
}

export function create(title,author,pubDate) {
    var publicAPI = {
        print() {
            printDetails(title,author,pubDate);
        }
    };

    return publicAPI;
}
```

Para importar y usar este módulo, desde otro módulo de ES como `blogpost.js`

```js
import { create as createPub } from "publication.js";

function printDetails(pub,URL) {
    pub.print();
    console.log(URL);
}

export function create(title,author,pubDate,URL) {
    var pub = createPub(title,author,pubDate);

    var publicAPI = {
        print() {
            printDetails(pub,URL);
        }
    };

    return publicAPI;
}
```

Y finalmente, para usar este módulo, importamos a otro módulo de ES como `main.js`:

```js
import { create as newBlogPost } from "blogpost.js";

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```

| NOTA: |
| :--- |
| La cláusula `as newBlogPost` en la declaración `import` es opcional; si se omite, se importaría una función de nivel superior simplemente llamada `create(..)`. En este caso, estoy cambiando su nombre por una cuestión de legibilidad; su nombre de fábrica más genérico, `create(..)`, se vuelve más descriptivo semánticamente como `newBlogPost(..)`. |

Como se muestra, los ES modules pueden utilizar *módulos clásicos* internamente si necesitan admitir múltiples instanciaciones. Alternativamente, podríamos haber expuesto una `class` desde nuestro módulo en lugar de una función de fábrica `create(..)`, con generalmente el mismo resultado. Sin embargo, dado que ya estás utilizando ESM en ese punto, recomendaría quedarse con *módulos clásicos* en lugar de `class`.

Si tu módulo solo necesita una única instancia, puedes omitir las capas adicionales de complejidad y `exportar` sus métodos públicos directamente.

## La madriguera del conejo se profundiza

Como se prometió al principio de este capítulo, acabamos de echar un vistazo superficial a una amplia área principal del lenguaje JavaScript. Es posible que tu cabeza aún esté dando vueltas, ¡pero eso es completamente natural después de recibir tanta información de golpe!

Incluso con esta "breve" exploración de JavaScript, cubrimos o insinuamos una gran cantidad de detalles que deberías considerar cuidadosamente y asegurarte de que te sientas cómodo con ellos. Hablo en serio cuando sugiero: vuelve a leer este capítulo, quizás varias veces.

En el próximo capítulo, profundizaremos mucho más en algunos aspectos importantes de cómo funciona JavaScript en su núcleo. Pero antes de seguir ese agujero de conejo más profundamente, asegúrate de haber tomado el tiempo adecuado para digerir completamente lo que acabamos de cubrir aquí.