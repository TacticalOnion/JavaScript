# Spreading
Permite expandir elementos de un arreglo u objeto en otro contexto, como en una nueva colección o como argumentos de una función.

# Arreglos
Combinar arreglos

```js
const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b];

console.log(combinado); // [1, 2, 3, 4]
```

Clonar arreglos

```js
const original = [5, 6];
const copia = [...original];
```

# Objetos
Copiar o combinar objetos

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinado = { ...obj1, ...obj2 };

console.log(combinado); // { a: 1, b: 3, c: 4 }
```

# Funciones
Pasar los elementos de un arreglo como argumentos de una función

```js
function suma(x, y, z) {
  return x + y + z;
}

const numeros = [1, 2, 3];
console.log(suma(...numeros)); // 6
```