// 1. Crea una función que reciba dos números y devuelva su suma
let suma = (numero1,numero2) => {
    return numero1+numero2
}

console.log(suma(1,2))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let maximo = (numeros) => {
    let numeroMayor = 0
    for(let numero of numeros){
        if(numero > numeroMayor){
            numeroMayor = numero
        }
    }
    return numeroMayor
}
numeros = [1,2,-1,3,10]
console.log(maximo(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let vocales = (string) => {
    let contadorVocales = 0
    for(let caracter of string){
        switch(caracter){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                contadorVocales++
                break
        }
    }
    return contadorVocales
}

string = "Doctor"
console.log(`La palabra ${string} tiene ${vocales(string)} vocales`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let mayusculas = (strings) => {
    for(let string = 0; string < strings.length; string++){
        strings[string] = strings[string].toUpperCase()
    }
    return strings
}

strings = ["hola","adios"]
console.log(mayusculas(strings))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let esPrimo = (numero) => {
    let divisores = [2,3,4,5,6,7,8,9]
    for(let divisor of divisores){
        if(divisor < numero && numero%divisor == 0){
            return false
        }
    }
    return true
}
numero = 6
console.log(`El numero ${numero} es primo : ${esPrimo(numero)}`)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let comun = (arreglo1, arreglo2) => {
    let arregloComun = new Set()
    for(let elementoArreglo1 of arreglo1){
        for(let elementoArreglo2 of arreglo2){
            if(elementoArreglo1 == elementoArreglo2){
                arregloComun.add(arreglo1)
            }
        }
    }
    return arregloComun
}

let arreglo1 = ["1",2,"palabra"]
let arreglo2 = [1,"2","pepe"]
console.log(`Los arreglos tienen en comun ${[...comun(arreglo1,arreglo2)]}`)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let sumaPares = (numeros) => {
    suma = 0
    for(let numero of numeros){
        if(numero%2 == 0){
            suma = suma + numero
        }
    }
    return suma
}
numeros2 = [1,2,3,4,5,6,7,8,9]
console.log(`La suma de los numeros pares del arreglo es ${sumaPares(numeros2)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let potenciarNumeros = (numeros) => {
    for(let numero = 0; numero<numeros.length; numero++){
        numeros[numero] = numeros[numero]**2
    }
    return numeros
}

numeros3 = [1,2,3]
console.log(`Los numeros elevados al cuadrado son ${potenciarNumeros(numeros3)}`)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let invertir = (string) => {
    let inverso = ""
    for(let indice = string.length -1; indice >= 0; indice--){
        let caracter = string[indice]
        inverso += caracter
    }
    return inverso
}

let string2 = "Hola"
console.log(`El inverso de ${string2} es ${invertir(string2)}`)

// 10. Crea una función que calcule el factorial de un número dado
let factorial = (numero) => {
    let factorial = 1
    for(let factor = 1; factor <= numero; factor++){
        factorial *= factor 
    }
    return factorial
}

let numero3 = 3
console.log(`El factorial de ${numero3} es ${factorial(numero3)}`)