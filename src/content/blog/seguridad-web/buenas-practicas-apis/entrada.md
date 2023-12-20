---
rutas: [Backend]
title: 'Entrada'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada'
---

## Métodos HTTP adecuados
Utilice el método HTTP adecuado según la operación: `GET (lectura)`, `POST (creación)`, `PUT/PATCH (sustitución/actualización)` y `DELETE (para eliminar un registro)`, y responda con `405 Method Not Allowed` si el método solicitado no es apropiado para el recurso solicitado.

## Validación del Content-Type
> Validar el `Content-Type` en las cabeceras de las peticiones para evitar ataques XSS

La validación de la cabecera `Content-Type` en la solicitud puede ayudar a que las API sean más seguras al garantizar que los datos de la solicitud están en el formato esperado y reducir el riesgo de ataques como los de inyección o los de secuencias de comandos en sitios cruzados (XSS).

## Validación de la entrada del usuario
> Validar la entrada del usuario para evitar vulnerabilidades comunes

La entrada del usuario es una fuente común de vulnerabilidades en las aplicaciones web. Esto se debe a que la entrada del usuario a menudo no se valida, desinfecta o escapa adecuadamente antes de ser utilizada en una aplicación web. Esto puede permitir a un atacante manipular la entrada y ejecutar código malicioso o hacer que la aplicación se comporte de forma inesperada.

## Cabecera de Authorization
> Utilice la cabecera de `Authorization` estándar para enviar tokens en lugar de cabeceras personalizadas o query/body parameters

Generalmente no se recomienda enviar tokens en los parámetros query o body porque estos parámetros pueden ser registrados o almacenados en caché por varios sistemas, incluyendo servidores web, proxies y puertas de enlace. Esto puede llevar potencialmente a la exposición de datos sensibles, incluyendo tokens de autenticación.

Además, el envío de tokens en los parámetros de consulta o cuerpo puede hacerlos más vulnerables a los ataques de falsificación de petición entre sitios (CSRF). En un ataque CSRF, un atacante puede engañar a un usuario para que envíe una solicitud que incluya su token de autenticación, que el atacante puede utilizar para hacerse pasar por el usuario y obtener acceso a su cuenta.

Por el contrario, el uso de la cabecera `Authorization` para enviar tokens ayuda a garantizar que los tokens no son registrados o almacenados en caché por sistemas intermediarios, y también puede ayudar a proteger contra ataques CSRF al permitir que el servidor valide el token antes de procesar la solicitud.

## Evite el cifrado del lado del cliente
> Utilice el cifrado del lado del servidor en lugar del cifrado del lado del cliente.

El cifrado del lado del cliente no es recomendable porque la base de código del lado del cliente puede ser fácilmente sometida a ingeniería inversa, lo que puede llevar a la exposición de los algoritmos de cifrado.

## API Gateway
> Utilice una API gateway para el almacenamiento en caché, las políticas de límite de velocidad y otras funciones de seguridad.

Una API gateway puede hacer que sus API sean más seguras al proporcionar un punto de control centralizado para gestionar y proteger el tráfico de API. He aquí algunas formas en las que una API gateway puede mejorar la seguridad de las API:

* Autenticación y autorización: Las API gateways pueden gestionar la autenticación y autorización de usuarios, reduciendo la carga de las API individuales y mejorando la coherencia en toda la organización. Esto puede incluir técnicas como la verificación JWT, OAuth y otros mecanismos de autenticación.

* Filtrado de tráfico y limitación de velocidad: Una API gateway puede aplicar el filtrado de tráfico y la limitación de velocidad para proteger las API contra ataques DDoS, ataques de fuerza bruta y otros tipos de abuso.

* Cifrado y descifrado: Una API gateway puede gestionar el cifrado y descifrado de datos confidenciales para protegerlos contra filtraciones y robos de datos.

* Registro y supervisión: Una API gateway puede proporcionar registro y supervisión centralizados del tráfico API, lo que ayuda a identificar y responder a las amenazas de seguridad y otros problemas.

* Integración con herramientas de seguridad: Una API gateway puede integrarse con herramientas de seguridad como WAFs, SIEMs y otras herramientas de seguridad para proporcionar capas adicionales de protección.