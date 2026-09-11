---
title: "Práctica 4 — Programación Orientada a Objetos en Java"
description: "Práctica guiada de Programación Orientada a Objetos en Java, incluyendo clases, relaciones, encapsulamiento y listas."
---


## Programación Orientada a Objetos en Java: Clases, Relaciones, Encapsulamiento y Listas

- **Asignatura:** Técnicas de Programación II
- **Lenguaje:** Java 21
- **Tema:** Fundamentos de Programación Orientada a Objetos
- **Modalidad:** Práctica guiada

---

> [!NOTE]
> # Entregable
> 
> El estudiante debe entregar un proyecto Java que contenga:
> 
> ```text
> src/
> └── main/
>     └── java/
>             ├── Student.java
>             ├── Teacher.java
>             ├── Course.java
>             ├── Person.java
>             ├── Engine.java
>             ├── Car.java
>             └── Main.java
> ```
> 
> El proyecto debe contener:
> 
> * Los ejercicios desarrollados.
> * El reto integrador.
> * El ejercicio introductorio de herencia.
> * Código correctamente indentado.
> * Nombres de clases, métodos y variables claros.
> * Comentarios únicamente cuando sean necesarios para explicar una parte importante del código.

---

# 1. Introducción

La Programación Orientada a Objetos (POO) es un paradigma de programación que permite organizar un programa utilizando **objetos** que representan elementos del problema que queremos resolver.

Por ejemplo, si queremos desarrollar un sistema para una universidad, podemos identificar objetos como:

* Estudiante
* Docente
* Materia
* Carrera
* Universidad

Cada objeto puede tener **datos** que describen su estado y **acciones** que puede realizar.

Por ejemplo, un `Student` puede tener:

```text
name
studentId
career
```

y puede realizar acciones como:

```text
enroll()
showInformation()
```

En Java, estos objetos se construyen a partir de **clases**.

Durante esta práctica aprenderemos progresivamente:

1. Clases, atributos y métodos.
2. Creación y utilización de objetos.
3. Agregación y composición.
4. Modificadores de acceso y encapsulamiento.
5. Listas utilizando `List` y `ArrayList`.
6. Una introducción inicial a la herencia.

---

# 2. Objetivos

Al finalizar la práctica, el estudiante será capaz de:

* Crear clases en Java.
* Definir atributos y métodos.
* Crear objetos a partir de una clase.
* Utilizar constructores.
* Comprender la relación entre una clase y sus objetos.
* Relacionar diferentes clases mediante agregación y composición.
* Utilizar modificadores de acceso.
* Aplicar encapsulamiento mediante `private`, getters y setters.
* Crear y manipular listas de objetos utilizando `List` y `ArrayList`.
* Recorrer colecciones de objetos.
* Comprender conceptualmente qué es la herencia.
* Crear una clase hija sencilla utilizando `extends`.

---

# 3. Requisitos

Antes de comenzar se debe contar con:

* Java 21 instalado.
* Un IDE como IntelliJ IDEA, VS Code o Eclipse.
* Conocimientos básicos de:

  * variables
  * tipos de datos
  * `if`
  * ciclos
  * métodos
  * `String`
  * arreglos básicos

---

# 4. Parte I — Clases, atributos y métodos

## 4.1 ¿Qué es una clase?

Una **clase** es una plantilla o molde que define cómo serán determinados objetos.

Por ejemplo, podemos crear una clase `Student`:

```java
public class Student {

    String name;
    String studentId;
    int age;
}
```

La clase indica que un estudiante tendrá:

* `name`
* `studentId`
* `age`

Pero la clase todavía no representa a un estudiante específico.

Podemos crear objetos a partir de ella:

```java
Student student1 = new Student();
Student student2 = new Student();
```

Ahora tenemos dos objetos diferentes creados utilizando la misma clase.

Podemos imaginarlo de la siguiente manera:

```text
             CLASS
            Student
               |
       -----------------
       |       |       |
      name  studentId  age
               |
       -----------------
       |               |
   student1         student2
```

La clase define la estructura.

El objeto representa una instancia concreta de esa estructura.

---

# 5. Atributos

Los **atributos** representan las características o datos que posee un objeto.

Ejemplo:

```java
public class Student {

    String name;
    String studentId;
    int age;
}
```

En este caso tenemos tres atributos:

```text
name
studentId
age
```

Podemos asignar valores:

```java
Student student = new Student();

student.name = "Carlos";
student.studentId = "SIS001";
student.age = 20;
```

Y posteriormente acceder a ellos:

```java
System.out.println(student.name);
System.out.println(student.studentId);
System.out.println(student.age);
```

