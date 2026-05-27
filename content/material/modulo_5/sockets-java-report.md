---
title: "Resumen — Programación de Sockets en Java"
description: "Comprensión profunda de los conceptos, uso de sockets TCP y UDP, concurrencia y buenas prácticas."
tags: [
    "java",
    "sockets",
    "java-17",
    "analisis-datos",
    "machine-learning"
]
draft: false
---

# Programación de Sockets en Java

## 1. Concepto de Sockets

![alt text](material/modulo_5/image.png)


Un *socket* es un punto final (endpoint) de comunicación bidireccional entre dos procesos (posiblemente en máquinas distintas) en una red. Se puede imaginar como un “enchufe” virtual que conecta dos aplicaciones, facilitando el envío y recepción de datos. Los sockets permiten que las aplicaciones se comuniquen de forma eficiente independientemente de su ubicación, siempre que compartan un protocolo común. El modelo típico es *cliente-servidor*: el **servidor** crea un socket ligado a una dirección IP y un puerto, luego *escucha* y *acepta* conexiones entrantes; el **cliente**, por su parte, crea un socket sin un puerto predefinido y se conecta al socket del servidor utilizando su IP y puerto. Una vez establecida la conexión, ambos extremos pueden leer y escribir datos a través de sus sockets.

Existen principalmente dos tipos de sockets según el protocolo de transporte:

- **Sockets TCP (Stream Sockets):** utilizan TCP, un protocolo orientado a la conexión, fiable y ordenado. Antes de intercambiar datos, cliente y servidor establecen una conexión permanente (“handshake”), garantizando que los datos no se pierdan y lleguen en orden. Es ideal para aplicaciones que requieren integridad de datos (por ejemplo, transferencia de archivos, HTTP, correo electrónico).
- **Sockets UDP (Datagram Sockets):** utilizan UDP, un protocolo sin conexión y de baja sobrecarga. Cada envío es independiente (como enviar postales), por lo que no existe una sesión permanente y **no hay garantía de entrega ni orden**. UDP es más rápido y eficiente cuando se pueden tolerar pérdidas (por ejemplo, streaming de video, juegos en línea, consultas DNS).

| Característica        | TCP (Stream Socket)           | UDP (Datagram Socket)             |
|-----------------------|-------------------------------|-----------------------------------|
| Orientación           | Conexión establecida (handshake)  | Sin conexión (cada mensaje es independiente) |
| Fiabilidad            | Alta, retransmisiones automáticas | Baja, sin retransmisiones automáticas |
| Orden de entrega      | Garantizado                   | No garantizado       |
| Control de flujo      | Sí (buffer y ventana TCP)     | No explícito (solo tamaño de paquete) |
| Sobreposición/velocidad | Mayor sobrecarga, más lento  | Menor sobrecarga, más rápido      |
| Ejemplos de uso       | HTTP, FTP, SMTP, SSH         | VoIP, streaming, DNS, juegos      |

## 2. Sockets en Java

Java proporciona soporte nativo para programación de sockets en el paquete `java.net`. Las clases más importantes son:

- **`Socket`**: representa un socket de cliente TCP (o un extremo de comunicación TCP). Permite conectar a un servidor remoto especificando su nombre DNS o dirección IP y puerto. Ofrece métodos `getInputStream()` y `getOutputStream()` para leer y escribir datos en el socket. Al llamar a `Socket(servidorIP, puerto)` el cliente crea un socket local y se conecta al servidor.
- **`ServerSocket`**: representa un socket de servidor TCP. Se instancia asociado a un puerto local, y mediante `accept()` espera conexiones de clientes. Cuando llega una petición, `accept()` devuelve un objeto `Socket` conectado al cliente, por el cual el servidor puede comunicarse con ese cliente. Por ejemplo, `ServerSocket server = new ServerSocket(8888)` crea un servidor en el puerto 8888.
- **`DatagramSocket`**: representa un socket UDP (sin conexión). No establece enlaces permanentes; simplemente envía y recibe paquetes. Un `DatagramSocket` puede ser enlazado opcionalmente a un puerto local, pero incluso sin ello puede enviar datos a cualquier destino. Se usan junto a los objetos `DatagramPacket`.
- **`DatagramPacket`**: encapsula un mensaje (un array de bytes) y la información de direccionamiento (IP y puerto destino u origen) para envíos UDP. Se utiliza tanto para recibir (llenando un buffer con datos entrantes) como para enviar (incorporando los datos y la dirección destino).

