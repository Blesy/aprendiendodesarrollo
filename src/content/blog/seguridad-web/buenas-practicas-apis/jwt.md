---
rutas: [Backend]
title: 'JWT'
description: 'Lorem ipsum dolor sit amet'
---

## JWT Secret
> Debe tener un buen JWT secret para protegerse contra el templado de tokens, así como para evitar ataques de fuerza bruta.

Una clave secreta fuerte debe ser generada aleatoriamente, larga y compleja, y debe ser almacenada de forma segura y rotada periódicamente.

## Algoritmo JWT
> No extraiga el algoritmo de la cabecera, utilice el backend.

Extraer el algoritmo de la cabecera de un token JWT puede suponer un riesgo de seguridad, ya que un atacante podría modificar el algoritmo y potencialmente obtener acceso no autorizado. Por lo tanto, se recomienda verificar el algoritmo en el backend en lugar de extraerlo de la cabecera. Esto puede ayudar a garantizar que el algoritmo utilizado para firmar y verificar el token es seguro y no ha sido manipulado.

## Caducidad de los tokens
> La caducidad de los tokens debe establecerse en un tiempo razonable para reducir la ventana de vulnerabilidad, limitar el impacto del robo de tokens y mejorar la seguridad general.

Establecer un tiempo de expiración de token (TTL, RTTL) corto es importante para la seguridad, ya que reduce la ventana de vulnerabilidad, limita el impacto del robo de tokens y mejora la seguridad general. Sin embargo, el tiempo de caducidad debe equilibrarse con la usabilidad, ya que establecerlo demasiado corto puede incomodar a los usuarios y reducir la productividad.

## Carga útil JWT
> Evite almacenar datos confidenciales en la carga JWT

Almacenar datos sensibles en la carga útil de un token JWT puede aumentar el riesgo de violación de datos y otros incidentes de seguridad. Si un atacante es capaz de obtener o manipular el token, podría potencialmente acceder a los datos sensibles almacenados en la carga útil.

## Tamaño de la carga JWT
> Evite almacenar grandes cargas útiles en los tokens JWT

Una carga útil más pequeña puede reducir la sobrecarga de la red, mejorar la velocidad de procesamiento y disminuir el riesgo de ataques dirigidos a sobrecargar el sistema.