---

# 6. Métodos

Los **métodos** representan acciones o comportamientos que un objeto puede realizar.

Por ejemplo:

```java
public class Student {

    String name;
    String studentId;
    int age;

    void showInformation() {
        System.out.println("Name: " + name);
        System.out.println("Student ID: " + studentId);
        System.out.println("Age: " + age);
    }
}
```

Ahora podemos hacer:

```java
Student student = new Student();

student.name = "Carlos";
student.studentId = "SIS001";
student.age = 20;

student.showInformation();
```

El método `showInformation()` permite que el objeto muestre su información.

---

# 7. Ejercicio 1 — Crear una clase básica

Crear una clase llamada:

```text
Book
```

La clase debe tener los siguientes atributos:

```text
title
author
year
```

También debe tener un método:

```text
showInformation()
```

que muestre todos los datos del libro.

### Ejemplo esperado

```text
Title: Clean Code
Author: Robert C. Martin
Year: 2008
```

### Actividad

Crear una clase `Main` donde se creen al menos **dos objetos `Book`** con información diferente.

Por ejemplo:

```java
Book book1 = new Book();
Book book2 = new Book();
```

Asignar los atributos correspondientes y ejecutar `showInformation()`.

### Preguntas

1. ¿Cuál es la diferencia entre `Book` y `book1`?
2. ¿Cuántos objetos se crearon?
3. ¿Los dos objetos tienen los mismos datos?
4. ¿Qué sucede si modificamos `book1.title`?

---

# 8. Constructores

Hasta ahora hemos creado los objetos de esta manera:

```java
Book book = new Book();

book.title = "Clean Code";
book.author = "Robert C. Martin";
book.year = 2008;
```

Java permite utilizar un **constructor** para inicializar el objeto cuando este es creado.

Ejemplo:

```java
public class Book {

    String title;
    String author;
    int year;

    public Book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    void showInformation() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Year: " + year);
    }
}
```

Ahora podemos crear el objeto directamente:

```java
Book book = new Book(
    "Clean Code",
    "Robert C. Martin",
    2008
);
```

La palabra `this` hace referencia al objeto actual.

Por ejemplo:

```java
this.title = title;
```

significa:

```text
atributo del objeto = parámetro recibido
```

---

# 9. Ejercicio 2 — Mejorando la clase

Modificar el ejercicio anterior para que `Book` tenga un constructor.

Debe ser posible crear un libro de esta forma:

```java
Book book = new Book(
    "Design Patterns",
    "Erich Gamma",
    1994
);
```

Crear tres libros diferentes y mostrar su información.

### Reto

Agregar un método:

```text
isOldBook()
```

que determine si el libro tiene más de 20 años.

El método puede retornar un `boolean`:

```java
boolean isOldBook() {
    // ...
}
```

---

# 10. Parte II — Agregación y composición

En un programa real, los objetos no trabajan de manera aislada.

Normalmente un objeto está relacionado con otros objetos.

Por ejemplo:

```text
University
    |
    +--- Student
    +--- Student
    +--- Student
```

Una universidad tiene estudiantes.

También podemos tener:

```text
Computer
    |
    +--- Processor
    +--- Memory
```

Un computador está formado por componentes.

Estas relaciones pueden representarse mediante **agregación** y **composición**.

---

# 11. Agregación

La **agregación** representa una relación de tipo:

> "tiene" o "contiene", pero los objetos relacionados pueden existir independientemente.

Por ejemplo:

```text
University ---- Student
```

Una universidad tiene estudiantes, pero un estudiante puede existir conceptualmente sin que dependa de la existencia de una instancia particular de `University`.

Podemos representarlo en Java:

```java
public class Student {

    String name;

    public Student(String name) {
        this.name = name;
    }
}
```

Y:

```java
public class University {

    String name;
    Student student;

    public University(String name, Student student) {
        this.name = name;
        this.student = student;
    }
}
```

Uso:

```java
Student student = new Student("Carlos");

University university =
        new University("UATF", student);
```

Aquí `University` utiliza un objeto `Student`.

---

# 12. Composición

La **composición** representa una relación más fuerte.

El objeto contenido forma parte del objeto principal y normalmente su ciclo de vida depende de este.

Un ejemplo sencillo es:

```text
Computer
   |
   +--- Processor
```

Podemos crear el procesador dentro del computador:

```java
public class Processor {

    String model;

    public Processor(String model) {
        this.model = model;
    }
}
```

Luego:

```java
public class Computer {

    private Processor processor;

    public Computer(String processorModel) {
        this.processor = new Processor(processorModel);
    }
}
```

Aquí `Computer` crea internamente su `Processor`.