Para la comunicación TCP se utilizan los flujos de E/S asociados al socket. Por ejemplo, tras conectar, se puede hacer:
```java
BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
```
Así el servidor y el cliente pueden leer líneas de texto con `in.readLine()` y enviar con `out.println(...)`. (*Nota:* cerrar el socket mediante `close()` cierra también automáticamente sus streams de entrada y salida). 

**Ejemplo básico (TCP):** a continuación se muestra un servidor TCP que acepta una conexión y comunica un mensaje simple, y un cliente que se conecta y recibe la respuesta. Los comentarios explican cada paso.

```java
// Servidor TCP: escucha en el puerto 12345 y responde un saludo
public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(12345);    // 1. Crea socket servidor en puerto 12345
        Socket client = server.accept();                 // 2. Espera (bloquea) hasta que un cliente se conecte
        BufferedReader in = new BufferedReader(
            new InputStreamReader(client.getInputStream())
        ); // 3. Canal de lectura desde el cliente
        PrintWriter out = new PrintWriter(client.getOutputStream(), true); // 4. Canal de escritura al cliente

        String mensaje = in.readLine();                  // 5. Lee un mensaje enviado por el cliente
        System.out.println("Cliente dice: " + mensaje);
        out.println("¡Hola cliente! Recibí tu saludo.");  // 6. Envía respuesta al cliente

        // 7. Cierra recursos (socket + streams)
        in.close();
        out.close();
        client.close();
        server.close();
    }
}

// Cliente TCP: se conecta al servidor local en el puerto 12345 y recibe respuesta
public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12345);  // 1. Conecta con servidor en localhost:12345
        BufferedReader in = new BufferedReader(
            new InputStreamReader(socket.getInputStream())
        ); // 2. Canal de lectura desde el servidor
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true); // 3. Canal de escritura al servidor

        out.println("¡Hola servidor!");                 // 4. Envía saludo al servidor
        String respuesta = in.readLine();              // 5. Lee la respuesta del servidor
        System.out.println("Servidor dice: " + respuesta);

        // 6. Cierra recursos
        in.close();
        out.close();
        socket.close();
    }
}
```

En este ejemplo básico (adaptado de guías de Oracle y otros tutoriales), el servidor imprime por consola el mensaje recibido y responde al cliente con otro mensaje. Este esquema ilustra la comunicación **bidireccional**: cliente y servidor leen y escriben en sus respectivos flujos ligados al socket.

## 3. Sockets TCP: aplicación cliente-servidor y chat simple

En sockets TCP el flujo habitual es:

1. **Servidor (ServerSocket)**:
   - Crear `ServerSocket server = new ServerSocket(puerto)`.
   - Llamar a `server.accept()` para esperar conexiones. Esto devuelve un objeto `Socket` conectado al cliente.
   - Establecer flujos de lectura/escritura sobre ese `Socket` (por ejemplo, `BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))` y `PrintWriter out = new PrintWriter(socket.getOutputStream(), true)`).
   - Leer datos del cliente e enviar respuestas usando `in.readLine()`, `out.println()`, etc.
   - Repetir según el protocolo (por ejemplo, un bucle de lectura hasta que el cliente cierre la conexión).
   - Cerrar los streams y el socket al terminar.

2. **Cliente (Socket)**:
   - Crear `Socket socket = new Socket(hostServidor, puerto)`.
   - Igual que el servidor, crear flujos `BufferedReader`/`PrintWriter` a partir de `socket.getInputStream()` y `socket.getOutputStream()`.
   - Enviar datos al servidor (por ejemplo, usando `out.println("mensaje")`) y leer la respuesta con `in.readLine()`.
   - Cerrar flujos y socket al finalizar.

Este modelo permite comunicación **bidireccional**: cada lado puede simultáneamente enviar y recibir mensajes (usualmente en turnos coordinados). La conexión persiste hasta que uno de los extremos cierra su socket.

