---
title: 2 Ejercicios de Clases Estándares Java
description: Ejercicios prácticos para profundizar en la creación de clases, instanciación de objetos y buenas prácticas en Java.
---


### Explicación breve (para dar en clase)

En Java, **todo** gira alrededor de clases y objetos.

- **Clase**: Es el **molde** o plantilla. Define qué atributos (datos) y métodos (comportamientos) tendrá un tipo de entidad.  
  Ejemplo: la clase `Persona` define que toda persona tiene nombre, edad y puede saludar.

- **Objeto**: Es una **instancia concreta** creada a partir de la clase.  
  Ejemplo: `Persona p1 = new Persona("Ana", 25);` → `p1` es un objeto.

- **Instancia**: Es el acto de crear un objeto con la palabra clave `new`.  
  Cada vez que usamos `new`, se crea una nueva instancia en memoria.

**Estándares importantes de Java (buenas prácticas)**:

| Elemento              | Convención                          | Ejemplo correcto          |
|-----------------------|-------------------------------------|---------------------------|
| Nombre de clase       | PascalCase                          | `Persona`, `CuentaBancaria` |
| Nombre de atributo/método | camelCase                        | `nombreCompleto`, `calcularEdad()` |
| Constantes            | UPPER_SNAKE_CASE                    | `MAX_VELOCIDAD`           |
| Paquetes              | minúsculas                          | `com.empresa.proyecto`    |
| Atributos             | Preferiblemente `private`           | Encapsulación básica      |
| Constructores         | Mismo nombre que la clase           | `public Persona(...)`     |
| Métodos get/set       | `getNombre()`, `setNombre()`        | Acceso controlado         |

Regla de oro: **Una clase = una responsabilidad clara**.

---

### Ejercicios para resolver en clase

**Objetivo de esta sesión**: Practicar la creación de clases, atributos, constructores, métodos e instanciación de objetos.

#### Ejercicio 1 – Clase básica `Persona` (Nivel: Fácil)
Crea una clase llamada `Persona` con:
- Atributos: `nombre` (String), `edad` (int)
- Un constructor que reciba nombre y edad
- Un método `saludar()` que imprima:  
  `"Hola, me llamo [nombre] y tengo [edad] años."`
- En el método `main`, crea **dos objetos** de tipo `Persona` e invoca el método `saludar()` en ambos.

---

#### Ejercicio 2 – Clase `Rectangulo` (Nivel: Fácil-Medio)
Crea una clase `Rectangulo` con:
- Atributos privados: `base` y `altura` (double)
- Constructor que reciba base y altura
- Métodos:
  - `calcularArea()` → devuelve el área
  - `calcularPerimetro()` → devuelve el perímetro
  - `mostrarInformacion()` → imprime base, altura, área y perímetro

En el `main`, crea un rectángulo de base 5.0 y altura 3.0 y muestra su información.

---

#### Ejercicio 3 – Clase `CuentaBancaria` (Nivel: Medio)
Crea una clase `CuentaBancaria` con:
- Atributos privados: `titular` (String), `saldo` (double)
- Constructor que reciba el titular e inicialice el saldo en 0
- Métodos:
  - `depositar(double cantidad)` → suma al saldo (solo si la cantidad es positiva)
  - `retirar(double cantidad)` → resta del saldo (solo si hay suficiente dinero)
  - `getSaldo()` → devuelve el saldo actual
  - `mostrarEstado()` → imprime titular y saldo

En el `main`:
1. Crea una cuenta para "Carlos"
2. Deposita 1500
3. Retira 300
4. Intenta retirar 2000 (debe fallar)
5. Muestra el estado final

---

#### Ejercicio 4 – Clase `Producto` + múltiples instancias (Nivel: Medio)
Crea una clase `Producto` con:
- Atributos: `nombre`, `precio`, `stock`
- Constructor
- Método `vender(int cantidad)` → reduce el stock si hay suficiente, si no imprime mensaje de error
- Método `reponer(int cantidad)` → aumenta el stock
- Método `mostrarInfo()`

En el `main` crea **tres productos** diferentes, realiza varias operaciones de venta y reposición, y muestra el estado de cada uno.

---

#### Ejercicio 5 – Clase `Estudiante` con validaciones (Nivel: Medio-Alto)
Crea una clase `Estudiante` con:
- Atributos privados: `nombre`, `nota` (double entre 0 y 10)
- Constructor
- Método `setNota(double nota)` → solo permite notas entre 0 y 10. Si está fuera de rango, no la cambia e imprime un mensaje de error.
- Método `estaAprobado()` → devuelve `true` si la nota es ≥ 6.0
- Método `mostrarResultado()` → imprime si el estudiante está aprobado o no, junto con su nota.

Crea varios estudiantes y prueba las validaciones.

---

### Sugerencia de estructura de una clase bien hecha

```java
public class NombreClase {
    // 1. Atributos (privados)
    private String atributo1;
    private int atributo2;

    // 2. Constructores
    public NombreClase(String atributo1, int atributo2) {
        this.atributo1 = atributo1;
        this.atributo2 = atributo2;
    }

    // 3. Métodos de acceso (getters y setters)
    public String getAtributo1() {
        return atributo1;
    }

    public void setAtributo1(String atributo1) {
        this.atributo1 = atributo1;
    }

    // 4. Métodos de comportamiento
    public void metodoDeComportamiento() {
        // lógica
    }
}
```