// 1. Crea una función que retorne a otra función
function retornarFuncion(funcion){
    return funcion
}

function funcion(){
    console.log(`hola soy una función :D`)
}

let ejecutarFuncion = retornarFuncion(funcion)
console.log(ejecutarFuncion)
ejecutarFuncion()

// 2. Implementa una función currificada que multiplique 3 números
function multiplicar(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

let multiplicacionUnoDos = multiplicar(1)(2)
let multiplicacionDosTres = multiplicar(2)(3)

console.log(multiplicacionUnoDos(5))
console.log(multiplicacionDosTres(10))


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base,exponente){
    if(exponente == 0){
        return 1
    }
    return base * potencia(base, exponente-1)
}

console.log(potencia(2,3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valor){
    return objeto = {
        increment : () => {
            valor++
            console.log(valor)
        },
        decrement : () => {
            valor --
            console.log(valor)
        },
        getValue : () => {
            console.log(valor)
        }
    }
}

let contador = createCounter(2)
contador.getValue()
contador.decrement()
contador.increment()


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers){
    let resultado = 0
    for(let numero of numbers){
        resultado += numero
    }
    return resultado*multiplier
}

console.log(sumManyTimes(10,5,5))


// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function suma(numeros){
    let resultado = 0
    for(let numero of numeros){
        resultado += numero
    }
    return resultado
}

function procesarSuma(suma,numeros,callBack){
    let resultado = suma(numeros)
    callBack(resultado,'suma')
}

function presentarResultado(resultado,operacion){
    console.log(`El resultado de la ${operacion} es ${resultado}`)
} 

let numeros = [10,20,30]
procesarSuma(suma,numeros,presentarResultado)


// 7. Desarrolla una función parcial
function saludoParcial(saludo){
    return function(nombre,extra){
        console.log(saludo,nombre,extra)
    }
}

let saludo = saludoParcial('Hola')
saludo('Pepe','¿que haces?')
saludo('Pedro','¿cómo estas?')

// 8. Implementa un ejemplo que haga uso de Spread
function listar(nombreUno, nombreDos, nombreTres){
    console.log(`Hola :`,nombreUno,',',nombreDos,',',nombreTres)
}

let nombres = ['Pepe', 'Pedro', 'Pablo']
listar(...nombres)

// 9. Implementa un retorno implícito
let dividir = (a,b) => a/b
console.log(`1/2 = `,dividir(1,2))

// 10. Haz uso del this léxico
let gato = {
    color : 'naranja',
    ronronear : function(){
        console.log(`El gato ${this.color} esta ronroneando`)
    }
}
gato.ronronear()
