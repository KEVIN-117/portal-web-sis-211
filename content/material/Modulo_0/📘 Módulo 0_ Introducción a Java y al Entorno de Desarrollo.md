---
title: "📘 Introducción a Java y al Entorno de Desarrollo"
author: "Profesor: [Nombre del Profesor]"
last-modified: "2026-03-24"
date: "2026-03-24"
tags: ["Java", "Introducción"]
---

Objetivo: preparar el entorno y comprender los fundamentos del lenguaje.  
Contenidos mínimos  

## **1. Introducción al lenguaje Java**

* Historia y características de Java  
* Máquina virtual de Java (JVM)  
* Compilación vs interpretación

## **2. Configuración del entorno**

* Instalación de Java Development Kit  
* Uso básico de terminal  
* Uso de Visual Studio Code  
* Uso de Git

## **3. Estructura básica de un programa Java**

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Hola Mundo");

    }

}
```

## **4. Tipos de datos y variables**

* Tipos primitivos  
* Operadores  
* Entrada y salida básica

## **5. Control de flujo**

* if / else  
* switch  
* while  
* for

## **0.1 Introducción a la Programación**

El dominio de la informática exige una transformación profunda en el enfoque de los individuos hacia la resolución de problemas. Para los estudiantes que se inician en la programación, el obstáculo inicial más importante no es la memorización de la sintaxis de un lenguaje, sino la adquisición de la lógica fundamental que gobierna el comportamiento de los sistemas computacionales. Por lo tanto, esta sección se dedica a desglosar la abstracción del pensamiento computacional, sentando una base conceptual sólida indispensable antes de abordar cualquier herramienta o tecnología de desarrollo.

### **0.1.1 ¿Qué es programar?**

* **La Programación: Definición y Propósito**  
  La programación es una disciplina que combina el análisis, la estructuración y la creatividad para diseñar, escribir, probar y mantener el código fuente de aplicaciones informáticas. Su objetivo central es crear un conjunto de instrucciones precisas que el hardware de una computadora pueda ejecutar para llevar a cabo una tarea específica, automatizar procesos o resolver problemas complejos.  
  A un nivel más profundo, programar implica traducir la lógica humana (a menudo ambigua) a un marco de reglas estrictamente definidas que un microprocesador puede procesar sin errores. Esto requiere la descomposición sistemática de un problema grande en unidades lógicas básicas y manejables.  
* **Algoritmo: La Abstracción Pura de la Solución**  
  Un algoritmo es una secuencia finita, rigurosamente ordenada y libre de ambigüedades, compuesta por pasos lógicos o matemáticos, diseñada para resolver un problema o alcanzar un objetivo. Representa la "idea" o la solución abstracta.  
  Sus características obligatorias son:  
* **Precisión:** Cada instrucción debe estar definida con claridad.  
* **Finitud:** Debe terminar después de un número determinado de pasos.  
* **Efectividad:** Debe generar el resultado esperado a partir de las condiciones iniciales.  
  El algoritmo es independiente del lenguaje de programación o la tecnología; es la base conceptual, comparable a una receta de cocina o un manual de montaje.

* **Programa: La Manifestación Concreta del Algoritmo**  
  Un programa informático es la implementación práctica y tangible de uno o varios algoritmos. Consiste en la traducción de esa lógica a un lenguaje de programación específico (como Java o Python) que una computadora puede compilar, interpretar y ejecutar.  
  Mientras que el algoritmo existe en el plano de las ideas, el programa reside en el plano digital, consumiendo memoria y ciclos de procesamiento del hardware.

* **Diferencia Clave: Abstracción vs. Operatividad**  
  La distinción fundamental entre un algoritmo y un programa se basa en su nivel de abstracción y su dependencia tecnológica:

| Característica | Algoritmo | Programa |
| ----- | ----- | ----- |
| **Nivel** | Conceptual (el "qué" se debe hacer) | Operativo (el "cómo" se lleva a cabo) |
| **Plataforma** | Independiente (puede verificarse con papel y lápiz) | Dependiente (requiere un intérprete o compilador y hardware) |
| **Enfoque** | Lógica y viabilidad matemática de la solución. | Sintaxis, semántica y limitaciones del lenguaje específico (Java, C++, etc.). |

### **0.1.2 ¿Cómo piensa una computadora?**

**¿Qué es una instrucción?** Para entender cómo funcionan las computadoras, es clave saber que el hardware no tiene imaginación, ni entiende el contexto, ni puede deducir nada; solo sigue órdenes muy, muy pequeñas llamadas "instrucciones". Una instrucción es la orden más básica que el cerebro de la computadora (la CPU) puede entender y ejecutar, generalmente escrita en un código binario (cadenas de ceros y unos que son, en realidad, impulsos eléctricos). Todo el software que usamos hoy, desde un juego complejo hasta una aplicación simple, al final se reduce a estas órdenes sencillas de hacer matemáticas, lógica y mover datos de un lado a otro en la memoria.

**El proceso de ejecución, paso a paso** Las computadoras no piensan en muchas cosas a la vez ni de forma global como lo hacemos los humanos. En cambio, siguen las instrucciones una tras otra, de forma muy estricta, en un proceso llamado el ciclo de instrucción (Buscar-Decodificar-Ejecutar). En este ciclo que nunca para, el microprocesador:

1. **"Busca"** la siguiente instrucción de la memoria (RAM).  
2. **"Decodifica"** la orden para saber exactamente qué cables y circuitos internos debe activar.  
3. **"Ejecuta"** la instrucción, guarda el resultado y pasa a la siguiente orden.  
   Los procesadores de ahora hacen este ciclo miles de millones de veces por segundo, lo que nos da la sensación de que todo es instantáneo y de que la máquina "piensa".

**La regla de oro: Entrada → Proceso → Salida** El modelo de "Entrada-Proceso-Salida" es la base universal de la informática y el esqueleto de cualquier programa.

* **Entrada (Input):** Aquí es donde metemos los datos brutos a la computadora usando dispositivos como el teclado, el ratón, la pantalla táctil o un sensor. Cuando empezamos a programar, esto significa capturar lo que el usuario escribe.  
* **Proceso:** Es el motor de la operación. La CPU toma los datos de entrada, los guarda un momento en la RAM y los transforma (hace cálculos y operaciones lógicas) siguiendo el plan exacto que tú has escrito en el programa (el algoritmo).  
* **Salida (Output):** Una vez que la información está lista y tiene sentido, el resultado se le muestra al usuario (o a otro sistema) en un formato fácil de entender, como en el monitor, en un archivo de texto o como una respuesta en internet.

### **0.1.3 Lenguajes de programación**

Para acortar la distancia entre cómo hablamos los humanos y cómo funciona el hardware, se han creado distintas categorías de lenguajes.

**Lenguaje máquina:** Es el nivel más íntimo de comunicación con el hardware. Está hecho solo de código binario y códigos que interactúan directamente con los componentes más pequeños de la CPU (los transistores). Aunque es increíblemente rápido, es casi imposible de entender para un humano, muy fácil de cometer errores y tomaría demasiado tiempo crear cualquier aplicación moderna usándolo.

**Lenguajes de alto nivel:** A medida que el desarrollo de software avanzó, fue urgente simplificar las cosas complejas del hardware. Los lenguajes de alto nivel usan palabras parecidas a las que usamos nosotros (casi siempre en inglés) y una sintaxis matemática organizada. Esto es genial porque esconde los detalles aburridos de manejar la memoria y los registros del procesador. Gracias a esto, los desarrolladores podemos concentrarnos en resolver problemas lógicos y de negocio. Java es un gran ejemplo de lenguaje de alto nivel.

**Compilados vs. Interpretados:** Dentro de los lenguajes de alto nivel, hay dos maneras principales de convertir nuestro código en lenguaje máquina, cada una con sus pros y contras.

| Característica | Lenguajes Compilados (Ejemplos: C, C++) | Lenguajes Interpretados (Ejemplos: Python, JavaScript) |
| :---: | :---: | :---: |
| **Mecanismo de traducción** | Un programa especial traduce *todo* el código fuente a un archivo ejecutable binario *antes* de que el programa pueda empezar a funcionar. | Un "intérprete" lee, traduce y ejecuta el código fuente línea por línea *en el mismo momento* en que el programa se está ejecutando. |
| **Rendimiento** | Muy optimizado; la ejecución es rapidísima porque el procesador lee directamente su propio idioma. | Generalmente más lento, porque la traducción está pasando al mismo tiempo que la ejecución. |
| **Portabilidad** | El archivo final solo funciona en el tipo de procesador y sistema operativo para el que fue creado. | Muy flexibles y pueden correr en casi cualquier plataforma, siempre y cuando esa plataforma tenga instalado el programa intérprete. |

*Nota pedagógica:* Java usa una mezcla inteligente de ambos. Primero se traduce a un formato intermedio y luego se "interpreta" o "compila al vuelo" mientras se está ejecutando, un detalle que veremos mejor más adelante.

### **0.1.4 ¿Dónde se usa la programación?**

El software está en todos lados y es la columna vertebral de la infraestructura moderna. Para que te motives, aquí te mostramos algunas áreas donde tu código se transforma en soluciones reales:

* **Desarrollo web:** La creación de tiendas online, redes sociales y servicios en la nube requiere lenguajes que puedan manejar muchas peticiones y grandes bases de datos.  
* **Inteligencia artificial y Machine Learning:** Implementación de "cerebros" artificiales (redes neuronales), análisis de cómo hablamos los humanos (lenguaje natural) y sistemas de visión por computadora para tomar decisiones automáticas y predecir lo que harán los usuarios.  
* **Ciberseguridad:** Crear defensas como sistemas para detectar intrusos, herramientas que encuentran fallos en otros programas, análisis de virus (*malware*) y diseño de códigos de criptografía complejos para proteger nuestra información.  
* **Sistemas empresariales:** La construcción de programas gigantescos (como los que usan bancos o grandes compañías) para gestionar inventarios, transacciones financieras en tiempo real y cadenas de suministro. Este es un sector donde Java es el rey indiscutible.  
* **Aplicaciones móviles:** Todo el ecosistema de software para celulares y tabletas, desde las utilidades que usamos a diario hasta la enorme industria de los videojuegos móviles.

## **0.2 Introducción al Lenguaje Java**

### **0.2.1 La Historia de Java: De los electrodomésticos a Internet**

Imagina que es 1991. En un rincón de **Sun Microsystems**, un equipo liderado por el ingeniero **James Gosling** (el "Green Team") estaba creando un lenguaje de programación. Su idea inicial, que llamaron **"Oak"** (Roble), no era para tu PC, sino para darle inteligencia a la próxima ola de aparatos electrónicos, como tu televisor y otros electrodomésticos interactivos.

**¿Por qué nació Java?**  
En esa época, cada electrodoméstico venía con un microprocesador diferente, ¡un caos! Gosling y su equipo necesitaban un lenguaje que funcionara *igual* sin importar la marca o el chip. Además, tenía que ser súper seguro y confiable, capaz de gestionar su propia memoria para evitar esos temidos "pantallazos azules" o cuelgues catastróficos que eran comunes en lenguajes como C.

**El Gran Salto:**

Cuando el equipo vio el auge imparable de Internet, se dieron cuenta de que su lenguaje era perfecto para la web. Así, lo renombraron como **Java** y lanzaron la versión **1.0 en 1995**, junto con su propio navegador web, HotJava. Desde ese momento, Java ha estado evolucionando sin parar para seguir siendo uno de los lenguajes más importantes del planeta.

| Versión Clave | Año | ¿Qué trajo de nuevo? |
| :---: | :---: | :---: |
| **Java 1.0** | 1995 | El inicio. Presentó la **Máquina Virtual de Java (JVM)**, la gran clave de su éxito. |
| **Java 5** | 2004 | Hizo el código más seguro y ordenado con "Generics" y nos dio el práctico "bucle for-each". |
| **Java 8** | 2014 | ¡Adoptó el pensamiento funcional! Introdujo las **Expresiones Lambda y la API de Streams** para manejar colecciones de datos de forma más moderna. |
| **Java 9** | 2017 | Implementó el sistema de **modularidad (Project Jigsaw)**, haciendo que las aplicaciones fueran más ligeras y fáciles de desplegar. |

### **0.2.2 Los Súper Poderes de Java**

La razón por la que Java sigue dominando el software corporativo se basa en sus características estrella:

* **Portabilidad (La Regla de Oro):** Este es su lema. El código Java se escribe una vez y se convierte en un formato intermedio. Luego, la **Máquina Virtual de Java (JVM)** traduce ese formato al sistema operativo o chip que tengas. Resultado: tu programa funciona en Windows, Mac, Linux o donde sea, sin tener que reescribir ni una línea.  
* **Orientación a Objetos (El Modelo de la Vida Real):** Java piensa en todo como un "objeto" (una persona, un coche, una factura...). Cada objeto tiene características (atributos) y sabe hacer cosas (métodos). Esto permite construir software complejo y gigante de forma modular, reutilizando piezas y facilitando que muchos programadores trabajen juntos.  
* **Seguridad (La Caja Fuerte):** Como nació para Internet, donde el código no es de confianza, Java es muy cauteloso. Aísla tu programa en una **"Sandbox"** (caja de arena), impidiendo que acceda a partes críticas de tu sistema. Además, tiene un vigilante (**Bytecode Verifier**) que revisa el código antes de ejecutarlo para asegurarse de que no haya instrucciones maliciosas.  
* **Robustez (Antierrores):** Java está diseñado para que cometas menos errores costosos. Es de "tipado fuerte" (tienes que ser claro con qué tipo de datos usas), lo que ayuda al compilador a encontrar fallos antes de que el programa se ejecute. Y lo más importante: ¡elimina la pesadilla de la **fuga de memoria**! El **"Garbage Collector"** (Recolector de Basura) se encarga automáticamente de limpiar y liberar la memoria RAM que ya no se necesita, una tarea que en otros lenguajes es manual y causa muchos cuelgues.

### **0.2.3 La Promesa de Java: WORA**

***Concepto Clave: “Write Once, Run Anywhere” (Escríbelo una vez, ejecútalo en cualquier lugar)***

Este eslogan lo dice todo. Antes de Java, si querías que tu programa funcionara en Windows, Mac y UNIX, tenías que escribir versiones diferentes. Java prometió (y cumplió) que el mismo código fuente funcionaría idénticamente en cualquier plataforma, ahorrando tiempo y dinero a las empresas.

### **0.2.4 El Equipo Detrás de la Magia**

La portabilidad de Java no es obra de una sola cosa, sino de tres herramientas que trabajan en equipo, como si fueran muñecas rusas (Matrioskas), una dentro de la otra:

| Acrónimo | Nombre Completo | Propósito para ti |
| :---: | :---: | :---: |
| **JVM** | Java Virtual Machine | **El Motor:** Es un emulador de software que simula una computadora perfecta e ideal. Es la que ejecuta el código Java en cualquier máquina. |
| **JRE** | Java Runtime Environment | **El Kit del Usuario:** Contiene la JVM y todas las librerías básicas necesarias. Es lo que instalas si solo quieres *usar* un programa Java (pero no desarrollarlo). |
| **JDK** | Java Development Kit | **El Kit del Programador:** Es la *suite* completa y obligatoria para crear software. Incluye el JRE, el compilador (`javac`), herramientas de depuración y todo lo necesario para programar. |

### **0.2.5 Cómo Tu Código Java Cobra Vida**

El proceso para que un programa Java funcione es único y tiene cinco pasos:

1. **Tú escribes el código (.java):** Usas el lenguaje Java de alto nivel (el que parece inglés) y lo guardas en un archivo `.java`.  
2. **El Compilador Entra en Acción (javac):** Usas la herramienta `javac` (incluida en el JDK). Esta herramienta no lo convierte a lenguaje de tu PC (como hacen otros), sino a un formato intermedio.  
3. **Nace el Bytecode (.class):** El resultado de la compilación es el **Bytecode**, un "idioma" universal que solo la JVM entiende. Se guarda en un archivo `.class`.  
4. **La JVM se Prepara:** Cuando abres el programa, la JVM de tu sistema operativo se activa, carga ese Bytecode en la memoria y lo revisa para asegurarse de que todo esté en orden.  
5. **Ejecución Final (¡El Programa Funciona!):** La JVM se pone a trabajar. Usa un **Intérprete** para leer el Bytecode línea por línea. Pero para las partes que se repiten mucho, usa un **Compilador Just-In-Time (JIT)** que traduce esas rutinas a lenguaje máquina puro al instante, haciendo que el programa corra muy rápido e interactúe directamente con tu *hardware*.

## **0.3 Preparación del Entorno de Desarrollo**

### **0.3.1 ¿Qué es un entorno de desarrollo?**

**Concepto de IDE** Un Entorno de Desarrollo Integrado (IDE, por sus siglas en inglés) es una herramienta de software gigante que junta todo lo que un programador necesita en una sola aplicación con una interfaz muy completa. Plataformas clásicas como IntelliJ IDEA, Eclipse o NetBeans combinan el editor de texto, el compilador (la herramienta que traduce el código), un depurador (para buscar errores), gestores de bases de datos y control de versiones. Aunque son increíblemente poderosas para trabajar en empresas, sus muchísimas opciones y el alto consumo de memoria RAM pueden ser confusos y abrumadores para los que recién comienzan.

**Concepto de editor de código** Por otro lado, un editor de código, como el famoso Visual Studio Code (VS Code), es una herramienta mucho más ligera y rápida. Su diseño se centra, de forma minimalista, en escribir código con colores para resaltar la sintaxis. Pero su magia está en que se puede expandir; al añadir pequeños paquetes o extensiones (plugins), un simple editor puede ir adquiriendo, poco a poco, las capacidades complejas de un IDE completo. Esto permite al estudiante entender mejor cómo funciona cada parte.

**Herramientas del desarrollador** Además del editor de texto, todo desarrollador necesita saber usar la "Terminal" (o Consola o *Command Prompt*). La terminal nos permite hablar con el sistema operativo de forma directa, sin gráficos, lo que es súper rápido. Nos sirve para compilar el código manualmente, ejecutar programas, movernos entre las carpetas del sistema y manejar el control de versiones.

### **0.3.2 Instalación del JDK**

**Instalación** Para empezar con Java, es obligatorio descargar e instalar el Java Development Kit (JDK) que sea compatible con tu sistema operativo (Windows, macOS o Linux). Hoy en día, es mejor usar versiones como Microsoft Build of OpenJDK, Amazon Corretto, o Eclipse Adoptium (Temurin) para versiones 1.8 en adelante. Simplemente tienes que ejecutar el instalador y dejar que ponga los archivos necesarios en una carpeta del disco.

**Configuración de variables de entorno** El paso más importante, y donde muchos se frustran, es configurar las variables de entorno. Por defecto, tu sistema operativo no sabe dónde están las herramientas del JDK. Para que comandos vitales como `javac` funcionen desde cualquier carpeta donde abras la terminal, necesitamos decirle al sistema dónde buscar.

* En **Windows**, tienes que ir a las Propiedades Avanzadas del Sistema, buscar la variable `PATH` y añadir la carpeta específica donde están los ejecutables de Java (por ejemplo, `C:\Program Files\Java\jdk-21\bin`).  
* En **macOS** o **Linux**, esto se hace editando archivos de configuración de la terminal (como `~/.bash_profile` o `~/.zshrc`), declarando la variable `JAVA_HOME` y luego añadiendo esa ruta al `PATH` global.

**Verificación con terminal** La prueba de fuego para saber que todo salió bien es abrir una terminal e introducir estos comandos, uno por uno:

```bash
java -version

