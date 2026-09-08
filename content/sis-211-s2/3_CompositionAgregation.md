---
title: 3. Composición y Agregación en Java
description: Explicación detallada de la diferencia entre Composición y Agregación en Java.
---

### Explicación detallada

Tanto la **Composición** como la **Agregación** son tipos de relación **“tiene-un”** (has-a) entre clases.  
Ambas permiten construir objetos más complejos a partir de otros objetos, pero tienen una diferencia fundamental: **el ciclo de vida** de los objetos relacionados.

---

### 1. Agregación (Aggregation)

**Definición:**  
Es una relación “tiene-un” **débil** o **flexible**.  
El objeto contenido **puede existir independientemente** del objeto contenedor.

**Características:**
- Relación de tipo “todo-parte”, pero la parte puede vivir sola.
- Si se destruye el objeto contenedor, los objetos contenidos **no se destruyen**.
- Se representa en UML con un **rombo vacío** (◇).

**Ejemplo de la vida real:**  
- Un `Departamento` tiene `Empleados`.  
- Si se elimina el departamento, los empleados pueden seguir existiendo (pueden ser reasignados a otro departamento).

**Ejemplo en código:**

```java
public class Empleado {
    private String nombre;

    public Empleado(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
}

public class Departamento {
    private String nombre;
    private List<Empleado> empleados;   // Agregación

    public Departamento(String nombre) {
        this.nombre = nombre;
        this.empleados = new ArrayList<>();
    }

    public void agregarEmpleado(Empleado e) {
        empleados.add(e);
    }
}
```

Aquí el `Empleado` se crea **fuera** del `Departamento` y se le pasa. El empleado puede existir sin el departamento.

---

### 2. Composición (Composition)

**Definición:**  
Es una relación “tiene-un” **fuerte** o **estricta**.  
El objeto contenido **no puede existir sin** el objeto contenedor. Su ciclo de vida está completamente ligado.

**Características:**
- Relación de tipo “todo-parte” fuerte.
- Si se destruye el objeto contenedor, los objetos contenidos **también se destruyen**.
- Se representa en UML con un **rombo relleno** (◆).

**Ejemplo de la vida real:**  
- Un `Coche` tiene un `Motor`.  
- Si se destruye el coche, el motor también deja de tener sentido (normalmente se destruye con él).

**Ejemplo en código:**

```java
public class Motor {
    private String tipo;

    public Motor(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
}

public class Coche {
    private String marca;
    private Motor motor;          // Composición

    public Coche(String marca, String tipoMotor) {
        this.marca = marca;
        this.motor = new Motor(tipoMotor);   // Se crea DENTRO del Coche
    }

    public void mostrarInfo() {
        System.out.println("Coche: " + marca + " con motor " + motor.getTipo());
    }
}
```

El `Motor` se crea **dentro** del constructor de `Coche`. No existe fuera de él.

---

### Diferencia clave (resumen)

| Aspecto                  | Agregación                          | Composición                          |
|--------------------------|-------------------------------------|--------------------------------------|
| Fuerza de la relación    | Débil                               | Fuerte                               |
| Ciclo de vida            | Independiente                       | Dependiente                          |
| ¿Quién crea el objeto?   | Generalmente fuera                  | Generalmente dentro del contenedor   |
| Símbolo UML              | Rombo vacío ◇                       | Rombo relleno ◆                      |
| Ejemplo típico           | Universidad ↔ Estudiantes           | Casa ↔ Habitaciones                  |
|                          | Equipo ↔ Jugadores                  | Libro ↔ Páginas                      |

---

### Ejemplos completos y claros

#### Ejemplo 1: Agregación – Universidad y Estudiantes

```java
import java.util.ArrayList;
import java.util.List;

class Estudiante {
    private String nombre;

    public Estudiante(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
}

class Universidad {
    private String nombre;
    private List<Estudiante> estudiantes;   // Agregación

    public Universidad(String nombre) {
        this.nombre = nombre;
        this.estudiantes = new ArrayList<>();
    }

    public void matricular(Estudiante e) {
        estudiantes.add(e);
    }

    public void listarEstudiantes() {
        System.out.println("Estudiantes de " + nombre + ":");
        for (Estudiante e : estudiantes) {
            System.out.println("- " + e.getNombre());
        }
    }
}
```

#### Ejemplo 2: Composición – Casa y Habitaciones

```java
import java.util.ArrayList;
import java.util.List;

class Habitacion {
    private String tipo;

    public Habitacion(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
}

class Casa {
    private String direccion;
    private List<Habitacion> habitaciones;   // Composición

    public Casa(String direccion) {
        this.direccion = direccion;
        this.habitaciones = new ArrayList<>();
        
        // Las habitaciones se crean junto con la casa
        habitaciones.add(new Habitacion("Sala"));
        habitaciones.add(new Habitacion("Cocina"));
        habitaciones.add(new Habitacion("Dormitorio"));
    }

    public void mostrarHabitaciones() {
        System.out.println("Habitaciones de la casa en " + direccion + ":");
        for (Habitacion h : habitaciones) {
            System.out.println("- " + h.getTipo());
        }
    }
}
```

---

### Recopilación de ejercicios

#### Ejercicio 1 – Identificar el tipo de relación
Indica si las siguientes relaciones son **Agregación** o **Composición** y justifica:

1. Un `Equipo` tiene `Jugadores`
2. Un `Libro` tiene `Capítulos`
3. Un `Ordenador` tiene una `TarjetaGrafica`
4. Una `Empresa` tiene `Empleados`
5. Un `Pedido` tiene `LineasDePedido`

#### Ejercicio 2 – Agregación: Biblioteca y Libros
Crea:
- Clase `Libro` (titulo, autor)
- Clase `Biblioteca` que tenga una lista de libros (agregación)
- Métodos para agregar libros, buscar por título y mostrar todos los libros.

Los libros deben poder crearse independientemente de la biblioteca.

#### Ejercicio 3 – Composición: Computadora
Crea:
- Clase `Procesador` (marca, nucleos)
- Clase `MemoriaRAM` (capacidadGB)
- Clase `Computadora` que **componga** un procesador y una memoria RAM (se crean dentro del constructor de Computadora).

No debe ser posible crear un `Procesador` o `MemoriaRAM` fuera de la `Computadora`.

#### Ejercicio 4 – Mixto (Agregación + Composición)
Diseña un sistema de **Curso Online**:

- `Curso` tiene:
  - Una lista de `Estudiante` → **Agregación**
  - Una lista de `Modulo` → **Composición** (los módulos solo existen dentro del curso)

Implementa las clases necesarias y un método que muestre toda la información del curso.

#### Ejercicio 5 – Sistema de Hotel (más completo)
Crea un pequeño sistema con las siguientes relaciones:

- `Hotel` **compone** varias `Habitacion` (composición)
- `Hotel` **agrega** varios `Huesped` (agregación)
- Cada `Habitacion` puede estar ocupada por un `Huesped`

Implementa métodos para:
- Registrar un huésped
- Asignar una habitación a un huésped
- Mostrar el estado del hotel (habitaciones ocupadas y libres)
