---
rutas: [Backend]
title: 'Procesamiento'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing'
---

## Autenticación de endpoints
> Compruebe si todos los endpoints protegidos están detrás de la autenticación para evitar procesos de autenticación rotos

Al identificar y corregir los flujos de trabajo de autenticación rotos, la API puede evitar ataques como los de fuerza bruta, relleno de credenciales, secuestro de sesiones y otros ataques relacionados con la autenticación. Esto puede ayudar a garantizar la seguridad del sistema y la protección de los datos sensibles.

## Evitar el ID personal en las URL
> Evite el ID personal del usuario en las URL de los recursos, por ejemplo, users/242/orders.

Debe evitarse el ID de recurso del propio usuario. Utilice /yo/pedidos en lugar de /usuario/654321/pedidos. Esto ayudará a evitar el riesgo de exponer el ID personal del usuario que puede ser utilizado para otros ataques.

## Elija UUID
> Utilice UUID en lugar de números enteros autoincrementados. Los UUID son únicos a nivel mundial y no son secuenciales. También son más difíciles de adivinar que los números enteros secuenciales.

El uso de UUID en lugar de números enteros autoincrementados impide a los atacantes adivinar o iterar a través de los ID de los recursos. Los UUID se generan aleatoriamente y contienen 128 bits de entropía, lo que hace prácticamente imposible que los atacantes los adivinen. En cambio, los ID autoincrementables pueden predecirse o iterarse fácilmente, lo que permite a los atacantes acceder o manipular recursos a los que no deberían tener acceso. Además, el uso de UUID puede ayudar a evitar la divulgación de información al ocultar el orden de creación o acceso a los recursos.

## Desactivar el análisis sintáctico de entidades en XML
> Deshabilite el análisis sintáctico de entidades si está analizando XML para evitar ataques XXE.

Si el analizador XML es vulnerable a ataques XXE, el atacante puede utilizar esta vulnerabilidad para leer archivos en el servidor, realizar ataques SSRF, y más. Esto puede llevar a la divulgación de información sensible, denegación de servicio y otros ataques.

El ataque XXE (XML External Entity) es un tipo de ataque dirigido a aplicaciones que analizan la entrada XML de fuentes no fiables. En este ataque, un atacante inyecta una carga maliciosa XML. Esta carga útil puede contener entidades externas que el atacante puede utilizar para recuperar datos confidenciales, ejecutar código remoto o lanzar ataques de denegación de servicio. Los ataques XXE pueden evitarse desactivando el procesamiento de entidades externas o validando y desinfectando la entrada XML antes de analizarla.

## Desactivar la expansión de entidades
> Deshabilite la expansión de entidades si utiliza XML, YML o cualquier otro lenguaje

Deshabilitar la expansión de entidades es importante cuando se usa XML, YAML o cualquier otro lenguaje que permita entidades porque ayuda a prevenir ataques de inyección de etiquetas XXE (XML External Entity) o YAML. En estos ataques, el atacante normalmente inyecta algún tipo de código personalizado en la entrada para realizar ataques contra la aplicación.... Deshabilitando la expansión de entidades, la entrada no puede ser manipulada de esta manera, reduciendo el riesgo de tales ataques.

## Usar CDN para subir archivos
> Utilizar CDN para la carga de archivos

El uso de una red de distribución de contenidos (CDN) para la carga de archivos puede hacer que una API sea más segura al descargar el tráfico de carga de archivos del servidor API y reducir el riesgo de ataques DDoS.

## Evitar el bloqueo HTTP
> Evita el bloqueo HTTP si estás utilizando una gran cantidad de datos moviendo las operaciones HTTP pesadas a trabajos en segundo plano o tareas asíncronas.

El bloqueo HTTP es un problema común en las aplicaciones web. Ocurre cuando la aplicación es incapaz de procesar las peticiones HTTP entrantes debido a un gran número de peticiones o una gran cantidad de datos. Esto puede provocar que la aplicación deje de responder y que el servidor se bloquee. Esto puede evitarse moviendo las operaciones HTTP pesadas a trabajos en segundo plano o tareas asíncronas. Puedes utilizar una cola de mensajes para poner en cola las peticiones y procesarlas en segundo plano. Esto permitirá a la aplicación continuar procesando otras peticiones mientras las operaciones pesadas se procesan en segundo plano.

## Desactivar el modo de depuración
> Asegúrese de desactivar el modo de depuración en producción

El modo de depuración es una característica que se utiliza para ayudar a los desarrolladores a depurar su código. No debe utilizarse en producción. Puede exponer información sensible sobre la aplicación y el servidor en el que se ejecuta. Asegúrese de desactivar el modo de depuración en producción.

## Pilas no ejecutables
> Utilice pilas no ejecutables para evitar que los atacantes ejecuten código en su servidor.

Una pila normalmente se refiere a la pila de llamadas o pila de ejecución. Es una estructura de datos utilizada por el programa informático para gestionar y realizar un seguimiento de la secuencia de llamadas a funciones, variables locales y otros datos relacionados durante la ejecución del programa.

Una pila no ejecutable es un mecanismo de seguridad que evita que se ejecute código malicioso impidiendo que la memoria de la pila se ejecute como código. Esto ayuda a prevenir ataques como los de desbordamiento de búfer, en los que un atacante intenta sobrescribir la dirección de retorno en la pila para redirigir el programa a la ejecución de código malicioso. Al utilizar pilas no ejecutables, el programa puede mantener la pila separada del código ejecutable y ayudar a prevenir este tipo de ataques.