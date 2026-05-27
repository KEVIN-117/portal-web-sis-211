---
title: "Resumen — Streams en Java"
description: "Comprensión profunda de Java Streams desde cero hasta pipelines funcionales."
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

# 1. ¿Qué problema vienen a resolver los Streams?

Antes de Streams, procesar colecciones en Java era repetitivo.

Ejemplo clásico:

```java
for (Estudiante e : estudiantes) {
    if (e.getPromedio() > 80) {
        System.out.println(e);
    }
}
```

Esto funciona…

pero tiene problemas:

* mucho código repetitivo,
* lógica mezclada,
* difícil de encadenar,
* poca expresividad,
* más propenso a errores.

---

# Entonces aparece Java Streams (Java 8)

La idea es:

```text
“Procesar datos de forma declarativa y funcional”
```

En vez de decir:

```text
“Cómo recorrer”
```

decimos:

```text
“Qué queremos obtener”
```

---

# 2. ¿Qué es un Stream?

Conceptualmente:

```text
Un Stream es un flujo de procesamiento de datos.
```

No es la colección.

NO almacena datos.

Simplemente:

```text
consume → procesa → produce resultados
```

---

# Flujo conceptual

```text
Collection
   ↓
 stream()
   ↓
 operaciones
   ↓
 resultado
```

---

# Ejemplo visual

```java
estudiantes.stream()
```

Convierte:

```text
List<Estudiante>
```

en:

```text
Stream<Estudiante>
```

---

# 3. Filosofía funcional

Streams introduce Programación Funcional en Java.

---

# Programación imperativa (tradicional)

```text
PASO A PASO
```

Ejemplo:

```java
for (...)
```

---

# Programación funcional

```text
TRANSFORMAR DATOS
```

Ejemplo:

```java
stream()
.filter()
.map()
.collect()
```

---

# Idea importante

En programación funcional:

```text
Los datos fluyen a través de transformaciones.
```

Esto es EXACTAMENTE lo que hacen:

* Spark,
* Pandas,
* TensorFlow pipelines,
* RxJava,
* Kafka Streams.

---

# 4. Anatomía de un Stream

Un Stream normalmente tiene:

## 1. Fuente

```java
lista.stream()
```

---

## 2. Operaciones intermedias

Transforman el flujo.

Ejemplos:

* `filter`
* `map`
* `sorted`

---

## 3. Operación terminal

Produce resultado final.

Ejemplos:

* `forEach`
* `count`
* `collect`
* `average`

---

# Ejemplo completo

```java
students.stream()
        .filter(s -> s.getPromedio() > 80)
        .map(Student::getNombre)
        .forEach(System.out::println);
```

---

# Visualización

```text
List<Student>
      ↓
stream()
      ↓
filter()
      ↓
map()
      ↓
forEach()
```

---

# 5. Operaciones intermedias

Estas NO ejecutan inmediatamente.

Simplemente construyen la pipeline.

---

# `filter()`

Filtra elementos.

```java
.filter(s -> s.getEdad() > 18)
```

---

# `map()`

Transforma elementos.

```text
Student → String
```

Ejemplo:

```java
.map(Student::getNombre)
```

---

# `sorted()`

Ordena elementos.

```java
.sorted()
```

o

```java
.sorted(Comparator.comparing(...))
```

---

# `limit()`

Limita resultados.

```java
.limit(5)
```

---

# `distinct()`

Elimina duplicados.

```java
.distinct()
```

---

# 6. Operaciones terminales

Estas sí ejecutan la pipeline.

---

# `forEach()`

Consume elementos.

```java
.forEach(System.out::println)
```

---

# `count()`

Cuenta elementos.

```java
.count()
```

---

# `collect()`

Recolecta resultados.

```java
.collect(Collectors.toList())
```

---

# `average()`

Calcula promedio.

```java
.average()
```

---

# `max()` / `min()`

Obtiene extremos.

```java
.max(...)
```

---

# 7. Lazy Evaluation (MUY IMPORTANTE)

Streams son perezosos.

```text
NO ejecutan operaciones hasta que exista una terminal.
```

Ejemplo:

```java
students.stream()
        .filter(...)
        .map(...)
```

Aquí NO pasa nada todavía.

---

# Recién aquí se ejecuta:

```java
.forEach(...)
```

---

# Esto permite optimización interna.

Por eso Streams escala tan bien.

---

# 8. Streams y Pipelines

Streams funciona como una tubería.

```text
datos
 ↓
filtro
 ↓
transformación
 ↓
ordenamiento
 ↓
resultado
```

Esto se llama:

```text
Pipeline de procesamiento
```

---

# EXACTAMENTE igual a:

* ETL,
* pipelines ML,
* Spark,
* procesamiento Big Data.

---

# 9. Streams NO modifican la colección original

Esto es importantísimo.

Streams favorece:

```text
Inmutabilidad
```

Ejemplo:

```java
List<Integer> numeros = List.of(1,2,3);
```