javac -version
```

Si la configuración fue correcta, el sistema operativo no te dirá "comando no reconocido", sino que responderá mostrando la versión exacta de Java y del compilador que acabas de instalar.

### **0.3.3 Instalación del editor de código**

**Instalación y Configuración básica** Elegiremos Visual Studio Code (VS Code) como estándar para este curso. Si usas Windows o macOS, tienes a tu disposición el "Coding Pack for Java", un instalador de Microsoft que detecta lo que te falta e instala a la vez el editor, el JDK necesario y las extensiones clave, simplificando mucho el inicio.

Es fundamental establecer una **interfaz** clara y aprender a manejar las **carpetas de proyecto**. Un proyecto de software en Java siempre debe vivir solo dentro de su propia carpeta principal. Al abrir esa carpeta en VS Code, el programa reconoce los límites de tu trabajo y crea archivos ocultos (como las carpetas `.vscode`) donde guarda las configuraciones específicas del proyecto y los parámetros de depuración.

**Extensiones necesarias y recomendadas** Como VS Code no entiende Java por sí mismo, es esencial añadirle funcionalidades a través de extensiones de la *Marketplace*:

* **Java Extension Pack:** Una colección de herramientas oficiales de Microsoft. Incluye el *Language Support for Java™ by Red Hat*, que da la "inteligencia" en tiempo real para autocompletar código, encontrar errores de escritura al instante y navegar por el código. También trae soporte para herramientas como Maven, y la ayuda de IntelliCode con inteligencia artificial.  
* **Debugger for Java:** Imprescindible. Le da a VS Code la capacidad de depuración de un profesional. Te permite poner "puntos de interrupción" (*breakpoints*) para detener el programa en una línea específica, lo que te habilita a "ver por dentro" el valor de las variables en la memoria y encontrar la causa de los errores lógicos.

### **0.3.4 Control de versiones**

Programar rara vez es un camino recto sin fallos. El control de versiones funciona como un seguro de vida que nos permite guardar, deshacer y administrar los cambios y experimentos en nuestro código a lo largo del tiempo.

**Introducción a Git** Git es el sistema de control de versiones más usado en el mundo. Su arquitectura permite registrar de manera eficiente cada letra que añades, cambias o quitas, asegurando que puedas probar cosas nuevas sin el miedo de dañar el código que ya funcionaba bien.

Conceptos básicos

* **Repositorio (Repository):** Es una base de datos secreta que Git crea dentro de la carpeta principal de tu proyecto (con el nombre `.git`). Guarda de forma comprimida toda la información y la cronología completa de los cambios.  
* **Commit:** Es como una "foto" o captura instantánea, permanente, del estado de tu código en un momento exacto.  
* **Historial de cambios:** Es la cadena de todos los *commits* realizados, formando una línea de tiempo narrativa y auditable que documenta cómo tu proyecto ha ido creciendo.

**Comandos básicos** El ciclo de trabajo para usar Git a través de la terminal tiene tres pasos principales:

| Comando | ¿Qué hace y por qué es importante? |
| :---- | :---- |
| `git init` | **Iniciar el control.** Convierte una carpeta normal en un proyecto que Git vigilará activamente. |
| `git add .` | **Preparar los cambios (Staging).** Empaqueta todos los archivos que modificaste, diciéndole a Git: "Estos son los cambios que quiero guardar en mi próxima foto". |
| `git commit -m "Mensaje"` | **Tomar la foto definitiva.** Guarda y sella la captura en la base de datos local. La parte `-m` te obliga a añadir un mensaje que explica el porqué de esta modificación. |

## **0.4 Primer Programa en Java**

***El bautismo de todo programador: El ritual del "Hola Mundo" en Java***

Hay una regla no escrita, una bienvenida casi sagrada en nuestro mundo, el de los programadores: cuando te aventuras a aprender un lenguaje nuevo, tu primera misión es un simple saludo. No buscamos una proeza de lógica, sino un "test de encendido" vital. Es nuestra forma de asegurar que todas tus herramientas (el editor, las configuraciones, el traductor y la "máquina" que lo ejecuta) se han dado la mano y están listos para que empieces a crear.

### **0.4.1 Primer paso: Crear el archivo Java, tu lienzo en blanco**

Todo arranca con un simple archivo de texto al que tienes que bautizar con sumo cuidado: `HelloWorld.java`. En Java somos estrictos con la etiqueta: el nombre de este archivo tiene que ser **una copia idéntica**, respetando mayúsculas y minúsculas, del nombre de la "caja" principal (la clase) que meterás dentro. Un solo error de dedo y el programa se pondrá de mal humor y se negará a compilar.

### **0.4.2 La fórmula mágica: El esqueleto de tu primera creación en Java**

El esqueleto mínimo de tu programa, la receta básica, se ve así:

```java
public class HelloWorld {
    public static void main(String args) {
        System.out.println("Hola mundo");
    }
}
```

**Explicación linea por linea:** Java es muy formal, y cada palabra tiene su propio porqué y su rol en la fiesta:

* `public`: Imagina que es un gran cartel de "Bienvenidos, Pasen". Al ponerlo, le das permiso a la Máquina Virtual de Java (la JVM) y a tu sistema operativo para que entren y busquen dónde empezar a ejecutar tu programa.  
* `class`: Esta es la palabra clave que nos recuerda que estamos en la Programación Orientada a Objetos. Significa que estás diseñando un nuevo "molde" o plano. En Java, absolutamente todo lo que tiene vida y hace algo debe estar **sí o sí** encapsulado dentro de las llaves `{}` de una clase.  
* Nombre del archivo (`HelloWorld`): El nombre único de tu molde. Es la conexión vital entre el concepto lógico que creaste y el archivo físico en tu disco duro.  
* `método main`: El bloque `public static void main(String args)` es el corazón, el director de orquesta. Es el "punto de partida" obligatorio (*entry point*). La JVM busca esta firma exacta, como buscando la puerta principal de una casa, para saber con precisión dónde empezar a leer y ejecutar tu código.  
* `static`: Permite que la JVM ejecute estas instrucciones de inmediato, sin tener que esperar a que se cree una "copia" o "ejemplar" (un objeto) de la clase primero. Es como decir: "Esto es urgente, que se ejecute ya".  
* `void`: Simplemente significa: "Hago mi trabajo y no le devuelvo nada a nadie". Indica que el programa terminará sin entregar ningún resultado o valor de vuelta al sistema operativo.  
* `String args`: Este es el "buzón" por donde tu programa puede recibir mensajes o instrucciones (en forma de texto) del mundo exterior si lo ejecutas desde la línea de comandos.  
* `System.out.println`: Esta es la orden para "sacar la voz". Le dices al sistema (`System`) que use su canal de comunicación estándar (`out`) y que imprima el mensaje que pusiste entre comillas ("Hola mundo"), terminando automáticamente con un salto de línea (para que el siguiente mensaje no quede pegado).

### **0.4.3 El ritual de la Compilación, hora de hablar con el traductor**

**Con el traductor (compilador)** Tu código, tal como lo escribiste en español (o en "código humano"), no sirve para la máquina. Necesitas un traductor super estricto. En tu terminal, navegas hasta donde dejaste el archivo y escribes la orden mágica:

`javac HelloWorld.java` El compilador de Java (`javac`) entra en acción y se convierte en un corrector de estilo despiadado. Revisa cada punto y coma, cada llave, cada mayúscula y minúscula. Es inflexible: si se te olvidó cerrar una llave (`}`), si pusiste `system` en minúscula o si dejaste un punto y coma (`;`) en el olvido, te lo hará saber con mensajes de error precisos y detendrá el proceso.

**El resultado exitoso** Si eres perfecto (o tuviste suerte), el compilador no dirá absolutamente nada (¡lo cual es excelente señal!). Lo único que verás es la aparición de un archivo nuevo en tu carpeta: `HelloWorld.class`. Este archivo contiene el código que la máquina ya entiende: el *Bytecode*.

### **0.4.4 La prueba de vida: Ejecución del programa, la hora de la verdad**

Finalmente, le pasas este archivo traducido a la Máquina Virtual de Java para que cobre vida. En la terminal, le das la orden de ejecución:  
**`java HelloWorld` Nota clave**: aquí solo mencionas el nombre de la clase compilada (`HelloWorld`), sin la extensión `.class`. La JVM lee el *bytecode*, carga todo lo que necesita y, de repente, la frase "Hola mundo" aparecerá triunfante en tu consola.

### **0.4.5 Los tropiezos del novato: Hacernos amigos de los errores**

Aprender a programar es, fundamentalmente, aprender a ser amigo de los errores. No son fracasos, son comentarios constructivos de la máquina para que mejores tu código. Hay tres categorías principales de "tropezones":

* **Errores del compilador (o de sintaxis):** Son los más tempranos, los que `javac` atrapa antes de que el código siquiera intente correr. Son fallos en la "gramática" o "ortografía" del lenguaje: llaves que quedaron abiertas, mayúsculas y minúsculas mal usadas (Java es muy sensible a esto), o la falta de un punto y coma al final de una instrucción.  
* **Errores de ejecución (*Runtime Errors/Exceptions*):** El código está bien escrito y compiló sin problemas, pero la lógica interna falla mientras la JVM lo está ejecutando. Los ejemplos más comunes: intentar la locura de dividir algo por cero, intentar usar un objeto que no existe en la memoria (*NullPointerException*), o buscar algo que está fuera de los límites de una lista (*IndexOutOfBoundsException*).  
* **Errores lógicos:** Son los más traicioneros, los que te hacen sudar. El programa compila y corre sin problemas, no se queja, pero el resultado que arroja es incorrecto. El algoritmo que diseñaste no está haciendo lo que tú esperabas. Para resolverlos, la única solución es usar herramientas como el *Debugger* para seguir paso a paso la "mente" de tu programa.

## **0.5 Fundamentos del Lenguaje Java**

### **0.5.1 Variables: La memoria de trabajo**

**¿Qué es una variable?** En términos sencillos, piensa en una variable como una **cajita con etiqueta** que creamos en la memoria RAM de la computadora. Esta cajita tiene un nombre único y solo sirve para guardar un dato específico. Lo genial es que el programa puede mirar lo que hay dentro, cambiarlo o actualizarlo tantas veces como necesite mientras se está ejecutando.

**Tipos de variables: Poniéndole reglas al juego** Java es un lenguaje muy estricto y ordenado. Cuando creas una cajita (variable), **debes** decirle de antemano qué tipo de cosa va a guardar, ¡no se permiten las ambigüedades! Tienes que elegir la "naturaleza" del dato:

* **Enteros:** Son para contar cosas que no tienen pedacitos (sin decimales). Perfectos para llevar la cuenta de repeticiones en un ciclo o el número de elementos.  
* **Decimales:** Para guardar números que sí tienen mucha precisión o partes fraccionarias. Son la opción ideal para calcular impuestos, constantes de ciencia o mediciones detalladas.  
* **Caracteres:** Una cajita diminuta que solo puede guardar una **unidad de texto aislada**, como una letra, un número o un símbolo de puntuación ('$').  
* **Booleanos:** La base del pensamiento binario. Son la "bandera" del programa; solo pueden tener dos estados fijos: **Verdadero (true)** o **Falso (false)**.

### **0.5.2 Tipos de datos primitivos: Los ladrillos básicos de Java**

Los tipos primitivos son la forma más simple, pura y rápida que tiene Java para guardar datos. A diferencia de otros elementos, estos no traen "extras" (métodos o funciones) y se almacenan en la parte más veloz de la memoria (el *Stack*), haciendo que el programa vuele. Aquí tienes un resumen de los más usados:

| Tipo de Declaración | ¿Para qué sirve? (Concepto) | ¿Cuánto espacio consume? | ¿Qué tan grande puede ser el valor? |
| :---: | :---: | :---: | :---: |
| **int** | Números enteros comunes y corrientes. | 4 bytes (un tamaño estándar) | Un rango muy amplio: desde unos -2.1 mil millones hasta +2.1 mil millones. |
| **double** | Números con coma decimal para cálculos muy finos. | 8 bytes (el doble de espacio) | Tienen una capacidad inmensa para guardar decimales con una precisión casi "astronómica". |
| **char** | Una sola letra o símbolo tipográfico. | 2 bytes | Guarda un único carácter del estándar Unicode, y siempre se escribe entre comillas simples (ejemplo: 'K'). |
| **boolean** | Marcas de encendido/apagado (Sí/No, Verdadero/Falso). | No tiene un tamaño fijo (se maneja a nivel de instrucción con 1 bit) | Solo acepta los valores lógicos **true** o **false**. |

### **0.5.3 Cómo declarar una variable: Creando la cajita**

Para decirle a la computadora: "Oye, necesito una de estas cajitas y quiero que la nombres de esta forma", usamos una sintaxis obligatoria: primero especificas el **tipo de dato**, luego le das el **nombre único** (el "identificador"), y opcionalmente, le asignas el primer valor usando el símbolo de igualdad (=):

```java
int edad = 20; // Creamos una cajita 'edad' que solo guarda enteros, y le ponemos el 20.

