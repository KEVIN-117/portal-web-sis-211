---
title: "Practica 7: Mini Framework de Machine Learning en Java"

tags: ["POO", "Herencia", "Polimorfismo", "Interfaces", "Clases Abstractas", "Programación Funcional", "Colecciones"]
---

## 🎯 Objetivo de la Práctica

Construir paso a paso un mini framework de Machine Learning aplicando los conceptos de POO vistos en clase: **herencia**, **clases abstractas**, **interfaces**, **polimorfismo** y **colecciones** (`ArrayList`, `HashMap`). Además, se introducirá el concepto de **expresiones Lambda** como una forma moderna de pasar comportamiento como parámetro.

## 🏢 Escenario

En la industria del software, bibliotecas de Machine Learning como Scikit-learn y Weka están construidas aplicando principios de Programación Orientada a Objetos.

> **Aclaración importante:** El objetivo de esta práctica **NO** es implementar algoritmos matemáticos reales de inteligencia artificial. Lo que nos interesa es aprender a **diseñar la arquitectura de software** usando Java y buenas prácticas de ingeniería. Los algoritmos serán simulados con lógica sencilla.

---

## Objetivos de Aprendizaje

Al finalizar el laboratorio, el estudiante será capaz de:

1. Aplicar correctamente los pilares de la Programación Orientada a Objetos.
2. Diseñar jerarquías de clases usando herencia y clases abstractas.
3. Entender la diferencia entre una interfaz normal y una interfaz funcional.
4. Utilizar polimorfismo para tratar objetos diferentes de manera uniforme.
5. Trabajar con colecciones modernas (`ArrayList`, `HashMap`).
6. Escribir su primera expresión Lambda en Java.

---

## Recomendaciones

* **Sigue el orden de los pasos:** Cada paso depende del anterior. No avances sin haber entendido el paso actual.
* **Consistencia del Idioma:** Acorde al estándar de la industria, las variables, métodos, clases e interfaces deben estar escritas íntegramente en inglés técnico.
* **No te asustes con los nombres:** "Machine Learning", "Regresión Lineal", etc. son solo nombres. La lógica que implementaremos es sencilla.

---

## Pasos para la Práctica

### Paso 0: Estructura del Proyecto (Paquetes)

Antes de escribir código, debemos organizar nuestro proyecto en **paquetes**. Los paquetes en Java son carpetas que agrupan clases relacionadas, igual que organizas documentos en carpetas en tu computadora.

Crea la siguiente estructura de carpetas dentro de `src/`:

```bash
src/
├── core/                          ← Paquete para contratos e interfaces
│   ├── Model.java
│   ├── EvaluationMetric.java
│   └── Exportable.java
│
├── base/                          ← Paquete para la clase abstracta base
│   └── AbstractAlgorithm.java
│
├── models/                        ← Paquete para los algoritmos concretos
│   ├── LinearRegression.java
│   └── DecisionTree.java
│
├── engine/                        ← Paquete para el motor del framework
│   └── MLFramework.java
│
└── App.java                       ← Clase principal (paquete raíz)
```

> 📌 **¿Por qué usar paquetes?** Porque en proyectos reales, tener todas las clases sueltas en una sola carpeta se vuelve caótico rápidamente. Los paquetes nos ayudan a:
>
> * Saber dónde buscar cada clase.
> * Separar responsabilidades (contratos vs. implementaciones).
> * Seguir buenas prácticas de la industria.

**Regla importante:** La primera línea de cada archivo `.java` debe declarar a qué paquete pertenece usando la palabra reservada `package`. Por ejemplo, si el archivo está en la carpeta `core/`, su primera línea será `package core;`.

---

### Paso 1: Crear las Interfaces (Los "contratos" del framework)

Una **interfaz** en Java es un contrato: define **qué** debe hacer una clase, pero no **cómo**. Piensa en ella como un acuerdo que toda clase que la implemente debe cumplir.

Vamos a crear **tres interfaces** dentro del paquete `core/`, cada una con un propósito diferente:

#### 1.1 — Interfaz principal: `Model`

