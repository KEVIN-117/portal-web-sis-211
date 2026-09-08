---
title: Ejercicios Básicos de Programación
description: Recopilación de ejercicios de programación básica con soluciones en Java, incluyendo problemas de anagramas, duplicados, mover ceros, caracteres únicos, invertir strings y suma de dos números.
tags: ["Java", "Programación", "Ejercicios", "Anagramas", "Duplicados", "Mover Ceros", "Caracteres Únicos", "Invertir String", "Two Sum"]
---


**Recopilación de ejercicios similares con conceptos básicos**

---

### 1. Anagrama Válido (Valid Anagram)
**Fuente:** LeetCode 242

**Enunciado**  
Dadas dos cadenas `s` y `t`, determina si `t` es un anagrama de `s`.  
Un anagrama se forma reordenando las letras de otra palabra usando exactamente las mismas letras el mismo número de veces.

**Ejemplos**
```
Entrada: s = "anagram", t = "nagaram"
Salida: true

Entrada: s = "rat", t = "car"
Salida: false
```

**Solución en Java**
```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        int[] freq = new int[26]; // Tabla de frecuencias
        
        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }
        
        for (char c : t.toCharArray()) {
            freq[c - 'a']--;
            if (freq[c - 'a'] < 0) return false;
        }
        
        return true;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isAnagram("anagram", "nagaram")); // true
        System.out.println(sol.isAnagram("rat", "car")); // false
    }
}
```

**Conceptos usados**
- Tabla de frecuencias (array de tamaño 26)
- Recorrido lineal de strings

**Explicación**  
Primero verificamos que las longitudes sean iguales. Luego contamos cuántas veces aparece cada letra en `s` usando un array de 26 posiciones (una por cada letra del alfabeto). Después restamos las apariciones de `t`. Si en algún momento una frecuencia queda negativa o al final no todo es cero, no son anagramas.

**Complejidad**
- Temporal: \(O(n)\)
- Espacial: \(O(1)\) (el array de 26 es constante)

---

### 2. Contiene Duplicados (Contains Duplicate)
**Fuente:** LeetCode 217

**Enunciado**  
Dado un arreglo de enteros `nums`, determina si existe algún valor que aparezca **al menos dos veces**. Devuelve `true` si hay duplicados, `false` si todos los elementos son distintos.

**Ejemplos**
```
Entrada: nums = [1,2,3,1]
Salida: true

Entrada: nums = [1,2,3,4]
Salida: false
```

**Solución en Java**
```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        
        for (int num : nums) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }
        
        return false;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.containsDuplicate(new int[]{1, 2, 3, 1})); // true
        System.out.println(sol.containsDuplicate(new int[]{1, 2, 3, 4})); // false
    }
}
```

**Conceptos usados**
- HashSet (conjunto)
- Búsqueda en tiempo constante

**Explicación**  
Recorremos el arreglo una sola vez. Por cada número preguntamos si ya lo hemos visto (usando un `HashSet`). Si ya estaba, hay duplicado. Si no, lo agregamos al conjunto.

**Complejidad**
- Temporal: \(O(n)\)
- Espacial: \(O(n)\) (en el peor caso todos los elementos son distintos)

---

### 3. Mover Ceros (Move Zeroes)
**Fuente:** LeetCode 283

**Enunciado**  
Dado un arreglo de enteros `nums`, mueve todos los **ceros** al final del arreglo manteniendo el orden relativo de los elementos que no son cero.  
Debes hacerlo **in-place** (sin crear un nuevo arreglo).

**Ejemplos**
```
Entrada: nums = [0,1,0,3,12]
Salida: [1,3,12,0,0]

Entrada: nums = [0]
Salida: [0]
```

**Solución en Java**
```java
class Solution {
    public void moveZeroes(int[] nums) {
        int insertPos = 0; // Puntero para la posición de inserción
        
        // Movemos todos los no-ceros hacia adelante
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[insertPos] = nums[i];
                insertPos++;
            }
        }
        
        // Rellenamos el resto con ceros
        while (insertPos < nums.length) {
            nums[insertPos] = 0;
            insertPos++;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums1 = {0, 1, 0, 3, 12};
        sol.moveZeroes(nums1);
        System.out.println(java.util.Arrays.toString(nums1)); // [1, 3, 12, 0, 0]

        int[] nums2 = {0};
        sol.moveZeroes(nums2);
        System.out.println(java.util.Arrays.toString(nums2)); // [0]
    }
}
```

**Conceptos usados**
- Dos punteros (Two Pointers)
- Manipulación de arrays in-place

