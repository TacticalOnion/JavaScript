// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const arreglo = ['pelota', 'guantes', 'gato']

let [cosaUno, cosaDos] = arreglo
console.log(`Primeros dos elementos del arreglo '${cosaUno} y ${cosaDos}'`)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [,,animal,animalExtra = 'otro gato'] = arreglo
console.log(`Animal : '${animal}' y animal extra : '${animalExtra}'`)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const jugo = {
    sabor : 'naranja',
    precio : 12.99
}

let {sabor,precio} = jugo
console.log(`Sabor : '${sabor}' y precio : '${precio}'`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {sabor : saborDos, precio : precioDos} = jugo
console.log(`Sabor 2 : '${saborDos}' y precio 2 : '${precioDos}'`)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const maleta = {
    color : '',
    material : 'verde',
    duenio: {
        nombre : 'Pepe',
        apellido : 'Hernandez',
    }
}

let { duenio: { nombre: nombreDuenio, apellido: apellidoDuenio } } = maleta
console.log(`Duenio de la maleta : ${nombreDuenio} ${apellidoDuenio}`)

// 6. Usa propagación para combinar dos arrays en uno nuevo
const arregloUno = [1,2,3]
const arregloDos = [4,5,6]
let arregloUnoYDos = [...arregloUno,...arregloDos]
console.log(`Arreglo 1 y 2 : ${arregloUnoYDos}`)

// 7. Usa propagación para crear una copia de un array
const arregloOriginal = [10,11,12]
let copiaArreglo = [...arregloOriginal]
console.log(`Copia del arreglo : ${copiaArreglo}`)

// 8. Usa propagación para combinar dos objetos en uno nuevo
const tortilla = {
    ingrediente : 'maiz',
    tamanio : 'grande'
}

const carne = {
    tipo : 'tripa'
}

let taco = {...tortilla,...carne}
console.log(taco)

// 9. Usa propagación para crear una copia de un objeto
let tacoDos = {...taco}
console.log(tacoDos)

// 10. Combina desestructuración y propagación
const pedido = {
    cliente : 'Pedro',
    producto : 'zapatos',
    cantidad : 1,
    precioUnidad : 200
}

let {cliente,producto} = pedido

let pedidoActualizado = {
    ...pedido,
    cantidad : 2,
    precioUnidad : 100
}

console.log(pedidoActualizado)