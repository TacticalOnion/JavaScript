/*
Operadores
    * Aritmeticos
        * Suma
        * Resta
        * Division
        * Multiplicacion 
        * Modulo
        * Exponente
        * Incremento
        * Decremento
    * Asignación
        * Igual
        * Suma igual : Suma al valor actual
        * Resta igual : Resta al valor actual
        * Multiplica igual
        * Division igual
        * Modulo igual
        * Exponente igual
    * Comparación
        * Mayor que
        * Menor que
        * Mayor o igual
        * Menor o igual
        * Igual
        * Igualdad de identidad
        * Diferente
    * Lógicos
        * AND
        * OR
        * NOT
        * Operadores ternarios
*/

/*Aritmeticos*/
console.log(5+10)
console.log(5-10)
console.log(5/10)
console.log(5*10)
console.log(5 % 10)
console.log(5 ** 10)

a = 1

a++
console.log(a)

a--
console.log(a)

/*Asignación*/
let numero = 2
numero += 2
numero -= 2
numero *= 2
numero /= 2 
numero %= 2
numero **=2

/*Comparación*/
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b) // Igualdad por valor
console.log(a === b) // Igualdad la identidad  (valor y tipo de dato)
console.log(a != b)
console.log(a !== b) // Desigualdad por identidad

a = 6
console.log(a == "6") // true
console.log(a === 6) // true
console.log(a === "6") // false

/*Lógicos*/
console.log(1 == 1 && 1 != 2)
console.log(1 == 1 || 1 != 2)
console.log(1 == 1 && 1 != 2 && 1 !== "1")
console.log(!(1 == 1 && 1 != 2))
console.log(!true)

let esVerdadero = true
esVerdadero ? cclearonsole.log("Es verdadero") : console.log("Es falso")