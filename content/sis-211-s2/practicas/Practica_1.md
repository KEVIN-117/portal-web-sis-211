---
title: "Práctica 1: Introducción a Git, GitHub y fundamentos de Java"
description: "Esta práctica tiene como objetivo introducir a los estudiantes en el uso de Git y GitHub, así como en los fundamentos de programación en Java. A través de una serie de ejercicios progresivos, los estudiantes aprenderán a crear y gestionar un proyecto Java, versionarlo con Git, y colaborar utilizando GitHub."
tags: ["Git", "GitHub", "Java", "Programación", "Control de versiones"]
---

Sí. Te propongo estructurarla como una práctica progresiva donde Git/GitHub y Java no se vean como dos temas aislados, sino como un pequeño flujo de desarrollo real: crear un proyecto Java, versionarlo localmente, trabajar con commits y ramas, publicarlo en GitHub y finalmente modificarlo mediante ejercicios sencillos.

La práctica podría tener una duración aproximada de 2 a 3 horas y asumir únicamente conocimientos básicos de programación.


## 1. Datos generales

**Asignatura:** Programación / Desarrollo de Software
**Práctica:** Introducción a Git, GitHub y fundamentos de Java
**Duración:** 2–3 horas
**Modalidad:** Individual
**Nivel:** Inicial

## 2. Objetivos

Al finalizar la práctica, el estudiante será capaz de:

1. Reconocer los conceptos básicos de Git y GitHub.
2. Configurar Git en su equipo.
3. Crear y gestionar un repositorio Git local.
4. Realizar operaciones básicas como `add`, `commit`, `status`, `log` y `diff`.
5. Crear un repositorio remoto en GitHub.
6. Conectar un repositorio local con GitHub.
7. Realizar operaciones `push` y `pull`.
8. Crear y utilizar ramas básicas.
9. Reconocer la estructura mínima de un programa Java.
10. Comprender el método `main` como punto de entrada de una aplicación Java.
11. Compilar y ejecutar programas Java desde la terminal.
12. Resolver ejercicios sencillos utilizando variables, entrada de datos, operadores y estructuras de control.
13. Utilizar Git para registrar la evolución de los ejercicios realizados.

---

# 3. Conceptos previos

Antes de comenzar, el estudiante debe conocer:

* Qué es un lenguaje de programación.
* Variables y tipos de datos básicos.
* Operadores aritméticos.
* Condicionales básicos.
* Uso básico de la terminal.
* Conceptos básicos de programación.

No es necesario tener experiencia previa con Git.

---

# 4. Herramientas necesarias

Se utilizarán:

* **Java JDK 21** o una versión LTS disponible en el laboratorio.
* **Git**.
* Una cuenta de **GitHub**.
* Terminal:

  * PowerShell / CMD en Windows.
  * Terminal en Linux/macOS.
* Editor de código, por ejemplo VS Code, IntelliJ IDEA, Eclipse o Neovim.

La práctica puede realizarse completamente desde la terminal, lo cual es recomendable para que el estudiante comprenda qué está ocurriendo realmente.

---

# 5. Parte I — Conociendo el entorno

Primero verificaremos que las herramientas estén correctamente instaladas.

Ejecutar:

```bash
java --version
```

> [!WARNING]
> Si no se muestra la versión de Java, es posible que no esté correctamente instalada o que no esté en el PATH.
> Descargue el JDK de java https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html o use un gestor de paquetes como `apt`, `brew` o `chocolatey` según su sistema operativo.

Luego:

```bash
javac --version
```

> [!WARNING]
> Si no se muestra la versión de `javac`, es posible que no esté correctamente instalada o que no esté en el PATH.
> Asegúrese de tener instalado el JDK de Java, que incluye `javac`.

Finalmente:

```bash
git --version
```

> [!WARNING]
> Si no se muestra la versión de Git, es posible que no esté correctamente instalado o que no esté en el PATH.
> Descargue Git desde https://git-scm.com/install/windows o use un gestor de paquetes según su sistema operativo.

El estudiante debe registrar las versiones obtenidas.

### Actividad 1

Completar:

```text
Java:
Javac:
Git:
Sistema operativo:
Editor utilizado:
```

> [!TIP]
> Se recomienda completar esta información en un archivo `README.md` dentro de la carpeta de la práctica. Lo cual se crea en la siguiente sección.

Después verificar la configuración básica de Git:

