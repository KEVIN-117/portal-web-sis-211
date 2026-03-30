---
title: Practica 3 (Regresión Lineal con Java)
date: 2024-06-01
tags: ["Java", "POO", "Regresión Lineal"]
---

## 🎯 **Objetivo del laboratorio**

Al finalizar este laboratorio, el estudiante será capaz de:

- Crear clases en Java usando **POO**
- Trabajar con **objetos y métodos**
- Leer datos desde consola
- Aplicar una fórmula matemática en código
- Comprender de forma básica cómo funciona un modelo de predicción

---

## 🧠 **Contexto del problema**

Una empresa inmobiliaria quiere estimar el precio de casas según su tamaño.

Para ello, utilizará un modelo matemático sencillo basado en una línea recta:

$$\hat{y} = (w \cdot x) + b$$

Donde:

- `x` → tamaño de la casa
- `w` → cuánto aumenta el precio por cada unidad de tamaño
- `b` → precio base

👉 En este laboratorio **NO vamos a calcular w y b**, los usaremos directamente para enfocarnos en Java.

---

## 🧰 **Herramientas necesarias**

- Java JDK instalado
- Visual Studio Code
- Extensión de Java en VS Code (recomendado)

---

## 📁 **Estructura del proyecto**

Vamos a crear un proyecto simple **sin Maven ni Gradle**:

```plaintext
regresion-lineal-java/
│
├── src/
│   ├── Main.java
│   ├── Casa.java
│   └── ModeloLineal.java
│
└── README.md (opcional)
```

---

## 🪜 **Paso 1: Crear el proyecto**

1. Crea una carpeta llamada:

   ```bash
   regresion-lineal-java
   ```

2. Dentro, crea otra carpeta:

   ```bash
   src
   ```

3. Abre la carpeta en Visual Studio Code

---

## 🧱 **Paso 2: Crear la clase `House`**

📄 Archivo: `House.java`

Esta clase representa una casa con tamaño y precio, los cuales son sus atributos privados. Tendrá un constructor para inicializarlos y métodos getter para acceder a ellos.

```java
public class House {
    private double length;
    private double price;

    public House(double length, double price) {
        this.length = length;
        this.price = price;
    }

    // Métodos getter para acceder a los atributos privados
    public double getLength() {
        return length;
    }

    public double getPrice() {
        return price;
    }

}
```

### 🔍 Explicación

- `double` → tipo de dato decimal primitivo
- Constructor → permite crear objetos fácilmente.
- Ejemplo:

  ```java
  House h = new House(50, 150000);
  ```

---

## 🧱 **Paso 3: Crear la clase `LinearModel`**

📄 Archivo: `LinearModel.java`

```java
public class LinearModel {

    private double w;
    private double b;

    public LinearModel(double w, double b) {
        this.w = w;
        this.b = b;
    }

    public double predict(double x) {
        return (w * x) + b;
    }
}
```

### 🔍 Explicación

- `w` → pendiente
- `b` → intercepto
- `predict(x)` → aplica la fórmula

---

## 🧱 **Paso 4: Crear la clase principal**

📄 Archivo: `Main.java`

```java
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        // 1. Crear datos de ejemplo
        ArrayList<House> houses = new ArrayList<>();

        houses.add(new House(50, 150000));
        houses.add(new House(60, 180000));
        houses.add(new House(80, 240000));
        houses.add(new House(100, 300000));
        houses.add(new House(120, 360000));

        // 2. Crear modelo (valores definidos)
        LinearModel model = new LinearModel(3000, 0);

        // 3. Mostrar datos
        System.out.println("Datos de entrenamiento:");
        for (House h : houses) {
            System.out.println("Tamaño: " + h.getLength() + " -> Precio: " + h.getPrice());
        }

        // 4. Leer entrada del usuario
        Scanner scanner = new Scanner(System.in);
        System.out.print("\nIngrese el tamaño de la casa: ");
        double x = scanner.nextDouble();

        // 5. Predicción
        double resultado = model.predict(x);

        // 6. Mostrar resultado
        System.out.println("Precio estimado: " + resultado);

        scanner.close();
    }
}
```

---

## ▶️ **Paso 5: Compilar y ejecutar**

En la terminal dentro de `src`:

```bash
javac *.java
java Main
```

---

## 🧪 **Ejemplo de ejecución**

```plaintext
Datos de entrenamiento:
Tamaño: 50.0 -> Precio: 150000.0
Tamaño: 60.0 -> Precio: 180000.0
...

Ingrese el tamaño de la casa:
90

Precio estimado: 270000.0
```

---

## 🧠 **Refuerzo conceptual**

- Estás usando un **modelo matemático dentro de código**
- Estás separando responsabilidades:
  - `Casa` → datos
  - `ModeloLineal` → lógica
  - `Main` → ejecución

👉 Esto es **POO aplicada correctamente**

---

## ⚠️ **Errores comunes**

- ❌ Olvidar `;`
- ❌ No compilar todos los archivos
- ❌ Error en nombres de clases (Java es sensible a mayúsculas)
- ❌ No cerrar el `Scanner`

---

## 🚀 **Desafío (Nivel básico-intermedio)**

👉 Modifica el programa para que:

1. Permita al usuario ingresar **varias casas manualmente**
2. Guarde esos datos en la lista
3. Muestre todas las casas ingresadas

### 💡 Pista

```java
System.out.print("¿Cuántas casas desea ingresar?");
```

---

## 🌱 **Desafío adicional (opcional)**

👉 Muestra cuál casa tiene el **precio más alto**

---

## 🎯 **Cierre**

Este laboratorio es importante porque:

- Aprendes Java con un caso real ✔️
- Entiendes cómo funciona una predicción ✔️
- Te prepara para temas más avanzados como:
  - Machine Learning real
  - APIs
  - Sistemas inteligentes
