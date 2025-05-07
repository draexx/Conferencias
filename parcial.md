# Examen Parcial: Estructuras de Datos en Python (Usando Clases Pila y Cola)

**Instrucciones:**
- Implemente las soluciones usando clases para Pila y Cola
- Cada ejercicio vale 50 puntos
- El examen cubre: arreglos, pilas y colas (sin colas de doble fin)
- Escriba código limpio y bien estructurado
- Tiempo estimado: 90 minutos

---

## Clases Base (Proporcionadas)

```python
class Pila:
    def __init__(self):
        self.items = []
    
    def esta_vacia(self):
        return len(self.items) == 0
    
    def apilar(self, item):
        self.items.append(item)
    
    def desapilar(self):
        if not self.esta_vacia():
            return self.items.pop()
        return None
    
    def ver_tope(self):
        if not self.esta_vacia():
            return self.items[-1]
        return None
    
    def tamano(self):
        return len(self.items)

class Cola:
    def __init__(self):
        self.items = []
    
    def esta_vacia(self):
        return len(self.items) == 0
    
    def encolar(self, item):
        self.items.insert(0, item)
    
    def desencolar(self):
        if not self.esta_vacia():
            return self.items.pop()
        return None
    
    def frente(self):
        if not self.esta_vacia():
            return self.items[-1]
        return None
    
    def tamano(self):
        return len(self.items)
```

---

## Ejercicio 1: Calculadora RPN con Pila (50 pts)

Implemente una calculadora Notación Polaca Inversa (RPN) usando la clase Pila. Debe:

1. Procesar expresiones en formato RPN (ej: "3 4 + 5 *")
2. Usar una pila para almacenar operandos
3. Soporte las operaciones: +, -, *, /
4. Mostrar el resultado final

```python
def calculadora_rpn(expresion):
    pila = Pila()
    # COMPLETAR implementación
    pass

# Ejemplos de uso
print(calculadora_rpn("3 4 +"))          # Debe devolver 7
print(calculadora_rpn("5 3 4 + *"))      # Debe devolver 35
print(calculadora_rpn("10 6 9 3 + - *")) # Debe devolver -60
```

---

## Ejercicio 2: Sistema de Turnos con Cola (50 pts)

Implemente un sistema de gestión de turnos para un hospital usando la clase Cola. Debe:

1. Registrar nuevos pacientes (nombre y especialidad)
2. Atender al siguiente paciente de una especialidad
3. Mostrar cuántos pacientes hay en espera por especialidad
4. Verificar si hay pacientes en espera para una especialidad

```python
class SistemaTurnos:
    def __init__(self):
        self.colas = {
            'cardiologia': Cola(),
            'pediatria': Cola(),
            'traumatologia': Cola()
        }
    
    def registrar_paciente(self, nombre, especialidad):
        # COMPLETAR
        pass
    
    def atender_paciente(self, especialidad):
        # COMPLETAR
        pass
    
    def pacientes_en_espera(self, especialidad):
        # COMPLETAR
        pass
    
    def hay_pacientes(self, especialidad):
        # COMPLETAR
        pass

# Ejemplo de uso
sistema = SistemaTurnos()
sistema.registrar_paciente("Juan Pérez", "cardiologia")
sistema.registrar_paciente("María Gómez", "pediatria")
sistema.registrar_paciente("Carlos Ruiz", "cardiologia")

print("Pacientes en cardiología:", sistema.pacientes_en_espera("cardiologia"))
print("Atendiendo a:", sistema.atender_paciente("cardiologia"))
print("Quedan en cardiología:", sistema.pacientes_en_espera("cardiologia"))
```

---

**Nota:** No se permite modificar las clases Pila y Cola proporcionadas.
