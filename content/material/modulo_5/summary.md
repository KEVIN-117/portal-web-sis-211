---
title: "Programación de Sockets en Java"
description: "Programación de Sockets en Java"
date: 2026-05-27
tags: ["java", "sockets", "tcp", "udp", "redes"]
---


### 1. Concepto de Sockets

![alt text](material/modulo_5/image.png)

Un **socket** es un endpoint de comunicación bidireccional entre dos procesos, generalmente ubicados en diferentes hosts a través de una red. Representa una combinación de dirección IP y número de puerto que permite el intercambio de datos.

**Diferencia entre sockets TCP y UDP**:

| Característica          | TCP (Transmission Control Protocol)              | UDP (User Datagram Protocol)                    |
|-------------------------|--------------------------------------------------|-------------------------------------------------|
| Tipo de conexión        | Orientado a conexión (handshake)                 | Sin conexión                                    |
| Fiabilidad              | Alta (retransmisión, orden, control de flujo)   | Baja (no garantiza entrega ni orden)            |
| Velocidad               | Menor                                            | Mayor                                           |
| Overhead                | Alto                                             | Bajo                                            |
| Uso recomendado         | Transferencia de archivos, web, correo           | Streaming, DNS, juegos, VoIP                    |
| Clases principales en Java | `Socket`, `ServerSocket`                        | `DatagramSocket`, `DatagramPacket`              |

**Modelo cliente-servidor**:  
El servidor escucha en un puerto específico esperando conexiones. El cliente inicia la conexión hacia la dirección IP y puerto del servidor. Una vez establecida la conexión (en TCP), ambos pueden enviar y recibir datos.

### 2. Sockets en Java

El paquete principal es `java.net`. Las clases fundamentales son:

- **`ServerSocket`**: Permite al servidor escuchar conexiones entrantes.
- **`Socket`**: Representa una conexión entre cliente y servidor (TCP).
- **`DatagramSocket`**: Socket para comunicación UDP.
- **`DatagramPacket`**: Contenedor para enviar o recibir datagramas UDP.

**Flujo de datos**:  
Una vez establecida la conexión, se obtienen `InputStream` (para leer) y `OutputStream` (para escribir). Es común envolverlos en `BufferedReader` / `PrintWriter` (para texto) o `DataInputStream` / `DataOutputStream` (para datos binarios).

**Ejemplo básico de conexión cliente-servidor TCP**:

**Servidor** (`Server.java`):
```java
import java.net.*;
import java.io.*;

public class Server {
    public static void main(String[] args) {
        int port = 8080;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Servidor escuchando en puerto " + port);
            
            try (Socket clientSocket = serverSocket.accept()) {
                System.out.println("Cliente conectado: " + clientSocket.getInetAddress());
                
                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                BufferedReader in = new BufferedReader(
                    new InputStreamReader(clientSocket.getInputStream()));
                
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    out.println("Servidor: " + inputLine.toUpperCase());
                }
            }
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
```

**Cliente** (`Client.java`):
```java
import java.net.*;
import java.io.*;

public class Client {
    public static void main(String[] args) {
        String host = "localhost";
        int port = 8080;
        
        try (Socket socket = new Socket(host, port);
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader in = new BufferedReader(
                 new InputStreamReader(socket.getInputStream()));
             BufferedReader stdIn = new BufferedReader(
                 new InputStreamReader(System.in))) {
            
            String userInput;
            while ((userInput = stdIn.readLine()) != null) {
                out.println(userInput);
                System.out.println("Respuesta: " + in.readLine());
            }
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
```

### 3. Sockets TCP

**Creación de un servidor**:
- `ServerSocket server = new ServerSocket(port);`
- `Socket client = server.accept();` (bloqueante)

**Cliente**:
- `Socket socket = new Socket(host, port);`

**Comunicación bidireccional**: Se utiliza flujos de entrada y salida en ambos extremos.

**Ejemplo práctico: Chat simple** (versión un cliente):

**Servidor de Chat**:
```java
// Similar al ejemplo anterior, pero con bucle continuo y manejo de múltiples mensajes
while ((inputLine = in.readLine()) != null) {
    System.out.println("Cliente: " + inputLine);
    out.println("Echo: " + inputLine);
}
```

