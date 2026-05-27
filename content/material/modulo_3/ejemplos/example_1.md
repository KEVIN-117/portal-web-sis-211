---
title: "Ejemplo 1"
description: "Un mini sistema de análisis de estudiantes utilizando Java Streams."
tags: [
    "java",
    "streams",
    "poo",
    "java-17"
]
draft: false
---

# Introducción a Streams en Java

## Contexto

Una universidad tecnológica está creando un programa especial de becas para estudiantes interesados en Inteligencia Artificial y Ciencia de Datos.

El departamento académico necesita un pequeño sistema que permita analizar rápidamente información de estudiantes usando Java Streams.

Como desarrolladores junior del equipo, deberán construir un módulo capaz de:

* filtrar estudiantes,
* obtener estadísticas,
* transformar datos,
* y generar reportes rápidos.

El objetivo principal del laboratorio es comprender cómo funcionan los Streams en Java aplicando Programación Orientada a Objetos.

---

# Objetivos del laboratorio

Al finalizar el laboratorio, el estudiante será capaz de:

* Crear clases orientadas a objetos.
* Trabajar con `ArrayList`.
* Utilizar `stream()`.
* Aplicar operaciones:

  * `filter`
  * `map`
  * `count`
  * `collect`
* Comprender el flujo funcional de procesamiento de datos.

---

# Escenario del problema

La universidad cuenta con una lista de estudiantes candidatos a becas.

Cada estudiante posee:

* nombre,
* promedio académico,
* edad.

El sistema deberá analizar estos datos mediante Streams.

---

# Paso 1 — Crear la clase `Estudiante`

## Explicación conceptual

Antes de usar Streams necesitamos trabajar con objetos reales.

Crearemos una clase llamada `Estudiante` que representará cada registro del sistema.

## Código base

```java
public class Estudiante {

    private String nombre;
    private double promedio;
    private int edad;

    public Estudiante(String nombre, double promedio, int edad) {
        this.nombre = nombre;
        this.promedio = promedio;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPromedio() {
        return promedio;
    }

    public int getEdad() {
        return edad;
    }

    @Override
    public String toString() {
        return nombre + " | Promedio: " + promedio + " | Edad: " + edad;
    }
}
```

---

# Paso 2 — Crear la lista de estudiantes

## Explicación conceptual

Los Streams trabajan normalmente sobre colecciones.

En este caso utilizaremos un `ArrayList`.

## Código

```java
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Estudiante> estudiantes = new ArrayList<>();

        estudiantes.add(new Estudiante("Ana", 91.5, 20));
        estudiantes.add(new Estudiante("Luis", 67.0, 24));
        estudiantes.add(new Estudiante("Maria", 88.0, 19));
        estudiantes.add(new Estudiante("Carlos", 72.5, 22));
        estudiantes.add(new Estudiante("Elena", 95.0, 21));

    }
}
```

---

# Paso 3 — Primer contacto con Streams

## Explicación conceptual

Un Stream es un flujo de datos que permite procesar colecciones de manera funcional.

La idea principal es:

```text
Colección → Stream → Operaciones → Resultado
```

## Sintaxis básica

```java
estudiantes.stream()
```

Esto convierte la lista en un flujo de procesamiento.

---

# Paso 4 — Filtrar estudiantes con promedio mayor a 80

## Problema

La universidad desea identificar estudiantes sobresalientes.

## Explicación conceptual

La operación `filter()` permite conservar únicamente los elementos que cumplen una condición.

## Código

```java
System.out.println("=== ESTUDIANTES DESTACADOS ===");

estudiantes.stream()
        .filter(estudiante -> estudiante.getPromedio() > 80)
        .forEach(System.out::println);
```

---

# Explicación línea por línea

## 1. Crear stream

```java
estudiantes.stream()
```

Convierte la lista en un flujo.

---

## 2. Filtrar

```java
.filter(estudiante -> estudiante.getPromedio() > 80)
```

La lambda:

```java
estudiante -> condicion
```

