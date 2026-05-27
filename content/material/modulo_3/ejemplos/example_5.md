---
title: "Ejemplo 5"
description: "Análisis de películas y tendencias de visualización usando Programación Funcional con Java Streams."
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

# Mini Netflix Analytics con Streams

## Sistema de análisis de películas y tendencias de visualización

## Contexto

Una plataforma de streaming similar a Netflix está desarrollando un módulo de análisis de contenido para estudiar el comportamiento de sus usuarios.

El departamento de analítica necesita procesar información relacionada con:

* películas,
* ratings,
* géneros,
* cantidad de vistas.

El objetivo es construir una mini herramienta capaz de:

* detectar películas populares,
* generar rankings,
* calcular estadísticas,
* analizar tendencias de visualización.

Este laboratorio se enfoca en usar Streams para simular sistemas modernos de recomendación y análisis de plataformas digitales.

---

# Objetivos del laboratorio

Al finalizar el laboratorio, el estudiante será capaz de:

* Aplicar Streams sobre datasets multimedia.
* Utilizar:

  * `filter`
  * `map`
  * `distinct`
  * `sorted`
  * `max`
  * `average`
* Comprender pipelines de análisis de contenido.
* Relacionar Streams con motores de recomendación.

---

# Escenario del problema

Cada película contiene:

* título,
* género,
* rating,
* cantidad de vistas.

La plataforma desea analizar tendencias y comportamiento de usuarios.

---

# Paso 1 — Crear la clase `Pelicula`

## Explicación conceptual

Cada objeto representará una película dentro de la plataforma.

---

# Código

```java id="q0t5x1"
public class Pelicula {

    private String titulo;
    private String genero;
    private double rating;
    private int vistas;

    public Pelicula(String titulo,
                    String genero,
                    double rating,
                    int vistas) {

        this.titulo = titulo;
        this.genero = genero;
        this.rating = rating;
        this.vistas = vistas;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getGenero() {
        return genero;
    }

    public double getRating() {
        return rating;
    }

    public int getVistas() {
        return vistas;
    }

    @Override
    public String toString() {
        return titulo +
                " | Genero: " + genero +
                " | Rating: " + rating +
                " | Vistas: " + vistas;
    }
}
```

---

# Paso 2 — Crear el dataset de películas

## Explicación conceptual

Simularemos un pequeño catálogo de streaming.

---

# Código

```java id="q8u9fe"
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Pelicula> peliculas = new ArrayList<>();

        peliculas.add(new Pelicula("Inception", "Sci-Fi", 8.8, 1500000));
        peliculas.add(new Pelicula("Titanic", "Drama", 7.9, 2100000));
        peliculas.add(new Pelicula("Interstellar", "Sci-Fi", 8.9, 1800000));
        peliculas.add(new Pelicula("Joker", "Drama", 8.4, 1700000));
        peliculas.add(new Pelicula("Avengers", "Action", 8.1, 2500000));
        peliculas.add(new Pelicula("Batman", "Action", 7.8, 1200000));

    }
}
```

---

# Paso 3 — Filtrar películas con rating mayor a 8

## Problema

La plataforma quiere destacar contenido altamente valorado.

Regla:

```text id="9lfj2u"
Rating > 8
```

---

# Explicación conceptual

Usaremos:

```java id="3kgq7n"
filter()
```

---

# Código

```java id="l8tw8f"
System.out.println("=== PELICULAS DESTACADAS ===");

peliculas.stream()
        .filter(p -> p.getRating() > 8)
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="jlwm11"
=== PELICULAS DESTACADAS ===
Inception
Interstellar
Joker
Avengers
```

---

# Paso 4 — Ordenar películas por rating

## Problema

El sistema debe generar rankings de calidad.

---

# Explicación conceptual

Usaremos:

```java id="jlwm12"
sorted()
```

junto con:

```java id="jlwm13"
Comparator
```

---

# Código

```java id="jlwm14"
import java.util.Comparator;

System.out.println("=== RANKING POR RATING ===");

peliculas.stream()
        .sorted(Comparator.comparingDouble(Pelicula::getRating)
                .reversed())
        .forEach(System.out::println);
```

---

# Explicación visual

```text id="jlwm15"
ANTES:
7.9
8.8
8.1

DESPUÉS:
8.8
8.1
7.9
```

---

# Resultado esperado

```text id="jlwm16"
Interstellar
Inception
Joker
Avengers
Titanic
Batman
```

---

# Paso 5 — Obtener película más vista

## Problema

La empresa desea identificar tendencias globales.

---

# Explicación conceptual

Usaremos:

```java id="jlwm17"
max()
```

---

# Código

```java id="jlwm18"
Pelicula masVista = peliculas.stream()
        .max(Comparator.comparingInt(Pelicula::getVistas))
        .orElse(null);

System.out.println("=== PELICULA MAS VISTA ===");
System.out.println(masVista);
```

---

# Resultado esperado

```text id="jlwm19"
=== PELICULA MAS VISTA ===
Avengers | Genero: Action | Rating: 8.1 | Vistas: 2500000
```