double precio = 10.5; // Una cajita 'precio' para decimales, iniciada en 10.5.

char letra = 'A'; // Una cajita 'letra' que solo acepta un carácter: la 'A'.

boolean activo = true; // Una bandera lógica 'activo', en estado verdadero.
```

## **0.6 Operadores en Java: Los Motores de la Acción**

Si las variables son como los "sustantivos" que guardan la información (la parte pasiva), los operadores son los "verbos" activos. Son las instrucciones precisas que le dicen al cerebro de la computadora (la CPU) qué tipo de cálculos, transformaciones y decisiones lógicas debe ejecutar con esa información.

### **0.6.1 Operadores Aritméticos: La Calculadora Básica**

Se encargan de las matemáticas del día a día, las operaciones más esenciales:

| Símbolo | Nombre | Función Humana |
| :---: | :---: | :---: |
| **+** | Adición / Suma | **Doble Personalidad:** Suma números (cálculo normal), pero si ve texto, ¡une las palabras como pegamento! (Concatenación). |
| **-** | Sustracción / Resta | Calcula lo que queda al restar, o simplemente le cambia el signo a un número (negación). |
| ***** | Multiplicación | El clásico: saca el producto de dos números. |
| **/** | División | **¡Cuidado Especial!** Si divides dos números enteros, Java es muy estricto: simplemente ignora la parte decimal, no redondea nada. |
| **%** | Operador Módulo | **El Residuo es la Estrella:** Te da *solo* lo que sobra de una división. Es genial para saber si un número es par o impar (si `x % 2` es cero, ¡es par!). |

### **0.6.2 Operadores Relacionales: Los Jueces de la Decisión**

Son como los "sensores de pregunta" de nuestro código. Comparan dos cosas (generalmente números) y su veredicto es siempre binario:

* **Verdadero** (*true*)
* **Falso** (*false*).

Son el corazón de cualquier decisión que tome el programa.

| Símbolo | Nomenclatura | Propósito Algorítmico (La Pregunta que Hacen) |
| :---: | :---: | :---: |
| **==** | Igualdad Absoluta | ¿Son exactamente el mismo valor? |
| **!=** | Desigualdad / Diferencia | ¿Son diferentes? (¿Hay una divergencia entre ellos?) |
| **>** y **<** | Mayor y Menor Estricto | ¿Uno es estrictamente más grande/pequeño que el otro? |
| **>=** y **<\=** | Mayor/Menor o Igual | ¿Es más grande/pequeño... **o al menos igual**? (Esto permite la igualdad). |

### **0.6.3 Operadores Lógicos: Los Arquitectos de las Condiciones**

Permiten unir varias preguntas aisladas y construir "árboles de decisiones" mucho más complejos y sofisticados para el programa.

| Símbolo | Nombre | Función Humana |
|---------|--------|----------------|
| **&&** | AND / Y Lógico | **El Riguroso:** Exige que *todas* las condiciones sean verdad. Si la primera ya es falsa, se rinde de inmediato (optimización de "cortocircuito") porque sabe que el resultado final ya es Falso. |
| **\|\|** | OR / O Lógico | **El Tolerante:** Le basta con que *al menos una* de las condiciones sea verdadera para que toda la declaración sea considerada Verdadera. |
| **!** | NOT / Negación | **El Inversor:** Simplemente le da la vuelta a la verdad. Si algo era *true*, lo convierte en *false*, y viceversa. |

> **Nota:** Los operadores lógicos son fundamentales para la toma de decisiones en un programa. Permiten crear condiciones complejas que determinan el flujo de ejecución del programa.

### **0.6.4 Operadores de Asignación: El Acto de Entregar el Valor**

Son los operadores más comunes y sencillos de entender, ya que su función es puramente mecánica: tomar el resultado de una operación o el valor de una variable y "entregárselo" a otra para que la guarde en su memoria. El símbolo universal para esta acción es el signo de igual (`=`).

| Símbolo | Nombre | Función Humana |
|---------|--------|----------------|
| **=** | Asignación Simple | **El Depositante:** Toma el valor que está a su derecha y lo guarda en la variable que está a su izquierda. |
| **+=** | Suma y Asigna | **El Incrementador:** Suma el valor de la derecha al valor actual de la variable de la izquierda y guarda el resultado en esa misma variable. |
| **-=** | Resta y Asigna | **El Decrementador:** Resta el valor de la derecha al valor actual de la variable de la izquierda y guarda el resultado en esa misma variable. |
| **\*\=** | Multiplica y Asigna | **El Escalador:** Multiplica el valor actual de la variable de la izquierda por el valor de la derecha y guarda el resultado en esa misma variable. |
| **\/=** | Divide y Asigna | **El Reductor:** Divide el valor actual de la variable de la izquierda por el valor de la derecha y guarda el resultado en esa misma variable. |

> **Nota:** Los operadores de asignación son fundamentales para la manipulación de datos en un programa. Permiten crear condiciones complejas que determinan el flujo de ejecución del programa.

## **0.7 Entrada y Salida de Datos**

Un programa de computadora no sirve de mucho si solo trabaja en silencio, sin hablar con nadie. Los flujos de Entrada y Salida (lo que se conoce internacionalmente como I/O - *Input/Output*) son como el director de orquesta que permite que la lógica fría de los cálculos se comunique con la persona que está usando el programa.

### **0.7.1 Mostrar algo en pantalla (Salida por consola)**

La herramienta más simple, fundamental y usada por los programadores para ver qué está pasando dentro del cerebro del programa (la memoria y el procesador) es la instrucción `System.out.println()`. Imagina que es como un megáfono: le dices algo entre los paréntesis (puede ser un número o un mensaje de texto) y el sistema lo graba y lo muestra inmediatamente como texto en la ventana de la terminal. Además, automáticamente, te lleva el cursor parpadeante a la línea de abajo, listo para el siguiente mensaje.

### **0.7.2 Recibir información del teclado (Entrada de datos por teclado)**

Si queremos que nuestro *software* sea dinámico y pida la opinión, decisiones o datos al usuario para cambiar su camino, Java nos ofrece una herramienta súper útil llamada la **clase `Scanner`**. Su trabajo es estar atenta a lo que la persona escribe y pulsa en el teclado, ese flujo constante de información que el sistema maneja y que llamamos `System.in`.

**Cómo usar la clase `Scanner`:** Como esta clase es una herramienta externa al "núcleo duro" de Java, primero hay que avisarle al programa que vamos a usarla. Esto se hace con una pequeña línea de código al inicio (*importación*). Luego, dentro del programa principal, creamos una "entidad" o "escáner" que estará lista para interpretar lo que el humano teclee.

**Un ejemplo para entenderlo mejor:**

```java
import java.util.Scanner;