Esta interfaz define las dos operaciones fundamentales que todo algoritmo de ML debe tener: **entrenar** (aprender de los datos) y **predecir** (hacer estimaciones con datos nuevos).

> 💡 Nota: Usaremos `List<Double>` (listas de doubles) como tipo de dato para representar las filas de datos numéricos. Cada fila es una `List<Double>` y el dataset completo es una `List<List<Double>>`.

```java
package core;

import java.util.List;

public interface Model {
    void train(List<List<Double>> data, List<Double> labels);

    List<Double> predict(List<List<Double>> inputData);
}
```

**¿Qué significa cada método?**

* `train(...)`: Recibe datos de entrenamiento y sus respuestas correctas (labels). El modelo "aprende" de ellos.
* `predict(...)`: Recibe datos nuevos y retorna predicciones (números).

#### 1.2 — Interfaz funcional: `EvaluationMetric`

Una **interfaz funcional** es una interfaz que tiene **exactamente un** método abstracto. Esto es especial porque nos permitirá usar **expresiones Lambda** más adelante.

```java
package core;

import java.util.List;

@FunctionalInterface
public interface EvaluationMetric {
    double calculateError(List<Double> real, List<Double> predicted);
}
```

**¿Para qué sirve?** Para calcular qué tan equivocado estuvo un modelo comparando los valores reales vs. los predichos.

#### 1.3 — Interfaz marcadora: `Exportable`

Una **interfaz marcadora** es una interfaz sin métodos. Su único propósito es "etiquetar" a una clase. Es como ponerle una pegatina a un objeto que dice: "este modelo se puede exportar a producción".

```java
package core;

public interface Exportable {
}
```

---

### Paso 2: Crear la Clase Abstracta Base (`AbstractAlgorithm`)

Ahora que tenemos los contratos, necesitamos una **clase abstracta** que implemente la interfaz `Model` parcialmente. Esta clase contendrá los atributos y comportamientos **comunes a todos** los algoritmos. Esta clase va en el paquete `base/`.

> 📌 Recuerda: Una clase abstracta **no se puede instanciar** directamente. Sirve como plantilla para sus clases hijas.

```java
package base;

import core.Model;

public abstract class AbstractAlgorithm implements Model {
    protected String algorithmName;
    protected boolean isTrained;

    public AbstractAlgorithm(String name) {
        this.algorithmName = name;
        this.isTrained = false;
    }

    // Método concreto: todas las hijas lo heredan tal cual
    public void displayStatus() {
        System.out.println("Algorithm: " + algorithmName + " | Trained: " + isTrained);
    }

    public String getAlgorithmName() {
        return algorithmName;
    }

    public boolean isTrained() {
        return isTrained;
    }

    // Los métodos train() y predict() de la interfaz Model
    // quedan SIN implementar aquí. Las clases hijas los definirán.
}
```

> 💡 Fíjate en el `import core.Model;` — como `Model` está en el paquete `core` y `AbstractAlgorithm` está en `base`, necesitamos importarla.

**¿Qué hace esta clase?**

* Guarda el nombre del algoritmo y si ya fue entrenado.
* Ofrece un método `displayStatus()` que cualquier hijo puede usar.
* **No implementa** `train()` ni `predict()` → eso lo harán las clases concretas.

---

### Paso 3: Crear el Primer Algoritmo Concreto (`LinearRegression`)

Es hora de crear nuestro primer algoritmo "real". La clase `LinearRegression` va en el paquete `models/`. Hereda de `AbstractAlgorithm` y además implementa la interfaz marcadora `Exportable` (indicando que este modelo se puede exportar).

