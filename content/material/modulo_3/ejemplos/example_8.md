---
title: "Ejemplo 8"
description: "Análisis de datos usando Programación Funcional con Java Streams."
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

# Mini ML Analytics Framework con Java Streams

## Contexto

Una startup de Inteligencia Artificial está desarrollando un pequeño motor de análisis de datasets inspirado en frameworks como:

* Apache Spark,
* Pandas,
* Scikit-learn,
* TensorFlow Data Pipelines.

Antes de entrenar modelos de Machine Learning, los científicos de datos necesitan analizar datasets para:

* filtrar información,
* calcular métricas,
* generar rankings,
* agrupar registros,
* obtener estadísticas,
* detectar patrones.

Tu equipo desarrollará una versión simplificada de este sistema utilizando:

* Programación Orientada a Objetos,
* Java Streams,
* programación funcional,
* colecciones.

El objetivo es construir un pequeño framework analítico capaz de procesar datasets reales.

---

## Objetivos del proyecto

Al finalizar el proyecto, el estudiante será capaz de:

* Aplicar Streams en problemas complejos.
* Diseñar pipelines funcionales.
* Trabajar con datasets simulados.
* Implementar:

  * filtros,
  * métricas,
  * agrupaciones,
  * rankings,
  * estadísticas,
  * transformaciones.
* Relacionar Java Streams con sistemas reales de procesamiento de datos.

---

## Escenario del problema

La empresa trabaja con datasets de predicción académica.

Cada registro representa información de un estudiante.

El dataset contiene:

* nombre,
* carrera,
* horas de estudio,
* asistencia,
* promedio,
* estado académico.

---

## Objetivo general

Construir un mini sistema analítico que permita procesar datasets utilizando Streams.

---

## Requisitos del sistema

El sistema debe incluir obligatoriamente:

### Filtros

Ejemplo:

* estudiantes aprobados,
* estudiantes de alto rendimiento,
* estudiantes en riesgo.

---

### Estadísticas

Ejemplo:

* promedio general,
* promedio por carrera,
* promedio de asistencia.

---

### Ordenamiento

Ejemplo:

* ranking académico,
* top estudiantes.

---

### Agrupación

Ejemplo:

* agrupar por carrera,
* agrupar por estado.

---

### Métricas

Ejemplo:

* cantidad de aprobados,
* porcentaje de reprobados,
* promedio por grupo.

---

### Top N

Ejemplo:

* Top 3 estudiantes,
* Top 5 promedios.

---

### Conversión de datos

Ejemplo:

* nombres en mayúsculas,
* reportes personalizados,
* transformación a DTOs.

---

# Paso 1 — Crear la clase `StudentRecord`

## Código

```java id="jlwm200"
public class StudentRecord {

    private String nombre;
    private String carrera;
    private int horasEstudio;
    private double asistencia;
    private double promedio;
    private boolean aprobado;

    public StudentRecord(String nombre,
                         String carrera,
                         int horasEstudio,
                         double asistencia,
                         double promedio,
                         boolean aprobado) {

        this.nombre = nombre;
        this.carrera = carrera;
        this.horasEstudio = horasEstudio;
        this.asistencia = asistencia;
        this.promedio = promedio;
        this.aprobado = aprobado;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCarrera() {
        return carrera;
    }

    public int getHorasEstudio() {
        return horasEstudio;
    }

    public double getAsistencia() {
        return asistencia;
    }

    public double getPromedio() {
        return promedio;
    }

    public boolean isAprobado() {
        return aprobado;
    }

    @Override
    public String toString() {
        return nombre +
                " | " + carrera +
                " | Promedio: " + promedio +
                " | Asistencia: " + asistencia;
    }
}
```

---

# Paso 2 — Crear dataset

## Código

```java id="jlwm201"
import java.util.ArrayList;
import java.util.List;

List<StudentRecord> students = new ArrayList<>();

students.add(new StudentRecord(
        "Ana", "Sistemas", 15, 95, 91, true));

students.add(new StudentRecord(
        "Luis", "Industrial", 5, 60, 58, false));

students.add(new StudentRecord(
        "Maria", "Sistemas", 12, 88, 85, true));

students.add(new StudentRecord(
        "Carlos", "Civil", 8, 72, 70, false));

students.add(new StudentRecord(
        "Elena", "Sistemas", 18, 98, 97, true));

students.add(new StudentRecord(
        "Pedro", "Industrial", 10, 80, 78, true));

students.add(new StudentRecord(
        "Lucia", "Civil", 14, 90, 89, true));
```

---

# Parte 1 — Filtros

# Problema 1

Mostrar únicamente estudiantes aprobados.

## Código esperado

```java id="jlwm202"
students.stream()
        .filter(StudentRecord::isAprobado)
        .forEach(System.out::println);
```

---

# Problema 2

Mostrar estudiantes con promedio mayor a 90.

---

# Problema 3

Mostrar estudiantes con asistencia menor a 70.

---

# Problema 4 🔥

Mostrar estudiantes que:

