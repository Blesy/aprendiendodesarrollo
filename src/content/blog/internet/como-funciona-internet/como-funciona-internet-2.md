---
rutas: [Internet]
title: '¿Cómo funciona el internet? - 2'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 08 2022'
link: '/blog/Internet/internet/como-funciona-internet/como-funciona-internet-2'
---

> [Recurso Original](http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm) (Version - 2002)

## Introducción
¿Cómo funciona Internet? ¡Buena pregunta! El crecimiento de Internet se ha vuelto explosivo y parece imposible escapar del bombardeo de www.com que se ve constantemente en la televisión, se escucha en la radio y se ve en revistas. Debido a que Internet se ha convertido en una parte tan grande de nuestras vidas, se necesita una comprensión sólida para utilizar esta nueva herramienta de la manera más efectiva.

Este documento técnico explica la infraestructura subyacente y las tecnologías que hacen que Internet funcione. No se adentra demasiado en profundidad, pero cubre lo suficiente de cada área para proporcionar una comprensión básica de los conceptos involucrados. Para cualquier pregunta sin respuesta, se proporciona una lista de recursos al final del documento. Se fomentan los comentarios, sugerencias, preguntas, etc., y pueden dirigirse al autor en rshuler@gobcg.com.

## ¿Por dónde empezar? Direcciones de Internet
Debido a que Internet es una red global de computadoras, cada computadora conectada a Internet debe tener una dirección única. Las direcciones de Internet tienen la forma nnn.nnn.nnn.nnn, donde nnn debe ser un número de 0 a 255. Esta dirección se conoce como una dirección IP. (IP significa Protocolo de Internet; más sobre esto más adelante).

La imagen a continuación ilustra dos computadoras conectadas a Internet; su computadora con la dirección IP 1.2.3.4 y otra computadora con la dirección IP 5.6.7.8. Internet se representa como un objeto abstracto en medio. (A medida que avanza este documento, la parte de Internet del Diagrama 1 se explicará y redibujará varias veces a medida que se revelen los detalles de Internet.)

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag1.gif" width="650" alt="Diagrama 1" >
    <figcaption><em>Diagrama 1</em></figcaption>
    <br><br>
</figure>

Si te conectas a Internet a través de un Proveedor de Servicios de Internet (ISP), generalmente se te asigna una dirección IP temporal durante la sesión de marcado. Si te conectas a Internet desde una red de área local (LAN), tu computadora puede tener una dirección IP permanente o puede obtener una temporal de un servidor DHCP (Protocolo de Configuración Dinámica de Host). En cualquier caso, si estás conectado a Internet, tu computadora tiene una dirección IP única.

| ¡Compruébalo! - El programa Ping |
| :--- |
| Si estás utilizando Microsoft Windows o una versión de Unix y tienes una conexión a Internet, hay un programa útil para ver si una computadora en Internet está activa. Se llama ping, probablemente después del sonido emitido por los antiguos sistemas de sonar de submarinos.1 Si estás utilizando Windows, abre una ventana de símbolo del sistema. Si estás utilizando una versión de Unix, accede a un símbolo del sistema. Escribe ping www.yahoo.com. El programa ping enviará un 'ping' (en realidad, un mensaje de solicitud de eco ICMP (Protocolo de Mensajes de Control de Internet)) a la computadora nombrada. La computadora pingeada responderá con una respuesta. El programa ping contará el tiempo transcurrido hasta que llegue la respuesta (si es que llega). Además, si ingresas un nombre de dominio (es decir, www.yahoo.com) en lugar de una dirección IP, ping resolverá el nombre de dominio y mostrará la dirección IP de la computadora. Más sobre nombres de dominio y resolución de direcciones más adelante. |