```java
package models;

import java.util.ArrayList;
import java.util.List;

import base.AbstractAlgorithm;
import core.Exportable;

public class LinearRegression extends AbstractAlgorithm implements Exportable {

    private Double learningRate;

    public LinearRegression(String algorithmName, Double learningRate) {
        super(algorithmName);
        this.learningRate = learningRate;
    }

    public LinearRegression(String algorithmName) {
        super(algorithmName);
        this.learningRate = 0.01; // Default learning rate
    }

    public LinearRegression(Double learningRate) {
        super("Linear Regression");
        this.learningRate = learningRate;
    }

    @Override
    public void train(List<List<Double>> data, List<Double> labels) {
        System.out.println("[Process] Training " + algorithmName + " with LR=" + learningRate);
        this.isTrained = true;// Set to true immediately for demonstration purposes
    }

    @Override
    public List<Double> predict(List<List<Double>> inputData) {
        if (!isTrained) {
            throw new IllegalStateException("Error: Model is not trained yet.");
        }

        List<Double> predictions = new ArrayList<>();

        for (List<Double> features : inputData) {
            double prediction = 0.0; // Dummy prediction logic
            for (Double feature : features) {
                prediction += feature * 0.5; // Dummy weight
            }
            predictions.add(prediction);
        }
        return predictions;
    }

}
```

**Puntos clave de este paso:**

* ✅ Usamos `extends` para heredar de `AbstractAlgorithm`.
* ✅ Usamos `implements Exportable` para marcar el modelo como exportable.
* ✅ Llamamos a `super("Linear Regression")` para inicializar el nombre del padre.
* ✅ Implementamos los dos métodos abstractos: `train()` y `predict()`.

---

### Paso 4: Crear el Segundo Algoritmo Concreto (`DecisionTree`)

Ahora creamos un segundo algoritmo en el paquete `models/` para demostrar el **polimorfismo**: dos clases diferentes que comparten la misma interfaz pero se comportan de manera distinta.

```java
package models;

import java.util.ArrayList;
import java.util.List;

import base.AbstractAlgorithm;

public class DecisionTree extends AbstractAlgorithm {

    private Integer maxDepth;

    public DecisionTree(String algorithmName) {
        super(algorithmName);
    }

    public DecisionTree(Integer maxDepth) {
        super("Decision Tree");
        this.maxDepth = maxDepth;
    }

    @Override
    public void train(List<List<Double>> data, List<Double> labels) {
        System.out.println("[Process] Building " + algorithmName + " up to depth " + maxDepth);
        this.isTrained = true;
    }

    @Override
    public List<Double> predict(List<List<Double>> inputData) {
        if (!isTrained) {
            throw new IllegalStateException("Error: Model is not trained yet.");
        }

        List<Double> predictions = new ArrayList<>();

        for (List<Double> features : inputData) {
            double firstFeature = features.get(0);
            predictions.add(firstFeature > 0.5 ? 1.0 : 0.0); // Dummy decision tree logic
        }
        return predictions;
    }

}
```

**Nota:** Este algoritmo **NO** implementa `Exportable`. Esto será importante cuando el framework verifique qué modelos se pueden exportar.

---

### Paso 5: Crear el Orquestador (`MLFramework`)

El orquestador va en el paquete `engine/` y es la clase que **administra múltiples modelos**. Aquí usaremos:

* Un `ArrayList` para guardar los modelos registrados.
* **Polimorfismo** para tratar todos los modelos de manera uniforme.
* La interfaz marcadora para verificar si un modelo es exportable.

```java
package engine;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import base.AbstractAlgorithm;
import core.EvaluationMetric;
import core.Exportable;

public class MLFramework {
    private List<AbstractAlgorithm> pipeline = new ArrayList<>();
    private HashMap<String, Double> performanceMetrics = new HashMap<>();

    public void addModel(AbstractAlgorithm model) {
        pipeline.add(model);
    }

    public void addPerformanceMetric(String metricName, double value) {
        performanceMetrics.put(metricName, value);
    }

    public void evaluatePipeline(List<List<Double>> testData, List<Double> trueLabels, EvaluationMetric metric) {
        for (AbstractAlgorithm model : pipeline) {
            System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            model.displayStatus();

            model.train(testData, trueLabels);

            List<Double> predictions = model.predict(testData);
            double error = metric.calculateError(trueLabels, predictions);
            System.out.println("Model Error: " + error);

            System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

            if (model instanceof Exportable) {
                Thread exportThread = new Thread(() -> {
                    System.out.println(
                            "[System] Ready to be exported to production environment for " + model.getAlgorithmName());
                    System.out.println("[System] Exporting model...");
                });
                exportThread.start();
            } else {
                System.out.println("[System] This model runs only in-memory (Not Exportable).");
            }
        }
    }
}
```

