---
title: "Ejemplo 9"
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

# Mini ETL de Machine Learning usando Archivos + Streams

## Procesamiento real de datasets con `Files.lines()`

# Contexto

Una startup de Inteligencia Artificial recibe diariamente archivos `.csv` con información académica de estudiantes.

Antes de entrenar modelos de Machine Learning, el sistema debe:

* leer archivos,
* limpiar datos,
* filtrar registros inválidos,
* transformar información,
* calcular estadísticas,
* generar rankings.

Tu equipo desarrollará un mini sistema ETL usando:

* Java NIO,
* Streams,
* programación funcional,
* procesamiento de archivos reales.

Este laboratorio es extremadamente importante porque conecta Java Streams con procesamiento de datos del mundo real.

---

# ¿Qué aprenderán?

Al finalizar este laboratorio, los estudiantes podrán:

* Leer archivos usando `Files.lines()`.
* Procesar datasets reales.
* Convertir texto → objetos.
* Construir pipelines funcionales.
* Aplicar:

  * `filter`
  * `map`
  * `sorted`
  * `limit`
  * `collect`
  * `groupingBy`
  * `average`
* Entender cómo funcionan sistemas ETL reales.

---

# Concepto clave — ETL

ETL significa:

```text id="f0c8uh"
Extract
Transform
Load
```

---

# Flujo real

```text id="3hzw0r"
Archivo CSV
   ↓
Lectura
   ↓
Filtrado
   ↓
Transformación
   ↓
Análisis
   ↓
Reporte final
```

---

# Paso 1 — Crear archivo `students.csv`

## Contenido del archivo

```text id="jh0g4y"
Ana,Sistemas,91,95
Luis,Industrial,58,60
Maria,Sistemas,85,88
Carlos,Civil,70,72
Elena,Sistemas,97,98
Pedro,Industrial,78,80
Lucia,Civil,89,90
```

---

# Explicación del formato

Cada línea representa:

```text id="6l5lvs"
nombre,carrera,promedio,asistencia
```

---

# Paso 2 — Crear clase `StudentRecord`

## Código

