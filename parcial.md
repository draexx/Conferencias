### **Problema 1: Lista Enlazada Simple (40 pts)**  
Implementa una función `eliminar_duplicados(lista)` que elimine nodos con valores repetidos en una lista simple.  
- **Entrada:** `1 -> 3 -> 3 -> 2 -> 1`  
- **Salida:** `1 -> 3 -> 2`  

```python  
class Nodo:  
    def __init__(self, dato):  
        self.dato = dato  
        self.siguiente = None  

def eliminar_duplicados(cabeza):  
    # Completa este código  
    pass  
```  

**Criterios:**  
- Correctitud (25 pts).  
- Eficiencia (15 pts): Usa un conjunto para O(n).  

---

#### **Problema 2: Lista Doblemente Enlazada (60 pts)**  
Crea una clase `ListaDoble` que incluya:  
1. **Métodos:**  
   - `insertar_ordenado(dato)`: Inserta en orden ascendente.  
   - `eliminar_rango(inicio, fin)`: Elimina nodos desde posición `inicio` hasta `fin`.  
2. **Propiedades:**  
   - `cabeza` y `cola` siempre actualizadas.  

**Ejemplo:**  
```python  
lista = ListaDoble()  
lista.insertar_ordenado(5)  
lista.insertar_ordenado(1)  
lista.insertar_ordenado(3)  
# Lista: 1 <-> 3 <-> 5  
lista.eliminar_rango(1, 2)  # Elimina posiciones 1 y 2  
# Lista resultante: 1  
```

**Criterios:**  
- Implementación correcta (40 pts).  
- Manejo de errores (20 pts): Rangos inválidos.  

---

### **Instrucciones Adicionales:**  
- **Permitido:** Uso de documentos y código base proporcionado.  
- **No permitido:** Copiar código de compañeros o internet.  
- **Formato de entrega:** Archivo Python (`examen.py`) con las implementaciones y comentarios explicativos.  

**¡Buena suerte!**  

--- 
