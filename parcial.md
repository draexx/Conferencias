# **EXAMEN PARCIAL: RECURSIVIDAD Y ÁRBOLES**

---

## **Sección 1: Preguntas Teóricas (30 puntos)**

### **Pregunta 1: Recursividad (10 puntos)**
**a)** Defina qué es un **caso base** en recursión y por qué es esencial.

**b)** Explique la diferencia entre **recursión directa** e **indirecta** con ejemplos.

**c)** ¿Cuándo es preferible usar recursión sobre iteración? Mencione 2 casos.

### **Pregunta 2: Árboles Binarios (10 puntos)**
**a)** Describa las **propiedades fundamentales** de un Árbol Binario de Búsqueda.

**b)** Explique los **tres casos de eliminación** en un ABB.

**c)** Compare **BFS vs DFS** en términos de complejidad espacial y aplicaciones.

### **Pregunta 3: Análisis de Código (10 puntos)**
Analice el siguiente código recursivo:
```python
def misterio(n):
    if n == 0:
        return 1
    else:
        return n * misterio(n-1)
```
**Preguntas:**
1. ¿Qué calcula esta función?
2. ¿Cuál es su complejidad temporal?
3. ¿Qué problema puede ocurrir para valores grandes de n?

---

## **Sección 2: Problemas Prácticos (70 puntos)**

### **Problema 1: Recursividad (35 puntos)**
Implementar una función recursiva `camino_labertinto(matriz, inicio, fin)` que encuentre un camino en un laberinto representado como matriz:

- `0`: camino libre
- `1`: pared
- Retornar lista de coordenadas del camino o lista vacía si no hay solución

**Matriz de ejemplo:**
```python
laberinto = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 0, 0]
]
inicio = (0, 0)
fin = (3, 3)
```

### **Problema 2: Árboles Binarios (35 puntos)**
Implementar una clase `ArbolExpresion` que construya y evalúe **expresiones aritméticas** usando árboles binarios.

**Requisitos:**
1. **Constructor:** `ArbolExpresion(expresion)` donde expresion es string como "(3 + 5) * 2"
2. **Método `construir_arbol()`:** Parsear expresión y construir árbol
3. **Método `evaluar()`:** Calcular resultado recursivamente
4. **Método `mostrar_prefija()`:** Mostrar expresión en notación prefija

**Operadores soportados:** `+, -, *, /`

**Ejemplo:**
```python
expresion = ArbolExpresion("(3 + 5) * 2")
print(expresion.evaluar())        # 16
print(expresion.mostrar_prefija()) # * + 3 5 2
```

**Estructura del árbol para "(3 + 5) * 2":**
```
      *
     / \
    +   2
   / \
  3   5
```
