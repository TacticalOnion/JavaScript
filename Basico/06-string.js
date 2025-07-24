/*Concatenar*/
let nombre = "Pablo"
let saludo = "Hola " + nombre
console.log(saludo)

/*Longitud*/
console.log(saludo.length)

/*Caracteres*/
console.log(saludo[0]) // H

/*Metodos comunes*/
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log(saludo.indexOf("Pablo")) /* Si sale -1 no encontro la cadena */
console.log(saludo.includes("Pablo")) /* Verifica si existe en la cadena */
console.log(saludo.slice(0,10)) /* Extra rango de caracteres mediante indice */
console.log(saludo.replace("Pablo","Rojas")) /* Remplaza cadena de caracteres */

/* Template literals */
let mensaje = `Hola soy un texto
                con salto de linea`

/* Interpolación */
console.log(`Hola ${nombre}, soy una cadena interpolada`)


                

