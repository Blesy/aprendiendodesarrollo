---
rutas: [ComputerScience]
title: 'Notación asintótica'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Feb 18 2024'
updatedDate: 'Feb 18 2024'
link: ''
---

La eficiencia de un algoritmo depende de la cantidad de tiempo, almacenamiento y otros recursos necesarios para ejecutarlo. La eficiencia se mide con la ayuda de notaciones asintóticas.

Un algoritmo puede no tener el mismo rendimiento para diferentes tipos de entradas. Con el aumento del tamaño de la entrada, el rendimiento cambiará.

El estudio del cambio en el rendimiento del algoritmo con el cambio en el orden del tamaño de la entrada se define como análisis asintótico.

* [Khan Academy](https://es.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)

<iframe width="560" height="315" src="https://www.youtube.com/embed/__vX2sjlpXU?si=6kNNViwmtbQpL-l6&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/iOq5kSKqeR4?si=WDuHkoxYHijzw15T&cc_lang_pref=es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/HcDV5MGGrRE?si=EJaMf0X9rYYb-nGy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Notación Big O

La Notación Big O describe qué tan bien escala un algoritmo con el tamaño de la entrada. Se utiliza para describir el peor escenario de un algoritmo y para analizar su eficiencia en términos de tiempo o espacio. La Notación Big O se utiliza para comparar algoritmos y determinar cuál es más eficiente.

En términos más específicos, la Notación Big O proporciona una cota superior asintótica para la complejidad temporal o espacial de un algoritmo en el peor de los casos. Por ejemplo, si un algoritmo tiene una complejidad temporal O(n), significa que el tiempo de ejecución del algoritmo crece de manera lineal con el tamaño de la entrada.

Usar la Notación Big O permite a los desarrolladores entender cómo se comportará un algoritmo a medida que la entrada crece hacia el infinito y facilita la comparación de algoritmos en términos de eficiencia en el peor de los casos.

* [Medium](https://medium.com/nowports-tech/introducción-a-big-o-notation-95ecca8bd866)
* [Khan Academy](https://es.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation)

<iframe width="560" height="315" src="https://www.youtube.com/embed/UPDjjuz1Hkw?si=mmpZbum0EcrFaCuh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Notación Big Theta

Mientras que la Notación Big O se refiere al límite superior de una función, la Notación Big Theta se refiere al límite exacto de una función. La Notación Big Theta se utiliza para describir la tasa de crecimiento exacta de una función y se denota por el símbolo Θ.

* [Khan Academy](https://es.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)

<iframe width="560" height="315" src="https://www.youtube.com/embed/YTNDenBezfE?si=ybyMypVVi0zGhqxL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Notación Big Omega

La notación Big Omega se utiliza para describir el límite inferior de una función. Es opuesta a la notación Big O. Mientras que Big O se utiliza para describir el peor escenario de un algoritmo, Big Omega se utiliza para describir el mejor escenario de un algoritmo.

* [Khan Academy](https://es.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-omega-notation)

## Tiempos de ejecución comunes

A continuación se presenta la lista de complejidades temporales comunes de algoritmos. Las complejidades están enumeradas en orden ascendente de su complejidad.

* O(1) - Constante
* O(log n) - Logarítmica
* O(n) - Lineal
* O(n log n) - Linealítmica
* O(n^2) - Cuadrática
* O(n^3) - Cúbica
* O(2^n) - Exponencial
* O(n!) - Factorial
* O(n^k) - Polinómica

### Constante

Los algoritmos de tiempo constante son los más simples y eficientes. Son algoritmos que siempre tardan la misma cantidad de tiempo en ejecutarse, independientemente del tamaño de la entrada. Este es el escenario ideal para un algoritmo y es el objetivo de todos los algoritmos.

### Logarítmica

Los algoritmos de complejidad logarítmica son los segundos más rápidos. Son más rápidos que los algoritmos lineales, pero más lentos que los algoritmos constantes.

### Lineal

Los algoritmos lineales son aquellos cuyo tiempo de ejecución es directamente proporcional al tamaño de la entrada. Esto significa que el tiempo de ejecución del algoritmo aumentará linealmente con el tamaño de la entrada. Por ejemplo, si el tamaño de la entrada es 10, el tiempo de ejecución será 10 veces el tiempo de ejecución del algoritmo cuando el tamaño de la entrada es 1. Si el tamaño de la entrada es 100, el tiempo de ejecución será 100 veces el tiempo de ejecución del algoritmo cuando el tamaño de la entrada es 1.

### Exponencial

Los algoritmos exponenciales son aquellos que crecen a una tasa de 2^n. Esto significa que por cada entrada adicional, el algoritmo tomará el doble de tiempo en ejecutarse. La siguiente función es un ejemplo de un algoritmo exponencial:

```python
    def exponential(n):
        if n == 0:
            return 1
        return 2 * exponential(n - 1)
```

Como puedes ver, el tiempo de ejecución del algoritmo crece exponencialmente. Por cada entrada adicional, el algoritmo tomará el doble de tiempo en ejecutarse. Este tipo de crecimiento puede llevar a un rendimiento significativamente más lento a medida que aumenta el tamaño de la entrada.

### Factorial

Los algoritmos con complejidad factorial tienen un tiempo de ejecución de O(n!). Este es el peor escenario para un algoritmo. Los algoritmos con complejidad factorial son muy ineficientes y deben evitarse siempre que sea posible. La complejidad factorial implica un crecimiento extremadamente rápido del tiempo de ejecución a medida que aumenta el tamaño de la entrada, lo que hace que estos algoritmos sean impracticables para conjuntos de datos grandes.

```python
    def factorial(n):
        if n == 0:
            return 1
        else:
            return n * factorial(n-1)
```

### Polinómica

Los algoritmos polinómicos son aquellos cuyo tiempo de ejecución es una función polinómica del tamaño de la entrada. Esto significa que el tiempo de ejecución es una función de la forma n^k, donde k es una constante. Por ejemplo, el tiempo de ejecución del siguiente algoritmo es n^2:

```python
    def polynomial_algorithm(n):
        for i in range(n):
            for j in range(n):
                print(i, j)
```