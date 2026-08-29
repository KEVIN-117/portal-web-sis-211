---
title: "Práctica 2: Mini-IA en Java — Predicción del Nivel de Riesgo"
description: "En esta práctica construiremos una pequeña aplicación en Java que simula un sistema de Machine Learning básico, utilizando un clasificador basado en reglas para predecir el nivel de riesgo académico de un estudiante."
tags: ["Git", "GitHub", "Java", "Programación", "Control de versiones"]
---



## 1. Datos generales

**Asignatura:** Tecnicas de Programación II
**Código:** SIS-211-S2
**Práctica:** Mini-IA en Java — Predicción del Nivel de Riesgo
**Tema integrador:** Fundamentos de programación aplicados a Machine Learning básico
**Duración:** 2–3 horas
**Modalidad:** Individual
**Nivel:** Inicial

---

## 2. Título de la práctica

**Mini-IA en Java: construyendo nuestro primer predictor de riesgo**

---

## 3. Introducción

En este laboratorio construiremos una pequeña aplicación que simula el funcionamiento de un sistema de Machine Learning.

No utilizaremos librerías de Inteligencia Artificial ni modelos matemáticos complejos. En su lugar, construiremos un **clasificador basado en reglas**.

Nuestro programa recibirá información de un estudiante, como:

* Edad.
* Cantidad de horas de estudio.
* Porcentaje de asistencia.
* Nota promedio.
* Cantidad de tareas completadas.

A partir de estos datos, el programa calculará un **puntaje de riesgo** y determinará si el estudiante presenta:

* Riesgo bajo.
* Riesgo medio.
* Riesgo alto.

La aplicación funcionará como una versión extremadamente sencilla de un sistema predictivo.

Por ejemplo:

```text
========================================
        MINI-IA STUDENT PREDICTOR
========================================

Nombre del estudiante: Kevin
Edad: 21
Horas de estudio por semana: 8
Asistencia: 65
Nota promedio: 52
Tareas completadas: 4

Analizando datos...
[#####...............] 25%
[##########..........] 50%
[###############.....] 75%
[####################] 100%

RESULTADO

Estudiante: Kevin
Puntaje de riesgo: 7

Predicción: RIESGO ALTO

La Mini-IA recomienda aumentar las horas
de estudio y mejorar la asistencia.
```

La finalidad del laboratorio no es crear un modelo de Machine Learning real, sino comprender cómo los conceptos fundamentales de programación pueden utilizarse para construir sistemas que toman decisiones a partir de datos.

---

# 4. Objetivos

Al finalizar el laboratorio, el estudiante será capaz de:

1. Crear y ejecutar un programa básico en Java.
2. Comprender la estructura de una clase y el método `main`.
3. Declarar y utilizar variables.
4. Utilizar diferentes tipos de datos.
5. Mostrar información mediante `System.out.println()`.
6. Recibir información mediante `Scanner`.
7. Utilizar operadores aritméticos y relacionales.
8. Construir decisiones mediante `if`, `else if` y `else`.
9. Utilizar `switch` para seleccionar opciones.
10. Utilizar ciclos `for`, `while` y `do-while`.
11. Combinar variables, condiciones y ciclos para resolver un problema.
12. Construir un pequeño clasificador basado en reglas.

---

# 5. Conceptos que se practicarán

Durante el laboratorio se trabajarán los siguientes conceptos:

```text
Java
 │
 ├── Sintaxis básica
 │
 ├── Entrada / Salida
 │    ├── System.out.println()
 │    └── Scanner
 │
 ├── Variables
 │    ├── int
 │    ├── double
 │    ├── String
 │    └── boolean
 │
 ├── Operadores
 │    ├── +
 │    ├── -
 │    ├── *
 │    ├── /
 │    ├── >
 │    ├── <
 │    ├── >=
 │    ├── <=
 │    └── ==
 │
 ├── Condicionales
 │    ├── if
 │    ├── else if
 │    ├── else
 │    └── switch
 │
 └── Bucles
      ├── for
      ├── while
      └── do-while
```

---

# 6. Requisitos previos

El estudiante debe contar con:

* JDK instalado.
* Un editor de código o IDE.
* Terminal o consola.
* Conocimientos básicos de cómo crear una carpeta y ejecutar comandos.

No es necesario tener conocimientos previos de Machine Learning.

---

# 7. Preparación del proyecto

Crear una carpeta llamada:

```bash
mkdir mini-ia-java
```

Dentro de ella crear el archivo:

```bash
New-Item -Name "MiniIA.java" -ItemType "file"
```

> [!TIP]
> En Windows, puedes usar el comando `New-Item` en PowerShell para crear archivos.

La estructura inicial será:

```bash
mini-ia-java/
└── MiniIA.java
```

Abrir `MiniIA.java`.

Nuestro primer programa será:

```java
public class MiniIA {

    public static void main(String[] args) {

        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");
    }
}
```

Guardar el archivo.