* estén aprobados,
* tengan promedio > 85,
* asistencia > 90.

---

# Parte 2 — Estadísticas

# Problema 5

Calcular promedio general.

## Código esperado

```java id="’wini203"
double promedio = students.stream()
        .mapToDouble(StudentRecord::getPromedio)
        .average()
        .orElse(0);
```

---

# Problema 6

Calcular promedio de asistencia.

---

# Problema 7

Obtener promedio únicamente de estudiantes aprobados.

---

# Problema 8 🔥

Calcular promedio por carrera.

Pista:

```java id="’wini204"
Collectors.groupingBy()
```

---

# Parte 3 — Ordenamiento y Rankings

# Problema 9

Ordenar estudiantes por promedio.

---

# Problema 10

Mostrar Top 3 estudiantes.

---

# Problema 11

Mostrar estudiante con mejor promedio.

---

# Problema 12 🔥

Mostrar ranking completo:

```text id="’wini205"
1. Elena
2. Ana
3. Lucia
...
```

---

# Parte 4 — Agrupaciones

# Problema 13

Agrupar estudiantes por carrera.

---

# Problema 14

Agrupar estudiantes aprobados y reprobados.

---

# Problema 15 🔥

Contar cuántos estudiantes existen por carrera.

Pista:

```java id="’wini206"
Collectors.counting()
```

---

# Parte 5 — Métricas

# Problema 16

Contar aprobados.

---

# Problema 17

Contar reprobados.

---

# Problema 18

Calcular porcentaje de aprobados.

## Fórmula

Porcentaje=\frac{Aprobados}{Total}\times100

---

# Problema 19 🔥

Detectar carrera con mayor promedio.

---

# Parte 6 — Conversión de datos

# Problema 20

Obtener lista únicamente de nombres.

---

# Problema 21

Convertir nombres a MAYÚSCULAS.

---

# Problema 22

Generar mensajes personalizados:

```text id="’wini207"
"El estudiante Ana tiene promedio de 91"
```

---

# Problema 23 🔥

Convertir dataset a formato simplificado:

```text id="’wini208"
Ana -> EXCELENTE
Luis -> EN RIESGO
```

Reglas:

```text id="’wini209"
promedio >= 85 → EXCELENTE
promedio >= 71 → APROBADO
otro → EN RIESGO
```

---

# Parte 7 — Nivel avanzado 🔥🔥🔥

# Problema 24 — Mini pipeline estilo Spark

Construir una pipeline que:

* filtre estudiantes aprobados,
* promedio > 80,
* ordene por promedio,
* convierta nombres a mayúsculas,
* obtenga Top 5.

---

# Resultado esperado

```text id="’wini210"
ELENA
ANA
LUCIA
MARIA
PEDRO
```

---

# Código esperado (referencia conceptual)

```java id="’wini211"
students.stream()
        .filter(StudentRecord::isAprobado)
        .filter(s -> s.getPromedio() > 80)
        .sorted(Comparator.comparingDouble(
                StudentRecord::getPromedio
        ).reversed())
        .map(s -> s.getNombre().toUpperCase())
        .limit(5)
        .forEach(System.out::println);
```

---

# Parte 8 — Desafío GOD MODE 🚀

# Problema 25

Construir un mini reporte analítico automático.

El reporte debe mostrar:

```text id="’wini212"
===== ML DATASET REPORT =====

Total registros:
Promedio global:
Cantidad aprobados:
Cantidad reprobados:
Top estudiante:
Carrera con mejor promedio:
Top 3 estudiantes:
Promedio por carrera:
```

---

# Restricciones del proyecto

## ❌ NO usar `for` tradicional

Todo debe resolverse usando:

```text id="’wini213"
Streams + Programación Funcional
```

---

# Requisitos técnicos

El proyecto debe utilizar:

* `filter`
* `map`
* `sorted`
* `groupingBy`
* `counting`
* `mapToDouble`
* `average`
* `max`
* `limit`
* `collect`
* `Comparator`

---

# Conceptos integrados en este proyecto

* POO
* Streams
* Lambdas
* Programación funcional
* Pipelines
* Aggregations
* Analytics
* Data Processing
* Machine Learning preprocessing
* Ranking systems
* Estadísticas
* Agrupaciones
* Transformación de datasets

---

# Reflexión final para clase

## Preguntas

1. ¿Por qué este enfoque se parece a Spark?
2. ¿Qué ventajas tiene trabajar con pipelines?
3. ¿Cómo escalaría esto a millones de registros?
4. ¿Por qué Streams facilita el análisis de datos?
5. ¿Qué partes de este proyecto se usan realmente en IA?

---

# Resultado pedagógico esperado

Al terminar este proyecto, los estudiantes habrán construido:

```text id="’wini214"
Un mini motor analítico estilo Big Data usando únicamente Java Streams.
```

Y prácticamente habrán entendido las bases conceptuales de:

* Spark,
* Pandas,
* pipelines ETL,
* procesamiento funcional,
* analytics modernos.
