---
title: "Interfaces gráficas de usuario con Java Swing"
date: 2026-05-27
tags: [Java, Interfaces Gráficas, POO, Event-Driven Programming]
---

Java Swing es la biblioteca estándar de Java para crear **interfaces gráficas** (GUI). Swing forma parte de las JFC (Java Foundation Classes) y ofrece un conjunto amplio de componentes ligeros (`javax.swing.*`) implementados completamente en Java. A diferencia de AWT, Swing no depende de componentes nativos del sistema operativo, lo que garantiza una apariencia consistente y una mayor flexibilidad (pluggable *look & feel*) en todas las plataformas. La arquitectura de Swing sigue un modelo *MVC* (Modelo-Vista-Controlador): cada componente separa su modelo de datos, la vista (apariencia) y el controlador (gestión de eventos). Los elementos clave de Swing son: **contenedores de alto nivel** (como `JFrame` o `JDialog`), **paneles y contenedores intermedios** (`JPanel`, etc.), y **componentes atómicos** (botones, etiquetas, campos de texto, tablas, etc.). El sistema de eventos se basa en el *modelo de delegación*: un componente fuente genera un evento (clic, teclado, ratón) que es capturado por un *listener* registrado.

## Componentes principales

- **JFrame**: Ventana principal (contenedor de nivel superior) que extiende `java.awt.Frame` e incorpora una `JRootPane`. Un `JFrame` incluye un “content pane” donde se agregan los componentes visibles. Por defecto usa `BorderLayout` en el content pane. Se usa para crear ventanas con barra de título, botones de cierre y menu bar. Ejemplo básico:

  ```java
  JFrame frame = new JFrame("Mi ventana Swing");
  frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  frame.setSize(300, 200);
  frame.setLocationRelativeTo(null);
  frame.setVisible(true);
  ```

- **JPanel**: Contenedor genérico (ligero) que extiende `JComponent`. Sirve para agrupar componentes; por defecto utiliza un `FlowLayout`. Es ideal para organizar sub-áreas dentro de la ventana. Por ejemplo, se puede crear un panel con `JPanel panel = new JPanel();` y agregarle botones, etiquetas, etc.

- **JButton**: Botón pulsable estándar (es un *AbstractButton*). Permite que el usuario realice una acción al hacer clic. Se puede configurar texto, iconos y asociarle un `ActionListener`. Por ejemplo:

  ```java
  JButton boton = new JButton("Aceptar");
  boton.addActionListener(e -> {
      System.out.println("¡Botón presionado!");
  });
  panel.add(boton);
  ```

- **JLabel**: Etiqueta de texto o imagen. `JLabel` muestra una cadena corta o un icono y **no responde a eventos de entrada** (no es interactiva). Se emplea para etiquetas, títulos o para acompañar otros campos. Ejemplo: `new JLabel("Nombre:")`.

- **JTextField**: Campo de texto de una sola línea para entrada del usuario. Es básico y dispara un `ActionEvent` al pulsar Enter. Se usa para recibir texto breve. Ejemplo: 

  ```java
  JTextField campo = new JTextField(20); // 20 columnas
  panel.add(new JLabel("Edad:"));
  panel.add(campo);
  ```

- **JTextArea**: Área de texto multilínea editable. A diferencia de `JTextField`, permite introducir varias líneas. Se usa para textos largos o logs. Normalmente se coloca dentro de un `JScrollPane` para barras de desplazamiento. Por ejemplo: 

  ```java
  JTextArea area = new JTextArea(5, 30);
  area.setLineWrap(true);
  JScrollPane scroll = new JScrollPane(area);
  panel.add(scroll);
  ```

- **JMenuBar / JMenu / JMenuItem**: Para menús desplegables en la ventana. Se crea un `JMenuBar` y se establece en el `JFrame` con `frame.setJMenuBar(menuBar)`. A ese menu bar se agregan instancias de `JMenu` (por ejemplo, “Archivo”, “Ayuda”), y a cada `JMenu` se le agregan `JMenuItem` (opciones de menú). También hay submenús (`JMenu` dentro de un `JMenu`) y elementos de casilla/radio (`JCheckBoxMenuItem`, `JRadioButtonMenuItem`). Ejemplo simplificado:

  ```java
  JMenuBar menuBar = new JMenuBar();
  JMenu menuArchivo = new JMenu("Archivo");
  JMenuItem itemSalir = new JMenuItem("Salir");
  itemSalir.addActionListener(e -> System.exit(0));
  menuArchivo.add(itemSalir);
  menuBar.add(menuArchivo);
  frame.setJMenuBar(menuBar);
  ```