Desde la terminal:

```bash
javac MiniIA.java
```

Después:

```bash
java MiniIA
```

La salida esperada será:

```bash
================================
       MINI-IA EN JAVA
================================
Sistema iniciado correctamente.
```

---

# 8. Parte I — Variables: los datos de nuestra IA

Una IA necesita datos.

Nuestro programa trabajará inicialmente con los siguientes datos:

```java
String nombre = "Alex";
int edad = 20;
int horasEstudio = 10;
double asistencia = 85.5;
double notaPromedio = 72.0;
int tareasCompletadas = 8;
```

Cada variable almacena una información diferente.

Por ejemplo:

```java
String nombre = "Alex";
```

almacena texto.

```java
int edad = 20;
```

almacena números enteros.

```java
double notaPromedio = 72.0;
```

almacena números decimales.

Ahora modificar el programa:

```java
public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        String nombre = "Alex";
        int edad = 20;
        int horasEstudio = 10;
        double asistencia = 85.5;
        double notaPromedio = 72.0;
        int tareasCompletadas = 8;

        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Horas de estudio: " + horasEstudio);
        System.out.println("Asistencia: " + asistencia + "%");
        System.out.println("Nota promedio: " + notaPromedio);
        System.out.println("Tareas completadas: " + tareasCompletadas);
    }
}
```

## Ejercicio 1

Modificar los valores para representar tus propios datos.

Por ejemplo:


```bash
Nombre: Tu nombre
Edad: Tu edad
Horas de estudio: Tus horas de estudio
Asistencia: Tu porcentaje de asistencia
Nota promedio: Tu nota promedio
Tareas completadas: Tu cantidad de tareas completadas
```

El programa debe mostrar correctamente todos los datos, compila y ejecuta el programa para verificar que todo funciona.

> [!TIP]
> Para compilar y ejecutar el programa, utiliza los siguientes comandos en la terminal:
> ```bash
> javac MiniIA.java
> java MiniIA
> ```
>

---

# 9. Parte II — Entrada de datos

Hasta ahora nosotros escribimos directamente los datos dentro del programa.

Pero una aplicación real debe permitir que el usuario introduzca sus propios datos.

Para eso utilizaremos `Scanner`.

Agregar:

```java
import java.util.Scanner;
```

Después:

```java
Scanner sc = new Scanner(System.in);
```

Podemos solicitar información:

```java
System.out.print("Ingresa tu nombre: ");
String nombre = sc.nextLine();

System.out.print("Ingresa tu edad: ");
int edad = sc.nextInt();
```

Nuestro programa ahora puede interactuar con el usuario.

El código completo será:

```java
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre:");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad:");
        int edad = sc.nextInt();


        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);

        sc.close();
    }
}
```

> [!WARNING]
> El codigo hasta este punto no tiene que ser igual al que se presenta en la solución, pero deber tener la misma funcionalidad. Puedes modificarlo a tu gusto, siempre y cuando cumpla con los objetivos de la práctica.

> [!TIP]
> Recuerda cerrar el `Scanner` al final del programa para liberar recursos:
> Recuerda compilar y ejecutar el programa para verificar que todo funciona correctamente.

## Métodos importantes de Scanner

Utilizaremos:

```java
sc.nextLine();
```

para texto.

```java
sc.nextInt();
```

para números enteros.

```java
sc.nextDouble();
```

para números decimales.

---

# 10. Ejercicio 2 — Registro del estudiante

Modificar el programa para solicitar:

```bash
Nombre
Edad
Horas de estudio
Asistencia
Nota promedio
Tareas completadas
```

Una ejecución podría ser:

```bash
================================
       MINI-IA EN JAVA
================================

Ingresa tu nombre: Alex
Ingresa tu edad: 20
Horas de estudio por semana: 12
Porcentaje de asistencia: 85
Nota promedio: 78.5
Tareas completadas: 9

Datos registrados correctamente.
```

Codigo final:

```java
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad: ");
        int edad = sc.nextInt();

        System.out.println("Horas de estudio por semana: ");
        int horasEstudio = sc.nextInt();

        System.out.println("Porcentaje de asistencia: ");
        double asistencia = sc.nextDouble();

        System.out.println("Nota promedio: ");
        double notaPromedio = sc.nextDouble();

        System.out.println("Tareas completadas: ");
        int tareasCompletadas = sc.nextInt();

        System.out.println("Datos registrados correctamente.");

        sc.close();
    }
}
```

---

# 11. Parte III — Operadores

> [!TIP]
> Esta seccion es solo una introducción a los operadores. No es necesario que el estudiante escriba código en esta sección, pero sí debe comprender cómo funcionan los operadores para poder utilizarlos en la siguiente parte.

Ahora nuestra Mini-IA necesita analizar los datos.

Podemos realizar operaciones matemáticas:

```java
double promedio = (nota1 + nota2 + nota3) / 3;
```

