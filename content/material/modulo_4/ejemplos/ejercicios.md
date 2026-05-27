---
title: "Planificación de ejercicios prácticos — Java Swing"
date: 2026-05-26
tags: ["JAVA", "Swing", "GUI"]
---

La secuencia ideal para enseñar Swing en la práctica:

1. Crear ventanas.
2. Agregar componentes.
3. Organizar componentes con layouts.
4. Responder a eventos.
5. Personalizar interfaces.
6. Separar lógica y presentación.
7. Construir mini aplicaciones integradoras.

Esto mantiene coherencia con los principios de aprendizaje incremental y con la evolución natural del desarrollo GUI en Java.

---

# Estrategia

La clase puede dividirse en 4 niveles:

| Nivel   | Objetivo                                 | Conceptos                               |
| ------- | ---------------------------------------- | --------------------------------------- |
| Nivel 1 | Comprender la estructura básica de Swing | `JFrame`, `JPanel`, `JButton`, `JLabel` |
| Nivel 2 | Diseñar interfaces                       | Layout Managers                         |
| Nivel 3 | Interacción del usuario                  | Eventos y listeners                     |
| Nivel 4 | Buenas prácticas                         | MVC, `SwingWorker`, modularidad         |

---

# PARTE I — Ejercicios Introductorios

---

## Ejercicio 1 — Primera Ventana con Swing

### Objetivo

Comprender cómo crear una ventana básica usando `JFrame`.

### Conceptos trabajados

* `JFrame`
* método `setSize()`
* método `setVisible()`
* cierre de aplicación
* herencia simple

---

### Código

```java
import javax.swing.JFrame;

public class VentanaBasica extends JFrame {

    public VentanaBasica() {

        // Título de la ventana
        setTitle("Mi primera ventana");

        // Tamaño
        setSize(400, 300);

        // Cerrar programa al cerrar ventana
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Mostrar ventana
        setVisible(true);
    }

    public static void main(String[] args) {
        new VentanaBasica();
    }
}
```

---

### Explicación pedagógica

El estudiante aprende:

* que `JFrame` representa una ventana;
* que una GUI es un objeto;
* que Swing utiliza herencia;
* que una ventana necesita configuración explícita.

---

### Ejercicio para estudiantes

Modificar:

* tamaño;
* título;
* posición (`setLocation()`).

---

## Ejercicio 2 — Agregar componentes básicos

### Objetivo

Aprender a insertar componentes visuales.

### Conceptos

* `JPanel`
* `JButton`
* `JLabel`
* `JTextField`

---

### Código

```java
import javax.swing.*;

public class ComponentesBasicos extends JFrame {

    public ComponentesBasicos() {

        setTitle("Componentes Swing");
        setSize(500, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        JPanel panel = new JPanel();

        JLabel etiqueta = new JLabel("Nombre:");

        JTextField campoTexto = new JTextField(15);

        JButton boton = new JButton("Enviar");

        panel.add(etiqueta);
        panel.add(campoTexto);
        panel.add(boton);

        add(panel);

        setVisible(true);
    }

    public static void main(String[] args) {
        new ComponentesBasicos();
    }
}
```

---

### Qué aprende el estudiante

* Los componentes no se agregan directamente “sueltos”.
* `JPanel` funciona como contenedor.
* Los componentes son objetos reutilizables.

---

## PARTE II — Layout Managers

---

## Ejercicio 3 — FlowLayout

### Objetivo

Comprender el layout por defecto.

---

### Código

```java
import javax.swing.*;
import java.awt.*;

public class EjemploFlowLayout extends JFrame {

    public EjemploFlowLayout() {

        setTitle("FlowLayout");
        setSize(400, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        setLayout(new FlowLayout());

        add(new JButton("Botón 1"));
        add(new JButton("Botón 2"));
        add(new JButton("Botón 3"));

        setVisible(true);
    }

    public static void main(String[] args) {
        new EjemploFlowLayout();
    }
}
```

---

### Explicación

`FlowLayout` acomoda componentes como palabras en una oración.

Cuando no hay espacio:

* baja a la siguiente línea.

---

## Ejercicio 4 — BorderLayout

### Objetivo

Aprender distribución regional.

---

### Código

```java
import javax.swing.*;
import java.awt.*;

public class EjemploBorderLayout extends JFrame {

    public EjemploBorderLayout() {

        setTitle("BorderLayout");
        setSize(500, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        setLayout(new BorderLayout());

        add(new JButton("NORTE"), BorderLayout.NORTH);
        add(new JButton("SUR"), BorderLayout.SOUTH);
        add(new JButton("ESTE"), BorderLayout.EAST);
        add(new JButton("OESTE"), BorderLayout.WEST);
        add(new JButton("CENTRO"), BorderLayout.CENTER);

        setVisible(true);
    }

    public static void main(String[] args) {
        new EjemploBorderLayout();
    }
}
```

---

## Ejercicio 5 — GridLayout

### Objetivo

Construir interfaces tipo formulario o calculadora.

---

### Código

```java
import javax.swing.*;
import java.awt.*;

public class EjemploGridLayout extends JFrame {

    public EjemploGridLayout() {

        setTitle("GridLayout");
        setSize(400, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        setLayout(new GridLayout(3, 2));

        add(new JLabel("Nombre"));
        add(new JTextField());

        add(new JLabel("Correo"));
        add(new JTextField());

        add(new JButton("Guardar"));
        add(new JButton("Cancelar"));

        setVisible(true);
    }

    public static void main(String[] args) {
        new EjemploGridLayout();
    }
}
```

