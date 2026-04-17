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

✔ Reutilización de código
✔ Organización jerárquica
✔ Reducción de duplicación

---

### 🧠 Reflexión final

1. ¿Qué cambió respecto a la Fase 1?
2. ¿Qué ventajas tiene este diseño?
3. ¿Qué pasaría si agregamos un nuevo personaje ahora?
