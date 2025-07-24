// 1. Concatena dos cadenas de texto
const cadena = "Hola" + ", adios :D" 

// 2. Muestra la longitud de una cadena de texto
console.log(cadena.length)

// 3. Muestra el primer y último carácter de un string
console.log(`${cadena[0]} y ${cadena[cadena.length-1]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(`Mayusculas : ${cadena.toUpperCase()}
Minusculas : ${cadena.toLowerCase()}`)

// 5. Crea una cadena de texto en varias líneas
const cadenaLarga = `Hola soy una cadena muy
largaaaaaaaaaaaaaaaaaaaa`
console.log(cadenaLarga)

// 6. Interpola el valor de una variable en un string
numeroSecreto = 69
const mensaje = `Estas pensando en el numero ${numeroSecreto}`
console.log(mensaje)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
const mensajeSinGuiones = "Palabra 1,palabra 2, palabra 3"
mensajeConGuiones = mensajeSinGuiones.replaceAll(" ", "-")
console.log(mensajeConGuiones)


// 8. Comprueba si una cadena de texto contiene una palabra concreta
const animalSecreto = "perro"
console.log(`Estas pensando en un gato : ${animalSecreto.includes("gato")}`) 

// 9. Comprueba si dos strings son iguales
const texto1 = "Hola"
const texto2 = "Hola2"

console.log(`${texto1} y ${texto2} son lo mismo : ${texto1 == texto2}`)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(`${texto1} y ${texto2} miden lo mismo : ${texto1.length == texto2.length}`)