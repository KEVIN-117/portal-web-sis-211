---
title: "Ejemplo 7"
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

# Mini Framework de Data Processing

## Streams avanzados + Programación Funcional + Estructuras complejas

## Contexto

Una startup de Inteligencia Artificial está desarrollando un mini framework para procesamiento de datasets.

El objetivo del sistema es preparar datos antes del entrenamiento de modelos de Machine Learning.

En sistemas reales, antes de entrenar modelos, los datos pasan por múltiples etapas:

```text id="jlwm73"
- limpieza,
- transformación,
- normalización,
- extracción de características,
- análisis estadístico.
```

Tu equipo desarrollará una versión simplificada de este proceso utilizando:

* POO,
* Streams,
* colecciones,
* programación funcional.

Este laboratorio integra prácticamente todos los conceptos vistos hasta ahora.

---

# Objetivos del laboratorio

Al finalizar el laboratorio, el estudiante será capaz de:

* Trabajar con Streams anidados.
* Procesar estructuras complejas.
* Aplicar:

  * `map`
  * `flatMap`
  * `reduce`
  * `sorted`
  * `average`
  * `max`
* Comprender procesamiento funcional de datasets.
* Relacionar Java Streams con pipelines reales de Machine Learning.

---

# Escenario del problema

Cada registro del dataset representa una muestra de datos para entrenamiento.

Cada muestra contiene:

* un label,
* una lista de features numéricas.

Ejemplo:

```text id="jlwm74"
Label: "SPAM"
Features: [0.8, 0.2, 0.5]
```

---

# Paso 1 — Crear clase `DataSample`

## Explicación conceptual

Cada objeto representará una muestra del dataset.

---

# Código

```java id="jlwm75"
import java.util.List;

public class DataSample {

    private String label;
    private List<Double> features;

    public DataSample(String label, List<Double> features) {
        this.label = label;
        this.features = features;
    }

    public String getLabel() {
        return label;
    }

    public List<Double> getFeatures() {
        return features;
    }

    @Override
    public String toString() {
        return label + " -> " + features;
    }
}
```

---

# Paso 2 — Crear dataset de entrenamiento

## Explicación conceptual

Aquí simularemos un dataset de Machine Learning.

---

# Código

```java id="jlwm76"
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<DataSample> dataset = new ArrayList<>();

        dataset.add(new DataSample(
                "SPAM",
                Arrays.asList(0.8, 0.2, 0.5, 0.9)
        ));

        dataset.add(new DataSample(
                "HAM",
                Arrays.asList(0.1, 0.3)
        ));

        dataset.add(new DataSample(
                "SPAM",
                Arrays.asList(0.7, 0.6, 0.8)
        ));

        dataset.add(new DataSample(
                "HAM",
                Arrays.asList(0.2, 0.4, 0.1, 0.5, 0.3)
        ));

    }
}
```

---

# Explicación importante

Cada registro contiene:

```text id="jlwm77"
Label + Lista de features
```

Esto hace que el problema sea mucho más realista.

---

# Paso 3 — Filtrar samples con más de 3 features

## Problema

El sistema quiere detectar registros ricos en información.

---

# Explicación conceptual

Usaremos:

```java id="jlwm78"
filter()
```

sobre el tamaño de la lista.

---

# Código

```java id="’wini79"
System.out.println("=== SAMPLES COMPLEJOS ===");

dataset.stream()
        .filter(sample -> sample.getFeatures().size() > 3)
        .forEach(System.out::println);
```

---

# Explicación línea por línea

## Obtener tamaño de features

```java id="’wini80"
sample.getFeatures().size()
```

---

## Filtrar

```java id="’wini81"
> 3
```

---

# Resultado esperado

```text id="’wini82"
SPAM -> [0.8, 0.2, 0.5, 0.9]
HAM -> [0.2, 0.4, 0.1, 0.5, 0.3]
```

---

# Paso 4 — Calcular suma de features por sample

## Problema

La startup necesita calcular “peso total” de cada registro.

---

# Explicación conceptual

Aquí aparece:

```java id="’wini83"
Streams anidados
```

Tendremos:

```text id="’wini84"
Stream<DataSample>
    ↓
Stream<Double>
```

---

# Código

```java id="’wini85"
dataset.stream()
        .map(sample -> {

            double suma = sample.getFeatures()
                    .stream()
                    .mapToDouble(Double::doubleValue)
                    .sum();

            return sample.getLabel() + " -> SUMA: " + suma;
        })
        .forEach(System.out::println);
```

---

# Explicación visual

```text id="’wini86"
DataSample
   ↓
Lista de features
   ↓
Stream<Double>
   ↓
sum()
```

---

# Resultado esperado

```text id="’wini87"
SPAM -> SUMA: 2.4
HAM -> SUMA: 0.4
SPAM -> SUMA: 2.1
HAM -> SUMA: 1.5
```

---

# Paso 5 — Obtener sample con mayor suma

## Problema

El sistema quiere detectar registros dominantes.

---

# Explicación conceptual

Usaremos:

```java id="’wini88"
max()
```

con lógica personalizada.

---

# Código

```java id="’wini89"
import java.util.Comparator;

DataSample mejor = dataset.stream()
        .max(Comparator.comparingDouble(sample ->
                sample.getFeatures()
                        .stream()
                        .mapToDouble(Double::doubleValue)
                        .sum()
        ))
        .orElse(null);

System.out.println("=== SAMPLE MAS FUERTE ===");
System.out.println(mejor);
```

---

# Explicación importante

Aquí ocurre:

```text id="’wini90"
Stream dentro de Comparator
```

Es programación funcional avanzada.