Uso:

```java
Computer computer = new Computer("Intel Core i7");
```

El `Processor` pertenece al `Computer`.

---

# 13. Diferencia entre agregación y composición

Una forma sencilla de comenzar a diferenciarlas es preguntarnos:

> ¿El objeto relacionado puede existir independientemente del objeto principal?

Si la respuesta es **sí**, podemos estar frente a una agregación.

```text
University ---- Student
```

El estudiante puede existir independientemente.

Si la relación representa una dependencia fuerte:

```text
Computer ---- Processor
```

podemos utilizar composición.

Para esta práctica no es necesario memorizar todas las reglas UML. Lo importante es comprender que una clase puede **tener objetos de otras clases como atributos**.

---

# 14. Ejercicio 3 — Agregación

Crear las siguientes clases:

```text
Teacher
Course
```

`Teacher` debe tener:

```text
name
specialty
```

`Course` debe tener:

```text
name
teacher
```

La relación debe ser:

```text
Course
   |
   +--- Teacher
```

Crear un profesor:

```java
Teacher teacher = new Teacher(
    "Ana Torres",
    "Programming"
);
```

Luego crear un curso:

```java
Course course = new Course(
    "Object Oriented Programming",
    teacher
);
```

Agregar un método:

```text
showInformation()
```

que muestre:

```text
Course: Object Oriented Programming
Teacher: Ana Torres
Specialty: Programming
```

### Pregunta

¿Por qué `Teacher` puede existir aunque no exista `Course`?

---

# 15. Ejercicio 4 — Composición

Crear las clases:

```text
Car
Engine
```

`Engine` debe tener:

```text
model
horsepower
```

`Car` debe crear internamente su motor.

Por ejemplo:

```java
Car car = new Car(
    "Toyota",
    "2.0 Turbo",
    200
);
```

La clase `Car` debe encargarse de crear el objeto `Engine`.

Agregar:

```text
showInformation()
```

Resultado esperado:

```text
Car: Toyota
Engine: 2.0 Turbo
Horsepower: 200
```

### Preguntas

1. ¿Quién crea el objeto `Engine`?
2. ¿Dónde se crea?
3. ¿Por qué esta relación puede considerarse composición?

---

# 16. Parte III — Modificadores de acceso

Hasta ahora hemos utilizado atributos como:

```java
String name;
```

Sin embargo, esto permite que otras clases modifiquen directamente el atributo:

```java
student.name = "Pedro";
```

En POO normalmente buscamos proteger el estado interno del objeto.

Para esto utilizamos los **modificadores de acceso**.

Los principales modificadores que utilizaremos son:

```text
public
private
protected
```

---

# 17. public

Un elemento declarado como `public` puede ser utilizado desde otras clases.

Ejemplo:

```java
public class Student {

    public String name;
}
```

Podemos hacer:

```java
Student student = new Student();

student.name = "Carlos";
```

El atributo es accesible directamente.

---

# 18. private

Un elemento `private` solamente puede ser accedido directamente desde la propia clase.

Ejemplo:

```java
public class Student {

    private String name;
}
```

Esto ya no sería válido:

```java
Student student = new Student();

student.name = "Carlos";
```

El compilador mostrará un error porque `name` es privado.

Entonces, ¿cómo modificamos o consultamos el valor?

Utilizamos métodos.

---

# 19. Getters y setters

Un **getter** permite obtener información.

```java
public String getName() {
    return name;
}
```

Un **setter** permite modificar información.

```java
public void setName(String name) {
    this.name = name;
}
```

La clase completa:

```java
public class Student {

    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

Ahora podemos hacer:

```java
Student student = new Student("Carlos", 20);

System.out.println(student.getName());

