---
title: "Ejemplo 2"
description: "Un sistema de análisis de rendimiento estudiantil utilizando Java Streams."
tags: [
    "java",
    "streams",
    "poo",
    "java-17",
    "analisis-datos",
    "machine-learning"
]
draft: false
---

# Streams para análisis académico

## Sistema de predicción de rendimiento estudiantil

### Contexto

Una universidad está desarrollando un pequeño módulo de análisis académico inspirado en sistemas de Machine Learning.

El objetivo es analizar patrones de rendimiento estudiantil utilizando programación funcional con Streams en Java.

Cada estudiante tendrá información relacionada con:

* horas de estudio,
* porcentaje de asistencia,
* nota final.

El departamento académico desea usar esta información para detectar:

* estudiantes en riesgo,
* estudiantes destacados,
* promedios generales,
* rankings académicos.

---

# Objetivos

Al finalizar el laboratorio, el estudiante será capaz de:

* Trabajar con Streams sobre objetos complejos.
* Aplicar:

  * `filter`
  * `map`
  * `average`
  * `max`
  * `sorted`
* Comprender cómo Streams puede usarse en análisis de datos.
* Relacionar Java Streams con procesamiento básico usado en Machine Learning.

---

## Escenario del problema

El sistema universitario almacena registros académicos.

Cada registro contiene:

* nombre del estudiante,
* horas de estudio semanales,
* porcentaje de asistencia,
* nota final.

La universidad desea generar reportes automáticos usando Streams.

---

## Paso 1 — Crear la clase `RegistroAcademico`

### Explicación conceptual

La clase representará una fila del dataset académico.

---

### Código

```java id="xkql7s"
public class RegistroAcademico {

    private String estudiante;
    private int horasEstudio;
    private double asistencia;
    private double notaFinal;

    public RegistroAcademico(String estudiante,
                             int horasEstudio,
                             double asistencia,
                             double notaFinal) {

        this.estudiante = estudiante;
        this.horasEstudio = horasEstudio;
        this.asistencia = asistencia;
        this.notaFinal = notaFinal;
    }

    public String getEstudiante() {
        return estudiante;
    }

    public int getHorasEstudio() {
        return horasEstudio;
    }

    public double getAsistencia() {
        return asistencia;
    }

    public double getNotaFinal() {
        return notaFinal;
    }

    @Override
    public String toString() {
        return estudiante +
                " | Horas: " + horasEstudio +
                " | Asistencia: " + asistencia +
                " | Nota: " + notaFinal;
    }
}
```

---

## Paso 2 — Crear el dataset académico

### Explicación conceptual

Simularemos un pequeño dataset de Machine Learning.

Cada objeto representa un registro de entrenamiento.

---

### Código

```java id="rx1jk0"
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<RegistroAcademico> registros = new ArrayList<>();

        registros.add(new RegistroAcademico("Ana", 15, 95, 92));
        registros.add(new RegistroAcademico("Luis", 5, 60, 58));
        registros.add(new RegistroAcademico("Maria", 12, 88, 85));
        registros.add(new RegistroAcademico("Carlos", 8, 72, 70));
        registros.add(new RegistroAcademico("Elena", 18, 98, 97));

    }
}
```

---

## Paso 3 — Filtrar estudiantes con baja asistencia

### Problema

La universidad quiere detectar estudiantes en riesgo académico.

Regla:

```text id="76kkn4"
Asistencia < 70%
```

---

### Explicación conceptual

`filter()` permite quedarnos únicamente con elementos que cumplen una condición.

---

### Código

```java id="o5fubm"
System.out.println("=== ESTUDIANTES EN RIESGO ===");

registros.stream()
        .filter(r -> r.getAsistencia() < 70)
        .forEach(System.out::println);
```

---

### Explicación línea por línea

#### Crear Stream

```java id="j2st1h"
registros.stream()
```

Convierte la colección en un flujo.

---

#### Aplicar filtro

```java id="yxu4rn"
.filter(r -> r.getAsistencia() < 70)
```

Significa:

> “Por cada registro, conservar solo aquellos con asistencia menor a 70”.

---

#### Mostrar resultados

```java id="m83i7j"
.forEach(System.out::println);
```

Imprime cada elemento resultante.

---

#### Resultado esperado

```text id="97yqz3"
=== ESTUDIANTES EN RIESGO ===
Luis | Horas: 5 | Asistencia: 60.0 | Nota: 58.0
```

---

## Paso 4 — Calcular promedio general de notas

### Problema

La universidad necesita conocer el promedio global del curso.

---

### Explicación conceptual

Para operaciones matemáticas sobre Streams usamos:

```java id="20hymg"
mapToDouble()
```

Esto transforma objetos → números.

Luego usamos:

```java id="z4q88u"
average()
```

---

### Código

