---
rutas: [Backend]
title: 'CI & CD'

---

## Pruebas unitarias/integración
> Audite su diseño e implementación con cobertura de pruebas unitarias/integración.

Las pruebas unitarias y de integración pueden ayudar a identificar vulnerabilidades en el código y el diseño de la API, como errores de validación de entrada, fallos de autenticación y autorización, y otros problemas relacionados con la seguridad. Mediante la realización de pruebas exhaustivas, los desarrolladores pueden garantizar que la API funciona según lo previsto y que es segura frente a ataques comunes, como ataques de inyección, secuencias de comandos en sitios cruzados y otros exploits. Unas pruebas adecuadas también pueden ayudar a identificar y resolver cuellos de botella en el rendimiento, mejorar la escalabilidad y la fiabilidad, y garantizar la calidad general de la API.

## Proceso de revisión del código
> Utilice un proceso de revisión del código y prescinda de la autoaprobación.

Contar con un buen proceso de revisión del código permite que otros ojos revisen el código e identifiquen posibles problemas de seguridad o vulnerabilidades. Un proceso de revisión del código implica que otros miembros del equipo revisen el código para asegurarse de que sigue las mejores prácticas y es seguro. Desestimar la autoaprobación significa que el desarrollador que escribió el código no debe ser el único responsable de aprobarlo para su publicación. Esto ayuda a detectar posibles errores o descuidos antes de que el código se despliegue, reduciendo el riesgo de brechas de seguridad u otros problemas.

## Análisis de seguridad
> Ejecute continuamente análisis de seguridad en su código.

El análisis continuo de la seguridad ayuda a identificar y corregir las vulnerabilidades de seguridad en el código antes de que puedan ser explotadas por los atacantes. Consiste en utilizar herramientas automatizadas y técnicas manuales para escanear el código en busca de posibles puntos débiles, como prácticas de codificación inseguras, errores de configuración y dependencias obsoletas. Al identificar y corregir las vulnerabilidades en una fase temprana del ciclo de desarrollo, puede reducirse significativamente el riesgo de violación de la seguridad o pérdida de datos, lo que mejora la seguridad general del sistema.

## Dependencias
> Compruebe si sus dependencias presentan vulnerabilidades conocidas y manténgalas actualizadas.

Las vulnerabilidades en bibliotecas y componentes de terceros pueden ser explotadas por atacantes para obtener acceso a su sistema o datos. Estas vulnerabilidades pueden introducirse a través de dependencias obsoletas o inseguras que no han sido actualizadas con los últimos parches de seguridad.

Si comprueba periódicamente si existen vulnerabilidades y mantiene sus dependencias actualizadas, puede asegurarse de que su API no es susceptible de sufrir riesgos de seguridad conocidos. Para ello puede utilizar herramientas o servicios automatizados que analicen su código base y le proporcionen informes sobre cualquier vulnerabilidad encontrada en sus dependencias. Al abordar estas vulnerabilidades con prontitud, puede reducir el riesgo de que su API se vea comprometida por atacantes.

## Rollback
> Diseñe una solución de reversión para las implantaciones.

A veces, el despliegue de una nueva versión de la API puede introducir errores o problemas inesperados que no se detectaron durante las pruebas. En estos casos, volver a la versión anterior de la API puede ayudar a mitigar el impacto del problema y restaurar el servicio a un estado funcional. Una solución de reversión bien diseñada puede ayudar a reducir el tiempo de inactividad y minimizar el impacto en los usuarios.