### 4. Sockets UDP

UDP no establece conexión. Se envían paquetes independientes.

**Ejemplo práctico: Envío de mensajes cortos**:

**Servidor UDP**:
```java
import java.net.*;

public class UDPServer {
    public static void main(String[] args) {
        int port = 9876;
        try (DatagramSocket socket = new DatagramSocket(port)) {
            byte[] buffer = new byte[1024];
            
            while (true) {
                DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
                socket.receive(packet);
                
                String message = new String(packet.getData(), 0, packet.getLength());
                System.out.println("Recibido: " + message);
                
                // Echo
                DatagramPacket response = new DatagramPacket(
                    packet.getData(), packet.getLength(), 
                    packet.getAddress(), packet.getPort());
                socket.send(response);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

**Cliente UDP**:
```java
import java.net.*;

public class UDPClient {
    public static void main(String[] args) {
        String host = "localhost";
        int port = 9876;
        
        try (DatagramSocket socket = new DatagramSocket()) {
            InetAddress address = InetAddress.getByName(host);
            
            String message = "Hola UDP";
            byte[] buffer = message.getBytes();
            
            DatagramPacket packet = new DatagramPacket(buffer, buffer.length, address, port);
            socket.send(packet);
            
            // Recibir respuesta
            byte[] responseBuffer = new byte[1024];
            DatagramPacket response = new DatagramPacket(responseBuffer, responseBuffer.length);
            socket.receive(response);
            
            System.out.println("Respuesta: " + new String(response.getData(), 0, response.getLength()));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### 5. Manejo de Concurrencia

Para soportar múltiples clientes simultáneamente en TCP, se debe crear un hilo por cada conexión aceptada.

**Ejemplo: Servidor multicliente**:
```java
public class MultiClientServer {
    public static void main(String[] args) {
        int port = 8080;
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            while (true) {
                Socket clientSocket = serverSocket.accept();
                new Thread(new ClientHandler(clientSocket)).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket socket;
    
    public ClientHandler(Socket socket) {
        this.socket = socket;
    }
    
    @Override
    public void run() {
        try (BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {
            
            String line;
            while ((line = in.readLine()) != null) {
                out.println("Servidor: " + line);
            }
        } catch (IOException e) {
            System.out.println("Cliente desconectado");
        }
    }
}
```

### 6. Buenas prácticas

- **Manejo de excepciones**: Siempre capturar `IOException` y `UnknownHostException`.
- **Cierre de recursos**: Utilizar bloques `try-with-resources` para cerrar sockets automáticamente.
- **Seguridad**: Validar entradas, limitar tamaños de buffers y considerar firewalls.
- **Separación de responsabilidades**: Mantener la lógica de red separada de la lógica de negocio (patrón MVC o capas).
- Evitar operaciones bloqueantes en el hilo principal de la aplicación.
- Usar `ExecutorService` en lugar de crear hilos manualmente para mejor gestión de pool de hilos.

---

### Ejercicios Prácticos

1. **Servidor TCP de bienvenida**  
   Crear un servidor que acepte conexiones y envíe "Bienvenido al servidor" al cliente.

2. **Cliente TCP**  
   Implementar un cliente que se conecte al servidor anterior y muestre el mensaje recibido.

3. **Chat básico cliente-servidor**  
   Extender los ejemplos anteriores para permitir el envío de mensajes en ambas direcciones.

4. **Ejemplo UDP**  
   Implementar un cliente y servidor UDP que intercambien mensajes de texto cortos.

5. **Servidor multicliente**  
   Modificar el servidor TCP para manejar múltiples clientes simultáneamente utilizando hilos.

**Recomendaciones para implementación**:  
Compilar y ejecutar primero el servidor, luego el cliente. Probar en la misma máquina usando `localhost` y posteriormente en red local con la IP real.

**Fuentes recomendadas**:
- Oracle Java Documentation: `java.net` package.
- Java Tutorial - All About Sockets.
- "Java Network Programming" de Elliotte Rusty Harold.