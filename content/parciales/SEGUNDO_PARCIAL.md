# SEGUNDO PARCIAL SIS-211 G-2

### Pregunta 1
¿Qué principio de la POO garantiza que los detalles internos de una clase no puedan ser accedidos directamente desde afuera?

- [ ] Abstraccion
- [ ] Herencia
- [x] Encapsulamiento
- [ ] Polimorfismo

> [!NOTE]
> **Explicación Pregunta 1**  
> El encapsulamiento es el principio que oculta el estado interno del objeto y obliga a que toda interacción se realice mediante métodos controlados, protegiendo así los datos de modificaciones indebidas.

---

### Pregunta 2
¿Cuál de los siguientes casos representa correctamente sobreescritura? (OVERRIDE)

- [ ] Dos métodos con el mismo nombre, pero distintos parámetros
- [x] Un método en una subclase que redefine el método de la clase padre
- [ ] Dos métodos con el mismo nombre y mismos parámetros dentro de la misma clase
- [ ] Un metodo static redefiniendo en una clase

> [!NOTE]
> **Explicación Pregunta 2**  
> La sobrescritura (override) consiste en proporcionar una nueva implementación en la clase hija a un método que ya ha sido definido en la clase padre, manteniendo la misma firma (nombre y parámetros).

---

### Pregunta 3
¿Cual es el beneficio principal del polimorfismo?

- [ ] Crear multiples objetos al mismo tiempo
- [x] Permitir que un mismo metodo actue de diferentes maneras segun el objeto.
- [ ] Permitir acceso directo a los atributos
- [ ] Permitir heredar multiples clases.

> [!NOTE]
> **Explicación Pregunta 3**  
> El polimorfismo permite tratar a objetos de diferentes subclases de forma uniforme, ya que una misma llamada a un método puede ejecutar comportamientos distintos dependiendo de la instancia real del objeto.

---

### Pregunta 4
¿Cual de las siguientes clases no puede ser instanciada?

- [ ] Clase concreta
- [ ] Clase final
- [x] Clase abstracta
- [ ] Clase publica sin constructor

> [!NOTE]
> **Explicación Pregunta 4**  
> Las clases abstractas sirven únicamente como modelos o plantillas para ser heredadas por otras clases. Por diseño, Java no permite instanciar (crear objetos directamente de) una clase abstracta.

---

### Pregunta 5
¿Que palabra clave se utiliza para evitar que una clase sea heredada?

- [ ] static
- [ ] private 
- [x] final
- [ ] abstract

> [!NOTE]
> **Explicación Pregunta 5**  
> El modificador `final` aplicado a una clase impide que otras clases puedan heredar (extender) de ella, asegurando que su comportamiento no pueda ser alterado mediante sobrescritura en subclases.

---

### Pregunta 6
¿Cual es una forma valida de sobrecara (overload)?

- [ ] Cambiar el tipo de retorno.
- [ ] Cambiar el nombre del metodo.
- [ ] Cambiar la visibilidad.
- [x] Cambiar la lista de parametros.

> [!NOTE]
> **Explicación Pregunta 6**  
> La sobrecarga permite tener múltiples métodos con el mismo nombre dentro de la misma clase, siempre y cuando su lista de parámetros (cantidad o tipo) sea diferente.

---

### Pregunta 7
Sobre el uso de interfaces en java, ¿que afirmación es verdadera?

- [ ] Una interfaz puede tener atributos privados.
- [ ] Una interfaz puede tener métodos con implementación completa.
- [ ] Una interfaz solo puede tener métodos abstractos.
- [x] Una clase puede implementar multiples interfaces.

> [!NOTE]
> **Explicación Pregunta 7**  
> Java no soporta herencia múltiple de clases, pero permite que una clase implemente múltiples interfaces, facilitando así la adopción de múltiples contratos o comportamientos.

---

### Pregunta 8
¿Que sucede cuando un atributo es protegido?