> [!WARNING]
> En nuestro caso, recuerda que la nota promedio ya es un dato que el usuario introduce, por lo que no necesitamos calcularlo.

También podemos comparar valores.

Por ejemplo:

```java
if (notaPromedio >= 60) {
    System.out.println("Nota aprobatoria");
}
```

Operadores importantes:

```text
>     mayor que
<     menor que
>=    mayor o igual
<=    menor o igual
==    igual
!=    diferente
```

También utilizaremos operadores lógicos:

```text
&&    AND
||    OR
!     NOT
```

Ejemplo:

```java
if (notaPromedio >= 60 && asistencia >= 70) {
    System.out.println("Situación favorable");
}
```

Esto significa:

```text
nota >= 60
       Y
asistencia >= 70
```

Ambas condiciones deben cumplirse.

---

# 12. Parte IV — Nuestro primer clasificador

Ahora construiremos la primera versión de nuestra Mini-IA.

La lógica será:

```bash
Si nota >= 70
    y asistencia >= 80
        → Riesgo bajo

Si nota >= 50
    y asistencia >= 60
        → Riesgo medio

En cualquier otro caso
        → Riesgo alto
```

Implementarlo:

```java
if (notaPromedio >= 70 && asistencia >= 80) {

    System.out.println("Predicción: RIESGO BAJO");

} else if (notaPromedio >= 50 && asistencia >= 60) {

    System.out.println("Predicción: RIESGO MEDIO");

} else {

    System.out.println("Predicción: RIESGO ALTO");
}
```

Aquí acabamos de construir un **clasificador basado en reglas**.

No es Machine Learning real, porque las reglas fueron creadas manualmente por nosotros.

Pero conceptualmente estamos haciendo algo importante:

```text
DATOS
  ↓
ANÁLISIS
  ↓
REGLAS
  ↓
CLASIFICACIÓN
```

---

# 13. Ejercicio 3 — Clasificador de estudiantes

Agregar al programa la lógica de clasificación.

Probar al menos tres casos:

### Caso A

```bash
Nota: 85
Asistencia: 95
```

Resultado esperado:

```bash
RIESGO BAJO
```

### Caso B

```bash
Nota: 65
Asistencia: 70
```

Resultado esperado:

```bash
RIESGO MEDIO
```

### Caso C

```bash
Nota: 35
Asistencia: 45
```

Resultado esperado:

```bash
RIESGO ALTO
```

---

# 14. Parte V — Construyendo un sistema de puntuación

Ahora haremos algo más interesante.

En lugar de utilizar únicamente condiciones, nuestra Mini-IA tendrá un **Risk Score**.

Comenzamos:

```java
int riesgo = 0;
```

Después evaluamos los datos.

Si las horas de estudio son bajas:

```java
if (horasEstudio < 5) {
    riesgo = riesgo + 2;
}
```

Si la asistencia es baja:

```java
if (asistencia < 70) {
    riesgo = riesgo + 3;
}
```

Si la nota es baja:

```java
if (notaPromedio < 60) {
    riesgo = riesgo + 3;
}
```

Si no completa suficientes tareas:

```java
if (tareasCompletadas < 5) {
    riesgo = riesgo + 2;
}
```

Finalmente:

```java
System.out.println("Risk Score: " + riesgo);
```

---

# 15. Clasificación mediante Risk Score

Ahora definiremos:

```bash
0 - 2  → Riesgo bajo
3 - 5  → Riesgo medio
6+     → Riesgo alto
```

> [!THINK]
> El Risk Score es una forma de cuantificar el riesgo de un estudiante basado en varios factores.
> Que estructura condicional utilizarías para clasificar el riesgo según el Risk Score?

Código:

```java
if (riesgo <= 2) {

    System.out.println("Predicción: RIESGO BAJO");

} else if (riesgo <= 5) {

    System.out.println("Predicción: RIESGO MEDIO");

} else {

    System.out.println("Predicción: RIESGO ALTO");
}
```

Ahora nuestro sistema tiene:

```bash
Datos
  ↓
Variables
  ↓
Reglas
  ↓
Risk Score
  ↓
Predicción
```

El código completo será:

```java
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad: ");
        int edad = sc.nextInt();

        System.out.println("Horas de estudio por semana: ");
        int horasEstudio = sc.nextInt();

        System.out.println("Porcentaje de asistencia: ");
        double asistencia = sc.nextDouble();

        System.out.println("Nota promedio: ");
        double notaPromedio = sc.nextDouble();

        System.out.println("Tareas completadas: ");
        int tareasCompletadas = sc.nextInt();

        System.out.println("Datos registrados correctamente.");

        if (notaPromedio >= 70 && asistencia >= 80) {

            System.out.println("Predicción: RIESGO BAJO");

        } else if (notaPromedio >= 50 && asistencia >= 60) {

            System.out.println("Predicción: RIESGO MEDIO");

        } else {

            System.out.println("Predicción: RIESGO ALTO");
        }

        int riesgo = 0;

        if (horasEstudio < 5) {
            riesgo = riesgo + 2;
        }

        if (asistencia < 70) {
            riesgo = riesgo + 3;
        }

        if (notaPromedio < 60) {
            riesgo = riesgo + 3;
        }

        if (tareasCompletadas < 5) {
            riesgo = riesgo + 2;
        }

        System.out.println("Risk Score: " + riesgo);

        if (riesgo <= 2) {

            System.out.println("Predicción: RIESGO BAJO");

        } else if (riesgo <= 5) {

            System.out.println("Predicción: RIESGO MEDIO");

        } else {

            System.out.println("Predicción: RIESGO ALTO");
        }

        sc.close();
    }
}
```


