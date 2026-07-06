# Examen final de Programación II

### Pregunta 1
**3 / 3 pts**  
¿Cuál de las siguientes clases pertenece al paquete `java.lang` y puede utilizarse sin importarla explícitamente?

- [ ] `ArrayList`
- [ ] `HashMap`
- [x] `String` (correcta)
- [ ] `Scanner`

> [!NOTE]
> **Explicación Pregunta 1**  
> El paquete `java.lang` se importa automáticamente en todos los programas Java. Las clases como `String`, `Math`, `Integer`, entre otras, pertenecen a este paquete.

---

### Pregunta 2
¿Qué modificador de acceso permite que un atributo sea accesible solamente dentro de la misma clase?

- [ ] `public`
- [ ] `protected`
- [x] `private` (correcta)
- [ ] `static`

> [!NOTE]
> **Explicación Pregunta 2**  
> El modificador `private` es el nivel de acceso más restrictivo, permitiendo el acceso únicamente dentro de la clase donde el miembro (atributo o método) fue declarado.

---

### Pregunta 3
**0 / 3 pts**  
Un atributo declarado con el modificador `protected` puede ser accedido principalmente desde:

- [ ] Cualquier clase de cualquier paquete
- [x] La misma clase, clases del mismo paquete y clases hijas (correcta)
- [ ] Solamente la clase donde fue declarado
- [ ] Únicamente métodos estáticos

> [!NOTE]
> **Explicación Pregunta 3**  
> El nivel `protected` permite acceso dentro de la misma clase, en otras clases del mismo paquete y en subclases (incluso si se encuentran en diferentes paquetes).

---

### Pregunta 4
**0 / 3 pts**  
¿Cuál es la característica principal de un atributo declarado como `static`?

- [ ] Existe una copia distinta para cada objeto
- [x] Pertenece a la clase y es compartido por todos sus objetos (correcta)
- [ ] No puede cambiar su valor
- [ ] Solo puede ser usado dentro del constructor

> [!NOTE]
> **Explicación Pregunta 4**  
> Un atributo `static` es una variable de clase. Solo hay una copia en memoria y su valor se comparte entre todas las instancias u objetos creados de esa clase.

---

### Pregunta 5
**0 / 3 pts**  
Respecto a las clases `static` en Java, ¿cuál afirmación es correcta?

- [ ] Toda clase principal debe declararse `static`
- [ ] Una clase de nivel superior puede declararse `static`
- [x] Una clase interna puede declararse `static` (correcta)
- [ ] Una clase `static` siempre debe ser abstracta

> [!NOTE]
> **Explicación Pregunta 5**  
> En Java, solo las clases anidadas (internas) pueden ser declaradas como estáticas, lo que permite instanciarlas sin necesidad de crear un objeto de la clase externa.

---

### Pregunta 6
**3 / 3 pts**  
¿Cuál es la principal ventaja de `ArrayList` frente a un arreglo tradicional?

- [x] Su tamaño puede crecer o reducirse dinámicamente (correcta)
- [ ] Solo almacena números enteros
- [ ] No permite elementos repetidos
- [ ] Siempre ordena sus elementos automáticamente

> [!NOTE]
> **Explicación Pregunta 6**  
> A diferencia de los arreglos tradicionales cuyo tamaño es fijo, `ArrayList` ajusta su capacidad automáticamente a medida que se agregan o eliminan elementos.

---

### Pregunta 7
**3 / 3 pts**  
¿Qué método de `ArrayList` se utiliza para añadir un elemento al final de la lista?

- [ ] `put()`
- [x] `add()` (correcta)
- [ ] `insert()`
- [ ] `append()`

> [!NOTE]
> **Explicación Pregunta 7**  
> El método `add(E e)` de la interfaz `List`, implementado por `ArrayList`, se usa para insertar un elemento al final de la lista.

---

### Pregunta 8
**0 / 3 pts**  
¿Cuál es la función principal de `HashMap` en Java?

- [ ] Guardar elementos únicamente en orden ascendente
- [x] Relacionar claves únicas con valores (correcta)
- [ ] Evitar completamente valores nulos
- [ ] Almacenar objetos únicamente de tipo `String`

> [!NOTE]
> **Explicación Pregunta 8**  
> `HashMap` es una estructura de datos (basada en tabla hash) que almacena pares de clave-valor. Garantiza que las claves sean únicas y permite un acceso rápido a los valores.

