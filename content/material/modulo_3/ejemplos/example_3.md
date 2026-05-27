---
title: "Ejemplo 3"
description: "Un sistema de análisis de sensores IoT para Machine Learning utilizando Java Streams."
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

# Pipeline de procesamiento de datos con Streams

## Simulación de análisis de sensores IoT para Machine Learning

## Contexto

Una empresa tecnológica especializada en Internet de las Cosas (IoT) está desarrollando un sistema inteligente capaz de analizar datos provenientes de sensores ambientales.

Estos sensores recopilan información constantemente sobre:

* temperatura,
* humedad,
* presión,
* calidad del aire.

Antes de entrenar modelos de Machine Learning, los datos deben pasar por una fase llamada:

```text id="jlwm3q"
Data Processing Pipeline
```

o pipeline de procesamiento de datos.

Tu equipo será responsable de construir una mini pipeline usando Java Streams.

---

# Objetivos del laboratorio

Al finalizar este laboratorio, el estudiante será capaz de:

* Comprender el concepto de pipeline de datos.
* Utilizar Streams para procesar datasets.
* Aplicar:

  * `filter`
  * `map`
  * `sorted`
  * `limit`
  * `average`
* Comprender cómo Java Streams se relaciona con procesamiento de datos real.

---

# ¿Qué es una pipeline de datos?

En Machine Learning y Data Science, una pipeline representa una secuencia de transformaciones sobre datos.

Por ejemplo:

```text id="2a7mv5"
Datos crudos
    ↓
Filtrado
    ↓
Transformación
    ↓
Ordenamiento
    ↓
Resultados finales
```

Java Streams funciona exactamente bajo esta filosofía.

---

# Escenario del problema

La empresa recibe datos desde múltiples sensores.

Cada registro contiene:

* nombre del sensor,
* valor medido.

El sistema deberá:

* detectar valores críticos,
* transformar unidades,
* calcular promedios,
* ordenar resultados,
* generar rankings.

---

# Paso 1 — Crear la clase `SensorData`

## Explicación conceptual

Cada objeto representará un dato capturado por un sensor.

---

# Código

```java id="5h3ds3"
public class SensorData {

    private String sensor;
    private double valor;

    public SensorData(String sensor, double valor) {
        this.sensor = sensor;
        this.valor = valor;
    }

    public String getSensor() {
        return sensor;
    }

    public double getValor() {
        return valor;
    }

    @Override
    public String toString() {
        return sensor + " -> " + valor;
    }
}
```

---

# Paso 2 — Crear el dataset de sensores

## Explicación conceptual

Simularemos datos provenientes de sensores reales.

---

# Código

```java id="c8kt0d"
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<SensorData> datos = new ArrayList<>();

        datos.add(new SensorData("TEMP", 35.5));
        datos.add(new SensorData("TEMP", 41.2));
        datos.add(new SensorData("HUM", 70));
        datos.add(new SensorData("TEMP", 39.1));
        datos.add(new SensorData("HUM", 82));
        datos.add(new SensorData("TEMP", 45.0));
        datos.add(new SensorData("TEMP", 28.4));

    }
}
```

---

# Paso 3 — Filtrar temperaturas críticas

## Problema

La empresa necesita detectar temperaturas peligrosas.

Regla:

```text id="dxs75m"
Temperatura > 38°C
```

---

# Explicación conceptual

Usaremos:

```java id="jlwmqj"
filter()
```

para quedarnos únicamente con datos críticos.

---

# Código

```java id="3s5mnc"
System.out.println("=== TEMPERATURAS CRITICAS ===");

datos.stream()
        .filter(d -> d.getSensor().equals("TEMP"))
        .filter(d -> d.getValor() > 38)
        .forEach(System.out::println);
```

---

# Explicación línea por línea

## Primer filtro

```java id="6n8kmu"
.filter(d -> d.getSensor().equals("TEMP"))
```

Mantiene únicamente sensores de temperatura.

---

## Segundo filtro

```java id="l55g29"
.filter(d -> d.getValor() > 38)
```

Mantiene únicamente temperaturas críticas.

---

# Resultado esperado

```text id="8u3g18"
=== TEMPERATURAS CRITICAS ===
TEMP -> 41.2
TEMP -> 39.1
TEMP -> 45.0
```

---

# Paso 4 — Convertir Celsius a Fahrenheit

## Problema

El sistema debe enviar datos a un software estadounidense.

---

# Fórmula

F=(C\times\frac{9}{5})+32

---

# Explicación conceptual

Usaremos:

```java id="1kpznm"
map()
```

para transformar datos.

---

# Código

```java id="0mw9mp"
System.out.println("=== TEMPERATURAS EN FAHRENHEIT ===");

datos.stream()
        .filter(d -> d.getSensor().equals("TEMP"))
        .map(d -> (d.getValor() * 9 / 5) + 32)
        .forEach(System.out::println);
```

---

# Explicación visual

```text id="3gncs3"
ANTES:
35.5

DESPUÉS:
95.9
```

---

# Resultado esperado

```text id="5y8fef"
95.9
106.16
102.38
113.0
83.12
```

---

# Paso 5 — Calcular promedio de temperatura

## Problema

El sistema necesita conocer la temperatura promedio.

---

# Explicación conceptual

Usaremos:

```java id="p0d9ti"
mapToDouble()
```

para convertir objetos → números.

Luego:

```java id="0mf9v8"
average()
```

---

# Código

```java id="bwfxkl"
double promedio = datos.stream()
        .filter(d -> d.getSensor().equals("TEMP"))
        .mapToDouble(SensorData::getValor)
        .average()
        .orElse(0);

System.out.println("Promedio temperatura: " + promedio);
```

---

# Resultado esperado

```text id="5e6y3o"
Promedio temperatura: 37.84
```

---

# Paso 6 — Ordenar temperaturas de mayor a menor

## Problema

La empresa quiere visualizar temperaturas extremas primero.

---

# Explicación conceptual

Usaremos:

```java id="3ifgdb"
sorted()
```

junto con:

```java id="mk14aq"
Comparator
```

---

# Código

```java id="8tb9yu"
import java.util.Comparator;

System.out.println("=== TEMPERATURAS ORDENADAS ===");

datos.stream()
        .filter(d -> d.getSensor().equals("TEMP"))
        .sorted(Comparator.comparingDouble(SensorData::getValor)
                .reversed())
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="12k8u2"
TEMP -> 45.0
TEMP -> 41.2
TEMP -> 39.1
TEMP -> 35.5
TEMP -> 28.4
```

---

# Paso 7 — Mostrar Top 3 temperaturas más altas

## Problema

El dashboard principal mostrará únicamente los valores más críticos.

---

# Explicación conceptual

Usaremos:

```java id="5c0jqz"
limit()
```

---

# Código

```java id="8f5wkt"
System.out.println("=== TOP 3 TEMPERATURAS ===");

datos.stream()
        .filter(d -> d.getSensor().equals("TEMP"))
        .sorted(Comparator.comparingDouble(SensorData::getValor)
                .reversed())
        .limit(3)
        .forEach(System.out::println);
```

---

# Explicación visual

```text id="89uzl0"
ORDENADO:
45.0
41.2
39.1
35.5
28.4

LIMIT(3):
45.0
41.2
39.1
```

---

# Resultado esperado

```text id="2zvfgv"
=== TOP 3 TEMPERATURAS ===
TEMP -> 45.0
TEMP -> 41.2
TEMP -> 39.1
```

---

# Paso 8 — Construcción de pipeline completa

## Explicación conceptual

Aquí los estudiantes verán la filosofía real de Streams.

Una pipeline puede encadenar múltiples operaciones:

```text id="m4jlwm"
Dataset
 → Filter
 → Transform
 → Sort
 → Limit
 → Output
```

---

# Pipeline completa

```java id="1jmk9m"
datos.stream()
        .filter(d -> d.getSensor().equals("TEMP"))
        .filter(d -> d.getValor() > 30)
        .map(d -> (d.getValor() * 9 / 5) + 32)
        .sorted(Comparator.reverseOrder())
        .limit(3)
        .forEach(System.out::println);
```

---

# Explicación del flujo

## 1. Filtrar sensores TEMP

```java id="mqyv47"
.filter(d -> d.getSensor().equals("TEMP"))
```

---

## 2. Mantener valores > 30

```java id="xg9m3l"
.filter(d -> d.getValor() > 30)
```

---

## 3. Convertir a Fahrenheit

```java id="bdk1hj"
.map(d -> (d.getValor() * 9 / 5) + 32)
```

---

## 4. Ordenar

```java id="6e02oq"
.sorted(Comparator.reverseOrder())
```

---

## 5. Limitar Top 3

```java id="lpv5os"
.limit(3)
```

---

# Paso 9 — Desafíos adicionales

## Nivel 1

Mostrar únicamente sensores HUM.

---

## Nivel 2

Calcular promedio de humedad.

---

## Nivel 3

Mostrar temperatura mínima.

Pista:

```java id="n2j73u"
min()
```

---

## Nivel 4

Convertir temperaturas a Strings:

```text id="b8m3gw"
"Temperatura detectada: 41.2"
```

---

## Nivel 5 🔥

Mostrar únicamente temperaturas:

* mayores al promedio,
* ordenadas descendentemente.

---

# Paso 10 — Comparación con programación tradicional

## Solución clásica

```java id="4iwg1e"
for (SensorData d : datos) {
    if (d.getSensor().equals("TEMP") && d.getValor() > 38) {
        System.out.println(d);
    }
}
```

---

# Solución con Streams

```java id="7d1gdo"
datos.stream()
        .filter(d -> d.getSensor().equals("TEMP"))
        .filter(d -> d.getValor() > 38)
        .forEach(System.out::println);
```

---

# Reflexión para clase

## Preguntas

1. ¿Por qué Streams se parece a una pipeline de Machine Learning?
2. ¿Qué ventajas tiene encadenar operaciones?
3. ¿Por qué este enfoque escala mejor para Big Data?
4. ¿Qué pasaría si el dataset tuviera millones de registros?

---

# Mini reto final 🔥

## Problema

La empresa necesita detectar sensores críticos prioritarios.

## Reglas

Mostrar:

* únicamente sensores TEMP,
* con temperatura mayor a 40,
* convertidos a Fahrenheit,
* ordenados de mayor a menor.

---

# Resultado esperado

```text id="jlw0ji"
113.0
106.16
```

---

# Conceptos aprendidos

* Streams
* pipelines
* filter
* map
* mapToDouble
* sorted
* limit
* average
* Comparator
* procesamiento funcional de datasets
* simulación de procesamiento IoT y ML
