# Template strings
Forma de declarar strings con "``" backticks que permite : 

✅ Interpolar variables
✅ Strings con saldos de linea
✅ Incluir funciones dentro del string

## Ejemplo
```js
const nombre = "Pablo"
const saludo = `Hola, ${nombre}.
                Soy una cadena interpolada`
const mensajeSuma = `${saludo} y sé que 1 + 1 es igual a ${1+1}`
```