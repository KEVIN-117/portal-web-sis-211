---
title: "Practica 6: Sistema de Pagos con Clases Abstractas"

tags: ["POO", "Herencia", "Polimorfismo", "Clases Abstractas", "Interfaces", "Diseño Orientado a Objetos"]
---

## 🎯 Objetivo de la Práctica

Diseñar un sistema que procese múltiples formas de pago utilizando una jerarquía de clases. Los estudiantes aplicarán herencia, constructores con herencia, clases abstractas y polimorfismo dinámico (sobreescritura de métodos).

## 🏢 Escenario

Nuestra startup de e-commerce necesita procesar pagos. Dado que todos los pagos, sin importar su tipo, comparten características comunes (como pertenecer a un cliente y requerir la generación de un recibo), modelaremos el núcleo del sistema utilizando una **Clase Abstracta** que centralice esta lógica común, dejando los detalles específicos de cada pago a las clases hijas.

## 🛠️ Arquitectura Base (Implementación de Referencia)

Primero, definimos la superclase abstracta. Esta clase tendrá código reutilizable y obligará a sus hijas a definir cómo se procesa el cobro.

```java
// 1. La Clase Padre (Abstracta)
public abstract class MetodoPago {
    // Atributo común protegido para que las clases hijas puedan acceder si lo necesitan
    protected String titular;

    // El constructor de la clase padre
    public MetodoPago(String titular) {
        this.titular = titular;
    }

    // Método concreto (Comportamiento heredado y reutilizado por TODAS las hijas)
    public void generarRecibo(double monto) {
        System.out.println("----- RECIBO DE PAGO -----");
        System.out.println("Cliente: " + titular);
        System.out.println("Monto cobrado: $" + monto);
        System.out.println("--------------------------");
    }

    // Método abstracto (El contrato: cada hija debe implementarlo a su manera)
    public abstract boolean procesarPago(double monto);
}
```

Ahora, implementamos las clases concretas (hijas) usando la palabra reservada `extends`.

```java
// 2. Subclase 1: Tarjeta de Crédito
public class PagoTarjeta extends MetodoPago {
    private String numeroTarjeta;

    public PagoTarjeta(String titular, String numeroTarjeta) {
        super(titular); // Invocamos obligatoriamente al constructor de la clase padre
        this.numeroTarjeta = numeroTarjeta;
    }

    @Override
    public boolean procesarPago(double monto) {
        // Simulamos la lógica de cobro
        System.out.println("Cobrando con Tarjeta terminada en " + numeroTarjeta.substring(numeroTarjeta.length() - 4));
        generarRecibo(monto); // Reutilizamos el código de la superclase
        return true; 
    }
}

// 3. Subclase 2: PayPal
public class PagoPayPal extends MetodoPago {
    private String correoElectronico;

    public PagoPayPal(String titular, String correoElectronico) {
        super(titular);
        this.correoElectronico = correoElectronico;
    }

    @Override
    public boolean procesarPago(double monto) {
        System.out.println("Cobrando vía PayPal a la cuenta: " + correoElectronico);
        generarRecibo(monto);
        return true;
    }
}
```

El código cliente aprovecha el polimorfismo instanciando las subclases, pero agrupándolas bajo el tipo de la superclase:

```java
// 4. El Procesador (Polimorfismo en acción)
import java.util.List;

public class Tienda {
    // Fíjense cómo recibimos la Clase Abstracta 'MetodoPago'.
    public void realizarCobros(List<MetodoPago> pagosPendientes, double montoMembresia) {
        for (MetodoPago pago : pagosPendientes) {
            // El polimorfismo dinámico decide en tiempo de ejecución qué procesarPago() llamar
            boolean exito = pago.procesarPago(montoMembresia);
            if (!exito) {
                System.err.println("Atención: El pago de " + pago.titular + " ha fallado.");
            }
        }
    }
}
```

---

## 🚀 Retos para el Estudiante (El Trabajo Práctico)

1. **Reto 1 (Cripto):** Crea una subclase `PagoCripto` que herede de `MetodoPago`. Su constructor debe recibir el nombre del titular y la dirección de la billetera (wallet). El método `procesarPago` solo debe retornar `true` y llamar a `generarRecibo()` **si el monto es mayor o igual a 10.0** (simulando una restricción de red). Si es menor, debe imprimir "Monto insuficiente" y retornar `false`.
2. **Reto 2 (Efectivo):** Crea una subclase `PagoEfectivo` que herede de `MetodoPago`. Su constructor solo necesita el `titular`. Para evitar lavado de dinero, su método `procesarPago` debe rechazar el pago (retornar `false`) si el monto supera los 1000. De lo contrario, genera el recibo y retorna `true`.

---

## ⚙️ Pruebas Automatizadas (Criterios de Evaluación en JUnit 5)

Estas pruebas garantizarán que los estudiantes hayan respetado la jerarquía de herencia, el uso de la clase abstracta y la lógica de los retos.

> **Nota:** Esta seccion es solo para referencia, no es necesario que lo implementen, solo es para que pueda ver como se evaluaria su codigo.

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SistemaPagosTest {

    @Test
    public void testHerenciaBasica() {
        MetodoPago tarjeta = new PagoTarjeta("Juan Perez", "1234567890123456");
        MetodoPago paypal = new PagoPayPal("Ana Gomez", "ana@usfx.bo");

        assertTrue(tarjeta.procesarPago(50.0), "El pago con tarjeta debería ser exitoso");
        assertTrue(paypal.procesarPago(25.0), "El pago con PayPal debería ser exitoso");
    }

    @Test
    public void testPagoCriptoFallaMontoMinimo() {
        MetodoPago cripto = new PagoCripto("Satoshi", "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
        
        assertFalse(cripto.procesarPago(5.0), "El pago cripto debe fallar si es menor a 10.0");
        assertTrue(cripto.procesarPago(15.0), "El pago cripto debe ser exitoso si es mayor o igual a 10.0");
    }

    @Test
    public void testPagoEfectivoRechazaMaximo() {
        MetodoPago efectivo = new PagoEfectivo("Carlos Lopez");

        assertTrue(efectivo.procesarPago(500.0), "Debe ser exitoso con un monto permitido");
        assertFalse(efectivo.procesarPago(1500.0), "Debe fallar si el monto supera los 1000 por políticas de seguridad");
    }
}
```

### 📊 Métricas de Revisión (Rúbrica)

* **Compilación y Herencia (20%):** Las clases hijas utilizan `extends MetodoPago` y compilan correctamente invocando a `super(titular)`.
* **Test Passing (50%):** Cada Test exitoso en JUnit suma puntos.
* **Buenas Prácticas POO (30%):** * Uso obligatorio de la anotación `@Override`.
  * La llamada al método heredado `generarRecibo(monto)` se realiza dentro de las clases hijas solo si el pago es exitoso.
  * Encapsulamiento correcto (atributos de las subclases marcados como `private`).