- [ ] Solo se accede desde la misma clase.
- [ ] No puede heredarse.
- [x] Puede ser accedido desde subclases y mismo paquete.
- [ ] Es accesible desde cualquier clase.

> [!NOTE]
> **Explicación Pregunta 8**  
> El modificador de acceso `protected` hace que un atributo o método sea visible dentro de su propio paquete y en cualquier subclase, independientemente de si la subclase está en otro paquete.

---

### Pregunta 9
Si una clase hereda de otra, ¿que constructor se invoca primero?

- [ ] El constructor de la subclase.
- [x] El constructor de la superclase.
- [ ] El constructor con mas parametros.
- [ ] Ninguno hasta llamar manualmente a `super()`.

> [!NOTE]
> **Explicación Pregunta 9**  
> Al crear una instancia de una subclase, Java asegura la correcta inicialización invocando primero el constructor de la superclase (implícitamente mediante `super()` si no se indica) antes de ejecutar el constructor de la subclase.

---

### Pregunta 10
¿Cual es el propósito de la palabra clave super?

- [ ] Crear un objeto de la clase padre.
- [x] Invocar metodos y atributos de la clase padre.
- [ ] Declarar metodos abstractos.
- [ ] Indicar sobreescritura.

> [!NOTE]
> **Explicación Pregunta 10**  
> La palabra reservada `super` se utiliza en las subclases para hacer referencia directa a los métodos, atributos o constructores de la superclase inmediata.

---

### Pregunta 11
Sobreescritura básica

```java
class Animal{
	public void sonido(){
		System.out.println("Sonido Generico");
	}
}

class Perro extends Animal{
    // completar aqui
    @Override
    public void sonido(){
        System.out.println("Guau Guau");
    }
}
```

¿Cual sobrescribe correctamente el método?

- [x] `public void sonido(){ System.out.println("Guau Guau"); }`
- [ ] `public void sonido(int x){ System.out.println("Guau"); }`
- [ ] `static void sonido(){ System.out.println("Guau"); }`
- [ ] `public String sonido(){ return "Guau"; }`

> [!NOTE]
> **Explicación Pregunta 11**  
> Para que sea una sobrescritura correcta, el método debe tener la misma firma (nombre `sonido` y sin parámetros) y el mismo tipo de retorno (`void`), tal como fue definido en la clase padre `Animal`.

---

### Pregunta 12
Abstracción

```java
abstract class Figura{
    // completar aqui
}

class Circulo extends Figura{
	@Override
	public double área(){ return 3.14; }
}
```

¿Cual completa correctamente?

- [x] `public abstract double area();` *(Nota: Se asume que es abstract, ya que un método sin cuerpo en una clase abstracta debe llevar esa palabra clave y coincidir en tipo de retorno)*
- [ ] `private double area();`
- [ ] `public abstract int area();`
- [ ] `public static double area();`

> [!NOTE]
> **Explicación Pregunta 12**  
> Un método que será sobrescrito y que no tiene implementación en la clase base abstracta debe definirse usando `abstract`. Además, su tipo de retorno debe coincidir (o ser covariante), en este caso `double`.

---

### Pregunta 13
Llamada al constructor padre

```java
class Persona{
	String nombre;
	Persona(String n) { nombre = n; }
}

class Estudiante extends Persona {
	Estudiante(String n){
		// completar
	}
}
```
- [x] `super(n);`
- [ ] `this(n);`
- [ ] `Persona(n);`
- [ ] `return;`

> [!NOTE]
> **Explicación Pregunta 13**  
> Dado que la clase `Persona` no tiene un constructor por defecto (sin parámetros), la clase hija `Estudiante` está obligada a llamar explícitamente al constructor de la clase padre pasándole el argumento necesario usando `super(n);`.

---

### Pregunta 14
Sobrecarga correcta

```java
class Calculadora{
	// completar aqui
}
```

¿Cual define una sobrecarga valida?