---

# Esto:

```java
numeros.stream()
       .map(n -> n * 2)
```

NO cambia la lista original.

---

# Produce nuevos resultados.

---

# 10. map vs filter

MUY confundido por principiantes.

---

# `filter`

Decide:

```text
SE QUEDA o SE ELIMINA
```

---

# `map`

Transforma:

```text
A → B
```

---

# Ejemplo visual

## filter

```text
[1,2,3,4]
 ↓
pares
 ↓
[2,4]
```

---

# map

```text
[1,2,3]
 ↓
x2
 ↓
[2,4,6]
```

---

# 11. mapToDouble()

Streams normales trabajan con objetos.

Pero para cálculos matemáticos:

```java
Stream<Double>
```

no es óptimo.

---

# Entonces existen:

* `mapToInt`
* `mapToDouble`
* `mapToLong`

---

# Ejemplo

```java
.mapToDouble(Student::getPromedio)
.average()
```

---

# 12. flatMap() — concepto avanzado

Uno de los conceptos MÁS IMPORTANTES.

---

# Problema

Tienes:

```text
List<List<String>>
```

y quieres:

```text
List<String>
```

---

# `flatMap()` aplana estructuras.

---

# Visualización

ANTES:

```text
[
 [A,B],
 [C,D]
]
```

---

DESPUÉS:

```text
[A,B,C,D]
```

---

# Ejemplo

```java
dataset.stream()
       .flatMap(d -> d.getFeatures().stream())
```

---

# Esto se usa muchísimo en:

* Spark,
* bases de datos,
* NLP,
* análisis de logs,
* pipelines distribuidas.

---

# 13. Streams y lambdas

Streams depende totalmente de lambdas.

---

# Lambda

Es una función anónima.

Ejemplo:

```java
x -> x * 2
```

---

# Forma general

```java
(parametros) -> expresion
```

---

# Ejemplo real

```java
.filter(s -> s.getPromedio() > 80)
```

---

# Significa:

```text
“Por cada estudiante,
evaluar si promedio > 80”
```

---

# 14. Referencias a métodos

Versión simplificada de lambdas.

---

# Lambda normal

```java
s -> s.getNombre()
```

---

# Method reference

```java
Student::getNombre
```

---

# Más limpio y legible.

---

# 15. Collectors (MUY IMPORTANTE)

Permiten transformar resultados.

---

# `toList()`

```java
.collect(Collectors.toList())
```

---

# `groupingBy()`

Agrupa elementos.

```java
.groupingBy(Student::getCarrera)
```

---

# `counting()`

Cuenta elementos agrupados.

---

# Ejemplo real

```java
Map<String, Long>
```

---

# 16. Streams y Big Data

Aquí está la conexión importante.

Streams introduce conceptos usados en:

* Spark,
* Hadoop,
* Flink,
* Kafka Streams.

---

# Filosofía compartida

```text
Dataset
 ↓
Transformaciones
 ↓
Aggregations
 ↓
Resultados
```

---

# 17. Ventajas de Streams

## ✔ Más expresivo

---

## ✔ Menos código

---

## ✔ Más legible

---

## ✔ Fácil de paralelizar

---

## ✔ Mejor para pipelines

---

## ✔ Más cercano al análisis moderno de datos

---

# 18. Streams paralelos (nivel avanzado)

Java puede paralelizar automáticamente.

```java
.parallelStream()
```

---

# Ejemplo

```java
students.parallelStream()
```

---

# Idea

Divide trabajo entre múltiples hilos.

---

# Similar a:

* Spark workers,
* procesamiento distribuido,
* multicore computing.

---

# 19. Concepto IMPORTANTÍSIMO

Streams NO es una estructura de datos.

Es:

```text
UNA ABSTRACCIÓN DE PROCESAMIENTO
```

---

# 20. El verdadero valor de Streams

Streams no existe solamente para “hacer código bonito”.

Su verdadero propósito es:

```text
MODELAR PIPELINES DE PROCESAMIENTO DE DATOS
```

Y eso es exactamente lo que ocurre en:

* Machine Learning,
* Big Data,
* ETL,
* analytics,
* sistemas distribuidos,
* motores de recomendación,
* IA moderna.

---

# Ruta conceptual completa

Los estudiantes prácticamente ya recorrieron:

```text
POO
 ↓
Colecciones
 ↓
Lambdas
 ↓
Streams
 ↓
Pipelines
 ↓
Procesamiento de datasets
 ↓
Bases conceptuales de Big Data
```

---

# Siguiente nivel recomendado 🚀

Después de Streams, los temas PERFECTOS serían:

1. `Optional`
2. `Collectors` avanzados
3. `groupingBy`
4. `partitioningBy`
5. `reduce`
6. Streams paralelos
7. Records en Java
8. Functional Interfaces
9. Predicate / Function / Consumer
10. Mini ETL pipelines
11. Introducción a Reactive Programming
12. Introducción conceptual a Spark