public class EjemploScanner {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingresa tu edad: ");
        int edad = sc.nextInt();
        System.out.println("Tienes " + edad + " años.");
        sc.close();
    }
}
```

*Nota para evitar dolores de cabeza (Un error común en principiantes):* Hay un pequeño "fantasma" que aparece cuando mezclas la lectura de números con la lectura de texto. Cuando le pides al `Scanner` que lea un número con `nextInt()`, el programa toma el número, ¡pero deja olvidado en la memoria el golpe de la tecla *Enter* que presionaste! Si inmediatamente después le pides que lea un texto (por ejemplo, el nombre, usando `nextLine()`), el programa encuentra ese *Enter* olvidado, piensa que ese es el texto que le diste, y se salta la pregunta, guardando una línea vacía. La solución mágica y de emergencia es, después de leer un número, agregar una línea extra de código que no hace nada más que "limpiar" ese *Enter* abandonado: `sc.nextLine();`. Así te aseguras de que el siguiente intento de leer texto funcione correctamente.

## **0.8 Estructuras de Control**

**La importancia de las estructuras de control en la programación**

Imagina que un programa de computadora es como seguir una receta. Sin las "estructuras de control", la computadora tendría que leer y ejecutar cada paso de esa receta de principio a fin, sin detenerse ni pensar, como un robot. Las estructuras de control son las que le dan a la computadora el poder de "decidir" o "pensar", permitiéndole evaluar diferentes situaciones (como la entrada de un usuario o algún cambio interno) y tomar caminos lógicos distintos. Esto es lo que le da al sistema una especie de "inteligencia computacional".

### **0.8.1 Estructuras para "tomar decisiones" (Condicionales)**

**Sentencias lógicas `if` e `if-else`**

Esta es la forma más básica de que una computadora tome una decisión. La instrucción clave es `if` (si). Cuando la computadora encuentra un `if`, revisa una pregunta que solo tiene dos respuestas posibles: verdadero o falso.

* **Si la respuesta es Verdadera:** El bloque de código que sigue inmediatamente (el que está entre llaves `{}`) se ejecuta.  
* **Si se añade el `else` (si no):** Esto ofrece un "plan B" o una ruta alternativa. Si la pregunta inicial (`if`) resulta ser Falsa, entonces la computadora salta directamente al bloque de código que está después del `else` y lo ejecuta. Es como decir: "Si pasa esto, haz A; si no, haz B".

```java
// Ejemplo sencillo de decisión  
if (edad >= 18) {  
    System.out.println("¡Verificado! Es mayor de edad.");  
} else {  
    System.out.println("No cumple con la mayoría de edad requerida.");  
}