**Explicación**  
Usamos un puntero `insertPos` que indica dónde colocar el próximo número distinto de cero. Recorremos el arreglo: cada vez que encontramos un no-cero, lo colocamos en la posición `insertPos` y avanzamos el puntero. Al final, rellenamos las posiciones restantes con ceros.

**Complejidad**
- Temporal: \(O(n)\)
- Espacial: \(O(1)\)

---

### 4. Primer Carácter Único (First Unique Character in a String)
**Fuente:** LeetCode 387

**Enunciado**  
Dada una cadena `s` que solo contiene letras minúsculas, encuentra el **primer carácter que no se repite** y devuelve su índice. Si no existe, devuelve `-1`.

**Ejemplos**
```
Entrada: s = "leetcode"
Salida: 0

Entrada: s = "loveleetcode"
Salida: 2

Entrada: s = "aabb"
Salida: -1
```

**Solución en Java**
```java
class Solution {
    public int firstUniqChar(String s) {
        int[] freq = new int[26]; // Tabla de frecuencias
        
        // Contamos las apariciones
        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }
        
        // Buscamos el primero que aparece solo una vez
        for (int i = 0; i < s.length(); i++) {
            if (freq[s.charAt(i) - 'a'] == 1) {
                return i;
            }
        }
        
        return -1;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.firstUniqChar("leetcode")); // 0
        System.out.println(sol.firstUniqChar("loveleetcode")); // 2
        System.out.println(sol.firstUniqChar("aabb")); // -1
    }
}
```

**Conceptos usados**
- Tabla de frecuencias
- Dos recorridos lineales

**Explicación**  
Primero contamos cuántas veces aparece cada letra con un array de 26 posiciones. Luego recorremos la cadena de izquierda a derecha y devolvemos el índice del primer carácter cuya frecuencia sea exactamente 1.

**Complejidad**
- Temporal: \(O(n)\)
- Espacial: \(O(1)\)

---

### 5. Invertir un String (Reverse String)
**Fuente:** LeetCode 344

**Enunciado**  
Escribe una función que invierta un arreglo de caracteres `s` **in-place**.  
Debes modificar el arreglo de entrada y no devolver nada.

**Ejemplo**
```
Entrada: s = ["h","e","l","l","o"]
Salida: ["o","l","l","e","h"]
```

**Solución en Java**
```java
class Solution {
    public void reverseString(char[] s) {
        int left = 0;
        int right = s.length - 1;
        
        while (left < right) {
            // Intercambiamos
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        char[] s = {'h', 'e', 'l', 'l', 'o'};
        sol.reverseString(s);
        System.out.println(java.util.Arrays.toString(s)); // [o, l, l, e, h]
    }
}
```

**Conceptos usados**
- Dos punteros (Two Pointers)
- Intercambio de elementos

**Explicación**  
Colocamos un puntero al inicio (`left`) y otro al final (`right`). Mientras los punteros no se crucen, intercambiamos los caracteres y movemos los punteros hacia el centro.

**Complejidad**
- Temporal: \(O(n)\)
- Espacial: \(O(1)\)

---

### 6. Two Sum (versión eficiente con HashMap)
**Fuente:** LeetCode 1 (versión optimizada)

**Enunciado**  
Dado un arreglo de enteros `nums` y un entero `target`, devuelve los **índices** de los dos números que suman exactamente `target`.  
Asume que hay exactamente una solución y no puedes usar el mismo elemento dos veces.

**Ejemplos**
```
Entrada: nums = [2,7,11,15], target = 9
Salida: [0,1]

Entrada: nums = [3,2,4], target = 6
Salida: [1,2]
```

**Solución en Java**
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // valor -> índice
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            
            map.put(nums[i], i);
        }
        
        return new int[]{}; // Nunca llega aquí según el enunciado
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = sol.twoSum(nums, target);
        System.out.println(java.util.Arrays.toString(result)); // [0, 1]
    }
}
```

**Conceptos usados**
- HashMap
- Complemento aritmético

**Explicación**  
Mientras recorremos el arreglo, calculamos el número que necesitamos para llegar al `target` (el complemento). Si ese complemento ya está en el mapa, devolvemos los índices. Si no, guardamos el número actual junto con su índice.

**Complejidad**
- Temporal: \(O(n)\)
- Espacial: \(O(n)\)

---

### Resumen de conceptos introducidos

| Concepto              | Ejercicios donde se usa          |
|-----------------------|----------------------------------|
| Tabla de frecuencias  | 1, 4                             |
| HashSet / HashMap     | 2, 6                             |
| Dos punteros          | 3, 5                             |
| Recorrido lineal      | Todos                            |
| Manipulación in-place | 3, 5                             |
