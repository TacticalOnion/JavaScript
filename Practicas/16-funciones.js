/*Funciones*/
function funcion(){
    console.log("Hola soy una funcion")
}

funcion()

function funcionConParametros(paramtero){
    console.log(`Soy una función y mi parametro es ${paramtero}`)
}

funcionConParametros("pepe")

/*Funciones anonimas*/
const mensaje = function(){
    console.log("Hola no tengo nombre")
}

mensaje()

/* Arrow functions */
saludo = (nombre) => {
    console.log(`Hola, mi nombre es ${nombre}`)
} 

saludo("Pablo")

/*Valores por defecto*/
function suma(a = 0, b = 0){
    console.log(`Tu suma es ${a+b}`)
}

suma(15)

/*Retorno*/
function multiplicar(a,b){
    let respuesta = a*b
    return respuesta
}

console.log(`Tu multiplicacion da ${multiplicar(1,2)}`)

/*Funciones de orden superior*/

function aplicaFuncion(funcion,a,b){
    funcion(a,b)
}

aplicaFuncion(suma,1,2)

/*For each*/
arreglo = [1,2,3,4,5]

arreglo.forEach((element) => {
    console.log(element)
})