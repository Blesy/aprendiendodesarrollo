---
rutas: [Seguridad_Web]
title: 'Buenas prácticas de seguridad de las APIs'
description: 'Buenas prácticas de seguridad de las APIs o Backend'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis'
---

## [Autenticación](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/autenticacion)
* [Evite la "autenticación básica", utilice lo estándar (por ejemplo, JWT)](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/autenticacion#evite-la-autenticación-básica)
* [No reinvente la rueda en los mecanismos de autenticación.](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/autenticacion#mecanismos-de-autenticación)
* [Utilizar las funciones "Max Retry" y jail en Login](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/autenticacion#max-retryjail-en-el-inicio-de-sesión)
* [Cifrar todos los datos sensibles](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/autenticacion#cifrado-de-datos-sensibles)

## [JWT](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/jwt)
* [Utilice un buen "JWT Secret" para dificultar los ataques de fuerza bruta](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/jwt#jwt-secret)
* [No extraer el algoritmo de la cabecera, utilize el backend](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/jwt#algoritmo-jwt)
* [Haga que la caducidad de los tokens (TTL, RTTL) sea lo más corta posible](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/jwt#caducidad-de-los-tokens)
* [Evitar el almacenamiento de datos sensibles en la carga JWT](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/jwt#carga-útil-jwt)
* [Mantenga la carga útil pequeña para reducir el tamaño del token JWT](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/jwt#tamaño-de-la-carga-jwt)

## [Control de acceso](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control)
* [Limitar solicitudes (throttling) para evitar DDoS/Fuerza Bruta](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control#limitar-peticiones)
* [Utilice HTTPS en el lado del servidor y cifrados seguros](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control#utilizar-https)
* [Utilice el encabezado HSTS con SSL para evitar ataques SSL Strip](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control#cabecera-hsts)
* [Desactivar listados de directorios](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control#listados-de-directorios)
* [Las API privadas solo serán accesibles desde direcciones IP seguras](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control#restringir-las-api-privadas)

## [OAuth](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/oauth)
* [Valide siempre "redirect_uri" en el lado del servidor](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/oauth#redirect_uri)
* [Evite "response_type=token" e intente cambiarlo por código](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/oauth#evite-el-flujo-de-concesión-implícito)
* [Utilice el parámetro "state" para evitar ataques CSRF](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/oauth#usar-parámetro-de-state)
* [Tener scope predeterminado y validar scope para cada aplicación](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/oauth#validar-scope)

## [Procesamiento](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing)
* [Compruebe si todos los endpoints están protegidos mediante autenticación para evitar un proceso de autenticación interrumpido](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#autenticación-de-endpoints)
* [Evite la identificación personal del usuario en las URL de recursos, ej. usuarios/242/pedidos](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#evitar-el-id-personal-en-las-url)
* [Prefiera usar UUID en lugar de ID autoincremental](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#elija-uuid)
* [Deshabilite entity parsing si está usando parsing XML para evitar ataques XXE](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#desactivar-el-análisis-sintáctico-de-entidades-en-xml)
* [Deshabilite entity expansion si usa XML, YML o cualquier otro idioma](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#desactivar-la-expansión-de-entidades)
* [Utilice CDN para cargar archivos](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#usar-cdn-para-subir-archivos)
* [Evite el HTTP blocking si utiliza una gran cantidad de datos](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#evitar-el-bloqueo-http)
* [Asegúrese de desactivar el modo de depuración en producción](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#desactivar-el-modo-de-depuración)
* [Utilice pilas no ejecutables cuando estén disponibles](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/processing#pilas-no-ejecutables)

## [Entrada](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada)
* [Utilice métodos HTTP adecuados para la operación](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada#métodos-http-adecuados)
* [Validar "content-type" en el encabezado de la solicitud](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada#validación-del-content-type)
* [Validar la entrada del usuario para evitar vulnerabilidades comunes](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada#validación-de-la-entrada-del-usuario)
* [Utilice el encabezado de Authorization estándar para datos confidenciales](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada#cabecera-de-authorization)
* [Utilice únicamente cifrado del lado del servidor](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada#evite-el-cifrado-del-lado-del-cliente)
* [Utilice una API Gateway para almacenamiento en caché, políticas de límite de velocidad, etc](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/entrada#api-gateway)

## [Salida](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida)
* [Enviar encabezado "X-Content-Type-Options: nosniff"](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida#x-content-type-options-nosniff)
* [Enviar encabezado "X-Frame-Options: deny"](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida#x-frame-options-deny)
* [Enviar encabezado "Content-Security-Policy: default-src 'none' "](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida#política-de-seguridad-de-contenidos)
* [Eliminar encabezados de huellas digitales (es decir, x-powered-by, etc.)](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida#eliminar-huellas-digitales)
* [Forzar "content-type" para su respuesta](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida#forzar-content-type)
* [Evite devolver datos confidenciales (credenciales, tokens, etc.)](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida#evite-devolver-datos-sensibles)
* [Devolver códigos de respuesta adecuados según la operación](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/salida#código-de-respuesta-adecuado)

## [CI & CD](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/ci-cd)
* [Audite su diseño e implementación con pruebas unitarias/integración](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/ci-cd#pruebas-unitariasintegración)
* [Utilice un proceso de revisión de código y no use la autoaprobación.](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/ci-cd#proceso-de-revisión-del-código)
* [Ejecute continuamente análisis de seguridad en su código](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/ci-cd#análisis-de-seguridad)
* [Verifique sus dependencias para detectar vulnerabilidades conocidas](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/ci-cd#dependencias)
* [Diseñar una solución rollback para implementaciones](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/ci-cd#rollback)

## [Monitorizacion](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/monitoring)
* [Utilice inicios de sesión centralizados para todos los servicios y componentes](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/monitoring#inicio-de-sesión-centralizado)
* [Utilice agents para monitorear todos los requests, responses y errores.](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/monitoring#monitorícelo-todo)
* [Utilice alertas para SMS, Slack, correo electrónico, Kibana, Cloudwatch, etc.](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/monitoring#configurar-alertas)
* [Asegúrese de no registrar ningún dato confidencial](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/monitoring#evite-registrar-datos-sensibles)
* [Utilice un sistema IDS y/o IPS para monitorear todo](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/monitoring#utilizar-sistemas-idsips)

## Otros Recursos Recomendados

* [HTTP API Development Tools - Ingles](https://github.com/yosriady/awesome-api-devtools?tab=readme-ov-file)
* [CS 253 - Ingles](https://www.youtube.com/watch?v=5JJrJGZ_LjM&list=PL1y1iaEtjSYiiSGVlL1cHsXN_kvJOOhu-)
* [MIT 6.858 - Ingles](https://www.youtube.com/watch?v=GqmQg-cszw4&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh)