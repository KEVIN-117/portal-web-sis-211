---
title: "Regresión Lineal en Java con Entrenamiento"
tags: ["Regresión Lineal", "Java", "Machine Learning", "POO", "Clases", "Objetos"]
---

## 🎯 **Objetivo del Ejemplo**

Lo que aprenderemos es:

* Creacion e interaccion con clases las base de la POO
* Implementar un modelo de regresión lineal desde cero
* Calcular automáticamente los parámetros del modelo (**w** y **b**)
* Aplicar lógica matemática en código Java
* Entender cómo un modelo “aprende” a partir de datos

---

## 🧠 **Concepto clave**

Antes, usábamos valores fijos, en la [Regresión Lineal Simple: Practica 3](../../../practicas/Practica_3.md)
Ahora el programa **aprende los valores de w y b a partir de los datos**.

---

## 🧮 **Modelo matemático**

Seguimos usando:

$$
f_{w,b}(x)=wx+b

$$

Pero ahora:

**$$w$$ y $$b$$ se calculan automáticamente**

---

## 📐 **Fórmulas a implementar**

En esta seccion usamos el concepto de minimos cuadrados (Ordinary Least Squares $OLS$) para calcular los valores de $w$ y $b$.

### 🔹 Pendiente (w)

$$
w = \frac{\sum_{i=1}^{m}(x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{m}(x_i - \bar{x})^2}
$$

---

### 🔹 Intercepto (b)

$$
b = \bar{y} - w \bar{x}
$$
---

### 🔍 ¿Qué significa esto?

* `x̄` → promedio de x
* `ȳ` → promedio de y
* `m` → número de datos

Básicamente estamos encontrando la **mejor línea que se ajusta a los datos**

---

## 📁 **Estructura del proyecto (igual que antes)**

```plaintext
src/
├── Main.java
├── Casa.java
└── ModeloLineal.java
```

---

## 🪜 **IMPLEMENTACIÓN PASO A PASO**

---

## 🧱 **Paso 1: Clase `Casa` (sin cambios)**

```java
public class House {
    double size;
    double price;

    public House(double size, double price) {
        this.size = size;
        this.price = price;
    }
}
```

---

## 🧱 **Paso 2: Clase `ModeloLineal` (versión avanzada)**

Aquí está la parte importante 👇

```java
import java.util.List;

public class LinearRegressionModel {

    double w;
    double b;

    // Método para entrenar el modelo
    public void train(List<House> datos) {

        int m = datos.size();

        double sumX = 0;
        double sumY = 0;

        // 1. Calcular sumatorias
        for (House c : datos) {
            sumX += c.size;
            sumY += c.price;
        }

        double meanX = sumX / m;
        double meanY = sumY / m;

        double a = 0;
        double b = 0;

        // 2. Calcular numerador y denominador
        for (House c : datos) {
            double x = c.size;
            double y = c.price;

            a += (x - meanX) * (y - meanY);
            b += (x - meanX) * (x - meanX);
        }

        // 3. Calcular w y b
        w = a / b;
        b = meanY - (w * meanX);
    }

    // Método de predicción
    public double predict(double x) {
        return (w * x) + b;
    }
}
```

---

## 🧱 **Paso 3: Clase `Main`**

```java
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        ArrayList<House> houses = new ArrayList<>();

        houses.add(new House(50, 150000));
        houses.add(new House(60, 180000));
        houses.add(new House(80, 240000));
        houses.add(new House(100, 300000));
        houses.add(new House(120, 360000));

        LinearRegressionModel model = new LinearRegressionModel();

        // 🔥 ENTRENAMIENTO
        model.train(houses);

        System.out.println("Modelo entrenado:");
        System.out.println("w (pendiente): " + modelo.w);
        System.out.println("b (intercepto): " + modelo.b);

        Scanner scanner = new Scanner(System.in);
        System.out.print("\nIngrese el tamaño de la casa: ");
        double x = scanner.nextDouble();

        double resultado = modelo.predecir(x);

        System.out.println("Precio estimado: " + resultado);

        scanner.close();
    }
}
```

---

## ▶️ **Ejecución esperada**

```plaintext
Modelo entrenado:
w: 3000.0
b: 0.0

Ingrese el tamaño:
90

Precio estimado: 270000.0
```

---

## 🧠 **Qué acaba de pasar**

Nuestro programa ahora:

1. Recibe datos
2. Calcula estadísticas
3. Ajusta un modelo
4. Hace predicciones

💥 **Esto es Machine Learning real, esto solo es la base es mas complejo de lo que parece**

---

## ⚠️ **Errores comunes**

* División por cero (si todos los x son iguales)
* No usar `double`
* Lista vacía
* Olvidar llamar a `entrenar()`

---

## 🚀 **Desafío final**

Agrega un método:

```java
double calcularError(List<Casa> datos)
```

Que calcule el **error promedio del modelo**:

💡 Pista:

$$
error = \frac{1}{m}\sum_{i=1}^{m}(y_i - \hat{y})^2
$$

Donde $\hat{y}$ es el valor predicho por el modelo y su formula es:

$$
\hat{y} = (w \cdot x) + b
$$

```java
public double calcularError(List<House> datos) {
    double error = 0;
    for (House c : datos) {
        error += Math.pow(c.price - predict(c.size), 2);
    }
    return error / datos.size();
}
```

---

## 🌱 **Mini desafío extra**

* Mostrar cuál dato tiene mayor error
* Mostrar todos los errores
