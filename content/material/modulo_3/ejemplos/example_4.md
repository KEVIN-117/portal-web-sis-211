---
title: "Ejemplo 4"
description: "Análisis de transacciones financieras utilizando Programación Funcional con Java Streams."
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

# Detección de fraude bancario con Streams

## Análisis de transacciones financieras usando Programación Funcional

## Contexto

Una fintech especializada en pagos digitales está desarrollando un sistema inteligente de detección de fraude.

Cada día, miles de transacciones son procesadas por el sistema bancario.

El departamento de análisis necesita construir una mini herramienta capaz de:

* detectar transacciones sospechosas,
* identificar montos elevados,
* calcular estadísticas financieras,
* generar listas de usuarios de riesgo.

El objetivo del laboratorio es aplicar Java Streams sobre un escenario muy cercano a sistemas reales de análisis financiero y Machine Learning.

---

# Objetivos del laboratorio

Al finalizar el laboratorio, el estudiante será capaz de:

* Aplicar Streams sobre datasets financieros.
* Utilizar:

  * `filter`
  * `map`
  * `distinct`
  * `reduce`
  * `sum`
  * `max`
* Comprender cómo funcionan los pipelines de análisis financiero.
* Relacionar Streams con sistemas de detección de anomalías.

---

# Escenario del problema

Cada transacción bancaria contiene:

* usuario,
* monto,
* indicador de sospecha.

El sistema deberá analizar estas transacciones para detectar posibles fraudes.

---

# Paso 1 — Crear la clase `Transaccion`

## Explicación conceptual

Cada objeto representará una operación bancaria.

---

# Código

```java id="vxezgo"
public class Transaccion {

    private String usuario;
    private double monto;
    private boolean sospechosa;

    public Transaccion(String usuario,
                       double monto,
                       boolean sospechosa) {

        this.usuario = usuario;
        this.monto = monto;
        this.sospechosa = sospechosa;
    }

    public String getUsuario() {
        return usuario;
    }

    public double getMonto() {
        return monto;
    }

    public boolean isSospechosa() {
        return sospechosa;
    }

    @Override
    public String toString() {
        return usuario +
                " | Monto: " + monto +
                " | Sospechosa: " + sospechosa;
    }
}
```

---

# Paso 2 — Crear el dataset financiero

## Explicación conceptual

Simularemos transacciones reales.

---

# Código

```java id="4w01jq"
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Transaccion> transacciones = new ArrayList<>();

        transacciones.add(new Transaccion("Ana", 1500, false));
        transacciones.add(new Transaccion("Luis", 25000, true));
        transacciones.add(new Transaccion("Maria", 8000, false));
        transacciones.add(new Transaccion("Carlos", 40000, true));
        transacciones.add(new Transaccion("Elena", 12000, false));
        transacciones.add(new Transaccion("Luis", 30000, true));

    }
}
```

---

# Paso 3 — Detectar transacciones mayores a 10,000

## Problema

El banco desea monitorear movimientos financieros de alto valor.

Regla:

```text id="98gkl5"
Monto > 10000
```

---

# Explicación conceptual

Usaremos:

```java id="u8olb6"
filter()
```

para conservar únicamente transacciones relevantes.

---

# Código

```java id="l2j7xe"
System.out.println("=== TRANSACCIONES ALTAS ===");

transacciones.stream()
        .filter(t -> t.getMonto() > 10000)
        .forEach(System.out::println);
```

---

# Resultado esperado

```text id="t8cgm0"
=== TRANSACCIONES ALTAS ===
Luis | Monto: 25000.0 | Sospechosa: true
Carlos | Monto: 40000.0 | Sospechosa: true
Elena | Monto: 12000.0 | Sospechosa: false
Luis | Monto: 30000.0 | Sospechosa: true
```

---

# Paso 4 — Contar transacciones sospechosas

## Problema

El sistema necesita calcular cuántas operaciones podrían representar fraude.

---

# Explicación conceptual

`count()` cuenta elementos después del filtro.

---

# Código

```java id="7yfh5u"
long sospechosas = transacciones.stream()
        .filter(Transaccion::isSospechosa)
        .count();

System.out.println("Cantidad sospechosas: " + sospechosas);
```

---

# Explicación importante

## Referencia a método

```java id="ww4yut"
Transaccion::isSospechosa
```

equivale a:

```java id="h4ltxv"
t -> t.isSospechosa()
```

---

# Resultado esperado

```text id="tx1ig0"
Cantidad sospechosas: 3
```

---

# Paso 5 — Calcular suma total de montos

## Problema

La fintech necesita conocer el volumen total de dinero procesado.

---

# Explicación conceptual

Usaremos:

```java id="mjlwm2"
mapToDouble()
```

y luego:

```java id="mnx83u"
sum()
```

---

# Código

```java id="cg1x6q"
double total = transacciones.stream()
        .mapToDouble(Transaccion::getMonto)
        .sum();

System.out.println("Monto total procesado: " + total);
```

---

# Explicación visual

```text id="gh3j2o"
1500
25000
8000
40000
12000
30000
↓
SUMA TOTAL
```

---

# Resultado esperado

```text id="4tb6v1"
Monto total procesado: 116500.0
```

---

# Paso 6 — Obtener la transacción más alta

## Problema

