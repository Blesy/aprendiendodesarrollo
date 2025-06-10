---
rutas: [ComputerScience]
title: 'Grafos'

---

Los grafos en estructuras de datos son estructuras de datos no lineales compuestas por un número finito de nodos o vértices y las aristas que los conectan. Los grafos en estructuras de datos se utilizan para abordar problemas del mundo real en los que representan el área del problema como una red, como redes telefónicas, redes de circuitos y redes sociales.

## Búsqueda en Anchura
La búsqueda en anchura para un grafo es una forma de recorrer el grafo. Comienza en el nodo raíz y explora todos los nodos vecinos en la profundidad actual antes de pasar a los nodos en el siguiente nivel de profundidad.

* [Geeks for Geeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/HZ5YTanv5QE?si=MDOJR0uegkPHb0Ol&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Búsqueda en profundidad

La búsqueda en profundidad es un algoritmo de recorrido de grafos que comienza en un nodo raíz y explora lo más lejos posible a lo largo de cada rama antes de retroceder.

* [Geeks for Geeks](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/?ref=lbp)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Urx87-NMm6c?si=ElNRw4FyzgSE41Mg&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/UAIDAxof3kA?si=orcgZN8TGxggk_vq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_Yf8tneauJ8?si=AeGHiMKxjSkhAMTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Algoritmo de Bellman-Ford
El algoritmo de Bellman-Ford es un algoritmo de grafos que encuentra el camino más corto desde un vértice de origen hasta todos los demás vértices en un grafo. Es un algoritmo de programación dinámica que utiliza un enfoque de abajo hacia arriba para encontrar el camino más corto. Es similar al algoritmo de Dijkstra, pero puede manejar pesos negativos. También es similar al algoritmo de Floyd-Warshall, pero puede manejar pesos negativos y es más rápido que el algoritmo de Floyd-Warshall.

* [Wiki](https://es.wikipedia.org/wiki/Algoritmo_de_Bellman-Ford)

<iframe width="560" height="315" src="https://www.youtube.com/embed/9PHkk0UavIM?si=P-pZASJv5NwdC2_i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/obWXjtg0L64?si=2BDo_S1DjqQ1iazB&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Algoritmo de Dijkstra
El algoritmo de Dijkstra es un algoritmo de recorrido de grafos que encuentra el camino más corto entre dos nodos en un grafo. Es un algoritmo de grafos ponderados, lo que significa que cada arista en el grafo tiene un peso asociado. El algoritmo funciona encontrando el camino más corto desde el nodo inicial hasta todos los demás nodos en el grafo. Lo hace manteniendo un registro de la distancia desde el nodo inicial hasta cada nodo y luego eligiendo el nodo con la distancia más corta desde el nodo inicial para visitar a continuación. Luego actualiza la distancia de cada nodo desde el nodo inicial y repite el proceso hasta que todos los nodos hayan sido visitados.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4I7W5WUQQQI?si=CFw-oI-7ArePZKqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Algoritmo A*

A* es un algoritmo de recorrido de grafos que se utiliza para encontrar el camino más corto entre dos nodos en un grafo. Es una versión modificada del algoritmo de Dijkstra que utiliza heurísticas para encontrar el camino más corto. Se usa en la búsqueda de caminos y en el recorrido de grafos.

* [Wiki](https://es.wikipedia.org/wiki/Algoritmo_de_búsqueda_A*)

<iframe width="560" height="315" src="https://www.youtube.com/embed/1gszEk8rUS4?si=PleD361Lmqzw8Bej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/NWS-_VsMab4?si=lb9eeLWYZfFynGkN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>