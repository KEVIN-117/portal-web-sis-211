---
title: "Práctica 3: Práctica Java Principiantes – Estilo ICPC"
description: "En esta práctica se presentan 14 problemas de programación en Java para principiantes, inspirados en concursos de programación estilo ICPC. Los problemas incluyen desafíos de lógica, manipulación de cadenas, estructuras de control y operaciones matemáticas básicas."
tags: ["Java", "Programación", "ICPC", "Problemas de programación", "Principiantes"]
---

**Instrucciones generales**

- Lenguaje: **Java**
- Entrada y salida estándar
- Usa `Scanner` para leer la entrada
- Tiempo sugerido total: 2.5 – 3 horas

## Resumen de problemas

| #   | Problema                  | Plataforma            | Link                                                | Conceptos principales                                   |
| --- | ------------------------- | --------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| 1   | Watermelon (4A)           | Codeforces            | codeforces.com/problemset/problem/4/A               | Condicionales + aritmética simple (par/impar)           |
| 2   | Way Too Long Words (71A)  | Codeforces            | codeforces.com/problemset/problem/71/A              | Strings + longitud + bucles                             |
| 3   | Team (231A)               | Codeforces            | codeforces.com/problemset/problem/231/A             | Bucles + conteo + condicionales                         |
| 4   | Bit++ (282A)              | Codeforces            | codeforces.com/problemset/problem/282/A             | Bucles + strings simples + incremento                   |
| 5   | Next Round (158A)         | Codeforces            | codeforces.com/problemset/problem/158/A             | Arrays + bucles + comparación                           |
| 6   | Beautiful Matrix (263A)   | Codeforces            | codeforces.com/problemset/problem/263/A             | Matrices 5×5 + búsqueda de posición                     |
| 7   | Boy or Girl (236A)        | Codeforces            | codeforces.com/problemset/problem/236/A             | Strings + caracteres únicos (Set o array de frecuencia) |
| 8   | Two Sum                   | LeetCode              | leetcode.com/problems/two-sum                       | Arrays + bucles anidados o HashMap básico               |
| 9   | Palindrome Number         | LeetCode              | leetcode.com/problems/palindrome-number             | Números + inversión o strings                           |
| 10  | FizzBuzz                  | LeetCode / HackerRank | leetcode.com/problems/fizz-buzz                     | Bucles + condicionales múltiples (%)                    |
| 11  | Java Stdin and Stdout I   | HackerRank            | hackerrank.com/challenges/java-stdin-and-stdout-1   | Entrada/salida básica con Scanner                       |
| 12  | Java If-Else              | HackerRank            | hackerrank.com/challenges/java-if-else              | Condicionales if-else                                   |
| 13  | Java Loops I              | HackerRank            | hackerrank.com/challenges/java-loops-i              | Bucles for + tablas de multiplicar                      |
| 14  | Java Strings Introduction | HackerRank            | hackerrank.com/challenges/java-strings-introduction | Manipulación básica de strings                          |

---

### Problema 1 – Sandía (Watermelon)