---

# 16. Ejercicio 4 — Mejorando la Mini-IA

Agregar una nueva variable:

```java
int horasSueno;
```

Solicitarla mediante `Scanner`.

Agregar la regla:

```bash
Si duerme menos de 6 horas
    riesgo + 1
```

Implementar la condición correspondiente.

Después modificar la puntuación máxima y comprobar que el sistema continúa funcionando correctamente.

Codigo final:

```java {31-32,67-69}
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad: ");
        int edad = sc.nextInt();

        System.out.println("Horas de estudio por semana: ");
        int horasEstudio = sc.nextInt();

        System.out.println("Porcentaje de asistencia: ");
        double asistencia = sc.nextDouble();

        System.out.println("Nota promedio: ");
        double notaPromedio = sc.nextDouble();

        System.out.println("Tareas completadas: ");
        int tareasCompletadas = sc.nextInt();

        System.out.println("Ingresa tus horas de sueño promedio por noche: ");
        int horasSueno = sc.nextInt();

        System.out.println("Datos registrados correctamente.");

        if (notaPromedio >= 70 && asistencia >= 80) {

            System.out.println("Predicción: RIESGO BAJO");

        } else if (notaPromedio >= 50 && asistencia >= 60) {

            System.out.println("Predicción: RIESGO MEDIO");

        } else {

            System.out.println("Predicción: RIESGO ALTO");
        }

        int riesgo = 0;

        if (horasEstudio < 5) {
            riesgo = riesgo + 2;
        }

        if (asistencia < 70) {
            riesgo = riesgo + 3;
        }

        if (notaPromedio < 60) {
            riesgo = riesgo + 3;
        }

        if (tareasCompletadas < 5) {
            riesgo = riesgo + 2;
        }

        if (horasSueno < 6) {
            riesgo = riesgo + 1;
        }

        System.out.println("Risk Score: " + riesgo);

        if (riesgo <= 2) {

            System.out.println("Predicción: RIESGO BAJO");

        } else if (riesgo <= 5) {

            System.out.println("Predicción: RIESGO MEDIO");

        } else {

            System.out.println("Predicción: RIESGO ALTO");
        }

        sc.close();
    }
}
```

---

# 17. Parte VI — switch: seleccionar el nivel de estudiante

Ahora agregaremos una opción para identificar el nivel académico.

Mostrar:

```bash
Selecciona tu nivel:

1. Principiante
2. Intermedio
3. Avanzado
```

Leer la opción:

```java
int nivel = sc.nextInt();
```

Utilizar `switch`:

```java
switch (nivel) {

    case 1:
        System.out.println("Nivel: PRINCIPIANTE");
        break;

    case 2:
        System.out.println("Nivel: INTERMEDIO");
        break;

    case 3:
        System.out.println("Nivel: AVANZADO");
        break;

    default:
        System.out.println("Opción inválida");
}
```

El `switch` es útil cuando tenemos varias opciones discretas.

Codigo final:

```java {34-59}
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad: ");
        int edad = sc.nextInt();

        System.out.println("Horas de estudio por semana: ");
        int horasEstudio = sc.nextInt();

        System.out.println("Porcentaje de asistencia: ");
        double asistencia = sc.nextDouble();

        System.out.println("Nota promedio: ");
        double notaPromedio = sc.nextDouble();

        System.out.println("Tareas completadas: ");
        int tareasCompletadas = sc.nextInt();

        System.out.println("Ingresa tus horas de sueño promedio por noche: ");
        int horasSueno = sc.nextInt();

        System.out.println("Selecciona tu nivel:\r\n" + //
                " \r\n" + //
                "1. Principiante\r\n" + //
                "2. Intermedio\r\n" + //
                "3. Avanzado");
        int nivel = sc.nextInt();

        System.out.println("Datos registrados correctamente.");

        switch (nivel) {

            case 1:
                System.out.println("Nivel: PRINCIPIANTE");
                break;

            case 2:
                System.out.println("Nivel: INTERMEDIO");
                break;

            case 3:
                System.out.println("Nivel: AVANZADO");
                break;

            default:
                System.out.println("Opción inválida");
        }

        // verificación de riesgo y resto del código

        sc.close();
    }
}
```