## Pilas de protocolos y paquetes
Entonces, tu computadora está conectada a Internet y tiene una dirección única. ¿Cómo 'habla' con otras computadoras conectadas a Internet? Un ejemplo debería servir aquí: Digamos que tu dirección IP es 1.2.3.4 y deseas enviar un mensaje a la computadora 5.6.7.8. El mensaje que deseas enviar es "¡Hola computadora 5.6.7.8!". Obviamente, el mensaje debe transmitirse sobre el tipo de cable que conecta tu computadora a Internet. Digamos que te has conectado a tu ISP desde casa y el mensaje debe transmitirse a través de la línea telefónica. Por lo tanto, el mensaje debe traducirse de texto alfabético a señales electrónicas, transmitirse por Internet y luego traducirse nuevamente a texto alfabético. ¿Cómo se logra esto? A través del uso de una pila de protocolos. Cada computadora necesita una para comunicarse en Internet y generalmente está integrada en el sistema operativo de la computadora (por ejemplo, Windows, Unix, etc.). La pila de protocolos utilizada en Internet se conoce como la pila de protocolos TCP/IP debido a los dos principales protocolos de comunicación utilizados. La pila TCP/IP se ve así:

| **Capa de protocolo** | **Comentarios** |
| ----------- | ----------- |
| Capa de protocolos de aplicación | Protocolos específicos para aplicaciones como WWW, correo electrónico, FTP, etc. |
| Capa de protocolo de control de transmisión  | TCP dirige paquetes a una aplicación específica en una computadora mediante un número de puerto. |
| Capa de protocolo de Internet  | IP dirige paquetes a una computadora específica mediante una dirección IP. |
| Capa de hardware | Convierte datos de paquetes binarios a señales de red y viceversa. (Por ejemplo, tarjeta de red Ethernet, módem para líneas telefónicas, etc.) |

Si siguiéramos el camino que tomó el mensaje "¡Hola computadora 5.6.7.8!" desde nuestra computadora hasta la computadora con la dirección IP 5.6.7.8, ocurriría algo así:

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag2.gif" width="650" alt="Diagrama 2" >
    <figcaption><em>Diagrama 2</em></figcaption>
    <br><br>
</figure>

1. El mensaje comenzaría en la parte superior de la pila de protocolos en tu computadora y avanzaría hacia abajo.
2. Si el mensaje que se va a enviar es largo, cada capa de la pila que atraviesa el mensaje puede dividirlo en trozos más pequeños de datos. Esto se debe a que los datos enviados por Internet (y la mayoría de las redes informáticas) se envían en trozos manejables. En Internet, estos trozos de datos se conocen como paquetes.
3. Los paquetes pasarían por la Capa de Aplicación y continuarían hacia la capa TCP. A cada paquete se le asigna un número de puerto. Los puertos se explicarán más adelante, pero basta decir que muchos programas pueden estar utilizando la pila TCP/IP y enviando mensajes. Necesitamos saber qué programa en la computadora de destino debe recibir el mensaje porque estará escuchando en un puerto específico.
4. Después de pasar por la capa TCP, los paquetes pasan a la capa IP. Aquí es donde cada paquete recibe su dirección de destino, 5.6.7.8.
5. Ahora que nuestros paquetes de mensaje tienen un número de puerto y una dirección IP, están listos para ser enviados por Internet. La capa de hardware se encarga de convertir nuestros paquetes que contienen el texto alfabético de nuestro mensaje en señales electrónicas y transmitirlos por la línea telefónica.
6. Al otro lado de la línea telefónica, tu ISP tiene una conexión directa a Internet. El enrutador del ISP examina la dirección de destino en cada paquete y determina a dónde enviarlo. A menudo, la próxima parada del paquete es otro enrutador. Más sobre enrutadores e infraestructura de Internet más adelante.
7. Eventualmente, los paquetes llegan a la computadora 5.6.7.8. Aquí, los paquetes comienzan en la parte inferior de la pila TCP/IP de la computadora de destino y avanzan hacia arriba.
8. A medida que los paquetes avanzan hacia arriba a través de la pila, se eliminan todos los datos de enrutamiento que agregó la pila de la computadora de envío (como la dirección IP y el número de puerto) de los paquetes.
9. Cuando los datos llegan a la parte superior de la pila, los paquetes se han vuelto a ensamblar en su forma original, "¡Hola computadora 5.6.7.8!"

## Infraestructura de red
Ahora sabes cómo los paquetes viajan de una computadora a otra a través de Internet. Pero, ¿qué hay en medio? ¿Qué compone realmente Internet? Veamos otro diagrama:

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag3.gif" width="650" alt="Diagrama 3" >
    <figcaption><em>Diagrama 3</em></figcaption>
    <br><br>
</figure>

