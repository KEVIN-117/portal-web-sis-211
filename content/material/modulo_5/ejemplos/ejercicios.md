---
title: "Plan de Ejercicios Prácticos — Programación de Sockets en Java"
date: 2026-05-26
tags: ["JAVA", "Sockets", "GUI"]
---

## Objetivos Generales

Al finalizar las prácticas, el estudiante deberá ser capaz de:

* Comprender el modelo cliente-servidor.
* Implementar comunicación TCP y UDP.
* Enviar y recibir datos mediante streams.
* Diseñar servidores concurrentes.
* Manejar múltiples clientes simultáneamente.
* Aplicar buenas prácticas de programación de red.
* Separar lógica de comunicación y lógica de negocio.

---

# FASE 1 — Primer contacto con sockets TCP

Objetivo:
Comprender cómo se establece una conexión básica entre cliente y servidor.

---

# Ejercicio 1 — Servidor TCP de Bienvenida

## Concepto principal

Uso de:

* `ServerSocket`
* `Socket`
* `OutputStream`
* conexión bloqueante (`accept()`)

---

## Flujo esperado

```text
Cliente -----> Servidor
           conexión TCP

Servidor -----> Cliente
          "Bienvenido al servidor"
```

---

## Código del servidor

```java
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServidorBienvenida {

    public static void main(String[] args) {

        try {
            // Crear servidor en el puerto 5000
            ServerSocket servidor = new ServerSocket(5000);

            System.out.println("Servidor iniciado...");
            System.out.println("Esperando cliente...");

            // Espera una conexión
            Socket cliente = servidor.accept();

            System.out.println("Cliente conectado");

            // Flujo de salida
            OutputStream salida = cliente.getOutputStream();

            String mensaje = "Bienvenido al servidor Java";

            salida.write(mensaje.getBytes());

            // Cierre
            salida.close();
            cliente.close();
            servidor.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

## Explicación para clase

Conceptos importantes que debes explicar mientras ejecutas:

| Concepto       | Explicación                                 |
| -------------- | ------------------------------------------- |
| `ServerSocket` | Escucha conexiones entrantes                |
| `accept()`     | Bloquea el hilo hasta que llegue un cliente |
| `Socket`       | Representa la conexión activa               |
| `OutputStream` | Envía bytes al cliente                      |
| Puerto         | Canal lógico de comunicación                |

---

# Ejercicio 2 — Cliente TCP

## Objetivo

Conectarse al servidor y recibir datos.

---

## Código del cliente

```java
import java.io.InputStream;
import java.net.Socket;

public class ClienteBienvenida {