**Ejemplo práctico – Chat simple:** el siguiente código ilustra un chat muy básico de un cliente con un servidor. El cliente lee mensajes del teclado y los envía al servidor; el servidor lee cada mensaje, lo imprime y le envía de vuelta (por ejemplo, como eco). Ambos bucles terminan si el cliente cierra la conexión o envía un mensaje de salida. 

```java
// Servidor multimensaje (chat simple con eco)
public class ChatServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(12346);
        System.out.println("Servidor escuchando en puerto 12346...");
        Socket client = server.accept();  // Espera conexión
        System.out.println("Cliente conectado: " + client);

        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);
        String line;
        // Lee mensajes hasta que el cliente cierra la conexión (readLine() devuelve null)
        while ((line = in.readLine()) != null) {
            System.out.println("Cliente: " + line);  // Muestra mensaje del cliente
            out.println("Eco: " + line);             // Envía de vuelta al cliente
        }
        // Cierra recursos
        in.close();
        out.close();
        client.close();
        server.close();
    }
}

// Cliente multimensaje (envía texto ingresado y recibe eco)
public class ChatClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12346);
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        String line;
        System.out.println("Conectado al servidor. Escriba mensajes:");
        // Bucle: lee del teclado, envía al servidor, y muestra la respuesta
        while ((line = console.readLine()) != null) {
            out.println(line);                 // Envía mensaje al servidor
            String respuesta = in.readLine();  // Recibe eco del servidor
            if (respuesta == null) break;      // conexión cerrada
            System.out.println("Servidor: " + respuesta);
        }
        // Cierra recursos
        console.close();
        in.close();
        out.close();
        socket.close();
    }
}
```

Este ejemplo muestra un *servidor echo* que atiende un solo cliente de forma secuencial. Para manejar múltiples clientes, es necesario introducir concurrencia (hilos), como se verá en la sección siguiente. 

## 4. Sockets UDP

Los sockets UDP utilizan la clase `DatagramSocket` y el contenedor `DatagramPacket` para enviar mensajes independientes (datagramas) sin establecer previamente una conexión persistente. Las características clave de UDP son:

- **Sin conexión:** cada datagrama se envía por sí mismo, incluyendo la dirección destino. No hay handshake ni seguimiento de sesión.
- **Menor sobrecarga:** UDP es más rápido porque evita el control de congestión y retransmisión de TCP. Sin embargo, **no garantiza fiabilidad ni orden**.
- **Uso:** útil para mensajes cortos, consultas rápidas o aplicaciones en tiempo real donde algunas pérdidas son tolerables.

En Java se procede así:

- **Servidor UDP:** crear `DatagramSocket socket = new DatagramSocket(puerto)`. Luego crear un buffer y un `DatagramPacket request = new DatagramPacket(buffer, buffer.length)`. Al llamar `socket.receive(request)`, el servidor bloquea hasta recibir un paquete. Los datos se obtienen de `request.getData()`, su longitud real de `getLength()`, y la dirección/origen de `request.getAddress()` y `request.getPort()`. Para responder, se crea otro `DatagramPacket` con los bytes de la respuesta, la longitud, la dirección IP y puerto del cliente obtenidos, y se envía con `socket.send(reply)`.
- **Cliente UDP:** crear `DatagramSocket socket = new DatagramSocket()`. Preparar los datos a enviar como un array de bytes y la dirección/puerto del servidor (`InetAddress serverIP = InetAddress.getByName("host");`). Crear `DatagramPacket sendPacket = new DatagramPacket(data, data.length, serverIP, puerto)` y llamar `socket.send(sendPacket)`. Para recibir respuesta, similarmente crear un `DatagramPacket` de recepción y usar `socket.receive(replyPacket)`.

**Ejemplo práctico UDP:** envío de un breve saludo:

```java
// Servidor UDP simple
public class UDPServer {
    public static void main(String[] args) throws IOException {
        DatagramSocket socket = new DatagramSocket(9876);  // 1. Socket UDP ligado al puerto 9876
        byte[] buffer = new byte[1024];

        // 2. Prepara datagrama de recepción y espera mensaje
        DatagramPacket request = new DatagramPacket(buffer, buffer.length);
        System.out.println("Servidor UDP esperando datagrama...");
        socket.receive(request);  // Bloquea hasta recibir
        // 3. Extrae mensaje recibido
        String mensaje = new String(request.getData(), 0, request.getLength(), "UTF-8");
        System.out.println("Recibido: " + mensaje);

        // 4. Prepara respuesta
        String respuesta = "Mensaje recibido: " + mensaje;
        byte[] respBytes = respuesta.getBytes("UTF-8");
        InetAddress clientIP = request.getAddress();   // IP del cliente
        int clientPort = request.getPort();           // Puerto del cliente
        // 5. Envía paquete de respuesta al cliente
        DatagramPacket reply = new DatagramPacket(respBytes, respBytes.length, clientIP, clientPort);
        socket.send(reply);
        socket.close();  // 6. Cierra socket
    }
}

// Cliente UDP simple
public class UDPClient {
    public static void main(String[] args) throws IOException {
        DatagramSocket socket = new DatagramSocket();  // 1. Socket UDP anónimo (puerto aleatorio)
        String mensaje = "¡Hola UDP!";
        byte[] sendData = mensaje.getBytes("UTF-8");
        InetAddress serverIP = InetAddress.getByName("localhost");
        int serverPort = 9876;
        // 2. Envía datagrama al servidor
        DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, serverIP, serverPort);
        socket.send(sendPacket);

        // 3. Prepara recepción de respuesta
        byte[] buffer = new byte[1024];
        DatagramPacket receivePacket = new DatagramPacket(buffer, buffer.length);
        socket.receive(receivePacket);  // Espera respuesta
        String respuesta = new String(receivePacket.getData(), 0, receivePacket.getLength(), "UTF-8");
        System.out.println("Servidor responde: " + respuesta);
        socket.close();  // 4. Cierra socket
    }
}
```

Este ejemplo ilustra el envío y recepción de mensajes cortos usando UDP. Observe que no hay `connect()` ni `accept()`, y cada `DatagramPacket` lleva la dirección destino.

## 5. Manejo de concurrencia (servidor multicliente)

Un servidor TCP típico bloquea en `accept()` hasta que un cliente se conecta. Para atender **múltiples clientes simultáneamente**, es necesario manejar cada conexión en un hilo separado, de modo que el hilo principal pueda seguir aceptando nuevos clientes. El patrón común es:

- En el **bucle principal del servidor**, tras `ServerSocket.accept()`, se lanza un nuevo hilo (por ejemplo, mediante `new Thread(...)` o extendiendo `Thread`) que se encargue de comunicarse con ese cliente.
- El **hilo trabajador** lee/escribe con el cliente de forma independiente, sin bloquear el servidor principal.

Así, **cada cliente** es atendido concurrentemente. El siguiente fragmento muestra un esquema sencillo (con expresiones lambda para abreviar):

```java
ServerSocket server = new ServerSocket(12347);
System.out.println("Servidor concurrencia escuchando en 12347...");
while (true) {
    Socket client = server.accept();  // Bloquea hasta nueva conexión
    // Crea y lanza nuevo hilo para manejar este cliente
    new Thread(() -> {
        try {
            BufferedReader in = new BufferedReader(
                new InputStreamReader(client.getInputStream())
            );
            PrintWriter out = new PrintWriter(client.getOutputStream(), true);
            String linea;
            // Comunicación: lee del cliente y le envía de vuelta (eco)
            while ((linea = in.readLine()) != null) {
                System.out.println("Cliente " + client + ": " + linea);
                out.println("Servidor (eco): " + linea);
            }
            client.close();  // Cierra socket cuando el cliente finaliza
        } catch (IOException e) {
            System.err.println("Error en cliente " + client + ": " + e.getMessage());
        }
    }).start();
}
```

En este ejemplo, **cada conexión aceptada** inicia un nuevo hilo (una instancia de `Thread`) que maneja los flujos de E/S del cliente. Mientras tanto, el bucle principal puede volver a `accept()` nuevas conexiones. Como indica la literatura, *“Para atender varias peticiones simultáneas, el servidor debe usar hilos…”*. Una implementación clásica es definir una clase `Worker` que herede de `Thread` y reciba el objeto `Socket` en su constructor, como se describe en tutoriales de Oracle y manuales de Java.

