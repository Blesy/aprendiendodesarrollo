---
rutas: [Backend]
title: 'Salida'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida'
---

## X-Content-Type-Options: nosniff
> Enviar la cabecera `X-Content-Type-Options: nosniff`.

Debes enviar la cabecera `X-Content-Type-Options: nosniff` para prevenir ataques de sniffing de tipo MIME en tu aplicación web. Esta cabecera indica al navegador que no anule el tipo de contenido de la respuesta aunque no sea el esperado. Por ejemplo, si un atacante consigue subir un archivo HTML con una extensión camuflada como .jpg, el servidor puede seguir enviando la cabecera de tipo de contenido correcta para el archivo HTML. Sin embargo, algunos navegadores pueden ignorar esta cabecera e intentar "husmear" el tipo de contenido basándose en el contenido real del archivo, lo que puede provocar un ataque de secuencias de comandos en sitios cruzados (XSS).

Al enviar la cabecera `X-Content-Type-Options: nosniff`, le indica al navegador que confíe siempre en el tipo de contenido proporcionado y no intente husmear el tipo de contenido. Esto ayuda a mitigar el riesgo de que los atacantes se aprovechen de la falta de coincidencia del tipo de contenido para enviar contenido malicioso a usuarios desprevenidos.

## X-Frame-Options: Deny
> Envía la cabecera `X-Frame-Options: deny`.

La cabecera `X-Frame-Options` impide que la página se muestre en un iframe, que suele utilizarse en ataques de clickjacking. Al establecer el valor de esta cabecera como `deny`, le está indicando al navegador que no muestre la página en ningún iframe. Esto ayuda a evitar que la página se incruste en el sitio web de un atacante y reduce el riesgo de ataques de clickjacking.

## Política de seguridad de contenidos
> Enviar la cabecera `Content-Security-Policy: default-src 'none'`.

Enviar la cabecera `Content-Security-Policy: default-src 'none'` es una buena práctica de seguridad que ayuda a prevenir ataques de cross-site scripting (XSS). Esta cabecera indica al navegador que no permita la carga de recursos de fuentes externas, como scripts, hojas de estilo o imágenes. Sólo permite recursos que estén explícitamente en la lista blanca del encabezado CSP, como scripts u hojas de estilo alojados en su propio dominio. Esto puede ayudar a evitar que actores maliciosos inyecten código en sus páginas web mediante ataques XSS, ya que el navegador no ejecutará ningún script ni cargará ningún recurso que no esté explícitamente permitido por la política CSP.

## Eliminar huellas digitales
> Elimine las cabeceras fingerprinting (es decir, x-powered-by, etc.) de la solicitud HTTP.

Las cabeceras fingerprinting pueden utilizarse para identificar el servidor web y su versión. Esta información puede ser utilizada por atacantes para identificar vulnerabilidades en el servidor web y explotarlas.

## Forzar Content-Type
> Forzar siempre que la cabecera `Content-Type` se establezca en el tipo MIME relevante.

Forzar el Content-Type para la seguridad de la API es importante porque garantiza que el cliente y el servidor se comunican en un formato mutuamente acordado para los datos que se transmiten. Esto puede prevenir ataques como la suplantación o inyección de contenido, donde un atacante intenta engañar al servidor para que procese contenido malicioso simulando que es de un Content-Type diferente. Al forzar el Content-Type a un formato específico, el servidor puede validar que los datos que está recibiendo son legítimos y seguros de procesar. Además, forzar el Content-Type puede ayudar a prevenir ciertos tipos de errores de análisis que podrían ser explotados por los atacantes.

## Evite devolver datos sensibles
> Devuelva sólo los datos necesarios para que el cliente funcione.

Devolver sólo los datos necesarios para que el cliente funcione es una práctica recomendada importante para la seguridad de la API. Esto se debe a que limitar la cantidad de datos que se devuelven reduce la cantidad de información sensible que queda expuesta. Al devolver sólo los datos necesarios, puede ayudar a prevenir vulnerabilidades de seguridad como la fuga de datos, ataques de inyección y otros tipos de ataques que se basan en exponer demasiada información. Además, reducir la cantidad de datos devueltos puede mejorar el rendimiento de su API al reducir la cantidad de datos que deben procesarse y transmitirse.

## Código de respuesta adecuado
> Devuelve el código de estado apropiado según la operación completada. p.ej.
> 
> * 200 OK
> * 400 Solicitud errónea
> * 401 No autorizado
> * 405 Método no permitido
> * ...etc.

Devolver el código de estado apropiado según la operación completada es importante para la seguridad de la API porque permite al cliente entender el resultado de su petición y tomar las acciones apropiadas. Por ejemplo, si el servidor devuelve un código de estado 401 No Autorizado, el cliente sabe que sus credenciales de autenticación son incorrectas y puede pedir al usuario que vuelva a introducir sus datos de acceso. Por otro lado, si el servidor devuelve un código de estado 200 OK aunque la solicitud haya fallado, el cliente puede no darse cuenta de que había un problema y podría ejecutar acciones maliciosas o mostrar datos incorrectos. Proporcionar códigos de estado precisos puede ayudar a prevenir vulnerabilidades de seguridad y mejorar la fiabilidad y usabilidad general de la API.