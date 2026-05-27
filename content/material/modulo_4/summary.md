---

title: "Interfaces Gráficas de Usuario (GUI) con Java Swing"
date: 2026-05-27
tags: [Java, Interfaces Gráficas, POO, Event-Driven Programming]
---


### 1. Introducción a Swing

**Swing** es un framework para la creación de interfaces gráficas de usuario en Java, parte del paquete `javax.swing` (actualmente bajo `jakarta.swing` en Jakarta EE, pero `javax.swing` en Java SE estándar). Fue introducido en Java 1.2 como sucesor de la Abstract Window Toolkit (AWT).

**Relación con AWT**:
- AWT proporciona componentes básicos que dependen de widgets nativos del sistema operativo (heavyweight).
- Swing está construido sobre AWT pero implementa la mayoría de sus componentes en Java puro (lightweight), lo que permite mayor consistencia visual entre plataformas y mayor flexibilidad de personalización.

**Ventajas de Swing**:
- Portabilidad real (look & feel consistente).
- Componentes ricos: tablas, árboles, listas editables, etc.
- Soporte para MVC (Model-View-Controller) interno.
- Mejor rendimiento en complejidad visual comparado con AWT puro.
- Extensible mediante renderers y editors personalizados.

**Arquitectura básica**:
- **Componentes**: Elementos interactivos o de visualización (`JButton`, `JLabel`, etc.).
- **Contenedores**: Componentes que pueden contener otros componentes (`JFrame`, `JPanel`, `JDialog`).
- **Eventos**: Sistema basado en el modelo de delegación de eventos. Los componentes generan eventos que son capturados por listeners.

### 2. Componentes principales

```java
import javax.swing.*;
import java.awt.*;

public class EjemploComponentes {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Ejemplo Componentes");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(600, 400);
            
            JPanel panel = new JPanel();
            
            JLabel label = new JLabel("Nombre:");
            JTextField textField = new JTextField(20);
            JButton button = new JButton("Aceptar");
            JTextArea textArea = new JTextArea(5, 30);
            
            panel.add(label);
            panel.add(textField);
            panel.add(button);
            panel.add(new JScrollPane(textArea)); // JTextArea necesita JScrollPane
            
            frame.add(panel);
            frame.setVisible(true);
        });
    }
}
```

**Menús**:
```java
JMenuBar menuBar = new JMenuBar();
JMenu archivo = new JMenu("Archivo");
JMenuItem abrir = new JMenuItem("Abrir");
archivo.add(abrir);
menuBar.add(archivo);
frame.setJMenuBar(menuBar);
```

**JTable y JList** (uso básico):
- `JTable` requiere un `TableModel`.
- `JList` usa un `ListModel`.

### 3. Layout Managers

**Tabla comparativa de Layout Managers principales**:

| Layout            | Disposición                          | Uso recomendado                          | Flexible | Complejidad |
|-------------------|--------------------------------------|------------------------------------------|----------|-------------|
| `BorderLayout`    | Cinco regiones (NORTH, SOUTH, CENTER, EAST, WEST) | Ventanas principales, paneles laterales | Alta     | Baja        |
| `FlowLayout`      | Secuencial (izquierda a derecha)     | Barras de herramientas, grupos simples   | Media    | Muy baja    |
| `GridLayout`      | Cuadrícula regular                   | Formularios, calculadoras                | Baja     | Baja        |
| `BoxLayout`       | Eje vertical u horizontal            | Listas de controles, paneles apilados    | Media    | Media       |
| `GridBagLayout`   | Cuadrícula flexible                  | Formularios complejos                    | Muy alta | Alta        |

**Ejemplo práctico con GridLayout**:
```java
JPanel formPanel = new JPanel(new GridLayout(3, 2, 10, 10)); // filas, columnas, hgap, vgap
formPanel.add(new JLabel("Usuario:"));
formPanel.add(new JTextField());
formPanel.add(new JLabel("Contraseña:"));
formPanel.add(new JPasswordField());
formPanel.add(new JLabel("Rol:"));
formPanel.add(new JComboBox<>(new String[]{"Admin", "Usuario"}));
```

**Cómo elegir**:
- Usa `BorderLayout` para estructura principal.
- `GridLayout` para disposición tabular uniforme.
- `BoxLayout` o `GridBagLayout` para control fino.

### 4. Eventos y Listeners

Swing utiliza el **modelo de delegación de eventos**: un componente fuente genera un evento y lo delega a listeners registrados.

