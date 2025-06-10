---
rutas: [ComputerScience]
title: 'Cache'
description: 'Lorem ipsum dolor sit amet'
---

Los algoritmos de caché se utilizan para gestionar la memoria caché de una computadora. La memoria caché es una pequeña cantidad de memoria que se utiliza para almacenar datos que se acceden con frecuencia. Esto permite que la computadora acceda a los datos más rápidamente que si tuviera que ir a la memoria principal. Los algoritmos de caché se utilizan para determinar qué datos deben almacenarse en la memoria caché y qué datos deben eliminarse de la memoria caché.

## Cache LRU

La caché LRU (Least Recently Used) es una caché que expulsa primero el elemento menos recientemente utilizado. Es un algoritmo de caché muy común y se utiliza en muchos lugares, como en la caché del navegador, la caché de la base de datos y la caché del sistema operativo.

<iframe width="560" height="315" src="https://www.youtube.com/embed/R5ON3iwx78M?si=4K8epnhZV2eKwshJ&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Cache LFU

La Caché LFU (Least Frequently Used) es una estructura de datos que almacena pares clave-valor. Tiene un tamaño fijo y, cuando está lleno, elimina el par clave-valor menos utilizado con menos frecuencia. Es una variante de la Caché LRU y se utiliza en muchas aplicaciones, como el almacenamiento en caché de páginas web, el almacenamiento en caché de consultas de bases de datos y el almacenamiento en caché de imágenes.

* [Geeks fo geeks](https://www.geeksforgeeks.org/least-frequently-used-lfu-cache-implementation/)

## Cache MFU

La Caché MFU (Most Frequently Used) es otro algoritmo de caché. La diferencia es que, en lugar de eliminar la entrada menos utilizada con menos frecuencia, la Caché MFU elimina la entrada más utilizada con mayor frecuencia.

> ### Comparación de algoritmos de reemplazo de páginas MFU y LRU
> [^1] Normalmente, he visto que se utiliza una caché MFU como la principal, respaldada por una caché secundaria que utiliza un algoritmo de reemplazo LRU (una caché MRU). La idea es que las cosas más recientemente utilizadas permanecerán en la caché principal, brindando un acceso muy rápido. Esto reduce la "rotación" que se ve en una caché MRU cuando se utilizan muy frecuentemente un pequeño número de elementos. También evita que esos elementos comúnmente utilizados sean expulsados de la caché solo porque no se han utilizado durante un tiempo.
>
> MFU funciona bien si tienes un pequeño número de elementos que se consultan con mucha frecuencia y un gran número de elementos que se consultan raramente. Un usuario de escritorio típico, por ejemplo, puede tener tres o cuatro programas que utiliza muchas veces al día y cientos de programas que utiliza muy raramente. Si quisieras mejorar su experiencia almacenando en caché en memoria programas para que se inicien rápidamente, es mejor almacenar en caché aquellos que usa con mucha frecuencia.
>
> Por otro lado, si tienes un gran número de elementos que se consultan esencialmente de manera aleatoria, o algunos elementos se acceden ligeramente más a menudo, o los elementos se consultan típicamente en lotes (es decir, el elemento A se accede muchas veces en un corto período y luego no se accede en absoluto), entonces es probable que un esquema de expulsión de caché LRU sea mejor.

> ### ¿Por qué la caché utiliza el algoritmo utilizado más recientemente (MRU) como política de desalojo?
>
> [^2] Imagina que estás buscando los detalles de los autobuses a medida que llegan a una parada de autobús, según su número de autobús (o cualquier identificador que uses).
>
> Es razonable pensar que si acabas de ver un autobús número 36, es menos probable que veas otro inmediatamente que ver uno de los otros autobuses que paran allí.
>
> Es solo un ejemplo, pero la idea es más general: en algunos casos, haber "visto algo recientemente" es un buen indicador de que es improbable que veas lo mismo nuevamente pronto.

[^1]:[1](https://stackoverflow.com/questions/13597246/comparison-of-mfu-and-lru-page-replacement-algorithms)
[^2]:[2](https://stackoverflow.com/questions/5088128/why-does-cache-use-most-recently-used-mru-algorithm-as-evict-policy)