```

### **0.8.2 Decisión Múltiple**

* **Sentencia lógica `switch`**  
  Esta estructura es una herramienta especial para cuando necesitas comparar un único valor (como una variable) contra una lista grande de posibles valores fijos (como las opciones de un menú o los días de la semana).  
  Usar un `switch` es mucho más claro y fácil de leer para un programador que escribir un montón de sentencias `if-else` anidadas una tras otra. El `switch` organiza todas las comparaciones de forma limpia.  
  **Importante:** Dentro de un `switch`, después de cada posible caso (etiquetado como `case`), es obligatorio usar la palabra clave `break`. El `break` actúa como un "alto total" para que, una vez que se encuentra el caso correcto y se ejecuta el código, la computadora no siga revisando y ejecutando accidentalmente los casos siguientes (un problema conocido como *fall-through*).

```java
switch (diaSemana) {
    case 1: 
        System.out.println("Lunes");
        break;
    case 2: 
        System.out.println("Martes");
        break;
    case 3: 
        System.out.println("Miercoles");
        break;
    case 4: 
        System.out.println("Jueves");
        break;
    case 5: 
        System.out.println("Viernes");
        break;
    case 6: 
        System.out.println("Sabado");
        break;
    case 7: 
        System.out.println("Domingo");
        break;
    default: 
        System.out.println("Dia invalido");
        break;
}
```

### **0.8.3 Estructuras de Repetición (Ciclos)**

Las estructuras de repetición o ciclos le permiten a la computadora realizar la misma tarea una y otra vez, a una velocidad increíble, imitando el concepto de "rutina" o "acción reiterada".

* **Comando estructurado `while` (mientras):** Este ciclo revisa una condición al principio. **Mientras** esa condición sea verdadera, el ciclo sigue ejecutando el bloque de código una y otra vez. En el momento en que la condición se vuelve falsa, el ciclo se detiene. Es crucial asegurarse de que algo dentro del ciclo haga que la condición cambie eventualmente (por ejemplo, aumentando un contador), de lo contrario, el programa se quedaría atascado en un "ciclo infinito", colapsando el sistema.

```java
int contar = 0;
while (contar < 5) {
    System.out.println("Contador: " + contar);
    contar++;
}
System.out.println("Fin del ciclo");
```

* **Comando iterativo `for` (para):** El ciclo `for` es ideal para cuando sabes exactamente cuántas veces quieres que se repita una acción. Es muy eficiente porque concentra en una sola línea tres elementos clave:  
  1. **Inicio:** Dónde empezar a contar (inicialización).  
  2. **Límite:** La condición que dice cuándo detenerse.  
  3. **Paso:** Cómo avanzar en cada repetición (incremento o decremento).  
     Esto resulta en un código muy compacto, elegante y funcional.

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Contador: " + i);
}
System.out.println("Fin del ciclo");
```

