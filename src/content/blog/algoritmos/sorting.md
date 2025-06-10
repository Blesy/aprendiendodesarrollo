---
rutas: [ComputerScience]
title: 'Ordenamiento'
description: 'Lorem ipsum dolor sit amet'
---

Los algoritmos de ordenamiento se utilizan para ordenar datos en una colección. Ordenar es una tarea muy común en la ciencia de la computación y también es una pregunta muy frecuente en entrevistas. Hay muchas formas diferentes de ordenar datos, y diferentes algoritmos tienen ventajas y desventajas distintas.

Aprende acerca de los algoritmos de ordenamiento y conoce el mejor caso/peor caso, la complejidad promedio de cada uno. Además, aprende sobre la estabilidad de los algoritmos de ordenamiento.

## Bubble Sort

Bubble sort es un algoritmo simple de ordenamiento que pasa repetidamente por la lista, compara elementos adyacentes e intercambia aquellos que están en el orden incorrecto. Este proceso de pasar por la lista se repite hasta que la lista esté ordenada.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xli_FI7CuzA?si=YrX8wu6kt4TW2o5z&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pqZ04TT15PQ?si=iZD5SoUN4QOnPHVa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Selection Sort

Selection sort es un algoritmo de ordenamiento que selecciona el elemento más pequeño no ordenado en la lista y lo intercambia con el índice 0, luego encuentra el siguiente más pequeño y lo coloca en el índice 1, y así sucesivamente.

<iframe width="560" height="315" src="https://www.youtube.com/embed/g-PGLbMth_g?si=G4mb50RVlCitgwte&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Insertion Sort

Insertion sort es un algoritmo de ordenamiento simple que construye el arreglo final ordenado un elemento a la vez mediante comparaciones. Es mucho menos eficiente en listas grandes en comparación con algoritmos más avanzados como quicksort, heapsort o merge sort.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JU767SDMDvA?si=ZAyVutxjhV3_eRrk&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Heap Sort

Heap sort es un algoritmo de ordenamiento basado en comparaciones. Es similar a selection sort donde primero encontramos el elemento máximo y lo colocamos al final. Repetimos el mismo proceso para los elementos restantes.

* [Geeks for geeks](https://www.geeksforgeeks.org/heap-sort/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2DmK_H7IdTo?si=IjeYjZwvxOnEL8tm&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Quick Sort

Quick Sort es un algoritmo de divide y vencerás. Selecciona un elemento como pivote y particiona el arreglo dado alrededor del pivote seleccionado. Hay muchas versiones diferentes de QuickSort que eligen el pivote de diferentes maneras.

* [Geeks for geeks](https://www.geeksforgeeks.org/quick-sort/)
* [Python Example](https://github.com/jwasham/practice-python/blob/master/quick_sort/quick_sort.py)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hoixgm4-P4M?si=f06RrTlXvG-pxVVc&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Merge Sort

Merge sort es un algoritmo de divide y vencerás. Divide el arreglo de entrada en dos mitades, se llama a sí mismo para las dos mitades y luego fusiona las dos mitades ordenadas. La función merge() se utiliza para fusionar las dos mitades. La función merge(arr, l, m, r) es un proceso clave que asume que arr[l..m] y arr[m+1..r] están ordenados y fusiona los dos subarreglos ordenados en uno solo.

* [Geeks for geeks](https://www.geeksforgeeks.org/merge-sort/)
* [Geeks for geeks - Linked Lists](https://www.geeksforgeeks.org/merge-sort-for-linked-list/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/4VqmGXwpLqc?si=prmkE3OhCvUUsS9m&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>