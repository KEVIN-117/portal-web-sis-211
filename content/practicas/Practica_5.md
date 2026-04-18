---
title: "Practica 5: Sistema de Combate RPG"

tags: ["POO", "Herencia", "Polimorfismo", "Clases Abstractas", "Interfaces", "Diseño Orientado a Objetos"]
---

## 🧩 CONTEXTO DEL PROBLEMA

Se quiere desarrollar un sistema básico de combate tipo RPG donde modelamos diferentes tipos de personajes, cada uno con su propia forma de atacar.

---

## 🟢 FASE 1 — PROBLEMA INICIAL (15 min)

### 🧠 Enunciado

Crea una carpeta llamada `models` y dentro de ella define las siguientes clases:

* `Warrior`
* `Wizard`
* `Archer`

Cada clase debe implementar el método:

```java
void attack()
```

Cada implementación debe imprimir un tipo de ataque diferente.

---

### ⚠️ Restricciones

* No puedes usar herencia (por ahora)
* Cada clase debe ser independiente

---

### 💥 Resultado esperado (mal diseño)

```java
class Warrior {
    void attack() {
        System.out.println("Sword attack");
    }
}
```

---

### 🧠 Análisis del resultado

Después de implementar las tres clases, responde:

#### ❓ Preguntas guiadas

1. ¿Qué atributos se repiten entre las clases?
2. ¿Qué métodos son similares?
3. ¿Qué pasaría si agregamos 10 personajes más?
4. ¿Qué problemas tendría mantener este código?

---

### 🧠 Concepto clave

👉 **Duplicación de código**

Cuando múltiples clases repiten estructura o comportamiento, el sistema se vuelve:

* Difícil de mantener
* Propenso a errores
* Poco escalable

---

### 🌍 Analogía del mundo real

Imagina que una empresa fabrica personajes:

* Cada personaje se diseña desde cero
* No hay plantilla base

💥 Resultado: ineficiencia total

---

### 🎯 Conclusión

Necesitamos:

* Reutilizar código
* Modelar lo que tienen en común
* Evitar duplicación

➡️ Esto nos lleva a **Herencia**

---

## 🔵 FASE 2 — HERENCIA (25 min)

---

### 🧠 Enunciado

Crear una clase base llamada:

```java
class Character
```

Esta clase debe contener:

* `name` (String)
* `health` (int)
* `attackPower` (int)
* método `attack()`

---

### ⚠️ Restricciones importantes

* Los atributos deben ser `private`
* Se deben validar valores positivos
* Se deben implementar getters y setters

---

### 💻 Implementación base

```java
package models;

public class Character {
    private String name;
    private int health;
    private int attackPower;

    public Character(String name, int health, int attackPower) {
        this.name = name;
        validatePositiveValue(health, "Health");
        this.health = health;
        validatePositiveValue(attackPower, "Attack power");
        this.attackPower = attackPower;
    }

    // TODO: implementar getters y setters

    public void attack() {
        System.out.println(name + " attacks with power " + attackPower + "!");
    }

    private void validatePositiveValue(int value, String fieldName) {
        if (value <= 0) {
            throw new IllegalArgumentException(fieldName + " must be a positive value.");
        }
    }
}
```

---

### 🧠 Tarea

Modificar las clases:

* `Warrior`
* `Wizard`
* `Archer`

Para que:

✔ Extiendan de `Character`
✔ Usen `super(...)` en el constructor
✔ Sobrescriban el método `attack()`

---

### 💻 Ejemplo (Warrior)

```java
package models;

public class Warrior extends Character {

    public Warrior(String name, int health, int attackPower) {
        super(name, health, attackPower);
    }

    @Override
    public void attack() {
        System.out.println("Warrior attacks with a sword!");
    }
}
```

---

### ⚠️ TRAMPAS CONCEPTUALES (IMPORTANTE)

Durante la implementación, evita:

#### ❌ Error 1: No usar `extends`

```java
class Warrior {
    // independiente otra vez ❌
}
```

---

#### ❌ Error 2: No usar `super`

```java
public Warrior(...) {
    // no inicializa correctamente ❌
}
```

---

#### ❌ Error 3: Duplicar atributos

```java
private String name; // ❌ ya existe en Character
```

---

### 🌍 Analogía del mundo real

👉 Piensa en un videojuego:

* `Character` = plantilla base
* `Warrior`, `Wizard`, `Archer` = especializaciones

No creas todo desde cero, **extiendes lo existente**.

---

### 🎯 Objetivo

* ✔ Reutilización de código
* ✔ Organización jerárquica
* ✔ Reducción de duplicación

---

### 🧠 Reflexión final

1. ¿Qué cambió respecto a la Fase 1?
2. ¿Qué ventajas tiene este diseño?
3. ¿Qué pasaría si agregamos un nuevo personaje ahora?

---

## 🧪 IMPLEMENTACIÓN EN `App`

## 🔵 FASE 3

### 🧠 Enunciado adicional

