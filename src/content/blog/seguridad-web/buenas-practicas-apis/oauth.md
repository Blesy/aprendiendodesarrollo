---
rutas: [Backend]
title: 'OAuth'
description: 'Lorem ipsum dolor sit amet'
---

## redirect_uri
> Valida `redirect_uri' en el lado del servidor para prevenir ataques de redirección abierta.

En OAuth, `redirect_uri` es un parámetro que especifica el URI (Uniform Resource Identifier) al que el servidor de autorización debe redirigir al usuario una vez completada la autenticación. El `redirect_uri` se utiliza a menudo en el flujo de OAuth para devolver un código de autorización o token de acceso a la aplicación cliente.

Es importante validar la `redirect_uri` en el lado del servidor para prevenir ataques como los ataques de redirección abierta. En un ataque de redirección abierta, un atacante puede modificar el parámetro `redirect_uri` para redirigir al usuario a un sitio web malicioso. Al validar la `redirect_uri` en el lado del servidor, puede asegurarse de que la URI de redirección es una URI válida y autorizada para la aplicación cliente.

La validación de la `redirect_uri` en el lado del servidor también puede evitar otros tipos de ataques, como los ataques de suplantación de identidad (phishing) o los ataques de falsificación de petición entre sitios (CSRF). Al verificar que la `redirect_uri` coincide con una lista predefinida de URI autorizadas, puede asegurarse de que el usuario es redirigido a un sitio de confianza una vez completada la autenticación.

## Evite el flujo de concesión implícito
> Evita `response_type=token' e intenta intercambiar por código en su lugar.

En OAuth, `response_type=token` es un método para obtener un token de acceso directamente del endpoint de autorización, sin usar un código de autorización. Este método se conoce como flujo de concesión implícito.

Sin embargo, se recomienda evitar el uso de `response_type=token` y utilizar en su lugar el flujo de concesión de código de autorización, en el que el cliente intercambia un código de autorización por un token de acceso. Esto se debe a que el flujo de concesión implícito puede ser menos seguro que el flujo de concesión de código de autorización.

El motivo es que el código de acceso se devuelve directamente al cliente en el fragmento de URL de la URI de redirección. Esto significa que el token de acceso podría ser interceptado o expuesto en el historial del navegador o en los registros del servidor. En cambio, con el flujo de concesión de código de autorización, el token de acceso se devuelve al cliente sólo después de que éste haya intercambiado el código de autorización por el token mediante una comunicación segura de servidor a servidor.

Por lo tanto, al utilizar el flujo de concesión de código de autorización en lugar del flujo de concesión implícito, puede ayudar a proteger el token de acceso de ser expuesto o interceptado por actores maliciosos.

## Usar parámetro de state
> Usar parámetro de state para evitar ataques CSRF

En OAuth, el parámetro de `state` se utiliza como medida de seguridad para evitar ataques CSRF (Cross-Site Request Forgery). Los ataques CSRF se producen cuando un sitio web o script malicioso envía una solicitud a un sitio web legítimo en nombre de un usuario que está autenticado en ese momento.

Para evitar los ataques CSRF, el parámetro de `state` se utiliza para almacenar un valor único generado por la aplicación cliente antes de iniciar la solicitud de autorización. Este valor se incluye en la solicitud de autorización y luego es verificado por el servidor de autorización cuando el usuario es redirigido de vuelta a la aplicación cliente. Si el valor de `state` de la respuesta de autorización coincide con el valor de `state` enviado por la aplicación cliente, la autorización se considera válida y el token de acceso se devuelve al cliente.

Al utilizar el parámetro de `state`, puede ayudar a evitar que agentes maliciosos intercepten o modifiquen la solicitud de autorización en tránsito, ya que el valor de `state` único sólo lo conocen la aplicación cliente y el servidor de autorización. Esto puede ayudar a garantizar la integridad y seguridad del flujo OAuth y proteger contra ataques CSRF.

## Validar scope
> Tener scope por defecto, y validar scope para cada aplicación

En OAuth, los scopes se utilizan para especificar los permisos y niveles de acceso que se conceden a las aplicaciones cliente cuando acceden a recursos protegidos en nombre de un usuario.

La mejor práctica de tener un scope predeterminado y validar el scope para cada aplicación es importante porque ayuda a garantizar que las aplicaciones cliente sólo tienen acceso a los recursos que necesitan, y que los usuarios sólo conceden los permisos necesarios a cada aplicación.

El scope predeterminado es un conjunto de permisos que se conceden a todas las aplicaciones cliente de forma predeterminada, a menos que el usuario especifique lo contrario. Al tener un scope predeterminado, puede asegurarse de que todas las aplicaciones estén sujetas a los mismos controles de acceso y seguridad básicos.

Además de tener un scope por defecto, también se recomienda validar el scope para cada aplicación. Esto significa que cuando un usuario concede acceso a una aplicación, el servidor debe comprobar que el scope solicitado es válido y apropiado para esa aplicación. Esto puede ayudar a evitar que aplicaciones maliciosas soliciten permisos excesivos o acceso no autorizado a los datos del usuario.

Teniendo un scope por defecto y validando el scope para cada aplicación, puedes ayudar a asegurar que el flujo OAuth es seguro y que las aplicaciones cliente sólo acceden a los recursos y permisos que requieren.