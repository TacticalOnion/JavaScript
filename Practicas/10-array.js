/*Declaración*/

let arreglo = [3] // Almacena 3 en el arreglo
let arreglo2 = new Array(3) // Reserva arreglo de 3 items

/*Asignacion */
arreglo[1] = "Palabra" // Asgina valor a un indice especifico

/*Metodos comunes */
arreglo.push(2) /*Agrega elemento */
arreglo.pop() /*Elimina y devuleve el ultimo elemento del arreglo */
arreglo.push("Palabra")
console.log(arreglo.pop())

arreglo.shift() //Elimina el pirmer elemento
arreglo.unshift("palabra", "adios", 3) // Elimina los primeros elementos del arreglo que coincidan

console.log(arreglo.length) /*Longitud de un arreglo */

arreglo  = [] // Inicializar arreglo
arreglo.length = 0 // Inicializar arreglo

arreglo.slice(1,2) // Elemento 1 y 2
arreglo.splice(1,2) // Elementos del 1 al 2