**Fuente:** [Codeforces 4A](https://codeforces.com/problemset/problem/4/A)

Un día caluroso de verano, Pete y su amigo Billy decidieron comprar una sandía. Eligieron la más grande y madura. Después de pesarla, la báscula mostró **w** kilos.

Pete y Billy son grandes fanáticos de los números pares, por eso quieren dividir la sandía de tal forma que **cada una de las dos partes pese un número par de kilos**. No es obligatorio que las partes sean iguales. Cada uno debe recibir una parte de peso positivo.

**Entrada**  
Una sola línea que contiene un entero **w** (1 ≤ w ≤ 100) — el peso de la sandía.

**Salida**  
Imprime `YES` si los chicos pueden dividir la sandía en dos partes de peso par, o `NO` en caso contrario.

**Ejemplo**

```
Entrada:
8

Salida:
YES
```

> [!NOTE]
>
> - Por ejemplo, los niños pueden dividir la sandía en dos partes de 2 y 6 kilos respectivamente (otra variante: dos partes de 4 y 4 kilos).

---

### Problema 2 – Palabras demasiado largas (Way Too Long Words)

**Fuente:** [Codeforces 71A](https://codeforces.com/problemset/problem/71/A)

A veces algunas palabras como “localization” o “internationalization” son tan largas que escribirlas muchas veces es aburrido.

Consideramos que una palabra es **demasiado larga** si su longitud es **estrictamente mayor a 10 caracteres**. Todas las palabras demasiado largas deben reemplazarse por una abreviatura especial.

La abreviatura se forma así: se escribe la primera y la última letra de la palabra, y entre ellas se escribe el número de letras que hay entre la primera y la última.

Ejemplos:

- “localization” → “l10n”
- “internationalization” → “i18n”

**Entrada**  
La primera línea contiene un entero **n** (1 ≤ n ≤ 100).  
Cada una de las siguientes **n** líneas contiene una palabra. Todas las palabras consisten solo de letras minúsculas del alfabeto latino y tienen longitud entre 1 y 100.

**Salida**  
Imprime **n** líneas. La _i_-ésima línea debe contener el resultado de reemplazar la _i_-ésima palabra de la entrada.

**Ejemplo**

```
Entrada:
4
word
localization
internationalization
pneumonoultramicroscopicsilicovolcanoconiosis

Salida:
word
l10n
i18n
p43s
```

---

### Problema 3 – Equipo (Team)

**Fuente:** [Codeforces 231A](https://codeforces.com/problemset/problem/231/A)

Un día, tres mejores amigos (Petya, Vasya y Tonya) decidieron formar un equipo y participar en concursos de programación. En un concurso normalmente se proponen varios problemas. Los amigos decidieron que **implementarán un problema solo si al menos dos de ellos están seguros de la solución**.

El concurso tiene **n** problemas. Para cada problema se sabe si cada amigo está seguro de la solución.

Ayuda a los amigos a encontrar cuántos problemas van a resolver.

**Entrada**  
La primera línea contiene un entero **n** (1 ≤ n ≤ 1000) — el número de problemas.  
Luego hay **n** líneas, cada una con tres enteros (0 o 1). El primero indica si Petya está seguro, el segundo si Vasya está seguro y el tercero si Tonya está seguro.

**Salida**  
Imprime un solo entero — la cantidad de problemas que los amigos van a implementar.

**Ejemplo**

```
Entrada:
3
1 1 0
1 1 1
1 0 0
```

```
Salida:
2
```

> [!NOTE]
>
> - En el primer ejemplo, Petya y Vasya están seguros de saber cómo resolver el primer problema, y ​​los tres saben cómo resolver el segundo. Esto significa que escribirán las soluciones para ambos problemas. Solo Petya está seguro de la solución para el tercer problema, pero eso no es suficiente, así que los amigos no la aceptarán.
> - En el segundo ejemplo, los amigos solo resolverán el segundo problema, ya que Vasya y Tonya están seguros de la solución.

---

### Problema 4 – Bit++

**Fuente:** [Codeforces 282A](https://codeforces.com/problemset/problem/282/A)

El lenguaje de programación clásico de Bitland se llama **Bit++**. Este lenguaje es muy peculiar: solo tiene **una variable** llamada `x`.

Hay dos operaciones:

- `++` aumenta el valor de `x` en 1
- `--` disminuye el valor de `x` en 1

Una sentencia consiste exactamente en una operación y la variable `x` (escritas sin espacios).  
Un programa es una secuencia de sentencias.

El valor inicial de `x` es **0**. Se te da un programa en Bit++. Ejecuta el programa y encuentra el valor final de `x`.

**Entrada**  
La primera línea contiene un entero **n** (1 ≤ n ≤ 150) — el número de sentencias.  
Las siguientes **n** líneas contienen una sentencia cada una. Cada sentencia contiene exactamente una operación (`++` o `--`) y la variable `X`.

**Salida**  
Imprime un solo entero — el valor final de `x`.

**Ejemplos**

```
Entrada:
1
++X
```

```
Salida:
1
```

```
Entrada:
2
X++
--X
```

```
Salida:
0
```

---

### Problema 5 – Siguiente ronda (Next Round)

**Fuente:** [Codeforces 158A](https://codeforces.com/problemset/problem/158/A)

“El concursante que obtenga una puntuación igual o mayor a la del _k_-ésimo puesto avanzará a la siguiente ronda, siempre que obtenga una puntuación positiva…”

Participaron **n** personas (_n_ ≥ _k_) y ya conoces sus puntuaciones. Calcula cuántos participantes avanzarán a la siguiente ronda.

**Entrada**  
La primera línea contiene dos enteros **n** y **k** (1 ≤ k ≤ n ≤ 50).  
La segunda línea contiene **n** enteros separados por espacio: las puntuaciones _a₁, a₂, …, aₙ_ (0 ≤ aᵢ ≤ 100). La secuencia está ordenada de forma no creciente.

**Salida**  
Imprime el número de participantes que avanzan a la siguiente ronda.

**Ejemplos**

Entrada:

```
8 5
10 9 8 7 7 7 5 5
```

Salida:

```
6
```

Entrada:

```
4 2
0 0 0 0
```

Salida:

```
0
```

> [!NOTE]
>
> - In the first example the participant on the 5th place earned 7 points. As the participant on the 6th place also earned 7 points, there are 6 advancers.
> - In the second example nobody got a positive score.

---

### Problema 6 – Matriz hermosa (Beautiful Matrix)

**Fuente:** [Codeforces 263A](https://codeforces.com/problemset/problem/263/A)

Tienes una matriz de **5 × 5** que contiene 24 ceros y un solo uno. Las filas y columnas se numeran del 1 al 5.

En un movimiento puedes:

1. Intercambiar dos filas vecinas.
2. Intercambiar dos columnas vecinas.

Una matriz se considera **hermosa** si el número 1 está ubicado exactamente en el centro (fila 3, columna 3).

Calcula el **número mínimo de movimientos** necesarios para hacer la matriz hermosa.

**Entrada**  
Cinco líneas, cada una con cinco enteros (0 o 1). Se garantiza que hay exactamente un 1.

**Salida**  
Imprime un solo entero — el número mínimo de movimientos.

**Ejemplos**

Entrada:

```
0 0 0 0 0
0 0 0 0 1
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
```

Salida:

```
3
```

Entrada:

```
0 0 0 0 0
0 0 0 0 0
0 1 0 0 0
0 0 0 0 0
0 0 0 0 0
```

Salida:

```
1
```

#### Solución

La solución consiste en calcular la distancia Manhattan entre la posición del 1 y el centro de la matriz (3, 3). La distancia Manhattan se calcula como la suma de las diferencias absolutas de sus coordenadas.

---

### Problema 7 – Chico o chica (Boy or Girl)

**Fuente:** [Codeforces 236A](https://codeforces.com/problemset/problem/236/A)

Muchos chicos usan fotos de chicas hermosas como avatar. Por eso es difícil saber el género de un usuario.

Nuestro héroe inventó un método:  
Si el **número de caracteres distintos** en el nombre de usuario es **impar**, entonces es un **chico**.  
Si es **par**, entonces es una **chica**.

Dado el nombre de usuario, determina el género según este método.

**Entrada**  
Una sola línea que contiene una cadena no vacía de letras minúsculas inglesas (longitud ≤ 100).

**Salida**

- Si es chica → imprime `CHAT WITH HER!`
- Si es chico → imprime `IGNORE HIM!`

> [!THINK]
>
> - Para el primer ejemplo, "wjmzbmr" tiene 6 caracteres distintos: "w", "j", "m", "z", "b" y "r". Por lo tanto, wjmzbmr es una mujer y deberías imprimir "¡CHATEA CON ELLA!".
> - Imagina que tienes un tablero de 26 casillas, una para cada letra del alfabeto. Recorre el nombre de usuario y marca las casillas correspondientes a las letras que aparecen. Al final, cuenta cuántas casillas están marcadas. Si el número es par, es una chica; si es impar, es un chico.

**Ejemplos**
Entrada:

```
wjmzbmr
```

Salida:

```
CHAT WITH HER!
```

Entrada:

```
xiaodao
```

Salida:

```
IGNORE HIM!
```

> [!NOTE]
>
> - Para el primer ejemplo, "wjmzbmr" tiene 6 caracteres distintos: "w", "j", "m", "z", "b" y "r". Por lo tanto, wjmzbmr es una mujer y deberías imprimir "¡CHATEA CON ELLA!".

---

### Problema 8 – Two Sum

**Fuente:** [LeetCode 1](https://leetcode.com/problems/two-sum/)

Se te da un arreglo de enteros `nums` y un entero `target`.

Imprime los **índices** de los dos números tales que sumen exactamente `target`.

Puedes asumir que cada entrada tiene **exactamente una solución** y que no puedes usar el mismo elemento dos veces.  
Puedes devolver la respuesta en cualquier orden.

**Ejemplos**
Entrada:

```
nums = [2,7,11,15], target = 9
```

Salida:

```
[0,1]
```

Entrada:

```
nums = [3,2,4], target = 6
```

Salida:

```
[1,2]
```

Entrada:

```
nums = [3,3], target = 6
```

Salida:

```
[0,1]
```

---

### Problema 9 – Número Palíndromo

**Fuente:** [LeetCode 9](https://leetcode.com/problems/palindrome-number/)

Dado un entero `x`, devuelve `true` si `x` es un **palíndromo**, y `false` en caso contrario.

Un número es palíndromo si se lee igual de izquierda a derecha que de derecha a izquierda.

**Ejemplos**

```
Entrada: x = 121
Salida: true
```

```
Entrada: x = -121
Salida: false
```

```
Entrada: x = 10
Salida: false
```

---

### Problema 10 – FizzBuzz

**Fuente:** [LeetCode 412](https://leetcode.com/problems/fizz-buzz/)

Dado un entero `n`, devuelve un arreglo de strings `answer` (1-indexado) donde:

- `answer[i] == "FizzBuzz"` si `i` es divisible por 3 y por 5
- `answer[i] == "Fizz"` si `i` es divisible por 3
- `answer[i] == "Buzz"` si `i` es divisible por 5
- `answer[i] == i` (como string) en cualquier otro caso

**Ejemplos**

```
Entrada: n = 3
Salida:
"1"
"2"
"Fizz"
```

```
Entrada: n = 5
Salida:
"1"
"2"
"Fizz"
"4"
"Buzz"
```

```
Entrada: n = 15
Salida:
"1"
"2"
"Fizz"
"4"
"Buzz"
"Fizz"
"7"
"8"
"Fizz"
"Buzz"
"11"
"Fizz"
"13"
"14"
"FizzBuzz"
```

---

### Problema 11 – Java Stdin y Stdout I

**Fuente:** [HackerRank](https://www.hackerrank.com/challenges/java-stdin-and-stdout-1/problem)

Lee **tres** enteros desde la entrada estándar y luego imprímelos, cada uno en una línea nueva.

**Entrada de ejemplo**

```
42
100
125
```

**Salida de ejemplo**

```
42
100
125
```

---

### Problema 12 – Java If-Else

**Fuente:** [HackerRank](https://www.hackerrank.com/challenges/java-if-else/problem)

Dado un entero **n**, realiza las siguientes acciones:

- Si **n** es impar → imprime `Weird`
- Si **n** es par y está en el rango inclusivo **2 a 5** → imprime `Not Weird`
- Si **n** es par y está en el rango inclusivo **6 a 20** → imprime `Weird`
- Si **n** es par y mayor que **20** → imprime `Not Weird`

**Entrada**  
Un solo entero positivo **n**.

**Salida**  
`Weird` o `Not Weird`

**Ejemplos**

```
Entrada: 3
Salida: Weird
```

```
Entrada: 24
Salida: Not Weird
```

---

### Problema 13 – Java Loops I

**Fuente:** [HackerRank](https://www.hackerrank.com/challenges/java-loops-i/problem)

Dado un entero **N**, imprime sus primeros **10** múltiplos.  
Cada múltiplo debe imprimirse en una línea nueva con el formato:

`N x i = resultado`

**Entrada**  
Un solo entero **N** (2 ≤ N ≤ 20).

**Ejemplo**
Entrada:

```
2
```

Salida:

```
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
```

---

### Problema 14 – Java Strings Introduction

**Fuente:** [HackerRank](https://www.hackerrank.com/challenges/java-strings-introduction/problem)

Dadas dos cadenas **A** y **B** de letras minúsculas inglesas, realiza las siguientes operaciones:

1. Suma las longitudes de **A** y **B**.
2. Determina si **A** es lexicográficamente mayor que **B**.
3. Capitaliza la primera letra de **A** y de **B** y imprímelas en una sola línea separadas por un espacio.

**Entrada**  
Primera línea: cadena A  
Segunda línea: cadena B

**Salida**  
Tres líneas:

- Suma de longitudes
- `Yes` o `No`
- Las dos cadenas capitalizadas

**Ejemplo**
Entrada:

```
hello
java
```

Salida:

```
9
No
Hello Java
```

---

<h1 class="text-center"> Buena suerte y disfruten aprendiendo Git, GitHub y Java! </h1>
