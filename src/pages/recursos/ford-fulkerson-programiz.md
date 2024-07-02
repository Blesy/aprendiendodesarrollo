---
layout: '../../layouts/index.astro'
---

> Recurso original - [Programiz](https://www.programiz.com/dsa/ford-fulkerson-algorithm)

# Algoritmo Ford-Fulkerson

El algoritmo de Ford-Fulkerson es un enfoque voraz para calcular el flujo máximo posible en una red o un grafo.

Se usa el término "red de flujo" para describir una red de vértices y aristas con una fuente (S) y un sumidero (T). Cada vértice, excepto S y T, puede recibir y enviar una cantidad igual de material a través de él. S solo puede enviar y T solo puede recibir material.

Podemos visualizar la comprensión del algoritmo utilizando un flujo de líquido dentro de una red de tuberías de diferentes capacidades. Cada tubería tiene una cierta capacidad de líquido que puede transferir en un instante. Para este algoritmo, vamos a encontrar cuánta cantidad de líquido puede fluir desde la fuente hasta el sumidero en un instante usando la red.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network.png" width="650" alt="Gráfico de red de flujo" />
    <figcaption><em>Gráfico de red de flujo</em></figcaption>
    <br/><br/>
</figure>

## Terminología Utilizada

#### Camino Aumentante
Es el camino disponible en una red de flujo.

#### Grafo Residual
Representa la red de flujo que tiene flujo adicional posible.

#### Capacidad Residual
Es la capacidad de la arista después de restar el flujo de la capacidad máxima.

---

## ¿Cómo funciona el algoritmo de Ford-Fulkerson?

El algoritmo sigue los siguientes pasos:

1. Inicializar el flujo en todas las aristas a 0.
2. Mientras haya un camino aumentante entre la fuente y el sumidero, agregar este camino al flujo.
3. Actualizar el grafo residual.

```
También podemos considerar el camino inverso si es necesario, porque si no los consideramos, puede 
que nunca encontremos un flujo máximo.
```

Los conceptos anteriores se pueden entender con el siguiente ejemplo.

---

## Ejemplo de Ford-Fulkerson

Al inicio, el flujo de todas las aristas es 0.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network-example.png" width="650" alt="Ejemplo de gráfico de red de flujo" />
    <figcaption><em>Ejemplo de gráfico de red de flujo</em></figcaption>
    <br/><br/>
</figure>

1. Seleccionemos un camino arbitrario de S a T. En este paso, seleccionamos el camino `S-A-B-T`.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network-1.png" width="650" alt="Encuentra un camino" />
    <figcaption><em>Encuentra un camino</em></figcaption>
    <br/><br/>
</figure>

La capacidad mínima entre las tres aristas es 2 (``B-T``). Basándonos en esto, actualizaremos el ``flujo/capacidad`` para cada arista del camino.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network-1-update.png" width="650" alt="Actualizar las capacidades" />
    <figcaption><em>Actualizar las capacidades</em></figcaption>
    <br/><br/>
</figure>

2. Selecciona otro camino ``S-D-C-T``. La capacidad mínima entre estas aristas es 3 (``S-D``).

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network-2.png" width="650" alt="Encuentra el siguiente camino" />
    <figcaption><em>Encuentra el siguiente camino</em></figcaption>
    <br/><br/>
</figure>

Actualiza las capacidades según esto.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network-2-update.png" width="650" alt="Actualizar las capacidades" />
    <figcaption><em>Actualizar las capacidades</em></figcaption>
    <br/><br/>
</figure>

3. Ahora, consideremos también el camino inverso ``B-D``. Seleccionando el camino ``S-A-B-D-C-T``. La capacidad residual mínima entre las aristas es 1 (``D-C``).

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network-3.png" width="650" alt="Encuentra el siguiente camino" />
    <figcaption><em>Encuentra el siguiente camino</em></figcaption>
    <br/><br/>
</figure>

Actualizando las capacidades.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/flow-network-3-update.png" width="650" alt="Actualizar las capacidades" />
    <figcaption><em>Actualizar las capacidades</em></figcaption>
    <br/><br/>
</figure>

Se consideran por separado las capacidades para los caminos directos e inversos.

4. Sumando todos los flujos = 2 + 3 + 1 = 6, que es el flujo máximo posible en la red de flujo.
<br/><br/>

``Nota que si la capacidad de cualquier arista está llena, entonces ese camino no se puede utilizar.``

---

### Aplicaciones del algoritmo de Ford-Fulkerson:
- Distribución de tuberías de agua
- Problema de emparejamiento bipartito
- Circulación con demandas