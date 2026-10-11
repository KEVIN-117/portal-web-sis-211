---
title: "Práctica 5: POO y Fundamentos de Java con Retos"
description: "Ejercicios independientes para practicar fundamentos de Java y programación orientada a objetos, con apoyo crítico de IA y una auditoría local de seguridad."
tags:
  - java
  - poo
  - herencia
  - encapsulacion
  - polimorfismo
  - clases-abstractas
  - interfaces
  - srp
  - ocp
  - solid
  - singleton
  - patrones-de-diseno
  - colecciones
  - hashmap
  - estructuras-de-datos
  - inteligencia-artificial
  - ciberseguridad
  - reversing
  - bytecode
  - sis-211-s2
  - guia-laboratorio
  - ejemplos-solucion-problemas
---

## Antes de empezar

Ejercicios independientes para practicar fundamentos de Java y programación orientada a objetos, con apoyo crítico de IA y una auditoría local de seguridad.

**Atajos:** [Ver los 9 ejercicios](#6-ejercicios) · [Requisitos de entrega](#2-entregables) · [Criterios de evaluación](#3-criterios-de-calificación) · [Lista de comprobación](#8-lista-de-comprobación).

| Parámetro             | Detalle                |
| :-------------------- | :--------------------- |
| **Asignatura**        | Programación en Java   |
| **Modalidad**         | Individual o parejas   |
| **Duración estimada** | 4 a 5 horas, ajustable |

> [!NOTE] Modalidad de trabajo
> Cada ejercicio se resuelve y entrega por separado. No existe una aplicación final que deba unirlos: la meta es practicar conceptos concretos, probarlos y explicar decisiones pequeñas de diseño.

---

## 2. Entregables

La entrega se realizará mediante un repositorio de GitHub. Publica la URL del repositorio en Classroom dentro de la actividad correspondiente.

El repositorio debe incluir:

- Una carpeta independiente para cada ejercicio, con su código fuente.
- Un `README.md` con instrucciones para compilar y ejecutar cada ejercicio, la versión de Java utilizada y los datos ficticios de prueba.
- Las pruebas realizadas y una breve explicación de las decisiones de diseño solicitadas en cada consigna.
- En los ejercicios 7, 8 y 9, el prompt utilizado con el modelo, las sugerencias recibidas, cuáles verificaste y qué cambios aceptaste o descartaste.
- En cada ejercicio, si realizaste una extensión creativa, su descripción y la categoría que propones.

> [!CAUTION] Seguridad y privacidad
> No incluyas contraseñas reales, tokens, datos personales, información privada ni código confidencial en el repositorio o en prompts enviados a un modelo.

---

## 3. Criterios de calificación

La calificación base se distribuirá sobre 100 puntos. La creatividad se reconocerá aparte según la escala de la sección siguiente.

| Criterio                           |   Peso    | Qué se calificará                                                                                                                                                                 |
| :--------------------------------- | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Funcionamiento**                 | 35 puntos | El programa compila, cumple la consigna y produce resultados correctos en casos normales.                                                                                         |
| **Aplicación de Java y POO**       | 25 puntos | Uso adecuado de clases, encapsulamiento, relaciones, herencia, polimorfismo y demás conceptos solicitados.                                                                        |
| **Pruebas y casos límite**         | 15 puntos | Pruebas reproducibles, incluidos valores inválidos o situaciones límite pertinentes.                                                                                              |
| **Organización y legibilidad**     | 10 puntos | Nombres claros, responsabilidades comprensibles, estructura del repositorio y `README.md` suficiente para ejecutar el trabajo.                                                    |
| **Explicación y revisión crítica** | 15 puntos | Justificación de decisiones; en ejercicios con IA, verificación de sugerencias y evidencia de qué se aceptó o descartó. En seguridad, respeto del alcance y análisis responsable. |

### 3.1. Creatividad

Las consignas delimitan el objetivo de cada ejercicio, pero permiten elegir datos, reglas y formas de presentar la solución. Puedes proponer extensiones creativas siempre que mantengan el propósito didáctico y respeten los límites de seguridad indicados.

La creatividad se calificará como puntaje adicional. Se asigna una sola categoría por ejercicio, según la propuesta que hayas implementado y explicado:

| Categoría  | Puntaje adicional | Descripción                                                                                                                                                                                           |
| :--------- | :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Easy**   |        +10        | Una mejora pequeña y pertinente, como una validación adicional o una salida más clara.                                                                                                                |
| **Medium** |        +20        | Una ampliación que resuelve un caso adicional y combina varios conceptos de Java.                                                                                                                     |
| **Hard**   |        +30        | Una extensión más completa, bien probada y organizada, que integra varios conceptos sin perder claridad.                                                                                              |
| **Insane** |        +50        | En cada ejercicio, se construye una simulación creativa y constructiva de un entorno realista, dentro del alcance definido, integrando muchos conceptos y manteniendo pruebas y límites responsables. |

> [!NOTE] Solicitud de puntaje creativo
> Para solicitar puntaje creativo, añade al `README.md` del ejercicio una nota con la categoría propuesta, qué agregaste, qué conceptos integraste y cómo comprobaste que funciona. El docente determina la categoría final. Una idea sin implementación o explicación no obtiene puntaje adicional.

---

## 4. Presentación

En esta práctica pondrás en uso fundamentos de Java y POO: clases, objetos, atributos, métodos, constructores, encapsulamiento, relaciones entre clases, herencia, sobrecarga, sobrescritura, polimorfismo, clases abstractas e interfaces. Las consignas también usan variables, condicionales, ciclos y arreglos básicos cuando hacen falta. Los ejercicios presentan situaciones como cuentas digitales, pedidos, entregas, sensores, préstamos y auditoría de código.

La guía también propone actividades de revisión de código con IA y ejercicios introductorios de seguridad informática. Los ejercicios de seguridad se trabajan con datos ficticios y código local dentro del alcance descrito.

### 4.1. Objetivo general

Aplicar los conceptos de Java y POO en ejercicios pequeños e independientes, comprobando el comportamiento mediante pruebas y explicaciones breves.

### 4.2. Al finalizar, podrás

- Modelar objetos con atributos privados, constructores y métodos que protegen el estado.
- Representar relaciones entre clases y usar herencia cuando exista una relación “es un”.
- Distinguir sobrecarga de sobrescritura y observar el despacho dinámico.
- Elegir entre una clase abstracta y una interfaz según la responsabilidad del tipo.
- Relacionar objetos y delegar responsabilidades entre clases sencillas.
- Aplicar condicionales, ciclos y arreglos básicos para controlar el comportamiento de los objetos.
- Inspeccionar localmente una clase compilada y proponer mejoras defensivas para el ejemplo.

### 4.3. Preparación

- JDK y un IDE o editor que utilice la versión de Java trabajada en clase.
- Crear un directorio separado para cada ejercicio, con su propia clase Main cuando sea necesario.
- Usar nombres descriptivos, indentación consistente y métodos breves.
- Incluir datos de prueba reproducibles; no utilizar información personal real.

> [!IMPORTANT] Regla para el uso de IA
> Puedes pedir explicaciones, casos de prueba o revisión; debes verificar cada sugerencia y poder explicar el código que entregas.

---

## 5. Mapa de contenidos

| Bloque                            | Conceptos que se practican                                                                  |
| :-------------------------------- | :------------------------------------------------------------------------------------------ |
| **A. Objetos y relaciones**       | Clases, objetos, estado, métodos, encapsulamiento, constructores, composición y asociación. |
| **B. Comportamientos**            | Herencia, sobrecarga, sobrescritura, polimorfismo, abstracción e interfaces.                |
| **C. Colaboración entre objetos** | Asociación entre clases, atributos privados, métodos, arreglos básicos y reglas sencillas.  |
| **D. Revisión responsable**       | Revisión crítica con IA y auditoría local de una clase de acceso ficticia.                  |

---

## 6. Ejercicios

Resuelve los ejercicios en el orden sugerido. Antes de programar, identifica qué objetos intervienen, qué datos deben protegerse y qué resultado demostraría que la solución funciona.

### Bloque A. Objetos y relaciones

#### Ejercicio 1. Cuenta digital con reglas de negocio

- **Nivel:** Inicial
- **Tiempo sugerido:** 25 min
- **Se practica:** Clases, atributos privados, constructores, encapsulamiento y condicionales.

Una aplicación bancaria sencilla necesita representar una cuenta. El saldo no debe cambiarse directamente desde el programa principal: las operaciones de depósito y retiro deben validar sus propias reglas.

**Consigna**

Crea la clase `CuentaDigital` con titular, identificador y saldo. Implementa un constructor y métodos para depositar, retirar y consultar el saldo. Desde `Main`, prueba operaciones válidas y casos inválidos.

- **Condiciones:** Mantén los atributos privados. Rechaza depósitos no positivos y retiros mayores al saldo. No permitas que un setter deje la cuenta en un estado inválido. Haz que los métodos indiquen con un resultado sencillo si la operación se realizó; muestra el estado actualizado desde `Main`.
- **Evidencia:** Código fuente y una tabla breve con cuatro pruebas: depósito correcto, retiro correcto, monto no positivo y fondos insuficientes.

> [!TIP] Reto opcional
> Añade un límite diario de retiro sin convertir la clase en una aplicación completa.

#### Ejercicio 2. Pedido de cafetería

- **Nivel:** Inicial a intermedio
- **Tiempo sugerido:** 25 min
- **Se practica:** Composición, arreglos, objetos relacionados, métodos y cálculo de totales.

Una cafetería registra pedidos con varios productos. Cada producto conserva nombre y precio; el pedido reúne los productos y calcula su total.

**Consigna**

Crea `Producto` y `Pedido`. Agrega productos a un pedido, muestra sus líneas y calcula subtotal y total. Usa datos de ejemplo para una compra de al menos tres productos.

- **Condiciones:** El pedido debe guardar objetos `Producto` en un arreglo de tres posiciones y recorrerlo con un ciclo básico. Valida que el precio sea positivo. No calcules el total a mano en `Main`; delega el comportamiento al objeto que corresponde.
- **Evidencia:** Una salida de consola legible que muestre los productos y el total calculado, más una explicación de por qué la relación es composición o asociación en tu diseño.

> [!TIP] Reto opcional
> Aplica un descuento si el subtotal supera un umbral que tú definas y explica la regla.

---

### Bloque B. Comportamientos y polimorfismo

#### Ejercicio 3. Tarifas de entrega

- **Nivel:** Intermedio
- **Tiempo sugerido:** 30 min
- **Se practica:** Herencia, sobrescritura, sobrecarga y polimorfismo dinámico.

Un servicio de entregas ofrece modalidades en bicicleta y en automóvil. Ambas comparten datos de una entrega, pero calculan el costo de forma diferente.

**Consigna**

Diseña una clase base `Entrega` y dos subclases. Cada subclase sobrescribe `calcularCosto()`. Guarda entregas de ambas modalidades en un arreglo `Entrega[]` y recórrelo con un ciclo para imprimir cada costo. Añade una sobrecarga que calcule el costo con un parámetro adicional, como distancia con recargo.

- **Condiciones:** No uses `if` en el ciclo para preguntar el tipo de entrega. Usa `@Override`. Para la sobrecarga, cambia el número o tipo de parámetros; cambiar solo el retorno no cuenta.
- **Evidencia:** Incluye el resultado para una entrega de cada modalidad. Añade dos frases: qué determina qué métodos puedes llamar y qué determina qué implementación sobrescrita se ejecuta.

> [!TIP] Reto opcional
> Dibuja de forma simple la referencia de tipo base apuntando a un objeto de una subclase y explica la diferencia entre tipo estático y tipo dinámico.

#### Ejercicio 4. Sensores de un invernadero

- **Nivel:** Intermedio
- **Tiempo sugerido:** 30 min
- **Se practica:** Clase abstracta, interfaces, herencia y contrato de comportamiento.

Un invernadero utiliza sensores que comparten identificador y ubicación. Algunos pueden calibrarse y todos deben reportar una lectura en formato común.

**Consigna**

Crea una clase abstracta `Sensor` con estado común y un método abstracto `leer()`. Implementa `SensorTemperatura` y `SensorHumedad`. Define una interfaz `Calibrable` y haz que al menos un sensor la implemente. Crea instancias concretas, guárdalas en un arreglo `Sensor[]` y recorre el arreglo con un ciclo para mostrar sus lecturas.

- **Condiciones:** No instancies directamente `Sensor`. Utiliza la clase abstracta para los datos y comportamiento compartidos; utiliza la interfaz para expresar la capacidad de calibrarse. Mantén valores simulados, sin conectar hardware real.
- **Evidencia:** Código con al menos dos sensores, lectura polimórfica y una llamada de calibración. Añade una explicación breve de la elección entre clase abstracta e interfaz.

> [!TIP] Reto opcional
> Agrega un tercer sensor sin modificar el código que recorre y presenta todos los sensores.

---

### Bloque C. Modelado y colaboración con POO

#### Ejercicio 5. Préstamo de un libro

- **Nivel:** Inicial a intermedio
- **Tiempo sugerido:** 25 min
- **Se practica:** Clases, encapsulamiento, constructores, asociación entre objetos, condicionales y colaboración mediante métodos.

Una biblioteca pequeña necesita registrar el préstamo de un libro a un lector. El libro puede estar disponible o prestado, y no debe permitirse una segunda entrega mientras siga prestado.

**Consigna**

Crea las clases `Libro`, `Lector` y `Prestamo`. El préstamo debe relacionar un libro con un lector, registrar si está activo y ofrecer métodos para registrar la devolución. Desde `Main`, crea un caso de préstamo, intenta repetirlo y finalmente registra la devolución.

- **Condiciones:** Mantén el estado de disponibilidad y del préstamo encapsulado. No cambies esos atributos directamente desde `Main`; define métodos que validen las operaciones. Trabaja con un solo préstamo por ejecución, sin listas ni bases de datos.
- **Evidencia:** Código fuente y una secuencia de salida que muestre el préstamo válido, el intento rechazado de prestar un libro ya prestado y la devolución.

> [!TIP] Reto opcional
> Añade una fecha simulada de devolución y un método que indique si el préstamo está vencido, usando una regla que definas.

#### Ejercicio 6. Empleados de una pequeña tienda

- **Nivel:** Intermedio
- **Tiempo sugerido:** 25 min
- **Se practica:** Herencia, constructores, `super`, sobrescritura y polimorfismo con arreglos.

Una tienda necesita calcular una compensación sencilla para empleados con modalidades distintas. Todos comparten nombre e identificador, pero el cálculo depende de su rol.

**Consigna**

Crea una clase base `Empleado` y dos subclases, por ejemplo `EmpleadoPorHora` y `EmpleadoFijo`. Inicializa los atributos heredados mediante el constructor de la clase base. Sobrescribe un método `calcularPago()` en cada subclase. Guarda dos objetos de tipos distintos en un arreglo de `Empleado` y recórrelo para mostrar sus pagos.

- **Condiciones:** Usa `@Override` y llama al constructor de la clase base con `super(...)`. No preguntes el tipo de empleado con `if` desde el ciclo que muestra los pagos; cada objeto debe responder mediante su propio método. Usa valores inventados y reglas de cálculo simples.
- **Evidencia:** Código con ambos tipos de empleado, salida de los pagos y una explicación breve de qué parte se hereda y qué comportamiento cambia.

> [!TIP] Reto opcional
> Agrega un tercer subtipo y demuestra que el ciclo puede procesarlo sin modificar su lógica.

---

### Bloque D. IA y ciberseguridad didáctica

#### Ejercicio 7. Revisión de código con ayuda de IA

- **Nivel:** Intermedio
- **Tiempo sugerido:** 20 min
- **Se practica:** Lectura de código, pruebas, depuración y criterio técnico.

Las herramientas de IA pueden proponer código y explicaciones, pero pueden equivocarse. En esta actividad la IA funciona como asistente de revisión, y tú verificas cada observación.

**Consigna**

Elige uno de los ejercicios anteriores y pide a una herramienta de IA que revise un método y sugiera cinco casos de prueba. Compara cada sugerencia con el comportamiento real del programa. Corrige al menos un defecto que confirmes o explica por qué una sugerencia no aplica.

- **Condiciones:** No compartas datos personales, credenciales, tokens ni código privado. No aceptes una respuesta sin ejecutarla. Conserva el prompt y resume qué verificaste.
- **Evidencia:** Prompt utilizado, lista de sugerencias clasificadas como correcta/incorrecta/no aplicable, pruebas ejecutadas y cambio realizado o justificación.

> [!TIP] Reto opcional
> Pide a la IA una segunda revisión del cambio; comprueba si las pruebas distinguen casos límite reales.

#### Ejercicio 8. Validador didáctico de claves con revisión de IA

- **Nivel:** Intermedio
- **Tiempo sugerido:** 30 min
- **Se practica:** Clases y métodos, String, ciclos, validaciones, pruebas, depuración y revisión crítica de sugerencias de IA.

Una aplicación de ejemplo debe revisar si una clave de prueba cumple reglas sencillas antes de aceptarla. El objetivo es practicar lógica y revisión de código; esta actividad no crea un mecanismo real de autenticación ni define una política suficiente para proteger cuentas.

**Código inicial**

```java
class ValidadorClave {
    boolean esValida(String clave) {
        return clave.length() >= 8 && clave.contains("123");
    }
}
```

**Consigna**

1. Antes de consultar a una IA, explica qué comprueba el método, propone al menos cuatro casos de prueba y define tres reglas sencillas para este ejercicio.
2. Implementa tu propia versión de `ValidadorClave` o corrige el código inicial. Puedes considerar longitud, espacios y presencia de distintos tipos de caracteres; justifica las reglas elegidas.
3. Pide a un modelo que revise tu método, sugiera casos límite y proponga una mejora. No le pidas que decida por ti qué código aceptar.
4. Ejecuta tus pruebas y las sugeridas por el modelo. Clasifica cada sugerencia como útil, incorrecta o no aplicable. Incorpora al menos una mejora que hayas comprobado o explica por qué conservaste tu solución.

> [!TIP] Prompt de partida
> Revisa esta clase Java como ejercicio didáctico. Primero identifica errores lógicos y casos límite; luego sugiere pruebas y una mejora pequeña. No afirmes que estas reglas hacen segura una cuenta real. Explica cada sugerencia para que pueda verificarla.

- **Condiciones:** Usa claves inventadas exclusivamente para las pruebas. No uses, pegues ni guardes contraseñas reales. No presentes el resultado como un sistema real de autenticación o como una recomendación de seguridad para cuentas.
- **Evidencia:** Código inicial y versión revisada; pruebas antes y después; prompt usado; una tabla de sugerencias del modelo con tu verificación; explicación de una mejora aceptada y una sugerencia descartada o corregida.

> [!TIP] Reto opcional
> Separa la validación en métodos pequeños y compara si esa organización hace más clara la clase sin cambiar el comportamiento esperado.

#### Ejercicio 9. Auditoría Red Team y reversing de un validador de acceso

- **Nivel:** Intermedio a avanzado
- **Tiempo sugerido:** 45 min
- **Se practica:** Lectura de código, análisis de autenticación, revisión de POO, compilación, inspección de bytecode, decompilación y propuestas defensivas.

Un equipo solicita una auditoría académica de un validador Java construido para una demostración local. Primero revisarás el código fuente; luego compilarás la clase e inspeccionarás qué información queda en el archivo `.class`. El análisis se limita a este ejemplo ficticio y controlado.

**Código para auditar**

Guarda el siguiente código como `LoginValidator.java`:

```java
public class LoginValidator {

    private static final String USER = "admin";
    private static final String PASSWORD_HASH = "5f4dcc3b5aa765d61d8327deb882cf99";

    public static boolean login(String user, String password) {
        String hash = md5(password);
        return USER.equals(user)
                && PASSWORD_HASH.equals(hash);
    }

    private static String md5(String input) {
        try {
            java.security.MessageDigest md =
                    java.security.MessageDigest.getInstance("MD5");
            byte[] digest = md.digest(input.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : digest) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (Exception e) {
            return "";
        }
    }
}
```

**Consigna**

1. Antes de usar IA, revisa el código fuente y anota los datos sensibles, decisiones de autenticación y posibles riesgos. Escribe una hipótesis sobre qué información podría quedar visible en el archivo compilado.
2. Compila e inspecciona únicamente la clase que tú mismo guardaste:

   ```bash
   javac LoginValidator.java
   javap -c -p LoginValidator.class
   ```

   `javap` muestra instrucciones de bytecode; si el laboratorio dispone de un decompilador aprobado, puedes usar CFR, JD-GUI o Bytecode Viewer para comparar la salida con el código fuente. No descargues ni ejecutes herramientas desconocidas.

3. Sin consultar al modelo todavía, responde las preguntas de análisis que aparecen abajo y registra evidencia local de lo que encontraste.
4. Pide a un modelo que revise tu análisis y sugiera controles defensivos. Verifica cada propuesta con el código o documentación de clase; distingue entre un hallazgo observado y una recomendación.
5. Prepara una versión corregida solo a nivel didáctico: elimina secretos codificados directamente, explica por qué MD5 no es apropiado para almacenar contraseñas y plantea controles como un algoritmo específico para contraseñas (BCrypt, Argon2 o PBKDF2), gestión de secretos fuera del código y limitación de intentos. No hace falta implementar un sistema de autenticación real.

##### Preguntas de análisis

- ¿Qué usuario y qué hash están definidos en la clase?
- ¿Qué información puedes observar con `javap`? ¿Qué información puede mostrar un decompilador?
- ¿Por qué un atacante con acceso al archivo `.class` podría encontrar esos valores?
- ¿Qué debilidad presenta MD5 cuando se usa para almacenar contraseñas?
- ¿Por qué `input.getBytes()` podría producir resultados distintos según la codificación predeterminada del entorno?
- ¿Qué cambios reducirían la exposición de secretos y el riesgo de intentos repetidos?
- ¿Qué limitaciones conserva esta demostración incluso después de tus cambios?

> [!TIP] Prompt de partida
> Revisa esta clase Java para una auditoría autorizada en un laboratorio local. Prioriza hallazgos que puedan justificarse con el código o con la inspección del `.class`. Para cada hallazgo, indica evidencia, impacto y mitigación defensiva. Distingue lo observado de lo supuesto. No propongas probar servicios externos, obtener credenciales de terceros ni evadir controles.

> [!WARNING] Condiciones
> Usa exclusivamente la clase de la guía, datos ficticios y herramientas de laboratorio aprobadas. No ejecutes pruebas contra sitios, redes, cuentas o sistemas reales. No intentes recuperar credenciales de otras personas ni automatices intentos de acceso. El objetivo es comprender la exposición del código y proponer defensas.

- **Evidencia:** Archivo fuente, comandos ejecutados y fragmentos pertinentes de la salida local; respuestas a las preguntas; lista de hallazgos priorizados con mitigaciones; prompt utilizado; comparación entre tu análisis inicial y las sugerencias de IA; propuesta de cambios defensivos.

> [!TIP] Reto opcional
> Compara el bytecode de la clase original con el de tu versión didáctica revisada y describe qué datos ya no aparecen como constantes codificadas. Puedes proponer variables de entorno para configuración de laboratorio, pero explica sus límites y no las presentes como una solución completa para gestionar secretos. No afirmes que ocultar una cadena por sí solo constituye almacenamiento seguro de contraseñas.

---

## 7. Ruta sugerida

Puedes realizar la guía en una sesión larga o dividirla en tres bloques. Los tiempos son aproximados; prioriza entender y probar cada ejercicio sobre terminarlos todos a la vez.

| Bloque | Ejercicios | Enfoque                                             |
| :----: | :--------: | :-------------------------------------------------- |
| **1**  |    1–2     | Estado, validaciones y relaciones entre objetos     |
| **2**  |    3–6     | Herencia, polimorfismo y colaboración entre objetos |
| **3**  |    7–9     | Revisión crítica con IA y auditoría local de código |

---

## 8. Lista de comprobación

- [ ] Los atributos que deben protegerse no se modifican directamente desde Main.
- [ ] Los constructores y métodos mantienen objetos en estados válidos.
- [ ] La herencia representa una relación coherente y la sobrescritura está marcada con `@Override`.
- [ ] Las clases colaboran mediante atributos y métodos con responsabilidades comprensibles.
- [ ] Las pruebas incluyen datos normales y al menos un caso límite.
- [ ] El código compila con la versión de Java trabajada en clase y usa solo la sintaxis necesaria para la consigna.
- [ ] Puedo explicar cada parte del código y distinguir sugerencias verificadas de sugerencias descartadas.
- [ ] La auditoría del ejercicio 9 se limita al código ficticio y al archivo `.class` compilado localmente.

---

## 9. Cierre

Al terminar, selecciona dos ejercicios que te hayan resultado distintos: uno donde hayas protegido el estado de un objeto y otro donde hayas relacionado objetos o aplicado polimorfismo. Explica qué decisión de diseño ayudó a que el código fuera más fácil de entender. Finalmente, anota una pregunta que todavía tengas sobre Java o sobre seguridad informática.
