---
rutas: [Seguridad_Web]
title: 'Conocimientos de seguridad web'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/Seguridad_Web/seguridad-web'
---

La seguridad web hace referencia a las medidas de protección adoptadas por los desarrolladores para proteger las aplicaciones web de las amenazas que podrían afectar a la empresa.

## Algoritmos hash

### MD5
MD5 (Message-Digest Algorithm 5) es una función hash cuyo uso se desaconseja actualmente debido a sus numerosas vulnerabilidades. Se sigue utilizando como suma de comprobación para verificar la integridad de los datos.

### Familia SHA
SHA (Secure Hash Algorithms) es una familia de funciones hash criptográficas creada por el NIST (National Institute of Standards and Technology). La familia incluye:

* SHA-0: Publicado en 1993, es el primer algoritmo de la familia. Poco después de su lanzamiento, dejó de utilizarse debido a un fallo importante no revelado.
* SHA-1: Creado para sustituir a SHA-0 y que se parece a MD5, este algoritmo se considera inseguro desde 2010.
* SHA-2: No es un algoritmo, sino un conjunto de ellos, siendo SHA-256 y SHA-512 los más populares. SHA-2 sigue siendo seguro y ampliamente utilizado.
* SHA-3: Nacido en una competición, es el miembro más nuevo de la familia. SHA-3 es muy seguro y no presenta los mismos defectos de diseño que sus hermanos.

### Scrypt
Scrypt (pronunciado "ess crypt") es una función de hash de contraseñas (como bcrypt). Está diseñado para utilizar mucho hardware, lo que dificulta los ataques de fuerza bruta. Scrypt se utiliza principalmente como algoritmo de prueba de trabajo para criptomonedas.

### Bcrypt
bcrypt es una función de hash de contraseñas, que ha demostrado ser fiable y segura desde su lanzamiento en 1999. Se ha implementado en los lenguajes de programación más utilizados.

## [Buenas prácticas de seguridad en APIs](/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis)

### HTTPS
HTTPS es una forma segura de enviar datos entre un servidor web y un navegador.

Una comunicación a través de HTTPS comienza con la fase de "handshake", durante la cual el servidor y el cliente acuerdan cómo encriptar la comunicación, en concreto eligen un algoritmo de encriptación y una clave secreta. Tras el apretón de manos, toda la comunicación entre el servidor y el cliente se cifrará utilizando el algoritmo y la clave acordados.

La fase de "apretón de manos" utiliza un tipo particular de criptografía, llamada criptografía asimétrica, para comunicarse de forma segura aunque el cliente y el servidor aún no hayan acordado una clave secreta. Después de la fase de apretón de manos, la comunicación HTTPS se cifra con criptografía simétrica, que es mucho más eficiente pero requiere que tanto el cliente como el servidor conozcan la clave secreta.

### Riesgos de seguridad OWASP
OWASP o Open Web Application Security Project es una comunidad en línea que produce artículos, metodologías, documentación, herramientas y tecnologías de libre acceso en el campo de la seguridad de las aplicaciones web.

### Cors
Cross-Origin Resource Sharing (CORS) es un mecanismo basado en cabeceras HTTP que permite a un servidor indicar cualquier origen (dominio, esquema o puerto) distinto del suyo desde el que un navegador debe permitir la carga de recursos.

### SSL/TLS
Secure Sockets Layer (SSL) y Transport Layer Security (TLS) son protocolos criptográficos utilizados para proporcionar seguridad en las comunicaciones por Internet. Estos protocolos cifran los datos que se transmiten a través de la red, de modo que cualquiera que intente interceptar los paquetes no podrá interpretar los datos. Una diferencia que es importante conocer es que SSL está ahora obsoleto debido a fallos de seguridad, y la mayoría de los navegadores web modernos ya no lo soportan. Pero TLS sigue siendo seguro y ampliamente soportado, por lo que es preferible utilizar TLS.

### Content Security Policy
Content Security Policy es un estándar de seguridad informática introducido para prevenir ataques de cross-site scripting, clickjacking y otros ataques de inyección de código resultantes de la ejecución de contenido malicioso en el contexto de una página web de confianza.

### Seguridad del servidor
Infórmate sobre la seguridad de tu servidor y cómo protegerlo. Estos son algunos de los temas que me vienen a la cabeza:

* Utiliza un cortafuegos: Una de las formas más eficaces de proteger un servidor es utilizar un cortafuegos para bloquear todo el tráfico entrante innecesario. Para ello, puedes utilizar iptables en sistemas Linux o un cortafuegos de hardware.
* Cierre los puertos innecesarios: Asegúrate de cerrar todos los puertos que no sean necesarios para que tu servidor funcione correctamente. Esto reducirá la superficie de ataque de tu servidor y dificultará el acceso a los atacantes.
* Utilice contraseñas seguras: Utilice contraseñas largas y complejas para todas sus cuentas, y considere la posibilidad de utilizar un gestor de contraseñas para almacenarlas de forma segura.
* Mantén tu sistema actualizado: Asegúrate de mantener tu sistema operativo y software actualizados con los últimos parches de seguridad. Esto ayudará a evitar que los atacantes se aprovechen de las vulnerabilidades.
* Utilice SSL/TLS para la comunicación: Utilice Secure Sockets Layer (SSL) o Transport Layer Security (TLS) para cifrar la comunicación entre su servidor y los dispositivos cliente. Esto le ayudará a protegerse contra los ataques de intermediario y otros tipos de ciberamenazas.
* Utilice un sistema de detección de intrusos (IDS): un IDS supervisa el tráfico de la red y le alerta de cualquier actividad sospechosa, lo que puede ayudarle a identificar y responder a tiempo a posibles amenazas.
* Activa la autenticación de dos factores: La autenticación de dos factores añade una capa adicional de seguridad a tus cuentas al requerir una segunda forma de autenticación, como un código enviado a tu teléfono, además de tu contraseña.

Aprenda también sobre OpenSSL y a crear su propia PKI, así como a gestionar certificados, renovaciones y autenticación mutua de clientes con certificados x509.