---

### Pregunta 9
**0 / 3 pts**  
¿Qué ocurre si se inserta en un `HashMap` un nuevo valor utilizando una clave que ya existe?

- [ ] Se genera obligatoriamente una excepción
- [x] El nuevo valor reemplaza al valor asociado a esa clave (correcta)
- [ ] Se crea una segunda clave idéntica
- [ ] El `HashMap` elimina todos sus elementos

> [!NOTE]
> **Explicación Pregunta 9**  
> Al invocar el método `put(clave, valor)` con una clave ya existente, el mapa no crea un duplicado, sino que sobrescribe y devuelve el valor anterior asociado a la clave.

---

### Pregunta 10
**0 / 3 pts**  
En programación orientada a objetos, la abstracción consiste en:

- [ ] Ocultar datos privados mediante `getters` y `setters`
- [x] Representar las características esenciales de un objeto, ignorando detalles innecesarios (correcta)
- [ ] Crear varias clases hijas a partir de una clase padre
- [ ] Repetir un método con diferentes parámetros

> [!NOTE]
> **Explicación Pregunta 10**  
> La abstracción nos permite enfocarnos en qué es y qué hace un objeto a grandes rasgos (propiedades y métodos importantes), ocultando la complejidad de su implementación.

---

### Pregunta 11
**0 / 3 pts**  
¿Qué principio de programación orientada a objetos busca proteger los atributos de una clase y controlar su acceso?

- [ ] Herencia
- [ ] Polimorfismo
- [x] Encapsulamiento (correcta)
- [ ] Sobrecarga

> [!NOTE]
> **Explicación Pregunta 11**  
> El encapsulamiento restringe el acceso directo al estado interno (atributos) de los objetos usando modificadores (como `private`) y expone su manipulación a través de métodos seguros (como `getters` y `setters`).

---

### Pregunta 12
**3 / 3 pts**  
La herencia permite principalmente:

- [x] Que una clase reutilice y extienda los atributos y métodos de otra clase (correcta)
- [ ] Que todos los atributos sean públicos
- [ ] Que una clase tenga varios constructores idénticos
- [ ] Que un objeto no pueda tener métodos

> [!NOTE]
> **Explicación Pregunta 12**  
> La herencia fomenta la reutilización de código al permitir que una clase hija adquiera las propiedades y métodos de una clase padre y pueda agregar o modificar comportamientos.

---

### Pregunta 13
**3 / 3 pts**  
El polimorfismo permite que:

- [x] Una referencia de tipo padre invoque el comportamiento redefinido de un objeto hijo (correcta)
- [ ] Una clase herede de varias clases al mismo tiempo
- [ ] Los atributos privados sean modificados directamente
- [ ] Los métodos estáticos puedan ser sobrescritos

> [!NOTE]
> **Explicación Pregunta 13**  
> A través del polimorfismo, el método exacto que se ejecuta en tiempo de ejecución depende del tipo de objeto real referenciado (late binding), permitiendo manejar distintos objetos hijos de manera uniforme desde el tipo padre.

---

### Pregunta 14
**0 / 3 pts**  
¿Cuándo ocurre la sobrecarga de métodos?

- [ ] Cuando una clase hija redefine un método heredado con la misma firma
- [x] Cuando existen métodos con el mismo nombre, pero diferente cantidad o tipo de parámetros (correcta)
- [ ] Cuando un atributo cambia de `public` a `private`
- [ ] Cuando una interfaz implementa otra interfaz

> [!NOTE]
> **Explicación Pregunta 14**  
> La sobrecarga (overload) ocurre en la misma clase cuando varios métodos comparten el mismo nombre, pero la lista de parámetros es diferente en tipo o cantidad, permitiendo distintos usos del mismo nombre de método.

---

### Pregunta 15
**3 / 3 pts**  
¿Cuál condición es necesaria para sobrescribir correctamente un método heredado?

- [ ] Cambiar el nombre del método
- [x] Usar exactamente los mismos parámetros y una firma compatible (correcta)
- [ ] Declarar el método siempre como `static`
- [ ] Eliminar el método de la clase padre

> [!NOTE]
> **Explicación Pregunta 15**  
> La sobrescritura (override) exige que el método en la clase hija tenga la misma firma (nombre y parámetros) y un tipo de retorno igual o covariante, para cambiar o ampliar el comportamiento heredado.

