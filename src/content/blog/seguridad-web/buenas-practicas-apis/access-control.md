---
rutas: [Backend]
title: 'Control de acceso'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Feb 18 2024'
updatedDate: 'Feb 18 2024'
link: '/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/access-control'
---

## Limitar peticiones
> Limite las peticiones (throttling) para evitar ataques DDoS / Fuerza Bruta.

Limitar las peticiones mediante throttling es importante para evitar ataques DDoS y de fuerza bruta. Los ataques DDoS saturan el servidor con demasiadas peticiones, mientras que los ataques de fuerza bruta intentan adivinar las credenciales del usuario a través de múltiples intentos de inicio de sesión.

El estrangulamiento limita el número de peticiones que pueden enviarse en un periodo de tiempo determinado, lo que dificulta a los atacantes llevar a cabo este tipo de ataques. Esto puede proteger el sistema de ser desbordado y puede evitar que los atacantes obtengan acceso no autorizado.

## Utilizar HTTPs
> Utilice HTTPS en el lado del servidor y cifrados seguros

Asegúrese de que su servidor API utiliza HTTPS en lugar de HTTP. HTTPS es un protocolo seguro que cifra los datos en tránsito, dificultando que los atacantes intercepten y lean información sensible. Para implantar HTTPS, debe obtener un certificado SSL/TLS y configurar su servidor para que utilice HTTPS.

HTTPS utiliza cifrados para encriptar los datos en tránsito. Es importante elegir cifrados seguros que sean resistentes a los ataques y ofrezcan un cifrado fuerte. Algunos cifrados seguros habituales son AES, ChaCha20 y ECDHE para el intercambio de claves. Asegúrese de desactivar los cifrados débiles y obsoletos, como RC4 y TLS 1.0/1.1, que son vulnerables a los ataques.

## Cabecera HSTS
> Utilice el encabezado HSTS con SSL para evitar ataques SSL Strip.

SSL Strip es un tipo de ataque en el que un atacante intercepta el tráfico entre un cliente y un servidor que se supone que está protegido por cifrado SSL/TLS, y reduce la conexión a una conexión HTTP de texto sin formato (no cifrada). Este tipo de ataque puede pasar desapercibido para el usuario porque el atacante es capaz de redirigirlo a un sitio web de apariencia similar que también utiliza HTTP en lugar de HTTPS.

En un ataque SSL strip, el atacante establece una posición man-in-the-middle (MITM) entre el cliente y el servidor. Cuando el cliente inicia una conexión con el servidor, el atacante intercepta el tráfico SSL/TLS y elimina o sustituye los enlaces HTTPS por enlaces HTTP. Esto puede engañar al usuario haciéndole creer que está utilizando una conexión segura cuando, en realidad, no lo está. El atacante puede entonces monitorizar y manipular los datos transmitidos entre el cliente y el servidor.

La cabecera HSTS es una cabecera de seguridad que indica a los navegadores que sólo pueden acceder al sitio a través de HTTPS. Esta cabecera se utiliza para evitar ataques SSL Strip. Es una buena práctica utilizar la cabecera HSTS con SSL.

## Listados de directorios
> Desactivar los listados de directorios

Los listados de directorios son una característica de los servidores web que permite a los usuarios ver el contenido de un directorio en un servidor. Por defecto, los servidores web suelen tener activados los listados de directorios, lo que significa que cualquiera que tenga acceso al servidor puede ver todos los archivos y directorios de una carpeta determinada.

Desactivar los listados de directorios es importante para la seguridad de la API porque impide que los atacantes accedan a archivos y directorios confidenciales del servidor. Si los listados de directorios están activados y un atacante consigue acceder al servidor, podrá ver y descargar fácilmente cualquier archivo que no esté debidamente protegido. Deshabilitando los listados de directorios, puede asegurarse de que sólo los usuarios autorizados pueden acceder a los archivos y directorios del servidor.

## Restringir las API privadas
> Las API privadas sólo deben ser accesibles desde IPs de listas seguras

Las APIs privadas sólo deben ser accesibles desde IPs seguras para garantizar que sólo los usuarios o sistemas autorizados puedan acceder a la API. Al restringir el acceso a direcciones IP específicas, puede evitar el acceso no autorizado desde redes externas o actores maliciosos. Esto puede ayudar a proteger datos sensibles y prevenir ataques como DDoS o ataques de fuerza bruta. Además, restringir el acceso a IP de listas seguras puede ayudar a garantizar la fiabilidad y el rendimiento de la API al evitar el tráfico excesivo de fuentes no autorizadas.