---

# Paso 6 — Calcular promedio de ratings

## Problema

Netflix quiere medir la calidad promedio del catálogo.

---

# Explicación conceptual

Usaremos:

```java id="jlwm20"
mapToDouble()
```

y luego:

```java id="jlwm21"
average()
```

---

# Código

```java id="jlwm22"
double promedio = peliculas.stream()
        .mapToDouble(Pelicula::getRating)
        .average()
        .orElse(0);

System.out.println("Promedio ratings: " + promedio);
```

---

# Resultado esperado

```text id="jlwm23"
Promedio ratings: 8.316666666666666
```

---

# Paso 7 — Obtener géneros sin repetir

## Problema

La plataforma necesita mostrar categorías disponibles.

---

# Explicación conceptual

Usaremos:

```java id="jlwm24"
distinct()
```

---

# Código

```java id="jlwm25"
System.out.println("=== GENEROS DISPONIBLES ===");

peliculas.stream()
        .map(Pelicula::getGenero)
        .distinct()
        .forEach(System.out::println);
```

---

# Explicación visual

```text id="jlwm26"
ANTES:
Sci-Fi
Drama
Sci-Fi
Action
Drama

DESPUÉS:
Sci-Fi
Drama
Action
```

---

# Resultado esperado

```text id="jlwm27"
Sci-Fi
Drama
Action
```

---

# Paso 8 — Crear mensajes personalizados

## Problema

El sistema quiere generar banners automáticos.

---

# Explicación conceptual

`map()` transforma datos.

---

# Código

```java id="jlwm28"
peliculas.stream()
        .map(p -> "🔥 " + p.getTitulo() +
                " tiene rating de " + p.getRating())
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="jlwm29"
🔥 Inception tiene rating de 8.8
🔥 Titanic tiene rating de 7.9
...
```

---

# Paso 9 — Pipeline de recomendaciones

## Problema

La plataforma quiere recomendar películas premium.

---

# Reglas

Mostrar únicamente películas:

* con rating mayor a 8,
* ordenadas por rating,
* limitadas al Top 3.

---

# Código

```java id="jlwm30"
peliculas.stream()
        .filter(p -> p.getRating() > 8)
        .sorted(Comparator.comparingDouble(Pelicula::getRating)
                .reversed())
        .limit(3)
        .forEach(System.out::println);
```

---

# Explicación del pipeline

```text id="jlwm31"
Dataset
 ↓
Filtrar películas premium
 ↓
Ordenar por rating
 ↓
Top 3
 ↓
Resultado
```

---

# Resultado esperado

```text id="jlwm32"
Interstellar
Inception
Joker
```

---

# Paso 10 — Desafíos adicionales

## Nivel 1

Mostrar únicamente películas de género `"Action"`.

---

## Nivel 2

Calcular promedio de vistas.

---

## Nivel 3

Mostrar película con menor rating.

---

## Nivel 4

Obtener lista únicamente de títulos.

---

## Nivel 5 🔥

Mostrar películas:

* con más de 1,500,000 vistas,
* rating mayor a 8,
* ordenadas por vistas.

---

# Paso 11 — Introducción a agrupación (preview)

## Problema

Agrupar películas por género.

---

# Código

```java id="jlwm33"
import java.util.Map;
import java.util.stream.Collectors;

Map<String, List<Pelicula>> agrupadas = peliculas.stream()
        .collect(Collectors.groupingBy(Pelicula::getGenero));

System.out.println(agrupadas);
```

---

# Explicación conceptual

```text id="jlwm34"
Sci-Fi → [Inception, Interstellar]
Drama → [Titanic, Joker]
Action → [Avengers, Batman]
```

---

# Comparación con programación tradicional

## Solución clásica

```java id="jlwm35"
for (Pelicula p : peliculas) {
    if (p.getRating() > 8) {
        System.out.println(p);
    }
}
```

---

# Solución moderna con Streams

```java id="jlwm36"
peliculas.stream()
        .filter(p -> p.getRating() > 8)
        .forEach(System.out::println);
```

---

# Reflexión para clase

## Preguntas

1. ¿Cómo usa Netflix análisis similares?
2. ¿Por qué Streams es útil para motores de recomendación?
3. ¿Qué relación existe entre Streams y Data Analytics?
4. ¿Cómo se procesarían millones de películas?

---

# Mini reto final 🔥

## Problema

La plataforma quiere crear un “Top Trending”.

## Reglas

Mostrar películas:

* con rating mayor a 8,
* más de 1,600,000 vistas,
* ordenadas por vistas descendentes,
* mostrar únicamente títulos.

---

# Resultado esperado

```text id="jlwm37"
Avengers
Interstellar
Joker
```

---

# Conceptos aprendidos

* Streams
* filter
* map
* distinct
* sorted
* limit
* max
* average
* groupingBy
* Comparator
* pipelines de recomendación
* análisis de contenido multimedia
* simulación de analytics tipo Netflix