## 6. Buenas prácticas

Al programar con sockets en Java se deben seguir ciertas recomendaciones para garantizar robustez y seguridad:

- **Manejo de excepciones:** Todas las operaciones de red pueden lanzar `IOException` (por ejemplo, al conectar, leer, o enviar). Es esencial rodear los bloques de E/S con `try-catch` y manejar errores apropiadamente (por ejemplo, imprimiendo mensajes de error o registrándolos) para evitar que la aplicación termine abruptamente. Es común usar *try-with-resources* en Java 7+ para que `Socket`/`ServerSocket` y flujos se cierren automáticamente al finalizar el bloque.
- **Cierre adecuado de sockets:** Siempre cerrar los sockets y streams en un bloque `finally` o en try-with-resources. El método `close()` libera el puerto y otros recursos del sistema operativo. Tras `close()`, se lanzan excepciones si se intenta leer o escribir, y el socket no puede reutilizarse. Por ejemplo, al final de los ejemplos anteriores se cierra explícitamente el `Socket` y el `ServerSocket`.
- **Validación de datos y seguridad:** No confiar en datos no verificados provenientes de la red. Limitar el tamaño de las entradas (para evitar buffers overflow), filtrar caracteres peligrosos si corresponden, y manejar correctamente los formatos de mensajes. Para comunicaciones sensibles, considerar el uso de SSL/TLS (`SSLSocket`) en lugar de sockets simples (Java ofrece JSSE para sockets seguros). También se debe validar la identidad del cliente/servidor si es necesario (por ejemplo, mediante certificados o credenciales).
- **Separación de lógica:** Mantener separadas la **lógica de red** (cómo enviar/recibir bytes, formatos de mensaje, gestión de conexión) de la **lógica de aplicación** (procesamiento del mensaje, negocio de la aplicación). Esto facilita el mantenimiento y prueba del código. Por ejemplo, en el hilo trabajador del servidor es buena idea delegar el procesamiento del contenido a métodos o clases aparte.
- **Otras consideraciones:** Configurar tiempos de espera (`setSoTimeout`) si no se quiere bloquear indefinidamente en `read()`, usar `shutdownOutput()`/`shutdownInput()` para cerrar media conexión correctamente, y manejar `SocketTimeoutException` si se ponen límites de espera. Registrar eventos en logs en lugar de imprimir directamente en consola ayuda en entornos reales.

En resumen, una programación de sockets segura y eficiente en Java consiste en manejar cuidadosamente las excepciones de I/O, cerrar recursos cuando ya no se usan, validar cualquier dato recibido, y estructurar el código de forma modular. La documentación de Oracle y recursos educativos ofrecen guías sobre estos temas, destacando el uso de mecanismos estándares de Java para tratar errores y liberar recursos.

## Ejercicios prácticos

- Crear un **servidor TCP** que acepte conexiones y envíe un mensaje de bienvenida al cliente.
- Implementar un **cliente TCP** que se conecte al servidor anterior y reciba el mensaje de bienvenida.
- Diseñar un chat básico cliente-servidor donde varios clientes puedan conectarse al servidor y enviar mensajes (el servidor repite los mensajes a todos los clientes conectados).
- Implementar un ejemplo **UDP**: enviar desde un cliente varios mensajes cortos a un servidor UDP, y que éste responda a cada mensaje.
- Extender el servidor TCP para **manejar concurrencia** con hilos, de modo que pueda atender múltiples clientes simultáneamente.

Estos ejercicios consolidan la comprensión práctica de los conceptos anteriores. Para resolverlos, puede partir de los ejemplos mostrados y adaptarlos según las indicaciones.

**Fuentes:** La presente síntesis se basa en la documentación oficial de Oracle (paquete `java.net`) y tutoriales de sockets en Java, así como en materiales educativos y libros especializados. Se han citado definiciones formales y ejemplos relevantes para aclarar cada concepto técnico. 