---

# Resultado esperado

```text id="’wini91"
SPAM -> [0.8, 0.2, 0.5, 0.9]
```

---

# Paso 6 — Convertir labels a lowercase

## Problema

El sistema necesita normalizar etiquetas.

---

# Código

```java id="’wini92"
dataset.stream()
        .map(sample -> sample.getLabel().toLowerCase())
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="’wini93"
spam
ham
spam
ham
```

---

# Paso 7 — Ordenar por cantidad de features

## Problema

El sistema quiere ordenar registros por complejidad.

---

# Código

```java id="’wini94"
dataset.stream()
        .sorted(Comparator.comparingInt(
                sample -> sample.getFeatures().size()
        ).reversed())
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="’wini95"
HAM -> [0.2, 0.4, 0.1, 0.5, 0.3]
SPAM -> [0.8, 0.2, 0.5, 0.9]
SPAM -> [0.7, 0.6, 0.8]
HAM -> [0.1, 0.3]
```

---

# Paso 8 — Introducción a `flatMap()`

## Problema

La startup quiere obtener TODAS las features en una sola lista.

---

# Explicación conceptual

Actualmente tenemos:

```text id="’wini96"
List<List<Double>>
```

Pero queremos:

```text id="’wini97"
List<Double>
```

---

# Explicación de `flatMap`

```text id="’wini98"
flatMap aplana estructuras
```

---

# Código

```java id="’wini99"
dataset.stream()
        .flatMap(sample -> sample.getFeatures().stream())
        .forEach(System.out::println);
```

---

# Explicación visual

```text id="ળી100"
ANTES:
[[0.8, 0.2], [0.5, 0.1]]

DESPUÉS:
[0.8, 0.2, 0.5, 0.1]
```

---

# Resultado esperado

```text id="ળી101"
0.8
0.2
0.5
0.9
0.1
0.3
...
```

---

# Paso 9 — Calcular promedio global de features

## Problema

El sistema quiere conocer el valor promedio del dataset completo.

---

# Código

```java id="ળી102"
double promedio = dataset.stream()
        .flatMap(sample -> sample.getFeatures().stream())
        .mapToDouble(Double::doubleValue)
        .average()
        .orElse(0);

System.out.println("Promedio global: " + promedio);
```

---

# Resultado esperado

```text id="ળી103"
Promedio global: 0.45
```

---

# Paso 10 — Pipeline completa de preprocessing

## Problema

La startup quiere detectar registros premium.

---

# Reglas

Mostrar samples:

* con más de 3 features,
* cuya suma total sea mayor a 1.5,
* ordenados por suma descendente.

---

# Código

```java id="ળી104"
dataset.stream()
        .filter(sample -> sample.getFeatures().size() > 3)
        .filter(sample ->
                sample.getFeatures()
                        .stream()
                        .mapToDouble(Double::doubleValue)
                        .sum() > 1.5
        )
        .sorted(Comparator.comparingDouble(sample ->
                sample.getFeatures()
                        .stream()
                        .mapToDouble(Double::doubleValue)
                        .sum()
        ).reversed())
        .forEach(System.out::println);
```

---

# Explicación del pipeline

```text id="ળી105"
Dataset
 ↓
Filtrar cantidad features
 ↓
Calcular suma
 ↓
Filtrar suma > 1.5
 ↓
Ordenar
 ↓
Resultado
```

---

# Paso 11 — Desafíos adicionales

## Nivel 1

Mostrar únicamente labels `"SPAM"`.

---

## Nivel 2

Calcular cantidad total de features.

---

## Nivel 3

Obtener feature máxima global.

Pista:

```java id="ળી106"
max()
```

---

## Nivel 4

Crear mensajes personalizados:

```text id="ળી107"
"Sample SPAM tiene 4 features"
```

---

## Nivel 5 🔥

Mostrar samples:

* cuyo promedio de features sea mayor a 0.5,
* ordenados descendentemente,
* mostrar únicamente labels.

---

# Paso 12 — Introducción conceptual a IA real

## Explicación

Muchos frameworks modernos trabajan exactamente bajo esta filosofía:

```text id="ળી108"
Dataset
 ↓
Transformaciones
 ↓
Filtrado
 ↓
Normalización
 ↓
Entrenamiento
```

Streams permite simular pipelines reales de Data Science.

---

# Comparación con programación tradicional

## Solución clásica

```java id="ળી109"
for (DataSample sample : dataset) {

    double suma = 0;

    for (Double valor : sample.getFeatures()) {
        suma += valor;
    }

    System.out.println(suma);
}
```

---

# Solución funcional

```java id="ળી110"
dataset.stream()
        .map(sample ->
                sample.getFeatures()
                        .stream()
                        .mapToDouble(Double::doubleValue)
                        .sum()
        )
        .forEach(System.out::println);
```

---

# Reflexión para clase

## Preguntas

1. ¿Por qué `flatMap()` es tan poderoso?
2. ¿Qué relación tiene esto con procesamiento de datasets reales?
3. ¿Cómo usan esto frameworks como Spark?
4. ¿Por qué Streams facilita pipelines complejas?

---

# Mini reto final 🔥

## Problema

La startup quiere generar un “Dataset Elite”.

## Reglas

Mostrar únicamente samples:

* con más de 3 features,
* promedio mayor a 0.5,
* ordenados por promedio descendentemente,
* mostrar únicamente labels.

---

# Conceptos aprendidos

* Streams anidados
* flatMap
* map
* filter
* sorted
* max
* average
* reduce
* pipelines funcionales
* procesamiento de datasets
* simulación real de preprocessing para Machine Learning
