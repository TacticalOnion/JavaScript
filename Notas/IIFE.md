# IIFE
`Immediately Invoked Function Expression`
Función que se ejecuta inmediatamente después de ser definida

## Uso
| Caso de uso | Ejemplo |
| --- | --- |
| Aislar variables |	Evita que variables temporales afecten el código global |
| Ejecutar código una sola vez	| Inicializaciones o configuración |
| Crear módulos (antes de import/export) | Encapsular funciones y datos |


## Forma 1 : Al inicio del codigo
Hay que posicionar el IIFE al inicio del codigo

```js
(() => {
    console.log(`Hola soy un IIFE :D`)
})()
// Demas codigo
```
## Forma 2 : Cerrar la instruccióm anterior
Hay que cerrar la instrucción anterior con `;`

```js
hola();

(() => {
    console.log(`Hola soy un IIFE :D`)
})()
```

## Forma 3 : Forzar expresión
Con los prefijo `!,+,~,void` forzamos a que JS lo interprete la función como una expresión

```js
!(() => {
    console.log(`Hola soy un IIFE :D`)
})()

+(() => {
    console.log(`Hola soy un IIFE :D`)
})()

~(() => {
    console.log(`Hola soy un IIFE :D`)
})()

void(() => {
    console.log(`Hola soy un IIFE :D`)
})()
```