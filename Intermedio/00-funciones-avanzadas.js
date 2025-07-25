/*Ciudadanos de primera clase
    Entidades que pueden ser tratadas como valores
*/

// Variable
const saludo = function (nombre) {
    console.log(`Hola ${nombre}`)
}

// Parametro
function procesarSaludo(funcionSaludo,nombre){
    funcionSaludo(nombre)
}

// Retorno
function retornarSaludo(funcionSaludo){
    return funcionSaludo
}

procesarSaludo(retornarSaludo(saludo),'pepe')

/*Retorno implicito */
let multiplicacion = (a,b) => a * b // cuerpo de 1 sola linea
console.log(multiplicacion(1,2))

/*this lexico*/
const  objeto = {
    nombre : "Pedro",
    saludo: function() { 
        console.log(`Hola ${this.nombre}`)
    },
    saludoFlecha : () => { // Las funciones flecha crean su propio contexto
        console.log(`Hola ${this.nombre}`) // No conoce el nombre del objeto
    }
}

objeto.saludo();

/*IIFE Inmediatly Invoke Function Expression
    Funciones que se ejecutan en el momento que se definan
*/

// IIFE classic
(() => {
    console.log(`Hola soy un IIFE :D`)
})();

/* Parametros REST (...)
Permite a las funciones recibir una cantidad de parametros dinamica
*/
function suma(...numeros){
    let resultado = 0
    for(let numero of numeros){
        resultado += numero
    }
    return resultado
}

console.log(suma(1,2,3,4)) // Agrupa el parametro dentro de un arreglo

/* Operador Spread (...)
Permite a las funciones recibir arreglso como parametros
*/

let numeros = [10,20,30,40]
let numero = [11]
function sumaSpread(a,b,c){
    return a+b+c
}
console.log(sumaSpread(...numeros)) // no suma 40
console.log(sumaSpread(...numero)) // devuelve NaN pq le faltan parametros

/*Closures
    Funcion que es interna a otra funcion accede a variables de la funcion externa
*/

function contar(){
    let contador = 0
    return function () {
        contador++
        console.log(contador)
    }
}

let contador = contar() /*Almacena la instancia original dela funcion*/
contador()
contador() /*Mantiene el estado de la variable*/

// Recursividad
function factorial(factor){
    if(factor <= 1){
        return 1
    }

    return factor * factorial((factor - 1))
}

console.log(factorial(4))

/* Funciones parciales 
    Reparte los parametros en funciones y retorna  una 
    funcion que recibe el resto de los parametros
*/

function sumaParcial(a){
    return function(b,c){
        return a + b + c
    }
}

const sumaCon = sumaParcial(4) // Hace que una parte de la funcion sea constante
console.log(sumaCon(2,3))
console.log(sumaCon(10,1))


/*Currying
    Transforma una funcion que recibe varios parametros
    en una funcion que recibe 1 solo parametro   
*/

function curryingSuma(a){
    return function(b){
        return function (c){
            return a + b + c
        }
    }
}

const sumaAB = curryingSuma(2)(3)
const sumaA = curryingSuma(1)
console.log(sumaAB(10)) // Permite modificar el valor de c manteniedo a y b
console.log(sumaAB(4))
console.log(sumaA(1)(1))

/*Call backs
    Funcion que ejecuta otra funcion
*/

function procesarDatos(datos, callBack){
    const resultado = suma(...datos)
    callBack(resultado)
}

function procesarResultados(resultado){
    console.log(`El resultado es ${resultado}`)
}

function compararResultados(resultado){
    console.log(`El resultado ${resultado} es mayor a 0 : `, resultado > 0)
}

procesarDatos([10,20,30],procesarResultados)
procesarDatos([10,20,30],compararResultados)
procesarDatos([10,20,30],(resultado) => {
    console.log(`El resultado con una Arrow Function es ${resultado}`)
})