Ahora modifica el `App` para usar la nueva estructura con `Character`.

---

### 💻 Implementación esperada

```java
import models.*;

public class App {
    public static void main(String[] args) {

        Warrior warrior = new Warrior("Thor", 100, 20);
        Wizard wizard = new Wizard("Merlin", 80, 25);
        Archer archer = new Archer("Legolas", 90, 18);

        warrior.attack();
        wizard.attack();
        archer.attack();
    }
}
```

---

### 🔥 MEJORA IMPORTANTE (mini salto conceptual)

Ahora agrega esto:

```java
Character c = new Warrior("Ares", 120, 30);
c.attack();
```

---

## 🌍 Analogía del mundo real

👉 Antes (Fase 1):
Cada personaje es independiente → como freelancers sin organización

👉 Ahora (Fase 2):
Todos vienen de una misma plantilla → empresa estructurada

---

## 🎯 OBJETIVO PEDAGÓGICO DEL MAIN

Este `Main` logra:

✔ Validar que el código funciona
✔ Mostrar evolución del diseño
✔ Preparar mentalmente polimorfismo
✔ Forzar uso de constructores
✔ Introducir encapsulamiento sin decirlo explícitamente

---

## 📊 SISTEMA DE EVALUACIÓN — FASE 2 (HERENCIA)

### 🎯 Enfoque

Los tests ya validan:

* Estructura
* Comportamiento
* Diseño básico

👉 Nosotros los convertimos en **métricas de evaluación**

---

## 🧮 DISTRIBUCIÓN DE PUNTAJE (100 pts)

| Categoría         | Puntos |
| ----------------- | ------ |
| Clase `Character` | 30 pts |
| Clases hijas      | 40 pts |
| Uso de herencia   | 20 pts |
| Main funcional    | 10 pts |

---

## 🟣 1. Clase `Character` — 30 pts

### 🔹 1.1 Encapsulamiento (8 pts)

✔ Campos privados:

* `name`
* `health`
* `attackPower`

| Condición   | Puntos |
| ----------- | ------ |
| 3 correctos | 8      |
| 2 correctos | 5      |
| 1 correcto  | 2      |
| ninguno     | 0      |

---

### 🔹 1.2 Getters y método `attack()` (7 pts)

✔ Métodos:

* `getName()`
* `getHealth()`
* `getAttackPower()`
* `attack()`

---

### 🔹 1.3 Constructor correcto (7 pts)

✔ Asigna correctamente valores
✔ No ignora parámetros

---

### 🔹 1.4 Validaciones (8 pts)

✔ Lanza `IllegalArgumentException`
✔ Mensaje correcto

---

## 💥 TRAMPA AQUÍ

Estudiantes que hacen:

```java
if (value <= 0) return;
```

❌ Pierden TODO este bloque

---

# 🔵 2. Clases hijas — 40 pts

---

## 🔹 2.1 Existencia de clases (6 pts)

| Clase   | Puntos |
| ------- | ------ |
| Warrior | 2      |
| Wizard  | 2      |
| Archer  | 2      |

---

## 🔹 2.2 Constructor + uso de `super` (12 pts)

✔ Correcta delegación al padre

| Condición          | Puntos |
| ------------------ | ------ |
| 3 clases correctas | 12     |
| 2 correctas        | 8      |
| 1 correcta         | 4      |

---

## 🔹 2.3 Override de `attack()` (12 pts)

✔ Método sobrescrito en cada clase

💥 NO basta heredar → deben redefinir

---

## 🔹 2.4 Funcionamiento sin errores (10 pts)

✔ Instanciación correcta
✔ No rompe ejecución

---

## 💥 TRAMPAS DETECTADAS

| Error                      | Penalización           |
| -------------------------- | ---------------------- |
| Duplicar atributos         | -5                     |
| No usar `extends`          | 0 en TODA esta sección |
| No sobrescribir `attack()` | pierde 12 pts          |

---

# 🟡 3. Uso de herencia — 20 pts

---

## 🔹 3.1 Relación correcta (15 pts)

✔ Cada clase debe cumplir:

```java
Warrior extends Character
```

| Condición   | Puntos |
| ----------- | ------ |
| 3 correctas | 15     |
| 2 correctas | 10     |
| 1 correcta  | 5      |

---

## 🔹 3.2 Diseño sin duplicación (5 pts)

✔ No repetir:

* atributos
* lógica

---

## 💥 TRAMPA FUERTE

Este caso:

```java
class Warrior {
    private String name;
}
```

👉 Aunque compile → ❌ MAL DISEÑO

---

# 🟢 4. Main funcional — 10 pts

---

## 🔹 4.1 Clase y método main (4 pts)

✔ `App` existe
✔ `main(String[] args)` existe

---

## 🔹 4.2 Ejecución correcta (6 pts)

✔ Instancia:

* Warrior
* Wizard
* Archer

✔ Llama a `attack()`

---

## 💥 TRAMPA

Esto pasa tests pero está mal:

```java
public static void main(String[] args) {}
```
