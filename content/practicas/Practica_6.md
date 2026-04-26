---
title: "Practica 6: Sistema de Pagos con Clases Abstractas"

tags: ["POO", "Herencia", "Polimorfismo", "Clases Abstractas", "Interfaces", "Diseño Orientado a Objetos"]
---

## 🎯 Objetivo de la Práctica

Diseñar un sistema que procese múltiples formas de pago utilizando una jerarquía de clases. Los estudiantes aplicarán herencia, constructores con herencia, clases abstractas y polimorfismo dinámico (sobreescritura de métodos).

## 🏢 Escenario

Nuestra startup de e-commerce necesita procesar pagos. Dado que todos los pagos, sin importar su tipo, comparten características comunes (como pertenecer a un cliente y requerir la generación de un recibo), modelaremos el núcleo del sistema utilizando una **Clase Abstracta** que centralice esta lógica común, dejando los detalles específicos de cada pago a las clases hijas.

## 🛠️ Arquitectura Base (Implementación de Referencia)

Primero, definimos la superclase abstracta dentro del paquete `core`. Esta clase tendrá código reutilizable y obligará a sus hijas a definir cómo se procesa el cobro.

```java
package core;

public abstract class PaymentMethod {
    private String holderName;

    public PaymentMethod(String holderName) {
        this.holderName = holderName;
    }

    public String getHolderName() {
        return holderName;
    }

    // Specific method (Behavior inherited and used by ALL daughters)
    public void generateReceipt(double amount) {
        System.out.println("----- PAYMENT RECEIPT -----");
        System.out.println("Client: " + holderName);
        System.out.println("Amount charged: $" + amount);
        System.out.println("--------------------------");
    }

    // Abstract method (The contract: each daughter must implement it in their own way)
    public abstract boolean processPayment(double amount);
}
```

Ahora, implementamos las clases concretas (hijas) usando la palabra reservada `extends` dentro del paquete `models`.

```java
package models;

import core.PaymentMethod;

public class CreditCard extends PaymentMethod {
    private String cardNumber;

    public CreditCard(String holderName, String cardNumber) {
        super(holderName);
        this.cardNumber = cardNumber;
    }

    @Override
    public boolean processPayment(double amount) {
        // TODO Auto-generated method stub
        // Simulation of payment processing logic
        System.out.println("Processing payment with Credit Card ending in " + cardNumber.substring(cardNumber.length() - 4));
        generateReceipt(amount); // Reusing the method from the parent class to generate a receipt
        return true;
    }
}

```

```java
package models;

import core.PaymentMethod;

public class PayPal extends PaymentMethod {
    private String email;

    public PayPal(String holderName, String email) {
        super(holderName);
        this.email = email;
    }

    @Override
    public boolean processPayment(double amount) {
        // TODO Auto-generated method stub
        System.out.println("Collecting payment via PayPal to the account: " + email);
        generateReceipt(amount);
        return true;
    }
}
```

El código cliente aprovecha el polimorfismo instanciando las subclases, pero agrupándolas bajo el tipo de la superclase:

```java
// 4. El Procesador (Polimorfismo en acción)
import java.util.List;
import core.PaymentMethod;
import models.CreditCard;
import models.PayPal;

public class Store {
    public static void main(String[] args) throws Exception {
        // Creation of payment methods
        CreditCard creditCardPayment = new CreditCard("Alice Smith", "1234-5678-9012-3456");
        PayPal payPalPayment = new PayPal("Bob Johnson", "bob.johnson@example.com");
        // Adding the payment methods to a list
        List<PaymentMethod> payments = List.of(creditCardPayment, payPalPayment);
        // Amount of the membership to be charged
        double membershipAmount = 49.99;
        // Process the payments using the static method of the Store class
        makePayments(payments, membershipAmount);
    }

    public static void makePayments(List<PaymentMethod> payments, double membershipAmount) {
        for (PaymentMethod payment : payments) {
            boolean success = payment.processPayment(membershipAmount);
            if (!success) {
                System.err.println("Payment failed for: " + payment.getHolderName());
            }
        }
    }
}

```

---

## 🚀 Retos para el Estudiante (El Trabajo Práctico)

1. **Reto 1 (Crypto):** Crea una subclase `CryptoPayment` que herede de `PaymentMethod`. Su constructor debe recibir el nombre del titular (`holderName`) y la dirección de la billetera (`walletAddress`). El método `processPayment()` solo debe retornar `true` y llamar a `generateReceipt()` **si el monto es mayor o igual a 10.0** (simulando una restricción de red). Si es menor, debe imprimir "Crypto payment failed: Amount must be at least $10.0" y retornar `false`.
2. **Reto 2 (Cash):** Crea una subclase `CashPayment` que herede de `PaymentMethod`. Su constructor solo necesita el `titular`. Para evitar lavado de dinero, su método `processPayment()` debe rechazar el pago (retornar `false`) si el monto supera los 1000 e imprimir el mensaje (`Cash payment failed: Amount exceeds the limit of $1000.`). De lo contrario, genera el recibo y retorna `true`.
3. **Reto 3:** Modifica la clase `Store`, crea nuevas instancias de `CreditCard`, `PayPal`, `CryptoPayment` y `CashPayment` y llámales al método `processPayment()` con diferentes montos para verificar que los métodos se comporten correctamente.

---

## ⚙️ Pruebas Automatizadas (Criterios de Evaluación en JUnit 5)

Estas pruebas garantizarán que los estudiantes hayan respetado la jerarquía de herencia, el uso de la clase abstracta y la lógica de los retos.