- **JTable**: Componente para mostrar/edit tabla bidimensional de datos. Permite ordenar, editar, filtrar celdas. Generalmente se coloca dentro de un `JScrollPane`. Por ejemplo, se define un modelo de datos (`TableModel`) y se crea la tabla: 

  ```java
  String[] cols = {"ID","Nombre","Edad"};
  Object[][] data = {{1,"Ana",30},{2,"Luis",25}};
  JTable tabla = new JTable(data, cols);
  frame.add(new JScrollPane(tabla), BorderLayout.CENTER);
  ```

- **JList**: Muestra una lista vertical de elementos. Permite selección simple o múltiple. Se usa junto con un modelo (`ListModel` o array). Ejemplo:

  ```java
  String[] opciones = {"Rojo","Verde","Azul"};
  JList<String> lista = new JList<>(opciones);
  frame.add(new JScrollPane(lista), BorderLayout.WEST);
  ```

## Layout Managers

Swing usa *layout managers* para disponer componentes en contenedores. No hay posiciones absolutas (por defecto), sino gestores que organizan componentes según reglas. Los más comunes son:

| Gestor           | Descripción breve                                                                                                                     | Uso típico                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **BorderLayout** | Divide el espacio en 5 zonas: norte, sur, este, oeste y centro. El área central absorbe el espacio sobrante.                          | Ventanas con encabezado, pie y panel central. (Es el layout por defecto de `JFrame`.) |
| **FlowLayout**   | Organiza componentes en una fila (y luego salta a la siguiente) alineados horizontalmente. Es el layout por defecto de cada `JPanel`. | Formularios simples donde se añaden componentes de izquierda a derecha. |
| **GridLayout**   | Crea una cuadrícula (mismo ancho y alto para cada celda) con un número fijo de filas y columnas.                                      | Formularios tipo tabla uniforme (por ejemplo, botones en filas iguales). |
| **BoxLayout**    | Coloca componentes en una sola fila o columna (uno tras otro) y respeta tamaños máximos. Permite alinearlos vertical/horizontalmente. | Listas verticales o barras de herramientas, cuando se requiera alineación personalizada. |

Cuando diseñamos la GUI, elegimos el layout según la distribución deseada. Por ejemplo, una barra de menú arriba, un panel central y un botón abajo puede usarse con `BorderLayout`. Un formulario con etiquetas y campos alineados puede usar `GridLayout` o una combinación de `FlowLayout` y `BoxLayout`.

```java
// Ejemplo: Ventana con BorderLayout
frame.setLayout(new BorderLayout());
frame.add(panelNorth, BorderLayout.NORTH);
frame.add(panelCenter, BorderLayout.CENTER);
frame.add(panelSouth, BorderLayout.SOUTH);
```

Para casos complejos se pueden anidar varios `JPanel` con distintos layouts, o usar `GridBagLayout` (muy flexible). Sin embargo, los anteriores cubren la mayoría de escenarios básicos.

## Eventos y Listeners

Swing sigue el *modelo de delegación de eventos*: cada componente (fuente) que genera un evento notifica a los listeners registrados. Por ejemplo, al hacer clic en un botón se crea un `ActionEvent` que es enviado a todos los `ActionListener` del botón. De forma genérica: 

- **Fuente de evento**: componente Swing donde ocurre la acción (p.ej. JButton).
- **Objeto Evento**: instancia de clase evento (`ActionEvent`, `MouseEvent`, `KeyEvent`, etc.) que contiene información sobre el evento.
- **Listener (Oyente)**: objeto que implementa la interfaz listener correspondiente y define qué hacer ante el evento.

Los listeners más comunes son: `ActionListener` (botones y acciones generales), `MouseListener` (eventos del ratón), `KeyListener` (teclado), `DocumentListener` (cambios en texto), `WindowListener` (ventanas), etc. Se registra un listener con métodos como `button.addActionListener(...)` o `field.addKeyListener(...)`.

**Ejemplo práctico**: un botón responde a un clic. En este código, al hacer clic se muestra un mensaje:

```java
JButton boton = new JButton("Haz clic");
boton.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Botón pulsado");
    }
});
panel.add(boton);
```

También se pueden usar expresiones lambda (Java 8+): `boton.addActionListener(e -> System.out.println("¡Listo!"));`.

## Personalización y Estilo

Swing permite personalizar la apariencia visual de los componentes:

- **Colores, fuentes, tamaños**: Cada componente ofrece métodos `setBackground(Color)`, `setForeground(Color)`, `setFont(Font)`, etc., para ajustar sus propiedades visuales. Por ejemplo: `label.setForeground(Color.RED);`.
- **Look and Feel**: Swing ofrece *Look & Feel* que definen la apariencia global. Podemos cambiarlo con `UIManager.setLookAndFeel(...)`. Por ejemplo, para aplicar el estilo metálico:

  ```java
  try {
      UIManager.setLookAndFeel("javax.swing.plaf.metal.MetalLookAndFeel");
  } catch (Exception e) { e.printStackTrace(); }
  SwingUtilities.updateComponentTreeUI(frame);
  ```
  El método `setLookAndFeel` recibe el nombre de clase completo de la implementación (sistema, Metal, Nimbus, Windows, etc.). Después de cambiarlo es conveniente actualizar la interfaz con `SwingUtilities.updateComponentTreeUI(...)`. Por ejemplo, el blog *SwingFacil* muestra cómo seleccionar dinámicamente un L&F y actualizar la ventana.

- **UIManager**: Gestiona el L&F y los *defaults* de la interfaz. Además, permite obtener o modificar valores por defecto (colores, bordes) mediante `UIManager.put(key, value)`. Para diseños consistentes, se puede establecer el tema al inicio de la aplicación.

Ejemplo: cambiar la fuente de todos los componentes:

```java
Font fuente = new Font("Arial", Font.BOLD, 14);
UIManager.put("Label.font", fuente);
UIManager.put("Button.font", fuente);
SwingUtilities.updateComponentTreeUI(frame);
```

Con estas técnicas podemos adaptar el aspecto de la aplicación a necesidades de estilo o accesibilidad.

## Buenas prácticas en GUI

- **Separación lógica – presentación (MVC)**: Mantener el código limpio separando la lógica de negocio del código de interfaz. Swing usa un modelo MVC interno: el *Modelo* contiene los datos, la *Vista* dibuja el componente y el *Controlador* maneja interacciones. Por ejemplo, para una tabla (`JTable`), el `TableModel` gestiona los datos independientemente de la visualización.

- **Evitar bloqueos en la interfaz**: Todas las llamadas a métodos de Swing deben ejecutarse en el *Event Dispatch Thread* (EDT). Swing no es *thread-safe*, por lo que las actualizaciones de la GUI deben realizarse en este hilo. Además, las tareas largas o que consumen tiempo **no deben ejecutarse en el EDT**, pues congelarían la interfaz. Para operaciones de fondo (cálculos largos, acceso a base de datos, etc.) es recomendable usar `SwingWorker` o ejecutar un hilo aparte.

- **SwingWorker**: Es una clase diseñada para ejecutar tareas en segundo plano sin bloquear la GUI. Heredamos de `SwingWorker<Resultado, Progreso>` y sobreescribimos `doInBackground()` (hilo de fondo) y `done()` (invocado en el EDT al finalizar). SwingWorker facilita comunicar resultados intermedios al EDT y soporta cancelación. Ejemplo esquemático:

  ```java
  SwingWorker<String, Void> worker = new SwingWorker<>() {
      @Override
      protected String doInBackground() {
          // Tarea larga...
          return "Resultado";
      }
      @Override
      protected void done() {
          try {
              String res = get();
              label.setText(res);  // Se ejecuta en EDT
          } catch (Exception ignore) {}
      }
  };
  worker.execute();
  ```

  Esto garantiza que la interfaz siga respondiendo mientras dura la tarea. La documentación Oracle señala que tareas en el EDT deben terminar rápido para evitar **interfaz congelada**.

- **invokeLater/invokeAndWait**: Para iniciar la GUI o actualizar componentes desde otro hilo se usan `SwingUtilities.invokeLater(runnable)`, que programa código en el EDT. Por ejemplo, el método `main` suele llamar a `SwingUtilities.invokeLater(() -> crearYMostrarGUI());`.

En resumen, **siempre interactúe con Swing desde el hilo de eventos** y utilice mecanismos asíncronos para trabajos pesados, siguiendo las recomendaciones oficiales.

## Tabla comparativa de Layout Managers

A continuación una tabla resumen de los principales *LayoutManager* mencionados:

| Gestor            | Disposición                                            | Ventajas                           | Cuándo usar                                        |
|-------------------|--------------------------------------------------------|------------------------------------|----------------------------------------------------|
| **BorderLayout**  | Zonas: Norte, Sur, Este, Oeste, Centro                 | Sencillo para estructura típica de ventana (encabezado, pies, panel principal). | Aplicaciones con 5 regiones principales (menú arriba, panel central, etc.). |
| **FlowLayout**    | Fila horizontal que envuelve; alineación por defecto centro | Muy sencillo, respeta tamaño preferido de componentes. | Formularios simples o botones alineados en fila.  |
| **GridLayout**    | Rejilla de filas y columnas iguales                    | Componentes del mismo tamaño; fácil de crear formularios uniformes. | Formularios tipo tabla (p. ej., etiquetas + campos). |
| **BoxLayout**     | Fila o columna de componentes (inline o vertical)    | Controla alineación y espaciado; respeta tamaños máximos. | Listas verticales/horizontales complejas, barras de herramientas.|