**¿Qué conceptos de POO se ven aquí?**

* **Colecciones:** Usamos `ArrayList<AbstractAlgorithm>` para guardar múltiples modelos.
* **Polimorfismo:** El ciclo `for` recorre modelos de tipos diferentes (`LinearRegression`, `DecisionTree`) pero los trata a todos como `AbstractAlgorithm`.
* **`instanceof`:** Verificamos en tiempo de ejecución si un objeto implementa la interfaz `Exportable`.
* **Inyección de dependencias:** La métrica de evaluación se recibe como parámetro, no está fija dentro del método.

---

### Paso 6: Entender las Expresiones Lambda (Concepto)

Antes de escribir el `main`, entendamos qué es una **expresión Lambda**.

Una Lambda es una forma corta de escribir una implementación de una interfaz funcional. En lugar de crear una clase aparte, escribimos la lógica directamente.

**Sin Lambda** (forma tradicional):

```java
EvaluationMetric mae = new EvaluationMetric() {
    @Override
    public double calculateError(List<Double> real, List<Double> predicted) {
        double sumError = 0.0;
        for (int i = 0; i < real.size(); i++) {
            sumError += Math.abs(real.get(i) - predicted.get(i));
        }
        return sumError / real.size();
    }
};
```

**Con Lambda** (forma moderna y más corta):

```java
EvaluationMetric mae = (actual, pred) -> {
    double sumError = 0.0;
    for (int i = 0; i < actual.size(); i++) {
        sumError += Math.abs(actual.get(i) - pred.get(i));
    }
    return sumError / actual.size();
};
```

> 💡 Ambas hacen **exactamente lo mismo**. La Lambda es simplemente una forma más compacta de escribirlo. Funciona porque `EvaluationMetric` es una **interfaz funcional** (tiene un solo método abstracto).

---

### Paso 7: Crear la Clase Principal (`App`)

Finalmente, ensamblamos todas las piezas en la clase principal:

```java
import core.EvaluationMetric;
import engine.MLFramework;
import models.LinearRegression;
import models.DecisionTree;
import java.util.Arrays;
import java.util.List;

public class App {
    public static void main(String[] args) {
        System.out.println("=== INITIALIZING MACHINE LEARNING FRAMEWORK ===");

        // --- Paso A: Preparar los datos simulados ---
        List<List<Double>> dataset = Arrays.asList(
            Arrays.asList(1.5, 2.3),
            Arrays.asList(4.1, 0.9)
        );
        List<Double> labels = Arrays.asList(1.0, 0.0);

        // --- Paso B: Crear el framework y registrar los modelos ---
        MLFramework framework = new MLFramework();
        framework.addModel(new LinearRegression(0.01));
        framework.addModel(new DecisionTree(3));

        // --- Paso C: Definir la métrica de evaluación con una Lambda ---
        // Fórmula: Mean Absolute Error (MAE) = promedio de |real - predicho|
        EvaluationMetric meanAbsoluteError = (actual, pred) -> {
            double sumError = 0.0;
            for (int i = 0; i < actual.size(); i++) {
                sumError += Math.abs(actual.get(i) - pred.get(i));
            }
            return sumError / actual.size();
        };

        // --- Paso D: Ejecutar el pipeline ---
        framework.evaluatePipeline(dataset, labels, meanAbsoluteError);

        System.out.println("================================================");
        System.out.println("=== FRAMEWORK EXECUTION COMPLETE ===");
    }
}
```

---

## 🚀 Retos para el Estudiante

Expanda la estructura actual resolviendo los siguientes requerimientos:

### Reto 1: Nuevo Algoritmo — `NeuralNetwork`

Cree una nueva clase `NeuralNetwork` que herede de `AbstractAlgorithm` e implemente `Exportable`.