```java id="2i2egv"
public class StudentRecord {

    private String nombre;
    private String carrera;
    private double promedio;
    private double asistencia;

    public StudentRecord(String nombre,
                         String carrera,
                         double promedio,
                         double asistencia) {

        this.nombre = nombre;
        this.carrera = carrera;
        this.promedio = promedio;
        this.asistencia = asistencia;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCarrera() {
        return carrera;
    }

    public double getPromedio() {
        return promedio;
    }

    public double getAsistencia() {
        return asistencia;
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

# Paso 3 — Leer archivo usando `Files.lines()`

## Explicación conceptual

Aquí empieza el procesamiento real.

```java id="nm2ovp"
Files.lines(...)
```

devuelve:

```text id="y5y4ln"
Stream<String>
```

Es decir:

```text id="7n7e13"
cada línea del archivo se convierte en un Stream
```

---

# Código básico

```java id="yjf8gs"
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {

        try (Stream<String> lineas =
                     Files.lines(Path.of("students.csv"))) {

            lineas.forEach(System.out::println);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

# Explicación importante

## try-with-resources

```java id="g5q9be"
try (...)
```

cierra automáticamente el Stream y el archivo.

Muy importante en sistemas reales.

---

# Paso 4 — Ignorar líneas vacías

## Problema

Los datasets reales suelen venir “sucios”.

---

# Código

```java id="jlwm300"
try (Stream<String> lineas =
             Files.lines(Path.of("students.csv"))) {

    lineas
            .filter(linea -> !linea.isBlank())
            .forEach(System.out::println);

}
```

---

# Explicación conceptual

```java id="jlwm301"
.isBlank()
```

detecta líneas vacías.

---

# Paso 5 — Convertir líneas en objetos

## Problema

Necesitamos transformar texto → objetos Java.

---

# Explicación conceptual

Aquí aparece el verdadero poder de `map()`.

Transformaremos:

```text id="jlwm302"
String → StudentRecord
```

---

# Código

```java id="jlwm303"
try (Stream<String> lineas =
             Files.lines(Path.of("students.csv"))) {

    lineas
            .map(linea -> linea.split(","))
            .map(datos -> new StudentRecord(
                    datos[0],
                    datos[1],
                    Double.parseDouble(datos[2]),
                    Double.parseDouble(datos[3])
            ))
            .forEach(System.out::println);

}
```

---

# Explicación visual

## Línea original

```text id="jlwm304"
Ana,Sistemas,91,95
```

---

# split(",")

```text id="jlwm305"
["Ana", "Sistemas", "91", "95"]
```

---

# Conversión final

```text id="jlwm306"
StudentRecord(...)
```

---

# Paso 6 — Filtrar estudiantes destacados

## Problema

Mostrar únicamente estudiantes con promedio > 85.

---

# Código

```java id="jlwm307"
try (Stream<String> lineas =
             Files.lines(Path.of("students.csv"))) {

    lineas
            .filter(linea -> !linea.isBlank())

            .map(linea -> linea.split(","))

            .map(datos -> new StudentRecord(
                    datos[0],
                    datos[1],
                    Double.parseDouble(datos[2]),
                    Double.parseDouble(datos[3])
            ))

            .filter(est -> est.getPromedio() > 85)

            .forEach(System.out::println);

}
```

---

# Pipeline conceptual

```text id="jlwm308"
Archivo
 ↓
Stream<String>
 ↓
split()
 ↓
Objeto StudentRecord
 ↓
filter()
 ↓
Resultado
```

---

# Paso 7 — Calcular promedio general

## Código

```java id="jlwm309"
try (Stream<String> lineas =
             Files.lines(Path.of("students.csv"))) {

    double promedio = lineas

            .filter(linea -> !linea.isBlank())

            .map(linea -> linea.split(","))

            .map(datos -> new StudentRecord(
                    datos[0],
                    datos[1],
                    Double.parseDouble(datos[2]),
                    Double.parseDouble(datos[3])
            ))

            .mapToDouble(StudentRecord::getPromedio)

            .average()

            .orElse(0);

    System.out.println(promedio);

}
```

---

# Paso 8 — Ordenar por promedio

## Código

```java id="jlwm310"
import java.util.Comparator;

try (Stream<String> lineas =
             Files.lines(Path.of("students.csv"))) {

    lineas
            .filter(linea -> !linea.isBlank())

            .map(linea -> linea.split(","))

            .map(datos -> new StudentRecord(
                    datos[0],
                    datos[1],
                    Double.parseDouble(datos[2]),
                    Double.parseDouble(datos[3])
            ))

            .sorted(Comparator.comparingDouble(
                    StudentRecord::getPromedio
            ).reversed())

            .forEach(System.out::println);

}
```

---

# Paso 9 — Top 3 estudiantes

## Código

```java id="jlwm311"
try (Stream<String> lineas =
             Files.lines(Path.of("students.csv"))) {

    lineas
            .filter(linea -> !linea.isBlank())

            .map(linea -> linea.split(","))

            .map(datos -> new StudentRecord(
                    datos[0],
                    datos[1],
                    Double.parseDouble(datos[2]),
                    Double.parseDouble(datos[3])
            ))

            .sorted(Comparator.comparingDouble(
                    StudentRecord::getPromedio
            ).reversed())

            .limit(3)

            .forEach(System.out::println);

}
```

---

# Paso 10 — Agrupar por carrera

## Código

```java id="jlwm312"
import java.util.Map;
import java.util.stream.Collectors;

try (Stream<String> lineas =
             Files.lines(Path.of("students.csv"))) {

    Map<String, List<StudentRecord>> agrupados = lineas

            .filter(linea -> !linea.isBlank())

            .map(linea -> linea.split(","))

            .map(datos -> new StudentRecord(
                    datos[0],
                    datos[1],
                    Double.parseDouble(datos[2]),
                    Double.parseDouble(datos[3])
            ))

            .collect(Collectors.groupingBy(
                    StudentRecord::getCarrera
            ));

    System.out.println(agrupados);

}
```

---

# Explicación conceptual

```text id="’wini313"
Sistemas → [Ana, Maria, Elena]
Civil → [Carlos, Lucia]
Industrial → [Luis, Pedro]
```

---

# Paso 11 — Generar mini reporte analítico

## Problema

Construir un reporte automático del dataset.

---

# Resultado esperado

```text id="’wini314"
===== DATASET REPORT =====

Total registros: 7
Promedio general: 81.14
Top estudiante: Elena
Cantidad destacados: 4
```

---

# Desafío 🔥

Resolver TODO usando Streams.

---

# Paso 12 — Nivel GOD 🚀

## Problema

Construir una pipeline estilo Spark.

---

# Reglas

El pipeline debe:

* leer archivo,
* ignorar líneas vacías,
* convertir a objetos,
* filtrar aprobados,
* ordenar descendentemente,
* obtener Top 5,
* convertir nombres a MAYÚSCULAS,
* exportar resultado.

---

# Resultado esperado

```text id="’wini315"
ELENA
ANA
LUCIA
MARIA
PEDRO
```

---

# Pipeline conceptual completa

```text id="’wini316"
CSV
 ↓
Files.lines()
 ↓
filter()
 ↓
split()
 ↓
map()
 ↓
StudentRecord
 ↓
sorted()
 ↓
limit()
 ↓
transformación final
 ↓
output
```

---

# Conceptos avanzados aprendidos

* `Files.lines()`
* Java NIO
* procesamiento de archivos
* ETL
* Streams reales
* parsing
* pipelines funcionales
* datasets reales
* transformación de texto → objetos
* analytics sobre archivos
* simulación de preprocessing ML

---

# Conexión con sistemas reales

Este laboratorio se parece muchísimo a:

* Spark DataFrames,
* Pandas pipelines,
* ETL empresariales,
* procesamiento de logs,
* análisis CSV,
* pipelines de Machine Learning,
* sistemas de analytics modernos.

---

# Reflexión final para clase

## Preguntas

1. ¿Por qué `Files.lines()` es tan poderoso?
2. ¿Qué ventajas tiene procesar archivos como Streams?
3. ¿Cómo se relaciona esto con Spark?
4. ¿Qué ocurre si el archivo tiene millones de líneas?
5. ¿Por qué esto se considera programación funcional?

---

# Resultado pedagógico final 🚀

Con este laboratorio los estudiantes ya habrán construido:

```text id="’wini317"
Un mini motor ETL estilo Big Data usando únicamente Java moderno.
```

Y habrán entendido las bases conceptuales de:

* Spark,
* ETL,
* procesamiento distribuido,
* pipelines ML,
* analytics modernas,
* procesamiento funcional de datasets.