---

# 18. Ejercicio 5 — Personalidad de la IA

Agregar un pequeño menú:

```bash
¿Cómo quieres que se comporte la Mini-IA?

1. Formal
2. Motivadora
3. Divertida
```

Dependiendo de la opción, mostrar diferentes mensajes.

Ejemplo:

```bash
Predicción: RIESGO MEDIO

Mensaje:
"Puedes mejorar. ¡Un poco más de esfuerzo y lo tienes!"
```

Para la opción divertida:

```bash
Predicción: RIESGO ALTO

Mensaje:
"¡Houston, tenemos un problema! Necesitamos estudiar."
```

---

# 19. Parte VII — Bucle for

Nuestra Mini-IA ahora simulará un pequeño proceso de análisis.

Queremos mostrar:

```bash
Analizando datos...
10%
20%
30%
40%
...
100%
```

Utilizar un ciclo `for`:

```java
for (int progreso = 10; progreso <= 100; progreso += 10) {

    System.out.println("Analizando... " + progreso + "%");
}
```

Resultado:

```bash
Analizando... 10%
Analizando... 20%
Analizando... 30%
Analizando... 40%
Analizando... 50%
Analizando... 60%
Analizando... 70%
Analizando... 80%
Analizando... 90%
Analizando... 100%
```

---

# 20. Ejercicio 6 — Barra de análisis

Crear una barra de progreso utilizando `for`.

El resultado debería parecerse a:

```bash
Analizando datos...

[##                  ] 10%
[####                ] 20%
[######              ] 30%
[########            ] 40%
[##########          ] 50%
[############        ] 60%
[##############      ] 70%
[################    ] 80%
[##################  ] 90%
[####################] 100%
```

Pista:

Utilizar:

```java
for (int progreso = 10; progreso <= 100; progreso += 10)
```

y construir el texto con `#`.

No es necesario utilizar arrays ni métodos todavía.

Codigo final:

```java {41-46, 50-62, 64-72}
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad: ");
        int edad = sc.nextInt();

        System.out.println("Horas de estudio por semana: ");
        int horasEstudio = sc.nextInt();

        System.out.println("Porcentaje de asistencia: ");
        double asistencia = sc.nextDouble();

        System.out.println("Nota promedio: ");
        double notaPromedio = sc.nextDouble();

        System.out.println("Tareas completadas: ");
        int tareasCompletadas = sc.nextInt();

        System.out.println("Ingresa tus horas de sueño promedio por noche: ");
        int horasSueno = sc.nextInt();

        System.out.println("Selecciona tu nivel:\r\n" + //
                " \r\n" + //
                "1. Principiante\r\n" + //
                "2. Intermedio\r\n" + //
                "3. Avanzado");
        int nivel = sc.nextInt();

        System.out.println("¿Cómo quieres que se comporte la Mini-IA?\r\n" + //
                " \r\n" + //
                "1. Formal\r\n" + //
                "2. Motivadora\r\n" + //
                "3. Divertida");
        int comportamiento = sc.nextInt();

        System.out.println("Datos registrados correctamente.");

        switch (comportamiento) {
            case 1:
                System.out.println("Comportamiento: FORMAL");
                break;
            case 2:
                System.out.println("Comportamiento: MOTIVADORA");
                break;
            case 3:
                System.out.println("Comportamiento: DIVERTIDA");
                break;
            default:
                System.out.println("Opción inválida");
        }

        for (int progreso = 10; progreso <= 100; progreso += 10) {

            System.out.println("Analizando... " + progreso + "%");
        }

        for (int progreso = 10; progreso <= 100; progreso += 10) {
            System.out
                    .println("[" + "##".repeat(progreso / 10) + " ".repeat(10 - progreso / 10) + "] " + progreso + "%");
        }

        // verificación de riesgo y resto del código

        sc.close();
    }
}
```

---

# 21. Parte VIII — Bucle while

Supongamos que la Mini-IA necesita verificar que la nota introducida sea válida.

Una nota debe estar entre:

```bash
0 y 100
```

Podemos utilizar:

```java
while (notaPromedio < 0 || notaPromedio > 100) {

    System.out.println("Nota Promedio inválida.");

    System.out.print("Ingresa nuevamente la notaPromedio: ");
    notaPromedio = sc.nextDouble();
}
```

Mientras la nota sea inválida, el programa continuará preguntando.

Esto representa un patrón muy importante:

```text
MIENTRAS la condición sea verdadera
        ↓
    repetir
```

---

# 22. Ejercicio 7 — Validación de datos

Agregar validaciones para:

```bash
Asistencia: 0 - 100
notaPromedio: 0 - 100
Horas de estudio: 0 o más
Tareas completadas: 0 o más
```

Por ejemplo:

```bash
Ingresa tu asistencia: 150

ERROR: La asistencia debe estar entre 0 y 100.

Ingresa tu asistencia: 85
```