El sistema necesita identificar la operación más grande del día.

---

# Explicación conceptual

Usaremos:

```java id="7u6i6w"
max()
```

junto con:

```java id="y0l7bg"
Comparator
```

---

# Código

```java id="6q3yca"
import java.util.Comparator;

Transaccion mayor = transacciones.stream()
        .max(Comparator.comparingDouble(Transaccion::getMonto))
        .orElse(null);

System.out.println("=== TRANSACCION MAS ALTA ===");
System.out.println(mayor);
```

---

# Resultado esperado

```text id="kqvrmp"
=== TRANSACCION MAS ALTA ===
Carlos | Monto: 40000.0 | Sospechosa: true
```

---

# Paso 7 — Obtener usuarios sospechosos sin repetir

## Problema

La unidad antifraude necesita una lista única de usuarios investigados.

---

# Explicación conceptual

Usaremos:

```java id="1qlmbf"
distinct()
```

para eliminar duplicados.

---

# Código

```java id="ic8q7j"
System.out.println("=== USUARIOS SOSPECHOSOS ===");

transacciones.stream()
        .filter(Transaccion::isSospechosa)
        .map(Transaccion::getUsuario)
        .distinct()
        .forEach(System.out::println);
```

---

# Explicación visual

```text id="mjlwm4"
ANTES:
Luis
Carlos
Luis

DESPUÉS:
Luis
Carlos
```

---

# Resultado esperado

```text id="s0w9d8"
=== USUARIOS SOSPECHOSOS ===
Luis
Carlos
```

---

# Paso 8 — Introducción a `reduce()`

## Explicación conceptual

`reduce()` permite combinar elementos en un único resultado.

Es una de las operaciones más importantes en programación funcional.

---

# Ejemplo — suma manual

## Código

```java id="p6t8v8"
double suma = transacciones.stream()
        .map(Transaccion::getMonto)
        .reduce(0.0, Double::sum);

System.out.println("Suma usando reduce: " + suma);
```

---

# Explicación importante

## reduce()

Funciona como:

```text id="xjlwm5"
resultado = resultado + elemento
```

---

# Visualización

```text id="jlwm6m"
0 + 1500
↓
1500 + 25000
↓
26500 + 8000
↓
...
```

---

# Resultado esperado

```text id="9n2xk0"
Suma usando reduce: 116500.0
```

---

# Paso 9 — Construcción de pipeline antifraude

## Problema

El sistema necesita generar un ranking de operaciones sospechosas críticas.

---

# Reglas

Mostrar únicamente:

* transacciones sospechosas,
* mayores a 20,000,
* ordenadas descendentemente.

---

# Código

```java id="61rk6z"
transacciones.stream()
        .filter(Transaccion::isSospechosa)
        .filter(t -> t.getMonto() > 20000)
        .sorted(Comparator.comparingDouble(Transaccion::getMonto)
                .reversed())
        .forEach(System.out::println);
```

---

# Explicación de pipeline

```text id="jlwm7z"
Dataset
 ↓
Filtrar sospechosas
 ↓
Filtrar montos altos
 ↓
Ordenar
 ↓
Resultado
```

---

# Resultado esperado

```text id="0c4s7l"
Carlos | Monto: 40000.0 | Sospechosa: true
Luis | Monto: 30000.0 | Sospechosa: true
Luis | Monto: 25000.0 | Sospechosa: true
```

---

# Paso 10 — Desafíos adicionales

## Nivel 1

Mostrar únicamente transacciones NO sospechosas.

---

## Nivel 2

Calcular promedio de montos.

Pista:

```java id="jlwm8m"
average()
```

---

## Nivel 3

Mostrar usuario con menor transacción.

---

## Nivel 4

Convertir transacciones a mensajes personalizados:

```text id="jlwm9m"
"ALERTA -> Luis realizó una operación de 25000"
```

---

## Nivel 5 🔥

Mostrar únicamente usuarios que:

* tengan transacciones sospechosas,
* y montos mayores a 25,000,
* sin repetir nombres.

---

# Comparación con programación tradicional

## Solución clásica

```java id="jlwm0m"
for (Transaccion t : transacciones) {
    if (t.isSospechosa() && t.getMonto() > 20000) {
        System.out.println(t);
    }
}
```

---

# Solución moderna con Streams

```java id="jlwm1m"
transacciones.stream()
        .filter(Transaccion::isSospechosa)
        .filter(t -> t.getMonto() > 20000)
        .forEach(System.out::println);
```

---

# Reflexión para clase

## Preguntas

1. ¿Por qué Streams es útil para análisis financiero?
2. ¿Qué ventajas ofrece frente a múltiples `for` anidados?
3. ¿Cómo se relaciona esto con detección de anomalías en Machine Learning?
4. ¿Qué pasaría si existieran millones de transacciones?

---

# Mini reto final 🔥

## Problema

La fintech quiere generar una “Lista Roja”.

## Reglas

Mostrar:

* usuarios sospechosos,
* con operaciones mayores a 15,000,
* ordenados de mayor a menor monto,
* sin repetir nombres.

---

# Conceptos aprendidos

* Streams
* filter
* map
* distinct
* mapToDouble
* sum
* reduce
* max
* Comparator
* pipelines financieras
* análisis funcional de datasets
* simulación de detección de fraude bancario