# Ciudadanos de primera clase
Entidades que pueden ser tratadas como valores: 

* asignadas a variables
* pasadas como argumentos
* retornadas desde funciones
* etc. 

Entidades
* Funciones
* Objetos
* Arreglos
* Clases

## Ejemplo
```js
function saludar() {
  return "Hola";
}

const decirHola = saludar;
console.log(decirHola());

function ejecutar(funcion) {
  return funcion();
}

console.log(ejecutar(saludar));

```