* **Comando reflexivo `do-while` (hacer-mientras):** Esta es una variación del ciclo `while` con una diferencia fundamental. Con el `do-while`, la computadora siempre ejecuta el bloque de código **al menos una vez** (`do` / hacer) **antes de** revisar si la condición es verdadera (`while` / mientras). Esto es muy útil, por ejemplo, para construir menús interactivos o sistemas de validación de contraseñas, ya que primero necesitas pedirle la entrada al usuario antes de poder comprobar si es correcta.

```java
int contar = 0;
do {
    System.out.println("Contador: " + contar);
    contar++;
} while (contar < 5);
System.out.println("Fin del ciclo");
```

## **0.9 Buenas prácticas básicas**

En el ámbito de la ingeniería de software, el código fuente es un activo que se analiza, inspecciona, modifica y lee de forma continua y repetitiva por los desarrolladores a lo largo del tiempo. Partiendo de esta premisa fundamental, se adoptan diversos principios de desarrollo. Un ejemplo clave es la implementación de convenciones de nomenclatura (tales como las aplicadas a clases, variables/atributos y métodos) en el contexto de la Programación Orientada a Objetos (POO).

### **0.9.1 Nombres de variables**

**Convenciones de Nomenclatura en Java**

* Formato `camelCase` (Para Variables y Métodos)  
  Para nombrar variables dinámicas, atributos y métodos funcionales, se utiliza el protocolo conocido como **`camelCase`**.  