Estos gestores cubren la mayor parte (≈80%) de interfaces básicas de Swing. Según la regla de Pareto, los componentes más usados (y sus layouts asociados) suelen ser: `JFrame`, `JPanel`, `JButton`, `JLabel`, `JTextField`, los cuales, con los layouts de arriba, permiten construir la mayoría de ventanas comunes. 

## Ejercicios prácticos

- **Ventana simple con `JFrame` y un botón**: Crear un `JFrame`, establecer operación de cierre, tamaño, y agregar un `JButton`. Ejemplo:
  ```java
  JFrame frame = new JFrame("Mi ventana");
  frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  frame.setLayout(new FlowLayout());
  frame.add(new JButton("¡Hola!"));
  frame.setSize(200, 100);
  frame.setVisible(true);
  ```

- **Formulario con `JTextField` y `JButton`**: Diseñar un panel con etiquetas y campos de texto. Por ejemplo, un formulario de login:
  ```java
  JPanel panel = new JPanel(new GridLayout(3, 2, 5, 5));
  panel.add(new JLabel("Usuario:"));
  panel.add(new JTextField(10));
  panel.add(new JLabel("Contraseña:"));
  panel.add(new JPasswordField(10));
  panel.add(new JLabel()); // espacio
  JButton btnLogin = new JButton("Entrar");
  panel.add(btnLogin);
  frame.add(panel);
  ```

- **Interfaz con `GridLayout`**: Organizar elementos en grilla. Por ejemplo, crear una calculadora sencilla:
  ```java
  JPanel grid = new JPanel(new GridLayout(4, 3, 2, 2));
  for (int i = 1; i <= 9; i++) {
      grid.add(new JButton("" + i));
  }
  grid.add(new JButton("*"));
  grid.add(new JButton("0"));
  grid.add(new JButton("#"));
  frame.add(grid);
  ```

- **Personalizar look & feel**: Al inicio del `main` elegir un L&F, p.ej. Nimbus:
  ```java
  try {
      for (UIManager.LookAndFeelInfo info : UIManager.getInstalledLookAndFeels()) {
          if ("Nimbus".equals(info.getName())) {
              UIManager.setLookAndFeel(info.getClassName());
              break;
          }
      }
  } catch (Exception e) { /* usar L&F por defecto si falla */ }
  SwingUtilities.invokeLater(() -> crearYMostrarGUI());
  ```

## Ejercicios de aprendizaje acelerado

- **Active Recall:** *¿Cuál es la diferencia entre `JFrame` y `JPanel`?*  
  Un `JFrame` es una ventana principal de nivel superior (basada en `java.awt.Frame`) que tiene bordes, botones de minimizar/cerrar y contiene un *content pane*. En cambio, un `JPanel` es un contenedor intermedio que agrupa componentes dentro de una ventana; no es una ventana por sí mismo y suele usar por defecto `FlowLayout`. En resumen, `JFrame` crea la ventana en sí, y `JPanel` organiza áreas dentro de esa ventana.

- **Feynman Technique:** *Explicar `LayoutManager` a un principiante.*  
  Un *layout manager* en Swing es como un planificador que organiza los componentes en la ventana. En lugar de indicar coordenadas exactas, le decimos al contenedor qué gestor usar, y este coloca automáticamente los componentes según reglas definidas. Por ejemplo, `FlowLayout` los pone uno al lado del otro horizontalmente y luego salta a la siguiente línea; es como hacer filas de objetos. `GridLayout` los pone en una rejilla con filas y columnas iguales, como un tablero de ajedrez; cada “casilla” tiene el mismo tamaño. `BorderLayout` tiene 5 zonas (norte, sur, este, oeste, centro), como repartir el espacio de la ventana en un esquema de «norte/centro/sur» y «oeste/este/centro». Cada gestor se elige según cómo queramos distribuir los elementos en la ventana. Así, el layout manager libera al programador de calcular posiciones exactas; es como elegir un diseño predeterminado para nuestra GUI.

- **Principio de Pareto:** *¿Qué 20% de componentes cubre el 80% de interfaces básicas?*  
  Los componentes más frecuentes en GUIs sencillas de Swing suelen ser: **`JFrame`**, **`JPanel`**, **`JButton`**, **`JLabel`**, **`JTextField`**. Con estos (ventana, paneles, botones, etiquetas y campos de texto) podemos construir la mayoría de formularios y ventanas típicas. Efectivamente, la biblioteca Swing destaca por ofrecer *“un vasto conjunto de componentes”* como botones y campos de texto; de ellos, esos cinco permiten cubrir gran parte del 80% de usos prácticos básicos.