Aquí vemos el Diagrama 1 dibujado de nuevo con más detalle. La conexión física a través de la red telefónica hasta el proveedor de servicios de Internet podría haber sido fácil de adivinar, pero más allá de eso podría necesitar alguna explicación.

El ISP mantiene un grupo de módems para sus clientes de conexión telefónica. Esto es gestionado por alguna forma de computadora (generalmente una dedicada) que controla el flujo de datos desde el grupo de módems hasta un enrutador de red principal o una línea dedicada. Este conjunto puede llamarse servidor de puerto, ya que 'sirve' el acceso a la red. También se recopila información de facturación y uso aquí generalmente.

Después de que tus paquetes atraviesan la red telefónica y el equipo local de tu ISP, se dirigen a la red principal de tu ISP o una red principal de la que tu ISP compra ancho de banda. Desde aquí, los paquetes generalmente viajarán a través de varios enrutadores y sobre varias redes principales, líneas dedicadas y otras redes hasta que encuentren su destino, la computadora con la dirección 5.6.7.8. Pero ¿no sería bueno si supiéramos la ruta exacta que toman nuestros paquetes por Internet? Resulta que hay una manera...

| **Verifica Esto - El Programa Traceroute** |
|-----|
| Si estás utilizando Microsoft Windows o alguna variante de Unix y tienes una conexión a Internet, aquí tienes otro programa útil de Internet. Este se llama traceroute y muestra la ruta que están tomando tus paquetes hacia un destino específico en Internet. Al igual que ping, debes usar traceroute desde un símbolo del sistema. En Windows, utiliza tracert www.yahoo.com. Desde un símbolo de Unix, escribe traceroute www.yahoo.com. Al igual que con ping, también puedes ingresar direcciones IP en lugar de nombres de dominio. Traceroute imprimirá una lista de todos los enrutadores, computadoras y cualquier otra entidad de Internet por la que deben pasar tus paquetes para llegar a su destino. |

Si usas traceroute, notarás que tus paquetes deben pasar por muchas cosas para llegar a su destino. La mayoría tiene nombres largos como sjc2-core1-h2-0-0.atlas.digex.net y fddi0-0.br4.SJC.globalcenter.net. Estos son enrutadores de Internet que deciden hacia dónde enviar tus paquetes. Se muestran varios enrutadores en el Diagrama 3, pero solo unos pocos. El Diagrama 3 pretende mostrar una estructura de red simple. Internet es mucho más complejo.

## Infraestructura de Internet

El backbone de Internet está compuesta por muchas redes grandes que se interconectan entre sí. Estas grandes redes se conocen como Proveedores de Servicios de Red o NSP (por sus siglas en inglés). Algunos de los grandes NSP son UUNet, CerfNet, IBM, BBN Planet, SprintNet, PSINet, entre otros. Estas redes intercambian tráfico de paquetes entre sí. Cada NSP debe conectarse a tres Puntos de Acceso a la Red o NAPs. En los NAP, el tráfico de paquetes puede pasar de la backbone de un NSP a la backbone de otro NSP. Los NSP también se conectan en Intercambios Metropolitanos o MAEs. Los MAE cumplen el mismo propósito que los NAP pero son de propiedad privada. Los NAP fueron los puntos originales de interconexión de Internet. Tanto los NAP como los MAE se conocen como Puntos de Intercambio de Internet o IXs. Los NSP también venden ancho de banda a redes más pequeñas, como ISPs y proveedores de ancho de banda más pequeños. A continuación, hay una imagen que muestra esta infraestructura jerárquica.

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag4.gif" width="650" alt="Diagrama 4" >
    <figcaption><em>Diagrama 4</em></figcaption>
    <br><br>
</figure>

Esta no es una representación real de una parte de Internet. El Diagrama 4 solo pretende demostrar cómo los NSP podrían interconectarse entre sí y con ISPs más pequeños. Ninguno de los componentes físicos de la red se muestra en el Diagrama 4 como en el Diagrama 3. Esto se debe a que la infraestructura de la columna vertebral de un solo NSP es un dibujo complejo por sí mismo. La mayoría de los NSP publican mapas de su infraestructura de red en sus sitios web y se pueden encontrar fácilmente. Dibujar un mapa real de Internet sería casi imposible debido a su tamaño, complejidad y estructura siempre cambiante.