---

### Pregunta 16
**0 / 3 pts**  
Seleccione las afirmaciones correctas sobre las clases abstractas.

- [x] No pueden instanciarse directamente (correcta)
- [x] Pueden contener métodos abstractos y métodos concretos (correcta)
- [ ] No pueden tener constructores
- [x] Pueden ser utilizadas como clase base para otras clases (correcta)

> [!NOTE]
> **Explicación Pregunta 16**  
> Las clases abstractas sirven como plantillas parciales: no se pueden crear objetos directamente de ellas, pero pueden contener tanto métodos implementados como no implementados para que sus hijas los completen.

---

### Pregunta 17
**0 / 3 pts**  
Seleccione las afirmaciones correctas sobre las interfaces en Java.

- [x] Una clase puede implementar varias interfaces (correcta)
- [x] Una interfaz puede extender otra interfaz (correcta)
- [ ] Una clase puede extender varias clases
- [x] Las interfaces ayudan a definir contratos de comportamiento (correcta)

> [!NOTE]
> **Explicación Pregunta 17**  
> Las interfaces permiten en Java la herencia múltiple de tipos y sirven para definir qué comportamientos deben cumplir las clases que las implementan.

---

### Pregunta 18
**0 / 3 pts**  
¿Qué caracteriza a una interfaz funcional?

- [x] Debe tener exactamente un método abstracto (correcta)
- [ ] No puede contener métodos estáticos
- [ ] Debe ser implementada por varias clases
- [ ] No puede utilizar expresiones lambda

> [!NOTE]
> **Explicación Pregunta 18**  
> Una interfaz funcional en Java es aquella que contiene un único método abstracto. Esto es el requisito esencial para poder instanciarla de manera concisa mediante expresiones lambda.

---

### Pregunta 19
**3 / 3 pts**  
¿Cuál de las siguientes expresiones puede utilizarse para representar una implementación de una interfaz funcional?

- [x] Una expresión lambda (correcta)
- [ ] Un `import` estático
- [ ] Un constructor privado
- [ ] Un bloque `finally`

> [!NOTE]
> **Explicación Pregunta 19**  
> Las expresiones lambda son atajos sintácticos introducidos en Java 8 que se usan para crear instancias rápidas y anónimas que implementan interfaces funcionales.

---

### Pregunta 20
**0 / 3 pts**  
Seleccione las afirmaciones correctas sobre la relación entre herencia e interfaces.

- [x] Una clase puede extender una clase e implementar una o más interfaces (correcta)
- [x] Una interfaz puede extender varias interfaces (correcta)
- [x] Una clase hija debe implementar los métodos abstractos heredados, salvo que también sea abstracta (correcta)
- [ ] Implementar una interfaz impide heredar de una clase

> [!NOTE]
> **Explicación Pregunta 20**  
> Java soporta herencia simple de clases (`extends` una sola clase), herencia múltiple de interfaces (`implements` varias), y herencia múltiple entre interfaces (una interfaz puede `extends` varias interfaces).

---

### Pregunta 21
**5 / 15 pts**  
Implemente una clase `CuentaBancaria` aplicando encapsulamiento. La clase debe tener los atributos privados titular y saldo. Incluya un `constructor`, `getters`, un método `depositar(double monto)` que solo acepte montos positivos y un método `retirar(double monto)` que solo permita retirar dinero si el monto es positivo y no supera el saldo disponible. Finalmente, cree un método `mostrarResumen()` que devuelva los datos principales de la cuenta.

**Tu respuesta:**

```java
public class CuentaBancaria {
    private String titular;
    private double saldo;

    public CuentaBancaria(String titular, double saldo) {
        this.titular = titular;
        if (saldo >= 0) {
            this.saldo = saldo;
        } else {
            this.saldo = 0;
        }
    }

    public String getTitular() {
        return titular;
    }

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
        } else {
            System.out.println("El monto a depositar debe ser positivo.");
        }
    }

    public void retirar(double monto) {
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
        } else {
            System.out.println("Monto inválido o saldo insuficiente.");
        }
    }

    public String mostrarResumen() {
        return "Titular: " + titular + " | Saldo: " + saldo;
    }
}
```