- [x] `int sumar(int a, int b)` y `int sumar(int a, int b, int c)`
- [ ] `int sumar(int a, int b)` y `double sumar(int a, int b)`
- [ ] `int sumar(int a, int b)` y `int sumar(int x, int y)`
- [ ] `int sumar(int a, int b)` y `static int sumar(int a, int b)`

> [!NOTE]
> **Explicación Pregunta 14**  
> La primera opción es válida porque la cantidad de parámetros es diferente (dos frente a tres). Cambiar solo el tipo de retorno o el nombre de las variables no es suficiente para que Java diferencie los métodos.

---

### Pregunta 15
Encapsulación

```java
class Cuenta{
	private double saldo;

    // completar getter correcto
}
```

- [x] `public double getSaldo(){return saldo;}` *(Añadiendo visibilidad habitual)*
- [ ] `private double getSaldo(){return saldo;}`
- [ ] `public void getSaldo(double s){saldo = s;}`
- [ ] `protected void saldo(){}`

> [!NOTE]
> **Explicación Pregunta 15**  
> Un *getter* tiene como propósito devolver el valor de un atributo privado, por lo que su tipo de retorno debe coincidir con el del atributo (aquí `double`) y convencionalmente es público para que pueda ser leído desde afuera de la clase.

---

### Pregunta 16
Polimorfismo dinámico

```java
Animal a = new Perro();
// completar
```
- [x] `a.sonido();`
- [ ] `Perro.sonido();`
- [ ] `Animal.sonido();`
- [ ] `super.sonido();`

> [!NOTE]
> **Explicación Pregunta 16**  
> Al invocar `a.sonido();`, el compilador revisa la referencia de tipo `Animal`, pero en tiempo de ejecución, Java ejecuta la implementación del objeto real que fue instanciado, en este caso, la clase `Perro`.

---

### Pregunta 17
Método abstracto

```java
abstract class Ave{
		// completar
}

class Aguila extends Ave{
	public void volar(){
		System.out.println("Volando Alto");
	}	
}
```

- [x] `public abstract void volar();`
- [ ] `private abstract void volar();`
- [ ] `static void volar();`
- [ ] `final void volar();`

> [!NOTE]
> **Explicación Pregunta 17**  
> Un método abstracto no tiene cuerpo y delega su implementación a la clase hija. Debe ser público (o protegido) para poder ser sobrescrito; no puede ser `private`, `static` ni `final`.

---

### Pregunta 18
Uso correcto de this

```java
class Punto{
	int x;
	Punto(int x){
        //completar		
	}
}
```
- [x] `this.x = x;`
- [ ] `x = this.x;`
- [ ] `super.x = x;`
- [ ] `return this;`

> [!NOTE]
> **Explicación Pregunta 18**  
> Cuando el parámetro del constructor tiene el mismo nombre que el atributo de la clase, se utiliza `this` para diferenciar el atributo (`this.x`) de la variable local o parámetro (`x`).

---

### Pregunta 19
Polimorfismo con interfaces

```java
interface Vehiculo{
	void mover();
}

class Auto implements Vehiculo {
    // completar aqui
}
```

- [x] `public void mover(){ System.out.println("El auto se mueve"); }`
- [ ] `void mover(int x){}`
- [ ] `public String mover(){ return ""; }`
- [ ] `private void mover(){}`

> [!NOTE]
> **Explicación Pregunta 19**  
> Los métodos definidos en una interfaz en Java son por defecto `public` y `abstract`. Al implementar dicho método en una clase, debe definirse explícitamente como `public`.

---

### Pregunta 20
Clase final

```java
// cual evita que la clase sea heredada?
// completar
```

- [x] `final class Utilidades{}`
- [ ] `abstract class Utilidades{}`
- [ ] `private class Utilidades{}`
- [ ] `class Utilidades final{}`

> [!NOTE]
> **Explicación Pregunta 20**  
> La palabra reservada `final` debe colocarse antes de `class`. Esto indica al compilador que la clase no puede tener subclases (nadie puede usar `extends Utilidades`).