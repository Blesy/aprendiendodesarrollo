---
rutas: [APIs]
title: 'APIs'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/APIs/apis'
---

API es el acrónimo de Application Programming Interface (interfaz de programación de aplicaciones), que es un intermediario de software que permite que dos aplicaciones se comuniquen entre sí.

* [¿Qué es una API?](https://aws.amazon.com/es/what-is/api/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/7OXs3kUjdNE?si=P3O-wH1PH3ZgrnSH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## REST (Recomendado)
REST, o REpresentational State Transfer, es un estilo arquitectónico para proporcionar estándares entre sistemas informáticos en la web, facilitando la comunicación entre sistemas.

* [¿Qué es REST API?](https://www.redhat.com/es/topics/api/what-is-a-rest-api)
* [Aprende a diseñar una API RESTFul correctamente](https://www.udemy.com/course/aprende-a-disenar-una-api-restful-correctamente/)
* [Introducción a API REST](https://ed.team/cursos/api-rest)

## APIs JSON (Recomendado)
JSON o JavaScript Object Notation es un esquema de codificación que está diseñado para eliminar la necesidad de un código ad-hoc para cada aplicación para comunicarse con los servidores que se comunican de una manera definida. El módulo API JSON expone una implementación para almacenes de datos y estructuras de datos, como tipos de entidad, paquetes y campos.

* [¿Qué es y para qué sirve?](https://keepcoding.io/blog/json-api-que-es-para-que-sirve/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6tiqf0oG9do?si=kk_9PY138MPQRbIL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## SOAP
Simple Object Access Protocol (SOAP) es un protocolo de mensajes para el intercambio de información entre sistemas y aplicaciones. Cuando se trata de interfaces de programación de aplicaciones (API), una API SOAP se desarrolla de forma más estructurada y formalizada. Los mensajes SOAP pueden transmitirse a través de diversos protocolos de nivel inferior, incluido el Protocolo de Transferencia de Hipertexto (HTTP) relacionado con la web.

* [SOAP: explicación del protocolo de red](https://www.ionos.mx/digitalguide/paginas-web/desarrollo-web/soap-simple-object-access-protocol/)

## gRPC
gRPC es un framework RPC universal de código abierto y alto rendimiento.

RPC significa Remote Procedure Call, hay un debate en curso sobre lo que la g significa. RPC es un protocolo que permite a un programa ejecutar un procedimiento de otro programa ubicado en otro ordenador. La gran ventaja es que el desarrollador no necesita codificar los detalles de la interacción remota. El procedimiento remoto se llama como cualquier otra función. Pero el cliente y el servidor pueden codificarse en lenguajes diferentes.

* [gRPC, ¿qué es y cómo funciona?](https://www.paradigmadigital.com/dev/grpc-que-es-como-funciona/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/nwdL6NOBtGI?si=JHHSao-MwKbluJdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## GraphQL
GraphQL es un lenguaje de consulta y un sistema de ejecución para API (interfaces de programación de aplicaciones). Está diseñado para ofrecer a los clientes una forma flexible y eficaz de solicitar datos a los servidores, y a menudo se utiliza como alternativa a las API REST (transferencia de estado representacional).

Una de las principales características de GraphQL es su capacidad para especificar exactamente los datos que se necesitan, en lugar de recibir un conjunto fijo de datos de un punto final. Esto permite a los clientes solicitar sólo los datos que necesitan y reduce la cantidad de datos que hay que transferir por la red.

GraphQL también permite definir la estructura de los datos que devuelve el servidor, lo que permite a los clientes solicitar datos de forma predecible y flexible. Esto facilita la creación y el mantenimiento de aplicaciones cliente que dependen de los datos del servidor.

GraphQL se utiliza ampliamente en aplicaciones web y móviles modernas, y cuenta con el apoyo de una amplia y activa comunidad de desarrolladores.

* [¿Qué es GraphQL?](https://www.redhat.com/es/topics/api/what-is-graphql)

<iframe width="560" height="315" src="https://www.youtube.com/embed/tqxvJfd69zs?si=i33cHbOAR4PcCtVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/QG-qbmW-wes?si=mGcd7IfGcynuvUAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Hateoas
HATEOAS es un acrónimo de Hypermedia As The Engine Of Application State (Hipermedia como motor del estado de la aplicación), es el concepto de que cuando se envía información a través de una API RESTful, el documento recibido debe contener todo lo que el cliente necesita para analizar y utilizar los datos, es decir, no tiene que ponerse en contacto con ningún otro punto final que no se mencione explícitamente en el documento.

* [HATEOAS: ¿cuál es el principio que oculta este acrónimo?](https://www.ionos.mx/digitalguide/paginas-web/desarrollo-web/hateoas-que-es-y-cual-es-su-funcion-en-las-api-rest/)

## Especificación OpenAPI
La especificación OpenAPI (OAS) define una interfaz estándar e independiente del idioma para las API RESTful que permite tanto a humanos como a ordenadores descubrir y comprender las capacidades del servicio sin necesidad de acceder al código fuente, la documentación o mediante la inspección del tráfico de red. Cuando se define correctamente, un consumidor puede entender e interactuar con el servicio remoto con una cantidad mínima de lógica de implementación.

Una definición OpenAPI puede ser utilizada por herramientas de generación de documentación para mostrar la API, herramientas de generación de código para generar servidores y clientes en varios lenguajes de programación, herramientas de prueba y muchos otros casos de uso.

* [¿Qué es OpenAPI?](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-openapi/)

## Autenticación
El proceso de autenticación de la API valida la identidad del cliente que intenta establecer una conexión mediante un protocolo de autenticación. El protocolo envía las credenciales del cliente remoto que solicita la conexión al servidor de acceso remoto en texto plano o cifrado. El servidor sabe entonces si puede conceder acceso a ese cliente remoto o no.

Aquí está la lista de formas comunes de autenticación:

* Autenticación JWT
* Autenticación basada en token
* Autenticación basada en sesión
* Autenticación básica
* OAuth - Autorización abierta
* SSO - Inicio de sesión único

### JWT
JWT son las siglas de JSON Web Token, un estándar/metodología abierta de encriptación basada en tokens que se utiliza para transferir información de forma segura como un objeto JSON. Clientes y servidores utilizan JWT para compartir información de forma segura, conteniendo el JWT objetos JSON codificados y reclamaciones. Los tokens JWT están diseñados para ser compactos, seguros de usar dentro de URLs, e ideales para contextos SSO.

* [¿Qué es JWT (JSON Web Tokens)?](https://keepcoding.io/blog/que-es-jwt/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/3o4vEIkiRgE?si=79X1GfppUt_bkGWb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Autenticación básica
Dado el nombre de "autenticación básica", no debes confundir la autenticación básica con la autenticación estándar de nombre de usuario y contraseña. La autenticación básica es parte de la especificación HTTP, y los detalles se pueden encontrar en el RFC7617.

Como forma parte de las especificaciones HTTP, todos los navegadores tienen soporte nativo para la "Autenticación Básica HTTP".

* [Autenticación HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Authentication)

### Autenticación por token
La autenticación basada en token es un protocolo que permite a los usuarios verificar su identidad y recibir a cambio un token de acceso único. Durante el periodo de validez del token, los usuarios acceden al sitio web o aplicación para el que se ha emitido el token, en lugar de tener que volver a introducir las credenciales cada vez que regresan a la misma página web, aplicación o cualquier recurso protegido con ese mismo token.

Los tokens de autenticación funcionan como un billete sellado. El usuario conserva el acceso mientras el token siga siendo válido. Una vez que el usuario cierra la sesión o sale de una aplicación, el token queda invalidado.

La autenticación basada en tokens es diferente de las técnicas tradicionales de autenticación basadas en contraseñas o servidores. Los tokens ofrecen una segunda capa de seguridad, y los administradores tienen un control detallado de cada acción y transacción.

Sin embargo, el uso de tokens requiere algunos conocimientos de programación. La mayoría de los desarrolladores aprenden las técnicas rápidamente, pero hay una curva de aprendizaje.

* [¿Qué es la autenticación basada en token?](https://www.cloudflare.com/es-es/learning/access-management/token-based-authentication/)

### OAuth
OAuth significa Open Authorization y es un estándar abierto para la autorización. Funciona para autorizar dispositivos, API, servidores y aplicaciones utilizando tokens de acceso en lugar de credenciales de usuario, lo que se conoce como "acceso delegado seguro".

En su forma más simple, OAuth delega la autenticación en servicios como Facebook, Amazon o Twitter y autoriza a las aplicaciones de terceros a acceder a la cuenta del usuario sin tener que introducir su nombre de usuario y contraseña.

Se utiliza sobre todo para REST/API y sólo proporciona un alcance limitado de los datos de un usuario.

* [Una introducción a OAuth 2](https://www.digitalocean.com/community/tutorials/una-introduccion-a-oauth-2-es)
* [¿Qué es OAuth 2.0?](https://auth0.com/es/intro-to-iam/what-is-oauth-2)

<iframe width="560" height="315" src="https://www.youtube.com/embed/GeXbsMezj8s?si=0f3fBkYyBhy1y_fb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Autenticación basada en cookies
Las cookies son fragmentos de datos que se utilizan para identificar al usuario y sus preferencias. El navegador devuelve la cookie al servidor cada vez que se solicita la página. Las cookies específicas, como las cookies HTTP, se utilizan para realizar la autenticación basada en cookies para mantener la sesión de cada usuario.

* [HTTP cookies](https://developer.mozilla.org/es/docs/Web/HTTP/Cookies)

<iframe width="560" height="315" src="https://www.youtube.com/embed/DxYAcXiy-ak?si=rWqalHWGqx9hq7Hy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### OpenID
OpenID es un protocolo que utiliza los mecanismos de autorización y autenticación de OAuth 2.0 y que actualmente está ampliamente adoptado por muchos proveedores de identidad en Internet. Resuelve el problema de la necesidad de compartir la información personal del usuario entre muchos servicios web diferentes (por ejemplo, tiendas en línea, foros de debate, etc.).

* [¿Qué es OpenID Connect (OIDC)?](https://auth0.com/es/intro-to-iam/what-is-openid-connect-oidc)

<iframe width="560" height="315" src="https://www.youtube.com/embed/66Z6nFzLTos?si=pGX3OvgufPGsvSZe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Lenguaje de marcado de aserción de seguridad (SAML)
SAML son las siglas de Security Assertion Markup Language. Es un estándar basado en XML para el intercambio de datos de autenticación y autorización entre partes, en particular entre un proveedor de identidades (IdP) y un proveedor de servicios (SP). En un sistema basado en SAML, un usuario solicita acceso a un recurso protegido. El proveedor de servicios solicita al proveedor de identidades que autentique al usuario y confirme si se le concede el acceso al recurso.

#### Ventajas de SAML
Algunas de las ventajas de utilizar SAML son

* Inicio de sesión único (SSO): Los usuarios pueden iniciar sesión una vez en el IdP y acceder a varios proveedores de servicios sin necesidad de autenticarse de nuevo.
* Mayor seguridad: No es necesario que el proveedor de servicios almacene y gestione las contraseñas y credenciales de usuario, lo que reduce los posibles vectores de ataque.
* Mayor eficacia: Como los usuarios ya no necesitan mantener varios conjuntos de credenciales, la gestión del acceso se vuelve más sencilla tanto para el usuario como para los administradores del sistema.
* Interoperabilidad: SAML permite que una amplia gama de aplicaciones trabajen juntas, independientemente de la tecnología o plataforma subyacente.

#### Componentes de SAML
En la arquitectura SAML intervienen tres componentes principales:

1. Proveedor de identidades (IdP): La entidad que gestiona las identidades de los usuarios y los autentica proporcionando tokens de seguridad, también llamados aserciones.
1. Proveedor de servicios (SP): La entidad que proporciona un servicio (como una aplicación web o API) y confía en el proveedor de identidades para autenticar a los usuarios y conceder/denegar el acceso a los recursos.
1. Usuario/Principal: El usuario final que desea acceder al servicio prestado por el proveedor de servicios.

#### Flujo de trabajo SAML
El proceso de autenticación SAML consta de los siguientes pasos:

1. El usuario solicita al proveedor de servicios el acceso a un recurso protegido.
1. Si el usuario aún no está autenticado, el proveedor de servicios genera y envía una solicitud de autenticación SAML al proveedor de identidades.
1. El proveedor de identidad autentica al usuario (utilizando, por ejemplo, un nombre de usuario y una contraseña, autenticación multifactor u otro método).
1. El proveedor de identidad construye una respuesta SAML, que incluye detalles sobre el usuario y afirma si el usuario está autorizado a acceder al recurso solicitado.
1. La respuesta SAML se envía de vuelta al proveedor de servicios, normalmente a través del navegador web o el cliente API del usuario.
1. El proveedor de servicios procesa la respuesta SAML, extrae la información necesaria y concede o deniega el acceso al usuario basándose en la afirmación del proveedor de identidades.

Con SAML, puede agilizar la autenticación y autorización de usuarios en varias aplicaciones y sistemas, proporcionando una mejor experiencia de usuario y mejorando la seguridad general de su backend.

* [¿Qué es SAML?](https://www.microsoft.com/es-mx/security/business/security-101/what-is-security-assertion-markup-language-saml)
* [¿Qué es SAML? | Cómo funciona la autenticación SAML](https://www.cloudflare.com/es-es/learning/access-management/what-is-saml/)