Utilizar `while`.

Cosigo final:

```java {27-33}    
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad: ");
        int edad = sc.nextInt();

        System.out.println("Horas de estudio por semana: ");
        int horasEstudio = sc.nextInt();

        System.out.println("Porcentaje de asistencia: ");
        double asistencia = sc.nextDouble();

        System.out.println("Nota promedio: ");
        double notaPromedio = sc.nextDouble();
        while (notaPromedio < 0 || notaPromedio > 100) {

            System.out.println("Nota Promedio inválida.");

            System.out.print("Ingresa nuevamente la notaPromedio: ");
            notaPromedio = sc.nextDouble();
        }

        // resto del codigo, incluyendo validaciones para asistencia, horas de estudio y tareas completadas
    }
}
```

> [!WARNING]
> Recuerda que las validaciones son importantes para garantizar que los datos ingresados sean correctos y evitar errores en el análisis posterior.
> Tus validaciones deben ser similares a la de `notaPromedio`, pero adaptadas a cada variable según sus rangos válidos.
---

# 23. Parte IX — do-while

Queremos permitir que el usuario ejecute nuevamente la Mini-IA.

El programa debe terminar preguntando:

```bash
¿Quieres analizar otro estudiante?

1. Sí
2. No
```

Utilizaremos:

```java {13-24}
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema iniciado correctamente.");

        int continuar;
        do {

            // código de análisis, variables, validaciones, etc.

            System.out.println();
            System.out.println("¿Quieres analizar otro estudiante?");
            System.out.println("1. Sí");
            System.out.println("2. No");

            continuar = sc.nextInt();

        } while (continuar == 1);
        sc.close();
    }
}
```

La diferencia importante es que `do-while` ejecuta el bloque **al menos una vez**.

---

# 24. Reto final — Mini-IA Student Predictor

Ahora debes unir todos los conceptos aprendidos.

El programa final debe funcionar aproximadamente así:

```bash
=============================================
          MINI-IA STUDENT PREDICTOR
=============================================

Sistema de predicción académica
Versión 1.0

---------------------------------------------
          REGISTRO DEL ESTUDIANTE
---------------------------------------------

Nombre: Alex
Edad: 21
Horas de estudio por semana: 4
Asistencia: 65
Nota promedio: 48
Tareas completadas: 3
Horas de sueño: 5

---------------------------------------------
          ANALIZANDO DATOS
---------------------------------------------

[##                  ] 10%
[####                ] 20%
[######              ] 30%
[########            ] 40%
[##########          ] 50%
[############        ] 60%
[##############      ] 70%
[################    ] 80%
[##################  ] 90%
[####################] 100%

Análisis completado.

---------------------------------------------
             RESULTADO
---------------------------------------------

Estudiante: Alex

Risk Score: 11

Predicción: RIESGO ALTO

Recomendaciones:

- Aumentar las horas de estudio.
- Mejorar la asistencia.
- Completar más tareas.
- Dormir al menos 6 horas.

=============================================

¿Quieres analizar otro estudiante?

1. Sí
2. No
```

Codigo final:

```java
import java.util.Scanner;

public class MiniIA {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("================================");
        System.out.println("       MINI-IA EN JAVA          ");
        System.out.println("================================");

        System.out.println("Sistema de predicción académica");
        System.out.println("Versión 1.0");

        int continuar;
        do {
            System.out.println("---------------------------------------------");
            System.out.println("          REGISTRO DEL ESTUDIANTE            ");
            System.out.println("---------------------------------------------");

            // código de análisis
            System.out.println("Nombre: ");
            String nombre = sc.nextLine();

            System.out.println("Edad: ");
            int edad = sc.nextInt();

            System.out.println("Horas de estudio por semana: ");
            int horasEstudio = sc.nextInt();

            System.out.println("Asistencia: ");
            double asistencia = sc.nextDouble();

            System.out.println("Nota promedio: ");
            double notaPromedio = sc.nextDouble();
            while (notaPromedio < 0 || notaPromedio > 100) {

                System.out.println("Nota Promedio inválida.");

                System.out.print("Ingresa nuevamente la notaPromedio: ");
                notaPromedio = sc.nextDouble();
            }

            System.out.println("Tareas completadas: ");
            int tareasCompletadas = sc.nextInt();

            System.out.println("Horas de sueño: ");
            int horasSueno = sc.nextInt();

            System.out.println("---------------------------------------------");
            System.out.println("          ANALIZANDO DATOS                   ");
            System.out.println("---------------------------------------------");

            for (int progreso = 10; progreso <= 100; progreso += 10) {
                System.out
                        .println("[" + "##".repeat(progreso / 10) + " ".repeat(10 - progreso / 10) + "] " + progreso
                                + "%");
            }

            System.out.println("Análisis completado.");

            System.out.println("---------------------------------------------");
            System.out.println("                RESULTADO                    ");
            System.out.println("---------------------------------------------");

            System.out.println("Estudiante: " + nombre);
            System.out.println("Edad: " + edad);
            System.out.println("Horas de estudio por semana: " + horasEstudio);
            System.out.println("Asistencia: " + asistencia);
            System.out.println("Nota promedio: " + notaPromedio);
            System.out.println("Tareas completadas: " + tareasCompletadas);
            System.out.println("Horas de sueño: " + horasSueno);

            int riesgo = 0;

            if (horasEstudio < 5) {
                riesgo = riesgo + 2;
            }

            if (asistencia < 70) {
                riesgo = riesgo + 3;
            }

            if (notaPromedio < 60) {
                riesgo = riesgo + 3;
            }

            if (tareasCompletadas < 5) {
                riesgo = riesgo + 2;
            }

            if (horasSueno < 6) {
                riesgo = riesgo + 1;
            }

            System.out.println("Risk Score: " + riesgo);

            if (riesgo <= 2) {

                System.out.println("Predicción: RIESGO BAJO");

            } else if (riesgo <= 5) {

                System.out.println("Predicción: RIESGO MEDIO");

            } else {

                System.out.println("Predicción: RIESGO ALTO");
            }

            System.out.println("=============================================");

            System.out.println();
            System.out.println("¿Quieres analizar otro estudiante?");
            System.out.println("1. Sí");
            System.out.println("2. No");

            continuar = sc.nextInt();

        } while (continuar == 1);
        sc.close();
    }
}
```