student.setName("Pedro");
```

Este concepto se conoce como **encapsulamiento**.

La idea es que el objeto controle cómo se accede y modifica su información interna.

---

# 20. Ejercicio 5 — Encapsulamiento

Modificar la clase `Student` para que todos sus atributos sean `private`.

Debe contener:

```text
name
studentId
age
```

Crear:

```text
getName()
setName()
getStudentId()
setStudentId()
getAge()
setAge()
```

Además, crear un método:

```text
showInformation()
```

### Reto

Modificar el setter de `age` para impedir edades menores que 0.

Por ejemplo:

```java
public void setAge(int age) {

    if (age >= 0) {
        this.age = age;
    }
}
```

Esto demuestra una ventaja importante del encapsulamiento: la clase puede **controlar cómo se modifica su estado**.

---

# 21. Parte IV — Listas de objetos

Hasta ahora hemos trabajado con objetos individuales:

```java
Student student1;
Student student2;
Student student3;
```

Pero un sistema real normalmente necesita manejar muchos objetos.

Por ejemplo:

```text
100 estudiantes
500 estudiantes
1000 estudiantes
```

Una alternativa sería utilizar arreglos:

```java
Student[] students = new Student[100];
```

Sin embargo, Java proporciona estructuras más flexibles mediante el **Collections Framework**.

Una de las estructuras más utilizadas es `List`.

---

# 22. List y ArrayList

`List` representa una colección ordenada de elementos.

Una implementación muy utilizada es:

```java
ArrayList
```

Podemos crear una lista:

```java
List<Student> students = new ArrayList<>();
```

Necesitamos importar:

```java
import java.util.ArrayList;
import java.util.List;
```

Ahora podemos agregar estudiantes:

```java
students.add(new Student("Carlos", 20));
students.add(new Student("Ana", 21));
students.add(new Student("Luis", 19));
```

La lista contiene objetos `Student`.

Podemos imaginarla así:

```text
students
   |
   +---- Student
   |
   +---- Student
   |
   +---- Student
```

---

# 23. Recorrer una lista

Una de las formas más sencillas es utilizar un `for-each`:

```java
for (Student student : students) {
    student.showInformation();
}
```

La lectura puede entenderse como:

> Para cada `Student` que exista dentro de `students`, ejecutar las instrucciones.

---

# 24. Operaciones básicas de List

Agregar:

```java
students.add(student);
```

Obtener un elemento:

```java
Student student = students.get(0);
```

Conocer el tamaño:

```java
int size = students.size();
```

Eliminar:

```java
students.remove(0);
```

Comprobar si contiene un elemento:

```java
students.contains(student);
```

Limpiar la lista:

```java
students.clear();
```

---

# 25. Ejercicio 6 — Lista de estudiantes

Crear una clase `Student` con:

```text
name
studentId
age
```

Crear una lista:

```java
List<Student> students = new ArrayList<>();
```

Agregar al menos cinco estudiantes.

Posteriormente:

1. Mostrar todos los estudiantes.
2. Mostrar cuántos estudiantes existen.
3. Mostrar el primer estudiante.
4. Eliminar un estudiante.
5. Mostrar nuevamente la lista.

### Reto

Crear un método:

```text
findStudentById()
```

que reciba un `studentId` y busque al estudiante dentro de la lista.

Por ejemplo:

```java
Student student = findStudentById(
    students,
    "SIS003"
);
```

Si existe:

```text
Student found: Carlos
```

Si no existe:

```text
Student not found
```

---

# 26. Ejercicio 7 — Sistema de cursos

Ahora integraremos varios conceptos.

Crear:

```text
Student
Course
```

Un `Course` debe tener:

```text
name
teacher
students
```

Donde:

```text
teacher -> Teacher
students -> List<Student>
```

La estructura será:

```text
Course
 |
 +---- Teacher
 |
 +---- Student
 |
 +---- Student
 |
 +---- Student
```

La clase `Course` debe permitir:

```text
addStudent()
removeStudent()
showStudents()
showInformation()
```

Por ejemplo:

```java
course.addStudent(student1);
course.addStudent(student2);
course.addStudent(student3);
```

Después:

```java
course.showStudents();
```

Debe mostrar algo similar a:

```text
Students enrolled:

SIS001 - Carlos
SIS002 - Ana
SIS003 - Luis
```

---

# 27. Parte V — Introducción a la herencia

Hasta este punto hemos creado diferentes clases.

Ahora veremos brevemente uno de los conceptos más importantes de POO:

**herencia**.

La herencia permite crear una clase nueva a partir de otra clase existente.

Por ejemplo:

```text
Person
  |
  +---- Student
  |
  +---- Teacher
```

Podemos tener una clase general:

```java
public class Person {

    protected String name;
    protected int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void showInformation() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
```

Después podemos crear:

```java
public class Student extends Person {

    private String studentId;

