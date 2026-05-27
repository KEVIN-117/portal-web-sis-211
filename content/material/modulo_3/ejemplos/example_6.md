---
title: "Ejemplo 6"
description: "Análisis de modelos de Machine Learning usando Programación Funcional con Java Streams."
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

# Streams + Herencia + Polimorfismo

## Sistema de evaluación de modelos de Machine Learning

## Contexto

Una empresa de Inteligencia Artificial está desarrollando una plataforma capaz de entrenar y evaluar distintos modelos de Machine Learning.

El sistema trabaja con múltiples algoritmos, por ejemplo:

* Random Forest,
* Redes Neuronales,
* SVM,
* KNN.

Todos los modelos comparten ciertas características generales, como:

* nombre,
* accuracy,
* tiempo de entrenamiento.

Sin embargo, cada modelo pertenece a un tipo diferente.

La empresa necesita construir un sistema que permita analizar modelos usando:

* Programación Orientada a Objetos,
* herencia,
* polimorfismo,
* Java Streams.

Este ejercicio conecta directamente POO con programación funcional moderna.

---

# Objetivos del ejercicio

Al finalizar este laboratorio, el estudiante será capaz de:

* Aplicar herencia y polimorfismo.
* Utilizar clases abstractas.
* Trabajar con Streams sobre jerarquías de objetos.
* Aplicar:

  * `filter`
  * `map`
  * `sorted`
  * `count`
  * `average`
  * `instanceof`
* Comprender cómo Streams trabaja sobre tipos abstractos.

---

# Escenario del problema

La plataforma almacena distintos modelos de Machine Learning.

Todos comparten:

* nombre,
* accuracy,
* tiempo de entrenamiento.

Pero existen distintos tipos de modelos.

El sistema deberá:

* detectar modelos más precisos,
* generar rankings,
* calcular promedios,
* identificar tipos específicos.

---

# Paso 1 — Crear clase abstracta `ModeloML`

## Explicación conceptual

Usaremos una clase abstracta porque:

```text id="jlwm40"
Todos los modelos comparten características comunes.
```

---

# Código

```java id="jlwm41"
public abstract class ModeloML {

    protected String nombre;
    protected double accuracy;
    protected int tiempoEntrenamiento;

    public ModeloML(String nombre,
                    double accuracy,
                    int tiempoEntrenamiento) {

        this.nombre = nombre;
        this.accuracy = accuracy;
        this.tiempoEntrenamiento = tiempoEntrenamiento;
    }

    public String getNombre() {
        return nombre;
    }

    public double getAccuracy() {
        return accuracy;
    }

    public int getTiempoEntrenamiento() {
        return tiempoEntrenamiento;
    }

    @Override
    public String toString() {
        return nombre +
                " | Accuracy: " + accuracy +
                " | Tiempo: " + tiempoEntrenamiento + " min";
    }
}
```

---

# Paso 2 — Crear clases hijas

## Explicación conceptual

Cada algoritmo heredará de `ModeloML`.

---

# Clase `RandomForest`

```java id="jlwm42"
public class RandomForest extends ModeloML {

    public RandomForest(String nombre,
                        double accuracy,
                        int tiempoEntrenamiento) {

        super(nombre, accuracy, tiempoEntrenamiento);
    }
}
```

---

# Clase `NeuralNetwork`

```java id="jlwm43"
public class NeuralNetwork extends ModeloML {

    public NeuralNetwork(String nombre,
                         double accuracy,
                         int tiempoEntrenamiento) {

        super(nombre, accuracy, tiempoEntrenamiento);
    }
}
```

---

# Clase `SVM`

```java id="jlwm44"
public class SVM extends ModeloML {

    public SVM(String nombre,
               double accuracy,
               int tiempoEntrenamiento) {

        super(nombre, accuracy, tiempoEntrenamiento);
    }
}
```

---

# Paso 3 — Crear el dataset de modelos

## Explicación conceptual

Aquí ocurre el polimorfismo.

La lista almacenará:

```text id="jlwm45"
List<ModeloML>
```

pero contendrá objetos de distintos tipos.

---

# Código

```java id="jlwm46"
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<ModeloML> modelos = new ArrayList<>();

        modelos.add(new RandomForest("Random Forest v1", 91.5, 20));
        modelos.add(new NeuralNetwork("Neural Net Alpha", 96.2, 120));
        modelos.add(new SVM("SVM Predictor", 88.4, 35));
        modelos.add(new NeuralNetwork("DeepVision", 98.1, 200));
        modelos.add(new RandomForest("Forest Boost", 93.7, 25));

    }
}
```

---

# Explicación importante

Aquí:

```java id="jlwm47"
List<ModeloML>
```

puede almacenar:

* `RandomForest`
* `NeuralNetwork`
* `SVM`

gracias al polimorfismo.

---

# Paso 4 — Filtrar modelos con accuracy mayor a 90

## Problema

La empresa quiere identificar modelos de alta precisión.

Regla:

```text id="jlwm48"
Accuracy > 90
```

---

# Código

```java id="jlwm49"
System.out.println("=== MODELOS PREMIUM ===");

modelos.stream()
        .filter(m -> m.getAccuracy() > 90)
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="jlwm50"
Random Forest v1
Neural Net Alpha
DeepVision
Forest Boost
```

---

# Paso 5 — Obtener modelo más preciso

## Problema

El sistema necesita detectar el mejor modelo.

---

# Explicación conceptual

Usaremos:

```java id="jlwm51"
max()
```

---

# Código

```java id="jlwm52"
import java.util.Comparator;

ModeloML mejor = modelos.stream()
        .max(Comparator.comparingDouble(ModeloML::getAccuracy))
        .orElse(null);

System.out.println("=== MEJOR MODELO ===");
System.out.println(mejor);
```