> [!WARNING]
> - Este es un ejemplo de cómo podría lucir el programa final. Puedes modificarlo y mejorarlo según tus necesidades, siempre y cuando cumpla con los objetivos del laboratorio.
> - Se eliminan algunas lineas de codigo realizadas en secciones anteriores, debido a que solo son para explicación y no son necesarias en el programa final.
> - Recuerda que las validaciones de datos deben estar presentes para garantizar que los datos ingresados sean correctos y evitar errores en el análisis posterior.


---

# 25. Reglas del modelo

El modelo deberá utilizar las siguientes reglas:

```bash
HORAS DE ESTUDIO

< 5 horas
    +2 riesgo


ASISTENCIA

< 70%
    +3 riesgo


NOTA

< 60
    +3 riesgo


TAREAS

< 5 tareas
    +2 riesgo


SUEÑO

< 6 horas
    +1 riesgo
```

Clasificación:

```bash
0 - 2
RIESGO BAJO

3 - 5
RIESGO MEDIO

6 o más
RIESGO ALTO
```

---

# 26. Requisitos obligatorios del proyecto

El programa final debe utilizar obligatoriamente:

```bash
✓ public class
✓ public static void main
✓ System.out.println()
✓ Scanner
✓ String
✓ int
✓ double
✓ variables
✓ operadores aritméticos
✓ operadores relacionales
✓ operadores lógicos
✓ if
✓ else if
✓ else
✓ switch
✓ for
✓ while
✓ do-while
```

No utilizar todavía:

```bash
✗ Arrays
✗ Métodos propios
✗ Clases adicionales
✗ Herencia
✗ Interfaces
✗ Colecciones
✗ Frameworks
✗ Librerías de Machine Learning
```

El objetivo es resolver el problema utilizando únicamente los fundamentos vistos en el laboratorio.

---

# 27. Desafío adicional — ¿Podemos hacer que la IA sea mejor?

Una vez terminado el programa, modificar las reglas.

Por ejemplo:

```bash
Si nota < 40
    +5 riesgo

Si asistencia < 50
    +5 riesgo

Si horas de estudio >= 15
    -2 riesgo

Si tareas completadas >= 10
    -2 riesgo
```

Investigar mediante pruebas cómo cambian las predicciones.

Crear diferentes estudiantes:

```bash
Estudiante A:
Nota: 90
Asistencia: 95
Horas de estudio: 15
Tareas: 10
Sueño: 8


Estudiante B:
Nota: 65
Asistencia: 75
Horas de estudio: 7
Tareas: 6
Sueño: 7


Estudiante C:
Nota: 30
Asistencia: 40
Horas de estudio: 2
Tareas: 2
Sueño: 4
```

Comparar los resultados.

---

# 28. Preguntas de reflexión

Responder al finalizar:

1. ¿Qué diferencia existe entre `int` y `double`?

2. ¿Para qué utilizamos `Scanner`?

3. ¿Qué diferencia existe entre `=` y `==`?

4. ¿Qué función cumple `if`?

5. ¿Cuándo utilizarías `switch` en lugar de `if`?

6. ¿Cuál es la diferencia entre `while` y `do-while`?

7. ¿Para qué utilizamos `for` en nuestro programa?

8. ¿Qué sucede si eliminamos una de las reglas del modelo?

9. ¿Por qué nuestra Mini-IA no es realmente un modelo de Machine Learning?

10. ¿Qué necesitaríamos para que el sistema aprendiera automáticamente las reglas a partir de datos?

