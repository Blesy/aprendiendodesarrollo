---
rutas: [Backend]
title: 'Autenticación'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/Seguridad_Web/seguridad-web/buenas-practicas-apis/autenticacion'
---

## Evite la autenticación básica
> Debes evitar el uso de la autenticación básica y utilizar cualquier otra metodología de autenticación estándar, es decir, OAuth, JWT, etc.

La autenticación básica es un método simple para autenticar a un usuario transmitiendo sus credenciales en texto plano a través de la red. Este método es intrínsecamente inseguro y debe evitarse siempre que sea posible.

Hay varias razones por las que la autenticación básica debería evitarse y sustituirse por técnicas de autenticación más seguras:

* Falta de confidencialidad: La autenticación básica transmite las credenciales del usuario (nombre de usuario y contraseña) en texto plano a través de la red. Esto significa que cualquiera que intercepte el tráfico puede leer fácilmente las credenciales y acceder a la cuenta del usuario.

* Falta de integridad: La autenticación básica no proporciona ningún mecanismo para garantizar que los datos que se transmiten no han sido manipulados o modificados en tránsito. Esto significa que un atacante puede modificar el tráfico para acceder a la cuenta del usuario o realizar otras actividades maliciosas.

* Falta de solidez de la autenticación: La autenticación básica se basa únicamente en las credenciales del usuario para autenticarlo. Esto significa que si un atacante es capaz de obtener las credenciales del usuario (por ejemplo, mediante phishing o ingeniería social), puede acceder fácilmente a la cuenta del usuario.

* No es compatible con la autenticación multifactor: La autenticación básica no es compatible con la autenticación multifactor (MFA), que es una característica de seguridad crítica que proporciona una capa adicional de protección contra el acceso no autorizado.

Por el contrario, otras técnicas de autenticación como OAuth, OpenID Connect y SAML proporcionan métodos más seguros y robustos para la autenticación. Estos métodos suelen utilizar protocolos cifrados para proteger las credenciales del usuario, proporcionan mecanismos para verificar la integridad de los datos y admiten MFA. Como resultado, son mucho más seguros y fiables que la autenticación básica y deberían utilizarse siempre que sea posible.

## Mecanismos de autenticación
> Utiliza mecanismos de autenticación estándar para generar tokens, almacenar credenciales y autenticar usuarios.

Estos son algunos ejemplos de mecanismos de autenticación establecidos que puedes utilizar en lugar de reinventar la rueda:

* OAuth: OAuth es un estándar abierto ampliamente utilizado para la autorización que permite a los usuarios conceder a aplicaciones de terceros el acceso a sus recursos sin compartir sus credenciales. Los servicios web y las API suelen utilizarlo para permitir a los usuarios iniciar sesión con sus cuentas de redes sociales u otras cuentas de terceros.

* OpenID Connect: OpenID Connect es un protocolo de autenticación basado en OAuth 2.0 que permite a los usuarios autenticarse en varios sitios web y aplicaciones utilizando un único conjunto de credenciales. Se suele utilizar para el inicio de sesión único (SSO) en varios sitios web y aplicaciones.

* SAML: SAML (Security Assertion Markup Language) es un estándar basado en XML para el intercambio de datos de autenticación y autorización entre las partes. Se suele utilizar para el inicio de sesión único en varios dominios u organizaciones.

* Algoritmos hash para contraseñas: Los algoritmos de hashing de contraseñas como bcrypt y scrypt son ampliamente utilizados para almacenar y proteger de forma segura las contraseñas de los usuarios. Estos algoritmos garantizan que, aunque un atacante acceda a la base de datos de contraseñas, no podrá recuperarlas fácilmente.

* Autenticación de dos factores (2FA): 2FA es un mecanismo de autenticación que requiere que los usuarios proporcionen dos formas de identificación para acceder a sus cuentas. Normalmente se trata de algo que el usuario conoce (como una contraseña) y algo que tiene (como un dispositivo móvil o una clave de seguridad). Muchos servicios y aplicaciones ofrecen ahora 2FA como medida de seguridad adicional.

## Max Retry/Jail en el inicio de sesión
> Las funciones "Max Retry" y "jail" se utilizan habitualmente en los mecanismos de inicio de sesión para mejorar la seguridad y evitar ataques de fuerza bruta.

**Reintento máximo**: La función "Max Retry" limita el número de intentos de inicio de sesión que un usuario puede realizar en un periodo de tiempo determinado. Después de un cierto número de intentos fallidos, el usuario queda bloqueado durante un tiempo determinado, normalmente varios minutos u horas. Esto ayuda a evitar los ataques de fuerza bruta, en los que un atacante intenta adivinar la contraseña de un usuario realizando repetidos intentos de inicio de sesión. Al limitar el número de intentos, el sistema puede ralentizar o evitar estos ataques.

**Jail**: La función "jail" consiste en bloquear las direcciones IP o las cuentas de usuario que hayan superado el número máximo de intentos de inicio de sesión fallidos en un periodo de tiempo determinado. A las direcciones IP o cuentas de usuario bloqueadas se les impide intentar nuevos inicios de sesión durante un periodo de tiempo determinado, normalmente varios minutos u horas. Esto ayuda a prevenir ataques de fuerza bruta y también proporciona un mecanismo para evitar que usuarios malintencionados intenten acceder repetidamente a una cuenta o sistema.

## Cifrado de datos sensibles
> Cifrar datos sensibles es importante para protegerlos de accesos no autorizados, robos y explotación.

El cifrado es un proceso de conversión de datos de texto plano en un texto cifrado que sólo puede ser descifrado por alguien que tenga la clave de descifrado. Esto dificulta el acceso de los atacantes a los datos sensibles, incluso si consiguen interceptarlos o acceder a ellos sin autorización.

Para cifrar datos sensibles, puedes utilizar algoritmos de cifrado como `AES` o `RSA`, junto con un sólido sistema de gestión de claves que garantice que éstas se almacenan y gestionan de forma segura. Además, puedes implantar otras medidas de seguridad como controles de acceso, cortafuegos y sistemas de detección de intrusos para proteger aún más los datos sensibles.