* Debe estar en el paquete `models`.
* Su constructor debe recibir un parámetro `int layers` (número de capas) y llamar a `super("Neural Network")`.
* En el método `train()`, imprima: `"[Process] Training Neural Network with X layers"` (donde X es el número de capas) y marque `isTrained = true`.
* En el método `predict()`, genere predicciones aleatorias (similar a `LinearRegression`).
* Agregue una instancia de `NeuralNetwork` al pipeline en `App`.

### Reto 2: Nueva Métrica Lambda — Mean Squared Error (MSE)

En la clase `App`, defina una **segunda** expresión Lambda que calcule el *Mean Squared Error*:

$$MSE = \frac{1}{n} \sum_{i=1}^{n} (real_i - predicho_i)^2$$

> 💡 **Pista:** La diferencia con el MAE es que en lugar de usar `Math.abs()`, eleva la diferencia al cuadrado usando `Math.pow(diferencia, 2)`.

Ejecute el pipeline **dos veces**: una con MAE y otra con MSE, para comparar resultados.

### Reto 3: Registro de Resultados con `HashMap`

Agregue un `HashMap<String, Double>` dentro de la clase `MLFramework` para almacenar el nombre de cada modelo evaluado (como clave) y su error calculado (como valor).

* Después de calcular el error de cada modelo, guárdelo en el mapa.
* Cree un método `printSummary()` que recorra el `HashMap` usando `.forEach()` e imprima un resumen. Ejemplo de salida:

```bash
=== SESSION SUMMARY ===
Linear Regression -> Error: 0.45
Decision Tree -> Error: 0.30
Neural Network -> Error: 0.52
```

---

## 📊 Rúbrica de Calificación (sobre 100 puntos)

| Criterio | Descripción | Puntaje |
| --- | --- | ---: |
| Interfaces | Creación correcta de `Model`, `EvaluationMetric` y `Exportable` | 10 |
| Clase Abstracta | `AbstractAlgorithm` implementa `Model`, usa `protected` y ofrece `displayStatus()` | 10 |
| Herencia (`LinearRegression`) | Extiende `AbstractAlgorithm`, implementa `Exportable`, usa `super()` | 10 |
| Herencia (`DecisionTree`) | Extiende `AbstractAlgorithm`, implementa `train()` y `predict()` | 10 |
| Colecciones (`ArrayList`) | Uso correcto del `ArrayList` en `MLFramework` para el pipeline | 10 |
| Polimorfismo | El pipeline recorre modelos distintos de forma uniforme | 10 |
| Expresión Lambda (MAE) | Implementación correcta de la métrica con Lambda | 10 |
| Estructura de Paquetes | Organización correcta en `core`, `base`, `models` y `engine` | 5 |
| Clean Code | Nomenclatura en inglés, imports correctos y legibilidad | 5 |
| Reto 1 — `NeuralNetwork` | Clase correcta con herencia y `Exportable` | 5 |
| Reto 2 — Lambda MSE | Segunda métrica Lambda implementada correctamente | 5 |
| Reto 3 — `HashMap` | Uso de `HashMap` con `.forEach()` para el resumen | 5 |
| Flujo Principal | Ejecución completa y correcta del `App` | 5 |

---

## 🧠 Reflexión Final

Este laboratorio demuestra que la Programación Orientada a Objetos no es únicamente un paradigma académico, sino la base arquitectónica de sistemas modernos de software.

**Resumen de conceptos aplicados:**

* ✅ **Interfaces** → Definimos contratos (`Model`, `EvaluationMetric`, `Exportable`).
* ✅ **Clases Abstractas** → Centralizamos lógica común en `AbstractAlgorithm`.
* ✅ **Herencia** → `LinearRegression` y `DecisionTree` extienden la clase base.
* ✅ **Polimorfismo** → El pipeline procesa diferentes algoritmos con el mismo código.
* ✅ **Colecciones** → `ArrayList` para el pipeline, `HashMap` para el resumen.
* ✅ **Lambdas** → Pasamos comportamiento como parámetro de forma compacta.
* ✅ **`instanceof`** → Verificamos capacidades en tiempo de ejecución.

Frameworks reales como Scikit-learn, Weka y múltiples plataformas empresariales utilizan exactamente estos principios para construir software escalable, mantenible y reutilizable.