    public Student(
        String name,
        int age,
        String studentId
    ) {
        super(name, age);
        this.studentId = studentId;
    }
}
```

La palabra:

```java
extends
```

indica que `Student` hereda de `Person`.

Podemos interpretar:

```text
Student IS-A Person
```

Es decir:

> Un estudiante es una persona.

---

# 28. ¿Qué hereda Student?

Si `Student` hereda de `Person`, puede utilizar los comportamientos heredados de esa clase.

Por ejemplo:

```java
Student student = new Student(
    "Carlos",
    20,
    "SIS001"
);

student.showInformation();
```

Aunque `showInformation()` fue declarado en `Person`, `Student` puede utilizarlo.

También podemos agregar comportamientos propios:

```java
public void study() {
    System.out.println(
        name + " is studying."
    );
}
```

Entonces:

```java
student.showInformation();
student.study();
```

---

# 29. super

Cuando creamos un objeto `Student`, necesitamos inicializar también la parte correspondiente a `Person`.

Para ello utilizamos:

```java
super(name, age);
```

Esto llama al constructor de la clase padre.

Conceptualmente:

```text
Student
 |
 +--- Person
 |      |
 |      +--- name
 |      +--- age
 |
 +--- studentId
```

La clase `Student` reutiliza características de `Person`.

---

# 30. Ejercicio 8 — Primera herencia

Crear las clases:

```text
Person
Student
```

`Person` debe contener:

```text
name
age
```

y el método:

```text
showInformation()
```

`Student` debe heredar de `Person` y agregar:

```text
studentId
career
```

Crear un estudiante:

```java
Student student = new Student(
    "Carlos",
    20,
    "SIS001",
    "Systems Engineering"
);
```

Mostrar toda su información.

### Preguntas

1. ¿Qué atributos pertenecen a `Person`?
2. ¿Qué atributos pertenecen exclusivamente a `Student`?
3. ¿Qué significa `extends`?
4. ¿Qué hace `super()`?
5. ¿Por qué puede ser útil reutilizar una clase existente?

---

# 31. Ejercicio final — Modelo académico

Modificar el mini sistema académico para introducir herencia.

Crear:

```text
Person
   |
   +---- Student
   |
   +---- Teacher
```

`Person`:

```text
name
age
```

`Student`:

```text
studentId
career
```

`Teacher`:

```text
specialty
```

Posteriormente utilizar:

```text
Course
```

que tendrá:

```text
Teacher
List<Student>
```

El resultado conceptual será:

```text
                    Person
                       |
             +---------+---------+
             |                   |
          Student             Teacher
             |                   |
       studentId             specialty
       career
             |
             |
          Course
             |
       +-----+-----+
       |     |     |
    Student Student Student
```

El objetivo de este ejercicio no es desarrollar un sistema completo, sino observar cómo pueden combinarse los conceptos aprendidos:

```text
Classes
   ↓
Objects
   ↓
Encapsulation
   ↓
Aggregation / Composition
   ↓
Collections
   ↓
Inheritance
```

---

# 32. Preguntas de reflexión

Responder al finalizar la práctica:

1. ¿Qué diferencia existe entre una clase y un objeto?
2. ¿Qué función cumplen los atributos?
3. ¿Qué función cumplen los métodos?
4. ¿Qué ventaja proporciona un constructor?
5. ¿Qué significa encapsular una clase?
6. ¿Cuál es la diferencia entre `public` y `private`?
7. ¿Para qué sirven los getters y setters?
8. ¿Qué problema resuelve `List`?
9. ¿Qué diferencia existe entre `List` y `ArrayList`?
10. ¿Qué diferencia conceptual existe entre agregación y composición?
11. ¿Qué significa que una clase herede de otra?
12. ¿Qué función cumple `extends`?
13. ¿Qué función cumple `super()`?
14. ¿Por qué la herencia permite reutilizar código?


---

# 33. Criterios de evaluación sugeridos

La práctica puede evaluarse considerando:

| Criterio | Porcentaje | Descripción |
|---|---:|---|
| Clases, atributos y métodos | 20% | El estudiante demuestra que puede crear clases, atributos, métodos, constructores y objetos. |
| Agregación y composición | 20% | El estudiante puede relacionar objetos de diferentes clases y comprende la diferencia conceptual entre ambas relaciones. |
| Modificadores de acceso y encapsulamiento | 20% | Los atributos están correctamente protegidos y se utilizan getters/setters cuando corresponde. |
| Collections y List | 25% | El estudiante puede crear listas de objetos, agregar, eliminar, buscar y recorrer elementos. |
| Introducción a herencia | 10% | El estudiante comprende `extends`, `super` y la relación entre clase padre e hija. |
| Orden y calidad del código | 5% | El código presenta nombres claros, indentación correcta y una estructura comprensible. |

---

# 34. Conceptos que debemos recordar

Al finalizar la práctica, el estudiante debería poder reconocer la siguiente estructura:

```text
CLASS
  │
  ├── Attributes
  │
  ├── Constructor
  │
  └── Methods
          │
          ↓
        OBJECT
```

Una clase también puede utilizar otras clases:

```text
Course
  │
  ├── Teacher
  │
  └── List<Student>
```

Y una clase puede heredar de otra:

```text
Person
   │
   ├── Student
   └── Teacher
```