## Jerarquía de enrutamiento de Internet

Entonces, ¿cómo encuentran su camino los paquetes a través de Internet? ¿Cada computadora conectada a Internet sabe dónde están las demás computadoras? ¿Los paquetes simplemente se 'transmiten' a cada computadora en Internet? La respuesta a ambas preguntas anteriores es 'no'. Ninguna computadora sabe dónde están las demás y los paquetes no se envían a cada computadora. La información utilizada para que los paquetes lleguen a sus destinos se encuentra en tablas de enrutamiento mantenidas por cada enrutador conectado a Internet.

**Los enrutadores son interruptores de paquetes**. Un enrutador suele estar conectado entre redes para enrutar paquetes entre ellas. Cada enrutador conoce sus subredes y qué direcciones IP utilizan. El enrutador generalmente no sabe qué direcciones IP están 'por encima' de él. Examine el Diagrama 5 a continuación. Los cuadros negros que conectan las columnas vertebrales son enrutadores. Las columnas vertebrales más grandes de NSP en la parte superior están conectadas en un NAP. Debajo de ellas hay varias subredes y debajo de ellas, más subredes. En la parte inferior hay dos redes de área local con computadoras conectadas.

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag5.gif" width="650" alt="Diagrama 5" >
    <figcaption><em>Diagrama 5</em></figcaption>
    <br><br>
</figure>

Cuando un paquete llega a un enrutador, el enrutador examina la dirección IP colocada allí por la capa de protocolo IP en la computadora de origen. El enrutador verifica su tabla de enrutamiento. Si se encuentra la red que contiene la dirección IP, el paquete se envía a esa red. Si no se encuentra la red que contiene la dirección IP, entonces el enrutador envía el paquete por una ruta predeterminada, generalmente hacia arriba en la jerarquía de la columna vertebral hasta el siguiente enrutador. Con suerte, el siguiente enrutador sabrá dónde enviar el paquete. Si no lo hace, nuevamente el paquete se enruta hacia arriba hasta que llega a una columna vertebral de NSP. Los enrutadores conectados a las columnas vertebrales de NSP tienen las tablas de enrutamiento más grandes y aquí el paquete se enrutará hacia la columna vertebral correcta, donde comenzará su viaje hacia 'abajo' a través de redes más pequeñas hasta que encuentre su destino.

## Nombres de dominio y resolución de direcciones

Pero, ¿qué pasa si no conoces la dirección IP de la computadora a la que quieres conectarte? ¿Qué pasa si necesitas acceder a un servidor web denominado www.otracomputadora.com? ¿Cómo sabe tu navegador web dónde vive esta computadora en Internet? La respuesta a todas estas preguntas es el Servicio de Nombres de Dominio o DNS. El DNS es una base de datos distribuida que realiza un seguimiento de los nombres de las computadoras y sus direcciones IP correspondientes en Internet.

Muchas computadoras conectadas a Internet alojan parte de la base de datos de DNS y el software que permite a otras acceder a ella. Estas computadoras se conocen como servidores DNS. Ningún servidor DNS contiene toda la base de datos; solo contienen una parte de ella. Si un servidor DNS no contiene el nombre de dominio solicitado por otra computadora, el servidor DNS redirige a la computadora solicitante a otro servidor DNS.

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag6.gif" width="650" alt="Diagrama 6" >
    <figcaption><em>Diagrama 6</em></figcaption>
    <br><br>
</figure>

El Servicio de Nombres de Dominio está estructurado jerárquicamente de manera similar a la jerarquía de enrutamiento IP. La computadora que solicita una resolución de nombre será redirigida hacia arriba en la jerarquía hasta que se encuentre un servidor DNS que pueda resolver el nombre de dominio solicitado. La Figura 6 ilustra una parte de la jerarquía. En la parte superior del árbol se encuentran las raíces del dominio. Algunos de los dominios más antiguos y comunes se encuentran cerca de la parte superior. Lo que no se muestra son las numerosas computadoras servidoras DNS en todo el mundo que forman el resto de la jerarquía.