> [!NOTE]
> **Explicación Pregunta 21**  
> Para lograr el encapsulamiento, los atributos `titular` y `saldo` deben ser declarados como `private`. Los métodos `depositar` y `retirar` aplican validaciones a sus parámetros para garantizar que las transacciones y el estado (saldo) sean válidos.

---

### Pregunta 22
**0 / 15 pts**  
Diseñe una solución usando abstracción, herencia, sobrescritura y polimorfismo. Cree una clase abstracta `Empleado` con los atributos `nombre` y `salarioBase`, además de un método abstracto `calcularSalario()`. Cree las clases `Desarrollador` y `Gerente` que hereden de `Empleado`. El desarrollador debe recibir un bono fijo y el gerente una comisión porcentual sobre su salario base. En una clase principal, almacene distintos empleados en un `ArrayList<Empleado>` y recorra la lista mostrando el nombre y el salario calculado de cada uno.

**Tu respuesta:**

```java
import java.util.ArrayList;

abstract class Empleado {
    protected String nombre;
    protected double salarioBase;

    public Empleado(String nombre, double salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    public String getNombre() {
        return nombre;
    }

    public abstract double calcularSalario();
}

class Desarrollador extends Empleado {
    private double bono;

    public Desarrollador(String nombre, double salarioBase, double bono) {
        super(nombre, salarioBase);
        this.bono = bono;
    }

    @Override
    public double calcularSalario() {
        return salarioBase + bono;
    }
}

class Gerente extends Empleado {
    private double comisionPorcentaje;

    public Gerente(String nombre, double salarioBase, double comisionPorcentaje) {
        super(nombre, salarioBase);
        this.comisionPorcentaje = comisionPorcentaje;
    }

    @Override
    public double calcularSalario() {
        return salarioBase + (salarioBase * (comisionPorcentaje / 100));
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Empleado> empleados = new ArrayList<>();
        empleados.add(new Desarrollador("Alice", 3000, 500));
        empleados.add(new Gerente("Bob", 5000, 10)); // 10% de comisión

        for (Empleado emp : empleados) {
            System.out.println("Empleado: " + emp.getNombre() + " | Salario total: " + emp.calcularSalario());
        }
    }
}
```

> [!NOTE]
> **Explicación Pregunta 22**  
> La clase abstracta `Empleado` define el comportamiento general de todo empleado (`calcularSalario()`). Al usar herencia, tanto `Desarrollador` como `Gerente` sobrescriben (polimorfismo) este método según sus propias reglas. Al procesar una lista de tipo `Empleado`, podemos tratar todas las subclases unificadamente.

---

### Pregunta 23
**0 / 10 pts**  
Implemente una interfaz funcional llamada `OperacionMatematica` con un único método `operar(double a, double b)`. En una clase principal, cree mediante expresiones lambda las operaciones de suma, resta y multiplicación. Guarde las operaciones en un `HashMap<String, OperacionMatematica>`, utilizando como claves "suma", "resta" y "multiplicacion". Luego solicite dos números, ejecute las tres operaciones y muestre los resultados.

**Tu respuesta:**

```java
import java.util.HashMap;
import java.util.Scanner;

@FunctionalInterface
interface OperacionMatematica {
    double operar(double a, double b);
}

public class MainOperaciones {
    public static void main(String[] args) {
        HashMap<String, OperacionMatematica> operaciones = new HashMap<>();

        // Expresiones lambda
        operaciones.put("suma", (a, b) -> a + b);
        operaciones.put("resta", (a, b) -> a - b);
        operaciones.put("multiplicacion", (a, b) -> a * b);

        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese el primer número: ");
        double num1 = sc.nextDouble();
        System.out.print("Ingrese el segundo número: ");
        double num2 = sc.nextDouble();

        System.out.println("Suma: " + operaciones.get("suma").operar(num1, num2));
        System.out.println("Resta: " + operaciones.get("resta").operar(num1, num2));
        System.out.println("Multiplicación: " + operaciones.get("multiplicacion").operar(num1, num2));
        
        sc.close();
    }
}
```

> [!NOTE]
> **Explicación Pregunta 23**  
> Una interfaz es funcional si tiene un solo método abstracto. Las expresiones lambda `(a, b) -> a + b` proporcionan implementaciones compactas e inline para la interfaz funcional, y son ideales para almacenarlas como valores en colecciones como un `HashMap`.