> **Nota:** Esta seccion es solo para referencia, no es necesario que lo implementen, solo es para que pueda ver como se evaluaria su codigo.

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PaymentSystemTest {

    @Test
    public void testBasicInheritance() {
        CreditCard creditCardPayment = new CreditCard("Juan Perez", "1234567890123456");
        PayPal payPalPayment = new PayPal("Ana Gomez", "ana@usfx.bo");

        assertTrue(creditCardPayment.processPayment(50.0), "Payment with credit card should be successful");
        assertTrue(payPalPayment.processPayment(25.0), "Payment with PayPal should be successful");
    }

    @Test
    public void testCryptoPaymentLowAmount() {
        CryptoPayment crypto = new CryptoPayment("Satoshi", "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
        
        assertFalse(crypto.processPayment(5.0), "Crypto payment must fail if it is less than 10.0");
        assertTrue(crypto.processPayment(15.0), "Crypto payment must be successful if it is greater than or equal to 10.0");
    }

    @Test
    public void testCashPaymentExceedsLimit() {
        CashPayment cash = new CashPayment("Carlos Lopez");

        assertTrue(cash.processPayment(500.0), "Must be successful with an allowed amount");
        assertFalse(cash.processPayment(1500.0), "Must fail if the amount exceeds 1000 due to security policies");
    }
}
```

### 📊 Métricas de Revisión (Rúbrica basada en `tests`)

- **Puntaje total: 100 puntos**

| Suite de Tests      | Puntos |
| ------------------- | -----: |
| `PaymentMethodTest` |     15 |
| `CreditCardTest`    |     10 |
| `PayPalTest`        |     10 |
| `CryptoPaymentTest` |     15 |
| `CashPaymentTest`   |     15 |
| `StoreTest`         |     35 |

---

#### ✅ Criterios por suite

- **`PaymentMethodTest` (15 pts)**
  - Clase `PaymentMethod` declarada como `abstract`.
  - Constructor y `getHolderName()` funcionando correctamente.
  - Método `generateReceipt(double amount)` disponible y reutilizable por subclases.
  - Contrato `processPayment(double amount)` definido como método abstracto.

- **`CreditCardTest` (10 pts)**
  - `CreditCard` hereda de `PaymentMethod`.
  - Implementa `processPayment` y retorna `true`.
  - Usa `generateReceipt(...)` al procesar pagos válidos.

- **`PayPalTest` (10 pts)**
  - `PayPal` hereda de `PaymentMethod`.
  - Implementa `processPayment` y retorna `true`.
  - Usa `generateReceipt(...)` al procesar pagos válidos.

- **`CryptoPaymentTest` (15 pts)**
  - Si `amount < 10.0`: retorna `false` y muestra  
     `Crypto payment failed: Amount must be at least $10.0`.
  - Si `amount >= 10.0`: retorna `true` y genera recibo.

- **`CashPaymentTest` (15 pts)**
  - Si `amount > 1000`: retorna `false` y muestra  
     `Cash payment failed: Amount exceeds the limit of $1000.`
  - Si `amount <= 1000`: retorna `true` y genera recibo.

- **`StoreTest` (35 pts)**
  - Verifica integración completa y polimorfismo en `makePayments(...)`.
  - Casos esperados:
    - `testPagoExitosoTarjetaCredito` — **2.5 pts**
    - `testPagoExitosoPayPal` — **2.5 pts**
    - `testPagoExitosoCripto` — **2.5 pts**
    - `testPagoFallidoCriptoMontoBajo` — **2.5 pts**
    - `testPagoExitosoEfectivo` — **2.5 pts**
    - `testPagoFallidoEfectivoMontoExcedido` — **2.5 pts**
    - `testProcesarMultiplesPagos` — **7.5 pts**
  - Además, se evalúa consistencia de salida, manejo de errores y correcta ejecución de todos los pagos de la lista.

> **Recomendación:** respetar exactamente nombres de clases, firmas de métodos y mensajes esperados por los tests para evitar fallos por formato.

---

### 🎯 Puntos clave de arquitectura y POO

- ✅ **Herencia**: las clases `CreditCard`, `PayPal`, `CryptoPayment` y `CashPayment` heredan de la clase abstracta `PaymentMethod`.
- ✅ **Encapsulamiento**: el atributo `holderName` está protegido en la clase base y solo se accede mediante getters.
- ✅ **Polimorfismo**: el método `makePayments` acepta una lista genérica de `PaymentMethod`, demostrando que el código cliente trabaja con la interfaz abstracta sin conocer las implementaciones concretas.
- ✅ **Reutilización de código**: todas las subclases invocan al método heredado `generateReceipt()` para evitar duplicación de lógica.

---

### 🧰 Herramientas de validación

El entorno de evaluación usa JUnit 5 y Hamcrest.

- **Pruebas unitarias:**  
  `PaymentMethodTest`, `CreditCardTest`, `PayPalTest`, `CryptoPaymentTest`, `CashPaymentTest`, `StoreTest`.
- **Asserters disponibles:**  
  `assertEquals`, `assertTrue`, `assertFalse`, `assertNotNull`, etc.
- **Mensajes de error:**  
  Los tests validan mensajes de texto exactos como:  
  - `Crypto payment failed: Amount must be at least $10.0`  
  - `Cash payment failed: Amount exceeds the limit of $1000.`

> **Tip:** Para evitar errores, usa las cadenas de mensaje y los valores exactos que se muestran en los tests.
