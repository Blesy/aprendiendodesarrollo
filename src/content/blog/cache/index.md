---
rutas: [Backend]
title: 'Cache'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Feb 18 2024'
updatedDate: 'Feb 18 2024'
link: '/blog/Cache/cache'
---

El cacheo es una técnica que consiste en almacenar datos o información de uso frecuente en una memoria local, durante un periodo de tiempo determinado. Así, la próxima vez que el cliente solicite la misma información, en lugar de recuperarla de la base de datos, la obtendrá de la memoria local. La principal ventaja del almacenamiento en caché es que mejora el rendimiento al reducir la carga de procesamiento.

## CDN (Content Delivery Network)
Un servicio de Red de Entrega de Contenidos (CDN) tiene como objetivo proporcionar una alta disponibilidad y mejorar el rendimiento de los sitios web. Esto se consigue con una entrega rápida de los activos y contenidos del sitio web, normalmente a través de puntos finales geográficamente más cercanos a las solicitudes de los clientes. Las CDN comerciales tradicionales (Amazon CloudFront, Akamai, CloudFlare y Fastly) ofrecen servidores en todo el mundo que pueden utilizarse para este fin. Servir activos y contenidos a través de una CDN reduce el ancho de banda en el alojamiento de sitios web, proporciona una capa adicional de almacenamiento en caché para reducir posibles interrupciones y también puede mejorar la seguridad del sitio web.

* [¿Qué es una CDN?](https://www.cloudflare.com/es-es/learning/cdn/what-is-a-cdn/)
* [Red de distribución de contenidos](https://es.wikipedia.org/wiki/Red_de_distribución_de_contenidos)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6JDpkH3fMUw?si=VzGrQIqvtvGtEBU9&cc_load_policy=1&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Server Side
El almacenamiento en caché del lado del servidor almacena temporalmente archivos y datos web en el servidor de origen para reutilizarlos más tarde.

Cuando el usuario solicita la página web por primera vez, el sitio web sigue el proceso normal de recuperación de datos del servidor y genera o construye la página web del sitio. Una vez realizada la solicitud y recibida la respuesta, el servidor copia la página web y la almacena en la caché.

La próxima vez que el usuario vuelva a visitar el sitio web, éste cargará la copia ya guardada o en caché de la página web, haciéndola así más rápida.

* [Cache web](https://www.hostinger.mx/tutoriales/cache-web)

### Redis
Redis es un almacén de estructuras de datos en memoria de código abierto (con licencia BSD) utilizado como base de datos, caché, agente de mensajes y motor de streaming. Redis proporciona estructuras de datos como cadenas, hashes, listas, conjuntos, conjuntos ordenados con consultas de rango, mapas de bits, hyperlogs, índices geoespaciales y flujos. Redis incorpora replicación, scripts Lua, desalojo LRU, transacciones y diferentes niveles de persistencia en disco, y proporciona alta disponibilidad a través de Redis Sentinel y particionamiento automático con Redis Cluster.

* [Web](https://redis.com/es/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/hRHM13uFpCE?si=Cjpg9OjBmvRSHcaX&cc_load_policy=1&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Memcached
Memcached es un sistema de caché de memoria distribuida de propósito general. Se utiliza a menudo para acelerar sitios web dinámicos basados en bases de datos, almacenando datos y objetos en la memoria RAM para reducir el número de veces que una fuente de datos externa (como una base de datos o API) debe ser leída. Memcached es un software gratuito y de código abierto, con licencia BSD revisada. Memcached funciona en sistemas operativos tipo Unix (Linux y macOS) y en Microsoft Windows. Depende de la biblioteca libevent.

Las API de Memcached proporcionan una tabla hash muy grande distribuida entre varias máquinas. Cuando la tabla está llena, las inserciones posteriores hacen que los datos más antiguos se purguen en el orden de uso menos reciente (LRU). Las aplicaciones que utilizan Memcached suelen almacenar las peticiones y adiciones en la RAM antes de recurrir a un almacén de respaldo más lento, como una base de datos.

Memcached no tiene un mecanismo interno para rastrear los fallos que puedan ocurrir. Sin embargo, algunas utilidades de terceros proporcionan esta funcionalidad.

* [Wiki](https://es.wikipedia.org/wiki/Memcached)
* [Memcached: explicación sencilla de la memoria en caché](https://www.ionos.mx/digitalguide/hosting/cuestiones-tecnicas/que-es-memcached/)

## Almacenamiento en caché del lado del cliente
El almacenamiento en caché del lado del cliente es el almacenamiento de datos de red en una caché local para su futura reutilización. Cuando una aplicación obtiene datos de la red, los almacena en una caché local. Una vez que un recurso ha sido almacenado en caché, el navegador utiliza la caché en futuras peticiones de ese recurso para aumentar el rendimiento.

* [HTTP caching](https://developer.mozilla.org/es/docs/Web/HTTP/Caching)