```bash
git config --global user.name
git config --global user.email
```

Si no están configurados:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

Verificar:

```bash
git config --list
```

---

# 6. Parte II — Crear nuestro primer programa Java

Crear una carpeta para la práctica:

```bash
mkdir practica-git-java
cd practica-git-java
```

Crear un archivo llamado:

```text
Main.java
```

El primer programa será:

```java
public class Main {

    public static void main(String[] args) {
        System.out.println("Hola, mundo!");
    }
}
```

Aquí se debe identificar:

```java
public class Main
```

como la declaración de la clase.

Y:

```java
public static void main(String[] args)
```

como el punto de entrada del programa.

Compilar:

```bash
javac Main.java
```

Esto generará:

```text
Main.class
```

Ejecutar:

```bash
java Main
```

Resultado esperado:

```text
Hola, mundo!
```

### Preguntas

1. ¿Qué función cumple `main`?
2. ¿Qué diferencia existe entre `javac` y `java`?
3. ¿Qué archivo se genera después de compilar?
4. ¿Por qué el archivo se llama `Main.java`?
5. ¿Qué ocurre si la clase se llama `Programa` pero el archivo se llama `Main.java`?

> [!TIP]
> Se recomienda crear un archivo `README.md` con la información de la práctica, incluyendo las respuestas a las preguntas planteadas. Esto servirá como documentación del proyecto y ayudará a mantener un registro de lo aprendido.

---

# 7. Parte III — Nuestro primer repositorio Git

Ahora convertiremos el proyecto Java en un repositorio Git.

Ejecutar:
> [!TIP]
> Asegúrese de estar en la carpeta correcta antes de ejecutar los comandos de Git.

```bash
git init
```

> [!TIP]
> Este comando crea un nuevo repositorio Git en la carpeta actual. Se generará un subdirectorio oculto llamado `.git` que contiene todos los archivos necesarios para el control de versiones. Adicinal a ello recomiendo acompaniar el comando con `--initial-branch=main` para establecer la rama principal como `main`, ya que algunas versiones de Git utilizan `master` por defecto.

Consultar el estado:

```bash
git status
```

El estudiante debe observar que `Main.java` aparece como un archivo que Git todavía no está siguiendo.

Agregar el archivo:

```bash
git add Main.java
```

Volver a consultar:

```bash
git status
```

Ahora realizar el primer commit:

```bash
git commit -m "feat: add first Java program"
```

Consultar el historial:

```bash
git log
```

Para una vista más compacta:

```bash
git log --oneline
```

El flujo fundamental que acabamos de utilizar es:

```text
Working Directory
       ↓
   git add
       ↓
Staging Area
       ↓
  git commit
       ↓
Repository
```

Este concepto es fundamental para comprender Git.

---

# 8. Parte IV — El archivo `.gitignore`

Existe un problema en nuestro proyecto.

Después de ejecutar:

```bash
javac Main.java
```

tenemos:

```text
Main.java
Main.class
```

El archivo `.class` es un archivo generado y normalmente no debería almacenarse en Git.

Crear:

```text
.gitignore
```

con el siguiente contenido:

```gitignore
*.class
```

Ahora ejecutar:

```bash
git status
```

El archivo `Main.class` debería ser ignorado.

Agregar `.gitignore`:

```bash
git add .gitignore
```

Crear el commit:

```bash
git commit -m "chore: add gitignore"
```

Consultar:

```bash
git status
```

El repositorio debería estar limpio.

---

# 9. Parte V — Modificando nuestro programa

Modificar `Main.java`:

```java
public class Main {

    public static void main(String[] args) {
        System.out.println("Hola, mundo!");
        System.out.println("Mi primer proyecto con Git y Java");
    }
}
```

Consultar:

```bash
git status
```

Observar qué detectó Git.

Ahora utilizar:

```bash
git diff
```

Responder:

¿Qué diferencia muestra Git entre la última versión confirmada y nuestra versión actual?

Agregar y confirmar:

```bash
git add Main.java
git commit -m "feat: add project introduction"
```

Consultar nuevamente:

```bash
git log --oneline
```

---

# 10. Parte VI — Ejercicios básicos de Java

Ahora utilizaremos Git para controlar el desarrollo de pequeños ejercicios.

Una buena estructura podría ser:

```text
practica-git-java/
│
├── .gitignore
├── Main.java
│
└── ejercicios/
    ├── Ejercicio01.java
    ├── Ejercicio02.java
    ├── Ejercicio03.java
    ├── Ejercicio04.java
    └── Ejercicio05.java
```

Cada ejercicio debe representar un programa Java independiente.

## Ejercicio 01 — Datos personales

Crear `Ejercicio01.java`.

El programa debe mostrar:

```text
Nombre: Juan Pérez
Edad: 20
Carrera: Ingeniería de Sistemas
Universidad: UATF
```

El objetivo es practicar:

* `String`
* `int`
* variables
* `System.out.println()`


```java
public class Ejercicio01 {
    public static void main(String[] args) {
        // Declaración de variables
        // [tipo de dato] nombre = valor;
        // Ejemplo: String nombre = "Juan Pérez";
        //         int edad = 20;

        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Carrera: " + carrera);
        System.out.println("Universidad: " + universidad);
    }
}
```


> [!TIP]
> Se recomienda crear un commit después de completar cada ejercicio, siguiendo la convención de mensajes de commit como `feat: add exercise 01`, `feat: add exercise 02`, etc. Esto ayudará a mantener un historial claro y organizado del desarrollo de la práctica.

---

## Ejercicio 02 — Operaciones matemáticas

Crear `Ejercicio02.java`.

Definir dos números:

```text
a = 20
b = 5
```

Mostrar:

```text
Suma:
Resta:
Multiplicación:
División:
Módulo:
```

> [!TIP]
> Se recomienda utilizar variables para almacenar los resultados de las operaciones y luego imprimirlos. Esto permite una mejor organización del código y facilita la lectura.
> Operadores aritméticos en Java incluyen 
> - `+` para suma
> - `-` para resta
> - `*` para multiplicación
> - `/` para división
> - `%` para módulo

Por ejemplo las salidas esperadas serían:

```text
Suma: 25
Resta: 15
Multiplicación: 100
División: 4
Módulo: 0
```

El estudiante debe utilizar operadores aritméticos.

---

## Ejercicio 03 — Entrada de datos

Crear `Ejercicio03.java`.

Utilizar `Scanner` para solicitar:

> [!TIP]
> Se recomienda utilizar `Scanner` para leer datos desde la entrada estándar (teclado), y recuerde que debe ser importado al inicio del archivo con `import java.util.Scanner;`.

```text
Ingrese su nombre:
Ingrese su edad:
```

Y mostrar:

```text
Hola Alguien,
Tienes 20 años.
```

Se espera utilizar:

```java
Scanner scanner = new Scanner(System.in);
```

y métodos como:

```java
nextLine()
nextInt()
```

---

## Ejercicio 04 — Número par o impar

Solicitar un número entero.

Determinar si es par o impar.

Ejemplo:

```text
Ingrese un número: 15

El número 15 es impar.
```

El estudiante debe utilizar:

```java
if
else
```

y el operador:

```java
%
```

Codigo que debe implementarse:

```java
public class Ejercicio04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese un número: ");
        int numero = scanner.nextInt();

        if (numero % 2 == 0) {
            System.out.println("El número " + numero + " es par.");
        } else {
            System.out.println("El número " + numero + " es impar.");
        }
    }
}
```

> [!THINK]
> El operador `%` devuelve el residuo de la división. Si el residuo es 0, el número es par; de lo contrario, es impar.
> Pero existe una forma más elegante de escribirlo utilizando lo que en programacio conocemos como manipulacion de bits. El operador `&` realiza una operación AND a nivel de bits. Si el último bit de un número es 0, entonces el número es par; si es 1, entonces es impar. Por lo tanto, podemos usar la expresión `(numero & 1) == 0` para determinar si un número es par.
> Recomiendo al estudiante que investigue y pruebe esta alternativa para comprender mejor cómo funcionan los operadores a nivel de bits en Java.
---

## Ejercicio 05 — Mayor de tres números

Solicitar tres números enteros.

Determinar cuál es el mayor.

Ejemplo:

```text
Ingrese A: 15
Ingrese B: 30
Ingrese C: 20

El número mayor es: 30
```

Se debe resolver utilizando estructuras condicionales.

Codigo que debe implementarse:

```java
public class Ejercicio05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese A: ");
        int a = scanner.nextInt();
        System.out.print("Ingrese B: ");
        int b = scanner.nextInt();
        System.out.print("Ingrese C: ");
        int c = scanner.nextInt();

        int mayor;

        if (a >= b && a >= c) {
            mayor = a;
        } else if (b >= a && b >= c) {
            mayor = b;
        } else {
            mayor = c;
        }

        System.out.println("El número mayor es: " + mayor);
    }
}
```

---

# 11. Parte VII — Git + Java

Ahora combinaremos ambos conocimientos.

Cada vez que un ejercicio esté terminado:

```bash
git status
```

Después:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "feat: added all exercises"
```

> [!IMPORTANT]
> Es importante mantener un historial de cambios claro y descriptivo para facilitar el seguimiento del desarrollo del proyecto.

Al terminar, consultar:

```bash
git log --oneline
```

El estudiante debería tener un historial similar a:

```text
# tendrias que poder observar mas de los commits anteriores, pero el commit final deberia verse asi:
a31f2e1 feat: added all exercises
```

Esto permite visualizar una idea importante: **Git no solamente almacena archivos; registra la evolución del proyecto.**

---

# 12. Parte VIII — Crear nuestro repositorio en GitHub

Ingresar a GitHub y crear un nuevo repositorio llamado:

```text
practica-git-java
```

Para esta práctica se recomienda no inicializarlo con:

* README
* `.gitignore`
* License

porque esos archivos ya existen localmente.

Después conectar el repositorio local:

```bash
git remote add origin <URL_DEL_REPOSITORIO>
```

Verificar:

```bash
git remote -v
```

Cambiar el nombre de la rama principal:

> [!TIP]
> Algunas versiones de Git utilizan `master` como nombre de la rama principal por defecto. Para alinear con las prácticas modernas y evitar confusiones, es recomendable renombrarla a `main`. Pero si al inicio ejecutaste `git init --initial-branch=main`, este paso no será necesario.

```bash
git branch -M main
```

Enviar el proyecto:

```bash
git push -u origin main
```

Actualizar GitHub y verificar que los archivos estén disponibles.

---

# 13. Parte IX — Trabajando con ramas

Crear una nueva rama:

```bash
git switch -c feature/ejercicio-06
```

Crear un nuevo ejercicio.

### Ejercicio 06 — Calculadora

Crear un programa que solicite:

```text
Primer número:
Segundo número:
Operación (+, -, *, /):
```

Y realice la operación correspondiente.

Ejemplo:

```text
Primer número: 20
Segundo número: 5
Operación: *

Resultado: 100
```

Codigo que debe implementarse:

```java
public class Ejercicio06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Primer número: ");
        double num1 = scanner.nextDouble();
        System.out.print("Segundo número: ");
        double num2 = scanner.nextDouble();
        System.out.print("Operación (+, -, *, /): ");
        String operacion = scanner.next();

        double resultado;

        switch (operacion) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                if (num2 != 0) {
                    resultado = num1 / num2;
                } else {
                    System.out.println("Error: División por cero.");
                    return;
                }
                break;
            default:
                System.out.println("Operación no válida.");
                return;
        }

        System.out.println("Resultado: " + resultado);
    }
}
```

> [!TIP]
> Se recomienda investigar que es lo que hace el `switch` y cómo funciona en Java. Además, es importante manejar casos especiales como la división por cero para evitar errores en tiempo de ejecución, pero eso no es el objetivo de esta práctica. El estudiante puede investigar y mejorar el programa si lo desea.

Después:

```bash
git add .
git commit -m "feat: add calculator exercise"
```

Enviar la rama:

```bash
git push -u origin feature/ejercicio-06
```

Ahora el estudiante podrá observar la rama directamente en GitHub.

---

# 14. Parte X — Pull Request

> [!IMPORTANT]
> Esta seccion es opcional, pero es altamente recomendable para que el estudiante comprenda el flujo de trabajo colaborativo en GitHub.
> Ademas, si decide completar esta sección tendra puntos extra en la calificación de la práctica. No importa si esta bien o mal, lo importante es que al menos intente realizar un Pull Request.

Desde GitHub crear un **Pull Request** desde:

```text
feature/ejercicio-06
```

hacia:

```text
main
```

El estudiante debe escribir una descripción breve indicando:

```text
¿Qué se implementó?
¿Qué conceptos de Java se utilizaron?
¿Cómo se probó?
```

Ejemplo:

```md
Se implementó una calculadora básica que permite realizar operaciones de suma, resta, multiplicación y división entre dos números. Se utilizaron conceptos de Java como variables, operadores aritméticos, estructuras condicionales (`switch`), y manejo de entrada de datos con `Scanner`.

