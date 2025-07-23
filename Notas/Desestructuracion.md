# Desestructuración
Extraer valores de objetos o arreglos y asignarlos a variables individuales

## Ejemplo
```js
/*Arreglo*/
const numeros = [1, 2, 3];
const [a, b, c] = numeros;

/*Objeto*/
const persona = { nombre: "Ana", edad: 30 };
const { nombre, edad } = persona;
```