---

# Resultado esperado

```text id="jlwm53"
DeepVision | Accuracy: 98.1 | Tiempo: 200 min
```

---

# Paso 6 — Contar cuántos modelos son `NeuralNetwork`

## Problema

La empresa quiere analizar qué tipos de algoritmos predominan.

---

# Explicación conceptual

Usaremos:

```java id="jlwm54"
instanceof
```

---

# Código

```java id="jlwm55"
long redesNeuronales = modelos.stream()
        .filter(m -> m instanceof NeuralNetwork)
        .count();

System.out.println("Cantidad Neural Networks: " + redesNeuronales);
```

---

# Explicación importante

```java id="jlwm56"
m instanceof NeuralNetwork
```

pregunta:

> “¿Este objeto pertenece a la clase NeuralNetwork?”

---

# Resultado esperado

```text id="jlwm57"
Cantidad Neural Networks: 2
```

---

# Paso 7 — Ordenar modelos por accuracy

## Problema

La empresa necesita un ranking de precisión.

---

# Código

```java id="jlwm58"
System.out.println("=== RANKING MODELOS ===");

modelos.stream()
        .sorted(Comparator.comparingDouble(ModeloML::getAccuracy)
                .reversed())
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="jlwm59"
DeepVision
Neural Net Alpha
Forest Boost
Random Forest v1
SVM Predictor
```

---

# Paso 8 — Calcular accuracy promedio

## Problema

El sistema quiere medir el rendimiento promedio.

---

# Código

```java id="jlwm60"
double promedio = modelos.stream()
        .mapToDouble(ModeloML::getAccuracy)
        .average()
        .orElse(0);

System.out.println("Accuracy promedio: " + promedio);
```

---

# Resultado esperado

```text id="jlwm61"
Accuracy promedio: 93.58
```

---

# Paso 9 — Obtener únicamente nombres de modelos

## Problema

La empresa quiere exportar un reporte simplificado.

---

# Código

```java id="jlwm62"
modelos.stream()
        .map(ModeloML::getNombre)
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="jlwm63"
Random Forest v1
Neural Net Alpha
SVM Predictor
DeepVision
Forest Boost
```

---

# Paso 10 — Pipeline de análisis inteligente

## Problema

El sistema quiere detectar modelos élite.

---

# Reglas

Mostrar modelos:

* con accuracy mayor a 92,
* ordenados descendentemente,
* mostrar únicamente Top 3.

---

# Código

```java id="jlwm64"
modelos.stream()
        .filter(m -> m.getAccuracy() > 92)
        .sorted(Comparator.comparingDouble(ModeloML::getAccuracy)
                .reversed())
        .limit(3)
        .forEach(System.out::println);
```

---

# Explicación del pipeline

```text id="jlwm65"
Dataset
 ↓
Filtrar accuracy > 92
 ↓
Ordenar
 ↓
Top 3
 ↓
Resultado
```

---

# Resultado esperado

```text id="jlwm66"
DeepVision
Neural Net Alpha
Forest Boost
```

---

# Paso 11 — Introducción a agrupación por tipo

## Problema

Agrupar modelos según su tipo.

---

# Código

```java id="jlwm67"
import java.util.Map;
import java.util.stream.Collectors;

Map<String, List<ModeloML>> agrupados = modelos.stream()
        .collect(Collectors.groupingBy(
                m -> m.getClass().getSimpleName()
        ));

System.out.println(agrupados);
```

---

# Explicación conceptual

```text id="jlwm68"
RandomForest → [...]
NeuralNetwork → [...]
SVM → [...]
```

---

# Paso 12 — Desafíos adicionales

## Nivel 1

Mostrar únicamente modelos con tiempo de entrenamiento menor a 50 minutos.

---

## Nivel 2

Calcular promedio únicamente de `NeuralNetwork`.

---

## Nivel 3

Mostrar únicamente modelos `RandomForest`.

---

## Nivel 4

Convertir modelos en mensajes personalizados:

```text id="jlwm69"
"Modelo DeepVision alcanzó 98.1% de accuracy"
```

---

## Nivel 5 🔥

Mostrar modelos:

* con accuracy mayor al promedio,
* que sean `NeuralNetwork`,
* ordenados por accuracy.

---

# Comparación con programación tradicional

## Solución clásica

```java id="jlwm70"
for (ModeloML m : modelos) {
    if (m.getAccuracy() > 90) {
        System.out.println(m);
    }
}
```

---

# Solución moderna con Streams

```java id="jlwm71"
modelos.stream()
        .filter(m -> m.getAccuracy() > 90)
        .forEach(System.out::println);
```

---

# Reflexión para clase

## Preguntas

1. ¿Por qué Streams funciona tan bien con polimorfismo?
2. ¿Qué ventajas tiene usar una clase abstracta?
3. ¿Cómo usan esto frameworks reales de IA?
4. ¿Qué relación tiene esto con pipelines modernas de Machine Learning?

---

# Mini reto final 🔥

## Problema

La empresa quiere construir un “Hall of Fame”.

## Reglas

Mostrar únicamente modelos:

* `NeuralNetwork`,
* accuracy mayor a 95,
* ordenados de mayor a menor,
* mostrar únicamente nombres.

---

# Resultado esperado

```text id="jlwm72"
DeepVision
Neural Net Alpha
```

---

# Conceptos aprendidos

* Herencia
* Polimorfismo
* Clases abstractas
* Streams
* filter
* map
* sorted
* average
* instanceof
* groupingBy
* pipelines orientadas a objetos
* análisis funcional aplicado a IA y Machine Learning
