# Operador Spread (...)
Operador que expande elementos de un iterable (como arrays, objetos o strings) en lugares donde se esperan elementos individuales

```js
let arreglo = [1,2,3,4,5,5]
console.log(`arreglo : ${arreglo}`)
let conjunto = new Set(arreglo)
console.log(`conjunto : ${[...conjunto]}`)
```

## Usos
* Copiar arrays u objetos sin referencia
* Combinar arrays u objetos
* Pasar elementos de un array como argumentos a una función
* Convertir strings u otros iterables en elementos individuales