```java id="5b6c0k"
double promedio = registros.stream()
        .mapToDouble(r -> r.getNotaFinal())
        .average()
        .orElse(0);

System.out.println("Promedio general: " + promedio);
```

---

### Explicación importante

#### mapToDouble

```java id="d9vg8q"
.mapToDouble(r -> r.getNotaFinal())
```

Transforma:

```text id="vbfkh1"
RegistroAcademico → double
```

---

#### average()

Calcula promedio matemático.

---

#### orElse(0)

Evita errores si el Stream está vacío.

---

#### Resultado esperado

```text id="7ykfd5"
Promedio general: 80.4
```

---

## Paso 5 — Obtener estudiante con mejor nota

### Problema

La universidad quiere identificar al mejor estudiante.

---

### Explicación conceptual

Usaremos:

```java id="4td2r5"
max()
```

junto con:

```java id="0x6rcn"
Comparator
```

---

### Código

```java id="nq2ub0"
import java.util.Comparator;

RegistroAcademico mejor = registros.stream()
        .max(Comparator.comparingDouble(RegistroAcademico::getNotaFinal))
        .orElse(null);

System.out.println("=== MEJOR ESTUDIANTE ===");
System.out.println(mejor);
```

---

### Explicación importante

#### Comparator.comparingDouble()

Permite comparar objetos usando un atributo numérico.

---

#### Esta parte:

```java id="jj52kq"
RegistroAcademico::getNotaFinal
```

es una referencia a método.

Equivale a:

```java id="vjg2rq"
r -> r.getNotaFinal()
```

---

#### Resultado esperado

```text id="eyx4hb"
=== MEJOR ESTUDIANTE ===
Elena | Horas: 18 | Asistencia: 98.0 | Nota: 97.0
```

---

## Paso 6 — Mostrar nombres en MAYÚSCULAS

### Problema

El sistema exportará reportes para análisis externo.

---

### Explicación conceptual

`map()` transforma elementos.

---

### Código

```java id="q0lh2m"
System.out.println("=== NOMBRES EN MAYUSCULAS ===");

registros.stream()
        .map(r -> r.getEstudiante().toUpperCase())
        .forEach(System.out::println);
```

---

#### Explicación visual

```text id="7o8u6n"
ANTES:
Ana

DESPUÉS:
ANA
```

---

#### Resultado esperado

```text id="qk4iz6"
ANA
LUIS
MARIA
CARLOS
ELENA
```

---

## Paso 7 — Ordenar estudiantes por nota

### Problema

La universidad quiere generar rankings.

---

### Explicación conceptual

Usaremos:

```java id="01n9b7"
sorted()
```

---

### Código

```java id="mow3n8"
System.out.println("=== RANKING ACADEMICO ===");

registros.stream()
        .sorted(Comparator.comparingDouble(RegistroAcademico::getNotaFinal)
                .reversed())
        .forEach(System.out::println);
```

---

### Explicación importante

#### reversed()

Invierte el orden:

```text id="mwqj6e"
Mayor → Menor
```

---

#### Resultado esperado

```text id="uk5ntr"
Elena
Ana
Maria
Carlos
Luis
```

---

## Paso 8 — Desafíos adicionales

### Nivel 1

Mostrar estudiantes con nota mayor a 90.

---

### Nivel 2

Mostrar estudiantes que estudian más de 10 horas.

---

### Nivel 3

Obtener promedio únicamente de estudiantes aprobados.

Regla:

```text id="o0exvh"
nota >= 71
```

---

### Nivel 4

Crear lista únicamente de nombres.

---

### Nivel 5 🔥

Mostrar únicamente estudiantes que:

* tengan asistencia mayor a 80,
* y nota mayor a 85.

---

## Paso 9 — Comparación con programación tradicional

### Solución clásica

```java id="s50jgf"
double suma = 0;

for (RegistroAcademico r : registros) {
    suma += r.getNotaFinal();
}

double promedio = suma / registros.size();
```

---

### Solución moderna con Streams

```java id="09ps2n"
double promedio = registros.stream()
        .mapToDouble(RegistroAcademico::getNotaFinal)
        .average()
        .orElse(0);
```

---

## Reflexión para clase

### Preguntas

1. ¿Cuál solución es más expresiva?
2. ¿Cuál reduce más errores?
3. ¿Qué enfoque se parece más al análisis moderno de datasets?
4. ¿Por qué Streams se usa tanto en Big Data?

---

## Mini reto final 🔥

### Problema

La universidad quiere generar una “Lista de excelencia”.

### Reglas

Mostrar estudiantes que:

* tengan nota mayor a 90,
* asistencia mayor a 90,
* y estudien más de 10 horas.

---

#### Resultado esperado

```text id="8u4p7j"
Ana
Elena
```

---

# Conceptos aprendidos

* Streams
* filter
* map
* mapToDouble
* average
* max
* sorted
* Comparator
* referencias a métodos
* programación funcional aplicada a datasets
