// 1. Crea un bucle que imprima los números del 1 al 20
console.log("- Numeros del 1 al 20")
for(indice = 1; indice <=20; indice++){
    console.log(indice)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("- Suma de todos los numeros del 1 al 100")
let suma = 0
for(indice = 1; indice <= 100; indice++){
    suma = suma + indice
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("- Numeros pares entre 1 y 50")
for(indice = 1; indice <= 50; indice++){
    if(indice%2 == 0){
        console.log(indice)
    }else{
        continue
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("- Arreglo de nombres")
let nombres = ["Pedro","Pablo","Pepe"]

for(let nombre of nombres){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("- Vocales de un string")
let cadenaTexto = "Texto"
let cantidadVocales = 0

for(indice = 0; indice <= cadenaTexto.length;indice++){
    switch(cadenaTexto[indice]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            cantidadVocales = cantidadVocales + 1
            break
    }
}
console.log(cantidadVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("- Multiplicar numeros")
numeros = [1,2,3,4,5]
for(indice=0; indice < numeros.length; indice++){
    console.log(`${numeros[indice]}x${indice+1} = ${numeros[indice]*(indice+1)}`)
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("Tabla del 5")
let tabla = 5
let limiteTabla = 10

for(indice = 1; indice<=limiteTabla;indice++){
    console.log(`${indice}x${tabla} = ${indice*tabla}`)
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("Invertir cadena de texto")
let cadenaNormal = "Normal"
let cadenaInversa = ""

for(let indice = cadenaNormal.length-1; indice>=0;indice--){
    cadenaInversa = cadenaInversa + cadenaNormal[indice]
}

console.log(cadenaNormal)
console.log(cadenaInversa)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("Fibonnaci")
let fibonacciLimite = 10
let fibonacci = "0,"
let n1 = 0
let n2 = 1

for(indice = 1; indice < fibonacciLimite; indice++){
    n3 = n1 + n2
    n1 = n2
    fibonacci = fibonacci + `${n3},`
    n2 = n3
}

console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("Arreglo con numeros mayores a 10")
let numerosRandom = [10,11,30,2,50,30]
let numerosMayoresADiez = []

for(let numero of numerosRandom){
    if(numero > 10){
        numerosMayoresADiez.push(numero)
    }
}

console.log(numerosMayoresADiez)