> [!NOTE]
> Las respuestas deben ser breves y claras. No es necesario escribir un ensayo, pero sí demostrar comprensión de los conceptos.
> Las respuestas deben entregasrse en el archivo `README.md` dentro del repositorio de GitHub.

---

# 29. Concepto de Machine Learning detrás del laboratorio

Aunque el programa es sencillo, podemos identificar algunos conceptos relacionados con Machine Learning.

Tenemos:

```bash
              DATOS
                │
                ▼
       ┌─────────────────┐
       │    VARIABLES   │
       │                │
       │ Nota           │
       │ Asistencia     │
       │ Estudio        │
       │ Tareas         │
       │ Sueño          │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │     REGLAS     │
       │                │
       │ if / else      │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │   RISK SCORE   │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │   PREDICCIÓN   │
       │                │
       │ Bajo / Medio   │
       │ / Alto         │
       └─────────────────┘
```

En Machine Learning real, normalmente no escribiríamos manualmente todas las reglas.

Un algoritmo podría aprender patrones a partir de datos históricos.

Nuestro laboratorio representa una versión simplificada:

```bash
Programación tradicional:

Datos + Reglas escritas por programador
                    ↓
                 Resultado
```

Mientras que Machine Learning busca:

```bash
Datos + Resultados conocidos
                    ↓
             Algoritmo de ML
                    ↓
                  Modelo
                    ↓
           Nuevos datos → Predicción
```

Esta diferencia será importante para comprender posteriormente conceptos como:

* Dataset.
* Features.
* Labels.
* Entrenamiento.
* Modelo.
* Predicción.
* Clasificación.

---

# 30. Entrega del laboratorio

El estudiante deberá entregar un repositorio de GitHub con el código fuente del programa final.:

Si ejecutas `ls` en la raíz del proyecto, deberías ver:

```bash
MiniIA.java
README.md
```



---

# 31. Criterios de evaluación

| Criterio                                  | Puntaje |
| ----------------------------------------- | ------: |
| Sintaxis básica y estructura del programa |      10 |
| Variables y tipos de datos                |      15 |
| Entrada y salida                          |      15 |
| Condicionales                             |      20 |
| Operadores                                |      10 |
| Uso de `for`, `while` y `do-while`        |      20 |
| Clasificador / Risk Score                 |       5 |
| Presentación y creatividad                |       5 |
| **Total**                                 | **100** |

---

# 32. Bonus: convertirlo en un verdadero reto (opcional)

> [!NOTE]
> Esta sección es opcional. No es necesario completarla para aprobar el laboratorio, pero sí puede ser un reto interesante y ademas se te recompensará con puntos extra si logras implementarlo correctamente. (TODO ESTO ESTA SUJETO A INVESTIGACIÓN Y PRUEBAS, NO HAY RESPUESTAS DEFINITIVAS)

Los estudiantes que terminen antes pueden intentar implementar alguna de estas mejoras:

### Nivel 1 — Mensajes inteligentes

Dependiendo del riesgo:

```bash
RIESGO BAJO:
"¡Excelente trabajo! Sigue así."

RIESGO MEDIO:
"Vas por buen camino, pero puedes mejorar."

RIESGO ALTO:
"Necesitamos activar el modo supervivencia académica."
```

### Nivel 2 — Comparación

Permitir analizar varios estudiantes y determinar quién tiene mayor riesgo.

### Nivel 3 — Estadísticas

Calcular:

```bash
Cantidad de estudiantes analizados
Promedio de notas
Promedio de asistencia
Cantidad de estudiantes en riesgo alto
```

### Nivel 4 — Simulación de dataset

Generar múltiples estudiantes automáticamente y analizar sus resultados.

### Nivel 5 — Pensar como Data Scientist

Responder:

> ¿Qué variables adicionales utilizarías para predecir el rendimiento académico de un estudiante?

Algunas posibles variables:

```bash
Horas de estudio
Asistencia
Promedio anterior
Número de materias
Horas de sueño
Uso de redes sociales
Cantidad de tareas
Participación en clase
```

La idea es que el estudiante empiece a comprender que antes de construir un modelo de ML necesitamos decidir **qué datos son relevantes para realizar una predicción**.

---

# 33. Resultado esperado

Al terminar este laboratorio, el estudiante habrá construido desde cero una pequeña aplicación interactiva en Java capaz de:
```bash
                    ┌──────────────┐
                    │    USUARIO  │
                    └──────┬───────┘
                           │
                           ▼
                    Introduce datos
                           │
                           ▼
                    ┌──────────────┐
                    │   VARIABLES │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    REGLAS   │
                    │ if / else   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  RISK SCORE │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ PREDICCIÓN  │
                    │ Bajo/Medio/ │
                    │ Alto        │
                    └──────────────┘
```


<h1 class="text-center"> Buena suerte y disfruten aprendiendo Git, GitHub y Java! </h1>