Cuando se configura una conexión a Internet (por ejemplo, para una LAN o Conexión telefónica en Windows), generalmente se especifica un servidor DNS principal y uno o más servidores DNS secundarios como parte de la instalación. De esta manera, cualquier aplicación de Internet que necesite resolución de nombres de dominio podrá funcionar correctamente. Por ejemplo, cuando ingresas una dirección web en tu navegador, el navegador se conecta primero a tu servidor DNS principal. Después de obtener la dirección IP del nombre de dominio que ingresaste, el navegador se conecta al ordenador de destino y solicita la página web que deseabas.

| **Revísalo - Deshabilitar DNS en Windows** |
|---|
| Si estás utilizando Windows 95/NT y accedes a Internet, puedes ver tus servidores DNS y deshabilitarlos.
Si utilizas Dial-Up Networking:
Abre tu ventana de Dial-Up Networking (que se encuentra en el Explorador de Windows debajo de tu unidad de CD-ROM y encima de Network Neighborhood). Haz clic derecho en tu conexión a Internet y haz clic en Propiedades. Cerca de la parte inferior de la ventana de propiedades de la conexión, presiona el botón Configuración de TCP/IP...
Si tienes una conexión permanente a Internet:
Haz clic derecho en Network Neighborhood y haz clic en Propiedades. Haz clic en Propiedades de TCP/IP. Selecciona la pestaña Configuración de DNS en la parte superior.
Ahora deberías estar viendo las direcciones IP de tus servidores DNS. Aquí puedes deshabilitar DNS o configurar tus servidores DNS en 0.0.0.0. (Escribe primero las direcciones IP de tus servidores DNS. Probablemente tendrás que reiniciar Windows también). Ahora ingresa una dirección en tu navegador web. El navegador no podrá resolver el nombre de dominio y probablemente obtendrás un molesto cuadro de diálogo explicando que no se pudo encontrar un servidor DNS. Sin embargo, si ingresas la dirección IP correspondiente en lugar del nombre de dominio, el navegador podrá recuperar la página web deseada. (Usa ping para obtener la dirección IP antes de deshabilitar DNS). Otros sistemas operativos de Microsoft son similares. |

## Protocolos de Internet revisados
Como se insinuó anteriormente en la sección sobre pilas de protocolos, se puede suponer que existen muchos protocolos que se utilizan en Internet. Esto es cierto; hay muchos protocolos de comunicación necesarios para que funcione Internet. Estos incluyen los protocolos TCP e IP, protocolos de enrutamiento, protocolos de control de acceso al medio, protocolos a nivel de aplicación, etc. Las secciones siguientes describen algunos de los protocolos más importantes y comúnmente utilizados en Internet. Los protocolos de nivel superior se discuten primero, seguidos de los protocolos de nivel inferior.

## Protocolos de aplicación: HTTP y la World Wide Web
Uno de los servicios más comúnmente utilizados en Internet es la World Wide Web (WWW). El protocolo de aplicación que hace que funcione la web es el Protocolo de Transferencia de Hipertexto o HTTP. No confundir esto con el Lenguaje de Marcado de Hipertexto (HTML). HTML es el lenguaje utilizado para escribir páginas web. HTTP es el protocolo que utilizan los navegadores web y los servidores web para comunicarse entre sí a través de Internet. Es un protocolo de nivel de aplicación porque se encuentra en la parte superior de la capa TCP en la pila de protocolos y es utilizado por aplicaciones específicas para hablar entre sí. En este caso, las aplicaciones son navegadores web y servidores web.

HTTP es un protocolo basado en texto y sin conexión. Los clientes (navegadores web) envían solicitudes a los servidores web para obtener elementos web como páginas web e imágenes. Después de que el servidor satisface la solicitud, la conexión entre el cliente y el servidor a través de Internet se desconecta. Se debe realizar una nueva conexión para cada solicitud. La mayoría de los protocolos son orientados a la conexión. Esto significa que las dos computadoras que se comunican entre sí mantienen la conexión abierta a través de Internet. Sin embargo, HTTP no lo hace. Antes de que un cliente pueda hacer una solicitud HTTP, se debe realizar una nueva conexión al servidor.

Cuando escribes una URL en un navegador web, esto es lo que sucede:

1. Si la URL contiene un nombre de dominio, el navegador se conecta primero a un servidor de nombres de dominio y recupera la dirección IP correspondiente al servidor web.
1. El navegador web se conecta al servidor web y envía una solicitud HTTP (a través de la pila de protocolos) para la página web deseada.
1. El servidor web recibe la solicitud y verifica si la página deseada existe. Si la página existe, el servidor web la envía. Si el servidor no puede encontrar la página solicitada, enviará un mensaje de error HTTP 404. (404 significa 'Página no encontrada', como probablemente sepa cualquiera que haya navegado por la web).
1. El navegador web recibe la página y se cierra la conexión.
1. Luego, el navegador analiza la página y busca otros elementos necesarios para completar la página web. Estos suelen incluir imágenes, applets, etc.
1. Para cada elemento necesario, el navegador realiza conexiones adicionales y solicitudes HTTP al servidor para cada elemento.
1. Cuando el navegador ha terminado de cargar todas las imágenes, applets, etc., la página estará completamente cargada en la ventana del navegador.

| **Échale un vistazo - Usa tu cliente Telnet para recuperar una página web usando HTTP** |
|---|
| Telnet es un servicio de terminal remota utilizado en Internet. Su uso ha disminuido últimamente, pero es una herramienta muy útil para estudiar Internet. En Windows, busca el programa Telnet por defecto. Puede estar ubicado en el directorio de Windows con el nombre telnet.exe. Cuando lo abras, despliega el menú Terminal y selecciona Preferencias. En la ventana de preferencias, marca la opción Local Echo. (Esto es para que puedas ver tu solicitud HTTP cuando la escribas). Ahora despliega el menú Conexión y selecciona Sistema remoto. Ingresa www.google.com como Nombre de host y 80 como Puerto. (Los servidores web suelen escuchar en el puerto 80 de forma predeterminada). Presiona Conectar. Ahora escribe GET / HTTP/1.0 y presiona Enter dos veces. Esta es una solicitud HTTP simple a un servidor web para obtener su página principal. Deberías ver una página web que pasa rápidamente y luego debería aparecer un cuadro de diálogo que te dirá que se perdió la conexión. Si deseas guardar la página recuperada, activa el registro en el programa Telnet. Luego puedes navegar por la página web y ver el HTML que se utilizó para escribirla.|

La mayoría de los protocolos de Internet están especificados por documentos de Internet conocidos como Solicitudes de Comentarios o RFC. Los RFC se pueden encontrar en varios lugares de Internet. Consulta la sección de Recursos más abajo para obtener las URL correspondientes. La versión 1.0 de HTTP está especificada por el RFC 1945.

## Protocolos de aplicación: SMTP y correo electrónico
Aquí tienes otro servicio comúnmente utilizado en Internet: el correo electrónico. El correo electrónico utiliza un protocolo de nivel de aplicación llamado Simple Mail Transfer Protocol o SMTP. SMTP también es un protocolo basado en texto, pero a diferencia de HTTP, SMTP es orientado a la conexión. Además, SMTP es más complicado que HTTP, ya que tiene muchos más comandos y consideraciones.

Cuando abres tu cliente de correo electrónico para leer tus correos electrónicos, esto es lo que suele suceder:

1. El cliente de correo (Netscape Mail, Lotus Notes, Microsoft Outlook, etc.) abre una conexión con su servidor de correo predeterminado. La dirección IP o el nombre de dominio del servidor de correo generalmente se configuran al instalar el cliente de correo.
1. El servidor de correo siempre transmitirá el primer mensaje para identificarse.
1. El cliente enviará un comando SMTP HELO al que el servidor responderá con un mensaje 250 OK.
1. Dependiendo de si el cliente está revisando correos, enviando correos, etc., se enviarán al servidor los comandos SMTP apropiados, que responderá en consecuencia.
1. Esta transacción de solicitud/respuesta continuará hasta que el cliente envíe un comando SMTP QUIT. El servidor se despedirá y se cerrará la conexión.
1. A continuación, se muestra una 'conversación' simple entre un cliente SMTP y un servidor SMTP. R: denota mensajes enviados por el servidor (receptor) y S: denota mensajes enviados por el cliente (emisor).