Conceptos:
- Variables y tipos de datos (`double`, `String`).
- Operadores aritméticos (`+`, `-`, `*`, `/`).
- Estructuras de control (`switch`, `if-else`).
Pruebas:
- Se probaron diferentes operaciones con números positivos, negativos y decimales.
- Se verificó el manejo de la división por cero.
```

Después realizar el merge desde GitHub.

Volver al repositorio local:

```bash
git switch main
```

Actualizar:

```bash
git pull
```

Finalmente:

```bash
git log --oneline --all
```

---

# 15. Reto final

Para finalizar la práctica, desarrollar un pequeño programa llamado:

```text
SistemaNotas.java
```

El programa debe solicitar:

```text
Nombre del estudiante
Nota 1
Nota 2
Nota 3
```

Calcular:

```text
Promedio
```

Y determinar:

```text
Aprobado
Reprobado
```

Por ejemplo:

```text
Nombre: Carlos

Nota 1: 75
Nota 2: 80
Nota 3: 65

Promedio: 73.33
Estado: Aprobado
```

El estudiante deberá:

1. Crear una rama:

```bash
git switch -c feature/sistema-notas
```

2. Implementar el programa.

```java
public class SistemaNotas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nombre del estudiante: ");
        String nombre = scanner.nextLine();

        System.out.print("Nota 1: ");
        double nota1 = scanner.nextDouble();
        System.out.print("Nota 2: ");
        double nota2 = scanner.nextDouble();
        System.out.print("Nota 3: ");
        double nota3 = scanner.nextDouble();

        double promedio = (nota1 + nota2 + nota3) / 3; // aui se calcula el promedio de las tres notas, en estadistica lo conocemos como media aritmetica
        String estado = promedio >= 60 ? "Aprobado" : "Reprobado";

        System.out.printf("Promedio: %.2f%n", promedio);
        System.out.println("Estado: " + estado);
    }
}
```

3. Compilarlo.

```bash
javac SistemaNotas.java
```

4. Ejecutarlo y probar diferentes casos.

```bash
java SistemaNotas
```

5. Crear un commit.

```bash
git add .
git commit -m "Implementar sistema de notas"
```

6. Hacer `push`.

```bash
git push origin feature/sistema-notas
```

7. Crear un Pull Request.

```text

```

8. Integrarlo a `main`.
9. Ejecutar `git pull`.

---

# 16. Comandos que el estudiante debe dominar

Al terminar la práctica, debería ser capaz de explicar y utilizar al menos:

```bash
git init
git status
git add
git commit
git log
git remote
git push
git pull
```

Y comprender conceptualmente:

```text
Working Directory
        ↓
    git add
        ↓
Staging Area
        ↓
   git commit
        ↓
Local Repository
        ↓
    git push
        ↓
GitHub
```

Además, en Java debería reconocer:

```java
public class Main {

    public static void main(String[] args) {

    }
}
```

como la estructura mínima de una aplicación Java ejecutable, y comprender la diferencia entre:

```bash
javac Main.java
```

y:

```bash
java Main
```

---

# 17. Entregables

El estudiante debe entregar:

1. Repositorio público de GitHub.
2. Código fuente de todos los ejercicios.
3. `.gitignore` correctamente configurado.
4. Historial de commits.
5. Al menos una rama adicional.
6. Al menos un Pull Request (Opcional).
7. Programa final `SistemaNotas.java`.

El repositorio debería terminar aproximadamente así:

```text
practica-git-java/
│
├── .gitignore
├── Main.java
│
└── ejercicios/
    ├── Ejercicio01.java
    ├── Ejercicio02.java
    ├── Ejercicio03.java
    ├── Ejercicio04.java
    ├── Ejercicio05.java
    ├── Ejercicio06.java
    └── SistemaNotas.java
```

<div class="alert alert-info" role="alert">
  <strong>Nota:</strong> Se recomienda que el estudiante mantenga un historial de commits claro y descriptivo, siguiendo la convención de mensajes de commit. Esto facilitará la revisión del trabajo y demostrará un buen manejo de Git.
</div>

<h1 class="text-center"> Buena suerte y disfruten aprendiendo Git, GitHub y Java! </h1>