    public static void main(String[] args) {

        try {

            // Conexión al servidor
            Socket socket = new Socket("localhost", 5000);

            // Flujo de entrada
            InputStream entrada = socket.getInputStream();

            byte[] buffer = new byte[1024];

            int bytesLeidos = entrada.read(buffer);

            String mensaje = new String(buffer, 0, bytesLeidos);

            System.out.println("Mensaje recibido:");
            System.out.println(mensaje);

            entrada.close();
            socket.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

# Actividad para estudiantes

Modificar el servidor para que envíe:

* nombre del estudiante
* fecha actual
* mensaje personalizado

Ejemplo:

```text
Bienvenido Kevin
Fecha: 2026-05-26
```

---

# FASE 2 — Comunicación Bidireccional

Ahora los estudiantes ya deben comprender que:

* TCP mantiene conexión
* ambos extremos pueden enviar y recibir

---

# Ejercicio 3 — Eco TCP

## Objetivo

El servidor devuelve exactamente el mensaje recibido.

---

## Arquitectura

```text
Cliente -> "Hola"
Servidor -> "Hola"
```

---

## Conceptos nuevos

| Concepto                   | Explicación             |
| -------------------------- | ----------------------- |
| `InputStream`              | Recepción de datos      |
| `OutputStream`             | Envío de datos          |
| Comunicación bidireccional | Ambos lados transmiten  |
| Buffers                    | Almacenamiento temporal |

---

## Servidor Echo

```java
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServidorEcho {

    public static void main(String[] args) {

        try {

            ServerSocket servidor = new ServerSocket(5000);

            System.out.println("Servidor Echo iniciado");

            Socket cliente = servidor.accept();

            InputStream entrada = cliente.getInputStream();
            OutputStream salida = cliente.getOutputStream();

            byte[] buffer = new byte[1024];

            int leidos = entrada.read(buffer);

            String mensaje = new String(buffer, 0, leidos);

            System.out.println("Cliente dice: " + mensaje);

            salida.write(("Echo: " + mensaje).getBytes());

            cliente.close();
            servidor.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

# Actividades sugeridas

Los estudiantes deben extender el servidor para:

* convertir texto a MAYÚSCULAS
* convertir texto a minúsculas
* contar caracteres
* verificar palíndromos
* invertir cadenas

---

# FASE 3 — Chat Cliente-Servidor

Aquí comienza la parte verdaderamente interesante.

---

# Ejercicio 4 — Chat básico TCP

## Objetivos

Introducir:

* `BufferedReader`
* `PrintWriter`
* comunicación continua
* ciclos infinitos
* protocolo simple de mensajes

---

# Arquitectura

```text
Cliente <----> Servidor
```

---

# Conceptos nuevos

| Concepto         | Importancia                 |
| ---------------- | --------------------------- |
| Streams de texto | Facilitan lectura de líneas |
| `BufferedReader` | Lectura eficiente           |
| `PrintWriter`    | Escritura de texto          |
| `while(true)`    | Comunicación continua       |
| Protocolo        | Reglas de intercambio       |

---

# Servidor Chat

```java
import java.io.*;
import java.net.*;

public class ServidorChat {

    public static void main(String[] args) {

        try {

            ServerSocket servidor = new ServerSocket(5000);

            System.out.println("Esperando cliente...");

            Socket cliente = servidor.accept();

            BufferedReader entrada = new BufferedReader(
                    new InputStreamReader(cliente.getInputStream()));

            PrintWriter salida = new PrintWriter(
                    cliente.getOutputStream(), true);

            String mensaje;

            while ((mensaje = entrada.readLine()) != null) {

                System.out.println("Cliente: " + mensaje);

                salida.println("Servidor recibió: " + mensaje);

                if (mensaje.equalsIgnoreCase("salir")) {
                    break;
                }
            }

            cliente.close();
            servidor.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

# Actividades de ampliación

Los estudiantes pueden implementar:

* comandos especiales (`/hora`, `/fecha`)
* autenticación básica
* nombres de usuario
* historial de mensajes
* mensajes privados

---

# FASE 4 — Concurrencia y múltiples clientes

Esta es la transición hacia arquitectura real de servidores.

---

# Problema a plantear en clase

Pregunta fundamental:

> ¿Qué ocurre si un segundo cliente intenta conectarse?

Respuesta:

El servidor queda ocupado con el primero.

Aquí introduces concurrencia.

---

# Ejercicio 5 — Servidor multicliente

## Conceptos nuevos

| Concepto             | Explicación                    |
| -------------------- | ------------------------------ |
| `Thread`             | Hilo independiente             |
| Paralelismo          | Múltiples clientes simultáneos |
| Recursos compartidos | Varias conexiones activas      |
| Escalabilidad        | Servidores reales              |

---

# Clase manejadora de clientes

```java
import java.io.*;
import java.net.Socket;

public class ClienteHandler extends Thread {

    private Socket socket;

    public ClienteHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {

        try {

            BufferedReader entrada = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));

            PrintWriter salida = new PrintWriter(
                    socket.getOutputStream(), true);

            salida.println("Conectado al servidor");

            String mensaje;

            while ((mensaje = entrada.readLine()) != null) {

                System.out.println(
                        "[" + socket.getInetAddress() + "] " + mensaje);

                salida.println("Echo: " + mensaje);
            }

            socket.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

---

# Servidor concurrente

```java
import java.net.ServerSocket;
import java.net.Socket;

public class ServidorConcurrente {

    public static void main(String[] args) {

        try {

            ServerSocket servidor = new ServerSocket(5000);

            System.out.println("Servidor concurrente iniciado");

            while (true) {

                Socket cliente = servidor.accept();

                System.out.println("Nuevo cliente conectado");

                ClienteHandler hilo =
                        new ClienteHandler(cliente);

                hilo.start();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

# Actividad importante

Pedir a los estudiantes:

* abrir varios clientes simultáneamente
* observar ejecución paralela
* identificar qué hilo atiende cada cliente

Esto ayuda muchísimo a comprender concurrencia real.

---

# FASE 5 — Sockets UDP

Ahora introduces comunicación sin conexión.

---

# Ejercicio 6 — Envío UDP

## Objetivo

Comprender:

* comunicación no orientada a conexión
* datagramas
* transmisión rápida

---

# Comparación visual TCP vs UDP

| Característica | TCP         | UDP               |
| -------------- | ----------- | ----------------- |
| Conexión       | Sí          | No                |
| Fiabilidad     | Alta        | Baja              |
| Velocidad      | Menor       | Mayor             |
| Orden de datos | Garantizado | No garantizado    |
| Uso típico     | Chats, web  | Juegos, streaming |

---

# Servidor UDP

```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class ServidorUDP {

    public static void main(String[] args) {

        try {

            DatagramSocket socket = new DatagramSocket(6000);

            byte[] buffer = new byte[1024];

            DatagramPacket paquete =
                    new DatagramPacket(buffer, buffer.length);

            System.out.println("Esperando mensaje UDP...");

            socket.receive(paquete);

            String mensaje = new String(
                    paquete.getData(),
                    0,
                    paquete.getLength());

            System.out.println("Mensaje recibido:");
            System.out.println(mensaje);

            socket.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

# Cliente UDP

```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class ClienteUDP {

    public static void main(String[] args) {

        try {

            DatagramSocket socket = new DatagramSocket();

            String mensaje = "Hola UDP";

            byte[] buffer = mensaje.getBytes();

            InetAddress direccion =
                    InetAddress.getByName("localhost");

            DatagramPacket paquete =
                    new DatagramPacket(
                            buffer,
                            buffer.length,
                            direccion,
                            6000);

            socket.send(paquete);

            socket.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

---

# Ejercicios de consolidación

## Nivel básico

1. Cambiar puertos.
2. Enviar mensajes personalizados.
3. Mostrar IP del cliente.
4. Implementar servidor eco.

---

## Nivel intermedio

1. Chat TCP.
2. Chat multicliente.
3. Registro de usuarios.
4. Broadcast de mensajes.

---

## Nivel avanzado

1. Mini servidor HTTP.
2. Transferencia de archivos.
3. Sistema cliente-servidor tipo Discord.
4. Juego multijugador simple.
5. Comunicación híbrida TCP + UDP.

---

# Buenas prácticas para enfatizar en clase

## 1. Uso de try-with-resources

```java
try (
    ServerSocket servidor = new ServerSocket(5000);
) {

}
```

---

## 2. Nunca ignorar excepciones

Incorrecto:

```java
catch(Exception e) {}
```

Correcto:

```java
catch(IOException e) {
    e.printStackTrace();
}
```

---

## 3. Cerrar conexiones

Siempre cerrar:

* streams
* sockets
* readers
* writers

---

## 4. Separar responsabilidades

No mezclar:

* lógica de red
* interfaz
* lógica de negocio

---

# Proyecto Integrador Final

Una excelente práctica final sería:

## “Sistema de Chat Distribuido”

Características:

* múltiples clientes
* concurrencia
* salas
* autenticación
* mensajes privados
* broadcast
* logs
* comandos especiales

---

# Recomendación pedagógica técnica

El orden ideal para enseñar sockets es:

```text
1. TCP simple
2. Comunicación bidireccional
3. Chat
4. Multicliente
5. Threads
6. UDP
7. Proyecto final
```