* **Regla:** La primera palabra del identificador comienza siempre en minúscula.  
* **Regla:** Las palabras subsiguientes anexadas comienzan con mayúscula inicial (sin espacios).  
* **Ejemplo:** `numeroDeEstudiantes`.  
  Esta metodología mejora drásticamente el reconocimiento cognitivo rápido del propósito de cualquier variable o función.  

* Formato `PascalCase` o `UpperCamelCase` (Para Clases)  
  Para la designación de entidades arquitectónicas superiores, como los nombres de archivos base o las declaraciones abstractas de **clases** orientadas a objetos, se debe seguir la pauta estipulada como **`PascalCase`** (o **`UpperCamelCase`**).  
* **Regla:** Todas las palabras que componen el identificador, incluida la primera, comienzan con mayúscula inicial.  
* **Ejemplo:** `CalculadoraBasica`.

### **0.9.2 Legibilidad del código**

* **Implementación de la Indentación:** Consiste en la práctica sistemática y fundamental de aplicar espacios en blanco, tabulaciones y espacios invisibles en el margen izquierdo del código. Esta estructura ortotipográfica es crucial, ya que el código sin una indentación formal y consistente resulta prácticamente ininteligible, incluso para analistas experimentados, volviéndose inviable e inservible. La indentación organiza lógicamente la jerarquía y dependencia de los bloques de código, sentencias y flujos condicionales o iterativos subyacentes.  
* **Aportes Documentales de los Comentarios:** La función principal de los comentarios es ser notas, reflexiones o recordatorios textuales dirigidos exclusivamente a otros humanos, ya que la maquinaria de los compiladores de Java los ignora por completo (son inertes a nivel funcional y algorítmico).  
  * **Sintaxis:** Se introducen con los símbolos `//` para anotaciones rápidas o líneas únicas, o se envuelven dentro de los delimitadores `/*` (inicio) y `*/` (fin) para párrafos explicativos más extensos o documentación profunda.

