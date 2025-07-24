// 1. Crea un array que almacene cinco animales
animales = ["perro", "gato", "mariposa"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.push("vaca")
animales.unshift("oveja")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
delete animales[3]
console.log(animales)

// 4. Crea un set que almacene cinco libros
libros = new Set()

// 5. Añade dos más. Uno de ellos repetido
libros.add("Libro rojo")
libros.add("Libro verde")
libros.add("Libro rojo")
console.log(libros)

// 6. Elimina uno concreto a tu elección
libros.delete("Libro verde")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
meses = new Map()
meses.set(1, "Enero")
meses.set(2, "Febrero")
meses.set(3, "Marzo")
meses.set(4, "Abril")
meses.set(5, "Mayo")
meses.set(6, "Junio")
meses.set(7, "Julio")
meses.set(8, "Agosto")
meses.set(9, "Septiembre")
meses.set(10, "Octubre")
meses.set(11, "Noviembre")
meses.set(12, "Diciembre")

console.log(meses.entries())

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if(meses.has(5)){
    console.log(meses.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano",["Junio","Julio","Agosto"])
console.log(meses.get("verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arreglo = [1,2,3,4,5,5]
console.log(`arreglo : ${arreglo}`)
let conjunto = new Set(arreglo)
console.log(`conjunto : ${[...conjunto]}`)
let diccionario = new Map()
diccionario.set("numeros",[...conjunto])
console.log(`diccionario : ${diccionario.get("numeros")}`)