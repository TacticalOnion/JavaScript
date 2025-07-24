# Exportación por defecto
* La exportación por defecto permite exportar una sola entidad principal desde un módulo
* Es útil cuando un archivo tiene una única función, clase u objeto principal

## 🎯Caso de uso
Cuando tu módulo debe exponer una cosa principal, como una clase, una función o un objeto de configuración

## Ejemplo
salujo.js
```js
export default function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}
```
app.js
```js
import saludar from './saludo.js';

saludar('Pepe'); // Hola, Pepe
```