### **0.9.3 Organización básica de archivos**

Una vez que un proyecto de software supera la fase inicial y comienza a crecer en escala y volumen, la gestión de múltiples clases de sistemas y código dentro de un **único directorio base** se vuelve logísticamente **insostenible, inviable e indefendible** desde una perspectiva de ingeniería y organización.

La **implementación de una estandarización arquitectónica y organizativa**, especialmente a través de la **topografía de carpetas (o paquetes)**, es crucial. Esta práctica garantiza a mediano y largo plazo la **viabilidad de la escalabilidad** y proporciona la codiciada característica de **portabilidad internacional**.

La arquitectura estandarizada, aunque de naturaleza **esbelta y simple de adoptar**, es globalmente respetada e incluye obligatoriamente las siguientes subcarpetas principales:

* **src/**: Proviene del vocablo inglés *source* (fuente). Este directorio es la **residencia estricta y exclusiva** para todo el código fuente legible por nosotros los humanos y archivos de origen del sistema, especialmente aquellos con la extensión **.java**. Su propósito es albergar la totalidad el código fuente de nuestra app o sistema  
* **bin/** o **out/**: Designado para ser el repositorio del **producto bruto en binarios,** es decir el código compilado, esto es gestionado por el compilador o el IDE. Contiene los archivos finales, a menudo denominados **binarios oscuros**, con la extensión **.class**. El objetivo de esta separación es **evitar la entropía sistémica** o la **contaminación cruzada** al invadir el área de desarrollo limpia del código fuente.

## **0.10 Ejercicios prácticos del módulo**

### **1️⃣ Programa que imprima datos personales**

```java
import java.util.Scanner;

public class Main{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("Ingrese su nombre: ");
    String nombre = sc.nextLine();
    
    System.out.print("Ingrese su edad: ");
    int edad = sc.nextInt();
    
    System.out.print("Ingrese su carrera: ");
    String carrera = sc.nextLine();
    
    System.out.println("Nombre: " + nombre);
    System.out.println("Edad: " + edad);
    System.out.println("Carrera: " + carrera);
  }
}
```

### **2️⃣ Calculadora básica**

```java
import java.util.Scanner;

public class Main{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("Ingrese el primer número: ");
    double num1 = sc.nextDouble();
    
    System.out.print("Ingrese el segundo número: ");
    double num2 = sc.nextDouble();
    
    System.out.println("Suma: " + (num1 + num2));
    System.out.println("Resta: " + (num1 - num2));
    System.out.println("Multiplicación: " + (num1 * num2));
    System.out.println("División: " + (num1 / num2));
  }
}
```

### **3️⃣ Conversor de temperatura**

```java
import java.util.Scanner;

public class Main{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("Ingrese la temperatura en Celsius: ");
    double celsius = sc.nextDouble();
    
    double fahrenheit = (celsius * 9/5) + 32;
    System.out.println("Temperatura en Fahrenheit: " + fahrenheit);
  }
}
```

### **4️⃣ Programa que determine si un número es par o impar**

```java
import java.util.Scanner;

public class Main{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("Ingrese un número: ");
    int numero = sc.nextInt();
    
    if (numero % 2 == 0) {
      System.out.println("El número es par");
    } else {
      System.out.println("El número es impar");
    }
  }
}
```

### **5️⃣ Programa que calcule promedio de notas**

```java
import java.util.Scanner;

public class Main{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    System.out.print("Ingrese la cantidad de notas: ");
    int cantidad = sc.nextInt();
    
    double suma = 0;
    for (int i = 1; i <= cantidad; i++) {
      System.out.print("Ingrese la nota " + i + ": ");
      suma += sc.nextDouble();
    }
    
    double promedio = suma / cantidad;
    System.out.println("Promedio: " + promedio);
  }
}
```
