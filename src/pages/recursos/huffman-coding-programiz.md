---
layout: '../../layouts/index.astro'
---

> Recurso original - [Programiz](https://www.programiz.com/dsa/huffman-coding)

# Codificación Huffman
La codificación Huffman es una técnica de compresión de datos que reduce su tamaño sin perder ninguno de los detalles. Fue desarrollada por primera vez por David Huffman.

La codificación Huffman es generalmente útil para comprimir datos en los que hay caracteres que ocurren con frecuencia.

¿Cómo funciona la codificación Huffman?
Supongamos que la cadena siguiente debe enviarse a través de una red.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-string.png" width="650" alt="Cadena inicial" />
    <figcaption><em>Cadena inicial</em></figcaption>
    <br/><br/>
</figure>

Cada carácter ocupa 8 bits. Hay un total de 15 caracteres en la cadena anterior. Por lo tanto, se requieren un total de `8 * 15 = 120 bits` para enviar esta cadena.

Usando la técnica de codificación Huffman, podemos comprimir la cadena a un tamaño menor.

La codificación Huffman primero crea un árbol utilizando las frecuencias de los caracteres y luego genera un código para cada carácter.

Una vez que los datos están codificados, deben ser decodificados. La decodificación se realiza usando el mismo árbol.

La codificación Huffman previene cualquier ambigüedad en el proceso de decodificación usando el concepto de **código prefijo**, es decir, un código asociado con un carácter no debe estar presente en el prefijo de ningún otro código. El árbol creado ayuda a mantener esta propiedad.

La codificación Huffman se realiza con los siguientes pasos.

1. Calcular la frecuencia de cada carácter en la cadena.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-character-frequency.png" width="650" alt="Frecuencia de la cadena" />
    <figcaption><em>Frecuencia de la cadena</em></figcaption>
    <br/><br/>
</figure>

2. Ordenar los caracteres en orden creciente de frecuencia. Estos se almacenan en una cola de prioridad ``Q``.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-character-frequency-sorted.png" width="650" alt="Personajes ordenados según la frecuencia" />
    <figcaption><em>Personajes ordenados según la frecuencia</em></figcaption>
    <br/><br/>
</figure>

3. Hacer que cada carácter único sea un nodo hoja.

4. Crear un nodo vacío ``z``. Asignar la frecuencia mínima al hijo izquierdo de z y asignar la segunda frecuencia mínima al hijo derecho de ``z``. Establecer el valor de ``z`` como la suma de las dos frecuencias mínimas anteriores.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-encoding-1.png" width="650" alt="Obteniendo la suma de los números más pequeños" />
    <figcaption><em>Obteniendo la suma de los números más pequeños</em></figcaption>
    <br/><br/>
</figure>

5. Remove these two minimum frequencies from ``Q`` and add the sum into the list of frequencies (* denote the internal nodes in the figure above).

6. Insert node ``z`` into the tree.

7. Repetir los pasos 3 a 5 para todos los caracteres.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-encoding-2.png" width="650" alt="Repetir los pasos 3 a 5 para todos los caracteres." />
    <figcaption><em>Repetir los pasos 3 a 5 para todos los caracteres.</em></figcaption>
    <br/><br/>
</figure>

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-encoding-3.png" width="650" alt="Repetir los pasos 3 a 5 para todos los caracteres." />
    <figcaption><em>Repetir los pasos 3 a 5 para todos los caracteres.</em></figcaption>
    <br/><br/>
</figure>

8. Para cada nodo no hoja, asigna 0 al borde izquierdo y 1 al borde derecho.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-encoding-4.png" width="650" alt="Asigna 0 al borde izquierdo y 1 al borde derecho." />
    <figcaption><em>Asigna 0 al borde izquierdo y 1 al borde derecho.</em></figcaption>
    <br/><br/>
</figure>

Para enviar la cadena anterior a través de una red, tenemos que enviar el árbol además del código comprimido anterior. El tamaño total se da en la tabla a continuación.

|Carácter|Frecuencia|Código|Tamaño|
|---|---|---|---|
|A|5|11|5*2=10|
|B|1|100|1*3=3|
|C|6|0|6*1=6|
|D|3|101|3*3=9|
|4 * 8 = 32 bits|15 bits| |28 bits|

Sin codificar, el tamaño total de la cadena era de 120 bits. Después de codificar, el tamaño se reduce a ``32 + 15 + 28 = 75``.

## Decodificar el código

Para decodificar el código, podemos tomar el código y recorrer el árbol para encontrar el carácter.

Si se debe decodificar 101, podemos recorrer desde la raíz como se muestra en la figura a continuación.

<figure>
    <img style="background-color: white;" src="https://cdn.programiz.com/sites/tutorial2program/files/hf-decoding.png" width="650" alt="Decodificar" />
    <figcaption><em>Decodificar</em></figcaption>
    <br/><br/>
</figure>

## Algoritmo de Codificación Huffman

```
Crear una cola de prioridad Q que consista en cada carácter único.
Ordenarlos en orden ascendente de sus frecuencias.
Para todos los caracteres únicos:
    Crear un nuevo nodo.
    Extraer el valor mínimo de Q y asignarlo al hijo izquierdo del nuevo nodo.
    Extraer el valor mínimo de Q y asignarlo al hijo derecho del nuevo nodo.
    Calcular la suma de estos dos valores mínimos y asignarlo al valor del nuevo nodo.
    Insertar este nuevo nodo en el árbol.
Devolver el nodo raíz.
```
<br/>

---
## Ejemplo en Python

```python
# Código Huffman en Python

string = 'BCAADDDCCACACAC'


# Creando nodos
class NodeTree(object):

    def __init__(self, left=None, right=None):
        self.left = left
        self.right = right

    def children(self):
        return (self.left, self.right)

    def nodes(self):
        return (self.left, self.right)

    def __str__(self):
        return '%s_%s' % (self.left, self.right)


# Función principal
def huffman_code_tree(node, left=True, binString=''):
    if type(node) is str:
        return {node: binString}
    (l, r) = node.children()
    d = dict()
    d.update(huffman_code_tree(l, True, binString + '0'))
    d.update(huffman_code_tree(r, False, binString + '1'))
    return d


# Calculando frecuencia
freq = {}
for c in string:
    if c in freq:
        freq[c] += 1
    else:
        freq[c] = 1

freq = sorted(freq.items(), key=lambda x: x[1], reverse=True)

nodes = freq

while len(nodes) > 1:
    (key1, c1) = nodes[-1]
    (key2, c2) = nodes[-2]
    nodes = nodes[:-2]
    node = NodeTree(key1, key2)
    nodes.append((node, c1 + c2))

    nodes = sorted(nodes, key=lambda x: x[1], reverse=True)

huffmanCode = huffman_code_tree(nodes[0][0])

print(' Char | Huffman code ')
print('----------------------')
for (char, frequency) in freq:
    print(' %-4r |%12s' % (char, huffmanCode[char]))
```
<br/>

---
## La complejidad de la Codificación Huffman

La complejidad temporal para codificar cada carácter único basado en su frecuencia es ``O(nlog n)``.

Extraer la frecuencia mínima de la cola de prioridad se realiza ``2*(n-1)`` veces y su complejidad es ``O(log n)``. Por lo tanto, la complejidad total es ``O(nlog n)``.

---
## Aplicaciones de la Codificación Huffman

* La codificación Huffman se utiliza en formatos de compresión convencionales como GZIP, BZIP2, PKZIP, etc.
* Para transmisiones de texto y fax.