significa:

> “Por cada estudiante, evaluar si cumple la condición”.

---

## 3. Mostrar resultados

```java
.forEach(System.out::println);
```

Recorre e imprime cada elemento resultante.

---

# Resultado esperado

```text
=== ESTUDIANTES DESTACADOS ===
Ana | Promedio: 91.5 | Edad: 20
Maria | Promedio: 88.0 | Edad: 19
Elena | Promedio: 95.0 | Edad: 21
```

---

# Paso 5 — Filtrar estudiantes mayores de 21 años

## Problema

La universidad quiere identificar estudiantes de programas nocturnos.

## Código

```java
System.out.println("=== MAYORES DE 21 AÑOS ===");

estudiantes.stream()
        .filter(e -> e.getEdad() > 21)
        .forEach(System.out::println);
```

---

# Paso 6 — Contar estudiantes aprobados

## Problema

El sistema debe calcular cuántos estudiantes aprobaron.

## Regla

Un estudiante aprueba con promedio mayor o igual a 71.

---

# Explicación conceptual

La operación `count()` cuenta cuántos elementos sobreviven después del filtro.

---

# Código

```java
long aprobados = estudiantes.stream()
        .filter(e -> e.getPromedio() >= 71)
        .count();

System.out.println("Cantidad de aprobados: " + aprobados);
```

---

# Explicación importante

`count()` devuelve `long`.

Por eso la variable debe declararse así:

```java
long aprobados;
```

---

# Paso 7 — Obtener únicamente nombres

## Problema

El departamento necesita exportar únicamente nombres de estudiantes.

---

# Explicación conceptual

`map()` transforma elementos.

En este caso:

```text
Estudiante → String
```

---

# Código

```java
List<String> nombres = estudiantes.stream()
        .map(estudiante -> estudiante.getNombre())
        .toList();

System.out.println(nombres);
```

---

# Explicación visual

```text
ANTES:
[Estudiante, Estudiante, Estudiante]

DESPUÉS DEL MAP:
["Ana", "Luis", "Maria"]
```

---

# Resultado esperado

```text
[Ana, Luis, Maria, Carlos, Elena]
```

---

# Paso 8 — Desafíos adicionales

## Nivel 1

Mostrar estudiantes menores de 21 años.

---

## Nivel 2

Mostrar nombres en MAYÚSCULAS.

Pista:

```java
.toUpperCase()
```

---

## Nivel 3

Contar cuántos estudiantes tienen promedio mayor a 90.

---

## Nivel 4

Crear una lista únicamente con promedios.

Resultado esperado:

```text
[91.5, 67.0, 88.0, 72.5, 95.0]
```

---

# Paso 9 — Comparación con enfoque tradicional

## Resolver primero con `for`

Ejemplo clásico:

```java
for (Estudiante e : estudiantes) {
    if (e.getPromedio() > 80) {
        System.out.println(e);
    }
}
```

---

# Luego resolver con Streams

```java
estudiantes.stream()
        .filter(e -> e.getPromedio() > 80)
        .forEach(System.out::println);
```

---

# Preguntas de reflexión

1. ¿Qué enfoque es más legible?
2. ¿Cuál escala mejor para análisis de datos?
3. ¿Qué enfoque se parece más al procesamiento moderno de datasets?
4. ¿Por qué Streams reduce errores en recorridos manuales?

---

# Mini reto final 🔥

La universidad quiere generar una “Lista VIP”.

## Reglas

Mostrar únicamente estudiantes que:

* tengan promedio mayor a 85,
* y sean menores de 22 años.

## Resultado esperado

```text
Ana
Maria
Elena
```

---

# Pista

Necesitarán combinar múltiples condiciones dentro de `filter()`:

```java
condicion1 && condicion2
```

---

# Conceptos aprendidos en este laboratorio

* POO
* Encapsulamiento
* ArrayList
* Streams
* filter
* map
* count
* toList
* Expresiones lambda
* Programación funcional básica