---

### Tabla comparativa de Layouts

| Layout         | Organización          | Uso típico           | Ventaja           |
| -------------- | --------------------- | -------------------- | ----------------- |
| `FlowLayout`   | Horizontal secuencial | Barras simples       | Fácil             |
| `BorderLayout` | Regiones              | Ventanas principales | Flexible          |
| `GridLayout`   | Cuadrícula            | Formularios          | Orden uniforme    |
| `BoxLayout`    | Vertical u horizontal | Menús                | Alineación limpia |

---

## PARTE III — Eventos y Listeners

---

## Ejercicio 6 — Botón interactivo

### Objetivo

Introducir eventos.

---

### Código

```java
import javax.swing.*;
import java.awt.event.*;

public class EventoBoton extends JFrame {

    public EventoBoton() {

        setTitle("Eventos");
        setSize(300, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        JButton boton = new JButton("Haz clic");

        boton.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {

                JOptionPane.showMessageDialog(null,
                        "Botón presionado");
            }
        });

        add(boton);

        setVisible(true);
    }

    public static void main(String[] args) {
        new EventoBoton();
    }
}
```

---

### Explicación conceptual

Swing usa:

* componentes;
* eventos;
* listeners.

El botón:

* genera un evento;
* el listener lo escucha;
* se ejecuta una acción.

---

## Ejercicio 7 — Contador de clics

### Objetivo

Manejar estado interno.

---

### Código

```java
import javax.swing.*;
import java.awt.event.*;

public class ContadorClicks extends JFrame {

    private int contador = 0;

    public ContadorClicks() {

        setTitle("Contador");
        setSize(300, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        JButton boton = new JButton("Clic");

        JLabel etiqueta = new JLabel("Clicks: 0");

        boton.addActionListener(e -> {

            contador++;

            etiqueta.setText("Clicks: " + contador);
        });

        setLayout(new java.awt.FlowLayout());

        add(boton);
        add(etiqueta);

        setVisible(true);
    }

    public static void main(String[] args) {
        new ContadorClicks();
    }
}
```

---

## Conceptos modernos enseñados

Aquí ya se introduce:

* expresiones lambda;
* programación funcional básica;
* simplificación de listeners.

Esto conecta directamente con el módulo moderno de Java 8+.

---

## PARTE IV — Mini proyectos guiados

---

## Mini Proyecto 1 — Formulario de Registro

### Objetivos

Aplicar:

* `GridLayout`
* `JTextField`
* `JButton`
* eventos

---

## Funcionalidad

El usuario escribe:

* nombre;
* correo;
* edad.

Luego:

* presiona “Registrar”;
* los datos aparecen en un `JTextArea`.

---

## Mini Proyecto 2 — Calculadora Básica

### Conceptos

* `GridLayout`
* eventos
* parsing numérico
* validaciones

---

## Operaciones

* suma
* resta
* multiplicación
* división

---

## Mini Proyecto 3 — Agenda de Tareas

### Conceptos avanzados

* `DefaultListModel`
* `JList`
* persistencia simple
* modularización

---

## PARTE V — Personalización

---

## Ejercicio 8 — Cambiar colores y fuentes

```java
import javax.swing.*;
import java.awt.*;

public class PersonalizacionGUI extends JFrame {

    public PersonalizacionGUI() {

        setTitle("Personalización");
        setSize(400, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        JButton boton = new JButton("Aceptar");

        boton.setBackground(Color.BLUE);

        boton.setForeground(Color.WHITE);

        boton.setFont(new Font("Arial", Font.BOLD, 18));

        add(boton);

        setVisible(true);
    }

    public static void main(String[] args) {
        new PersonalizacionGUI();
    }
}
```

---

## Ejercicio 9 — Cambiar Look & Feel

```java
import javax.swing.*;

public class LookAndFeelEjemplo {

    public static void main(String[] args) {

        try {

            UIManager.setLookAndFeel(
                UIManager.getSystemLookAndFeelClassName()
            );

        } catch (Exception e) {
            e.printStackTrace();
        }

        JFrame ventana = new JFrame("Look & Feel");

        ventana.setSize(400, 200);

        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        ventana.setVisible(true);
    }
}
```

---

## PARTE VI — Buenas prácticas

---

## Ejercicio 10 — Separación MVC

### Objetivo

Mostrar arquitectura profesional.

---

### División recomendada

| Clase              | Responsabilidad |
| ------------------ | --------------- |
| `VistaLogin`       | Interfaz        |
| `ControladorLogin` | Eventos         |
| `Usuario`          | Datos           |

---

### Ejemplo conceptual

```text
Usuario → Modelo
Ventana → Vista
Eventos → Controlador
```

---

## Ejercicio 11 — SwingWorker

### Problema

Si una tarea tarda mucho:

* la interfaz se congela.

---

### Solución

`SwingWorker`.

---

### Ejemplo

```java
SwingWorker<Void, Void> worker = new SwingWorker<>() {

    @Override
    protected Void doInBackground() throws Exception {

        Thread.sleep(5000);

        return null;
    }

    @Override
    protected void done() {

        JOptionPane.showMessageDialog(null,
                "Proceso terminado");
    }
};

worker.execute();
```