**Ejemplo ActionListener**:
```java
JButton button = new JButton("Click");
button.addActionListener(e -> {
    JOptionPane.showMessageDialog(frame, "Botón presionado");
});
```

**Listeners más comunes**:
- `ActionListener`: clics en botones, selección en menús.
- `MouseListener` / `MouseAdapter`: eventos del ratón.
- `KeyListener` / `KeyAdapter`: eventos de teclado.
- `DocumentListener`: cambios en texto.

**Buena práctica**: Usar clases anónimas o lambdas (Java 8+).

### 5. Personalización y Estilo

```java
// Propiedades individuales
button.setBackground(Color.BLUE);
button.setForeground(Color.WHITE);
button.setFont(new Font("Arial", Font.BOLD, 14));

// Look & Feel global
try {
    UIManager.setLookAndFeel("javax.swing.plaf.nimbus.NimbusLookAndFeel");
    // O "com.sun.java.swing.plaf.motif.MotifLookAndFeel"
} catch (Exception e) {
    e.printStackTrace();
}
SwingUtilities.updateComponentTreeUI(frame);
```

### 6. Buenas prácticas en GUI

- **MVC**: Separar modelo de datos, vista (Swing components) y controlador (listeners).
- **Hilos**: Todo acceso a componentes Swing debe realizarse en el **Event Dispatch Thread (EDT)**.
  - Usar `SwingUtilities.invokeLater()` para inicialización.
  - Usar `SwingWorker` para tareas largas (background + publish/process).

**Ejemplo SwingWorker**:
```java
SwingWorker<Void, String> worker = new SwingWorker<>() {
    @Override
    protected Void doInBackground() {
        // Trabajo pesado
        return null;
    }
    @Override
    protected void done() {
        // Actualizar UI
    }
};
worker.execute();
```

**Evitar bloqueos**: Nunca realizar I/O o cálculos pesados directamente en listeners.

---

### Ejercicios de Aprendizaje Acelerado

**Active Recall**: Diferencia entre `JFrame` y `JPanel`  
`JFrame` es el contenedor de nivel superior (ventana principal del sistema operativo) que incluye barra de título, botones de minimizar/maximizar/cerrar y puede contener un `JMenuBar`.  
`JPanel` es un contenedor ligero (sin decoración nativa) diseñado para agrupar y organizar otros componentes. Generalmente se usa como contenedor intermedio dentro de un `JFrame`.

**Feynman Technique (explicación a principiante absoluto)**:  
Imagina que tienes una caja grande (el JFrame). Dentro de esa caja quieres colocar botones, textos e imágenes de forma ordenada. El "Layout Manager" es como un organizador automático que decide cómo se colocan las cosas: ¿en filas y columnas como un tablero de ajedrez? ¿uno al lado del otro como en una estantería? ¿en las esquinas y el centro como en un mapa? Tú le dices al organizador qué regla usar (`BorderLayout`, `GridLayout`, etc.) y él se encarga de mover y redimensionar los elementos cuando cambias el tamaño de la ventana.

**Pareto Principle**:  
Los componentes `JFrame`, `JPanel`, `JButton`, `JLabel` y `JTextField` representan aproximadamente el 20% de los componentes disponibles y cubren más del 80% de las necesidades en interfaces gráficas básicas (ventanas, formularios simples y botones de acción).

---

### Ejercicios Prácticos

**1. Ventana simple con JFrame y botón**  
Crear una ventana que muestre un botón que cambie su texto al ser presionado.

**2. Formulario con JTextField y JButton**  
Implementar un formulario de login que valide (simulado) usuario y contraseña.

**3. Interfaz con GridLayout**  
Diseñar una calculadora básica de 4x4 usando `GridLayout`.

**4. Personalización**  
Crear una aplicación que permita cambiar entre diferentes Look & Feel mediante un menú.

**Código base para ejercicio 1 (completar)**:
```java
public class VentanaSimple {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Mi Primera Ventana");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(300, 200);
            
            JButton button = new JButton("Haz clic");
            // Agregar ActionListener aquí
            
            frame.add(button, BorderLayout.CENTER);
            frame.setVisible(true);
        });
    }
}
```

**Fuentes recomendadas**:
- Oracle Java Tutorials: Java Swing
- Documentación oficial del paquete `javax.swing`
- Libro "Core Java" (Cay Horstmann) - Volumen II

Este material está diseñado para maximizar retención mediante ejemplos concretos y estructuración jerárquica. Implementa los ejercicios prácticos en orden y luego explica cada concepto con tus propias palabras para reforzar el aprendizaje activo.