```
Este ejemplo de SMTP muestra un correo enviado por Smith desde 
el host USC-ISIF a Jones, Green y Brown en el host BBN-UNIX. 
Aquí asumimos que el host USC-ISIF se comunica directamente 
con el host BBN-UNIX. El correo se acepta para Jones y Brown. 
Green no tiene un buzón en el host BBN-UNIX.

      -------------------------------------------------------------

         R: 220 BBN-UNIX.ARPA Simple Mail Transfer Service Ready
         S: HELO USC-ISIF.ARPA
         R: 250 BBN-UNIX.ARPA

         S: MAIL FROM:<Smith@USC-ISIF.ARPA>
         R: 250 OK

         S: RCPT TO:<Jones@BBN-UNIX.ARPA>
         R: 250 OK

         S: RCPT TO:<Green@BBN-UNIX.ARPA>
         R: 550 No such user here

         S: RCPT TO:<Brown@BBN-UNIX.ARPA>
         R: 250 OK

         S: DATA
         R: 354 Start mail input; end with <CRLF>.<CRLF>
         S: Blah blah blah...
         S: ...etc. etc. etc.
         S: .
         R: 250 OK

         S: QUIT
         R: 221 BBN-UNIX.ARPA Service closing transmission channel
```

Esta transacción SMTP está tomada del RFC 821, que especifica SMTP.

## Protocolo de control de transmisión

Bajo la capa de aplicación en la pila de protocolos se encuentra la capa de TCP. Cuando las aplicaciones abren una conexión a otra computadora en Internet, los mensajes que envían (utilizando un protocolo de capa de aplicación específico) se pasan hacia abajo en la pila hasta la capa de TCP. TCP es responsable de enrutar los protocolos de aplicación hacia la aplicación correcta en la computadora de destino. Para lograr esto, se utilizan números de puerto. Los puertos se pueden pensar como canales separados en cada computadora. Por ejemplo, puedes navegar por la web mientras lees el correo electrónico. Esto se debe a que estas dos aplicaciones (el navegador web y el cliente de correo) utilizan números de puerto diferentes. Cuando un paquete llega a una computadora y avanza por la pila de protocolos, la capa de TCP decide qué aplicación recibe el paquete según un número de puerto.

TCP funciona de la siguiente manera:

* Cuando la capa de TCP recibe los datos del protocolo de capa de aplicación desde arriba, los segmenta en "trozos" manejables y luego agrega un encabezado de TCP con información específica de TCP a cada "trozo". La información contenida en el encabezado de TCP incluye el número de puerto de la aplicación a la que se deben enviar los datos.
* Cuando la capa de TCP recibe un paquete de la capa de IP debajo de ella, la capa de TCP elimina los datos del encabezado de TCP del paquete, realiza alguna reconstrucción de datos si es necesario y luego envía los datos a la aplicación correcta utilizando el número de puerto tomado del encabezado de TCP.

Así es como TCP enruta los datos que se mueven a través de la pila de protocolos a la aplicación correcta.

TCP no es un protocolo textual. TCP es un servicio de flujo de bytes confiable y orientado a la conexión. Orientado a la conexión significa que dos aplicaciones que utilizan TCP deben establecer primero una conexión antes de intercambiar datos. TCP es confiable porque por cada paquete recibido, se envía un acuse de recibo al remitente para confirmar la entrega. TCP también incluye una suma de comprobación en su encabezado para verificar errores en los datos recibidos. El encabezado de TCP se ve así:

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag7.gif" width="650" alt="Diagrama 7" >
    <figcaption><em>Diagrama 7</em></figcaption>
    <br><br>
</figure>

Es importante destacar que no hay espacio para una dirección IP en el encabezado de TCP. Esto se debe a que TCP no sabe nada acerca de las direcciones IP. La tarea de TCP es llevar datos de nivel de aplicación de una aplicación a otra de manera confiable. La tarea de llevar datos de una computadora a otra es responsabilidad de IP.

| **Consultar - Números de puerto de Internet bien conocidos** | |
|---|---|
| A continuación se enumeran los números de puerto para algunos de los servicios de Internet más comúnmente utilizados.|
| FTP |	20/21 |
| Telnet | 23 |
| SMTP |	25 |
| HTTP |	80 |
| Quake III Arena	| 27960 |

## Protocolo de Internet
A diferencia de TCP, IP es un protocolo no confiable y sin conexión. A IP no le importa si un paquete llega o no a su destino. Tampoco IP conoce las conexiones ni los números de puerto. La tarea de IP es enviar y dirigir paquetes a otras computadoras. Los paquetes de IP son entidades independientes y pueden llegar desordenados o no llegar en absoluto. La tarea de TCP es asegurarse de que los paquetes lleguen y estén en el orden correcto. Casi lo único que IP tiene en común con TCP es la forma en que recibe datos y agrega su propia información de encabezado IP a los datos de TCP. El encabezado de IP se ve así:

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag8.gif" width="650" alt="Diagrama 8" >
    <figcaption><em>Diagrama 8</em></figcaption>
    <br><br>
</figure>

Arriba vemos las direcciones IP de las computadoras emisora y receptora en el encabezado de IP. A continuación, se muestra cómo se ve un paquete después de pasar por la capa de aplicación, la capa de TCP y la capa de IP. Los datos de la capa de aplicación se segmentan en la capa de TCP, se agrega el encabezado de TCP, el paquete continúa hasta la capa de IP, se agrega el encabezado de IP, y luego el paquete se transmite a través de Internet.

<figure>
    <img style="background-color: white;" src="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag9.gif" width="650" alt="Diagrama 9" >
    <figcaption><em>Diagrama 9</em></figcaption>
    <br><br>
</figure>

## Resumen
Ahora conoces cómo funciona Internet. Pero, ¿cuánto tiempo seguirá así? La versión de IP actualmente utilizada en Internet (versión 4) solo permite 232 direcciones. Eventualmente, no quedará ninguna dirección IP libre. ¿Sorprendido? No te preocupes. La versión 6 de IP se está probando en estos momentos en una red de investigación por un consorcio de instituciones de investigación y corporaciones. ¿Y después de eso? Quién sabe. Internet ha recorrido un largo camino desde su inicio como un proyecto de investigación del Departamento de Defensa. Realmente, nadie sabe qué será de Internet. Una cosa es segura, sin embargo. Internet unirá al mundo de una manera como ningún otro mecanismo lo ha hecho. La Era de la Información está en pleno apogeo y me alegra ser parte de ella.

Rus Shuler, 1998

Actualizaciones realizadas en 2002

## Recursos
Aquí tienes algunos enlaces interesantes asociados con algunos de los temas discutidos. (Espero que todos sigan funcionando. Todos se abren en una nueva ventana.)

http://www.ietf.org/ es la página principal del Internet Engineering Task Force. Este organismo es ampliamente responsable del desarrollo de los protocolos de Internet y similares.

http://www.internic.org/ es la organización responsable de administrar los nombres de dominio.

http://www.nexor.com/public/rfc/index/rfc.html es un excelente motor de búsqueda de RFC que resulta útil para encontrar cualquier RFC.

http://www.internetweather.com/ muestra mapas animados de la latencia de Internet.

http://routes.clubnet.net/iw/ es Internet Weather de ClubNET. Esta página muestra la pérdida de paquetes para varios proveedores.

http://navigators.com/isp.html es la Página de ISP de Russ Haynal. Este es un gran sitio con enlaces a la mayoría de los NSP y mapas de infraestructura de sus backbones.

## Bibliografía
Los siguientes libros son excelentes recursos y fueron de gran ayuda en la redacción de este documento. Creo que el libro de Stevens es la mejor referencia de TCP/IP y puede considerarse la biblia de Internet. El libro de Sheldon abarca un ámbito mucho más amplio y contiene una vasta cantidad de información sobre redes.

* TCP/IP Illustrated, Volumen 1, The Protocols.
W. Richard Stevens.
Addison-Wesley, Reading, Massachusetts. 1994.

* Encyclopedia of Networking.
Tom Sheldon.
Osbourne McGraw-Hill, Nueva York. 1998.

Aunque no se utilizaron para escribir este documento, aquí hay algunos otros buenos libros sobre los temas de Internet y redes:

* Firewalls and Internet Security; Repelling the Wiley Hacker.
William R. Cheswick, Steven M. Bellovin.
Addison-Wesley, Reading, Massachusetts. 1994.

* Data Communications, Computer Networks and Open Systems. Cuarta Edición.
Fred Halsall.
Addison-Wesley, Harlow, Inglaterra. 1996.

* Telecommunications: Protocols and Design.
John D. Spragins con Joseph L. Hammond y Krzysztof Pawlikowski.
Addison-Wesley, Reading, Massachusetts. 1992.