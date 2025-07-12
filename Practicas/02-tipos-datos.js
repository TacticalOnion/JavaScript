/* 
Tipos de datos principales
    * String: cadena de texto
    * Numericos : valores numericos  
    * Undefined : la variable es declarada pero no tiene ningun valor
    * Null : variable con valor nulo
    * Symbol() : valores unicos que pueden usar como ids de propiedades
    * BigInt() : enteros grandes que abarcan toda la memoria necesaria y disponible
*/

/*String*/
let texto = "Cadena de texto"

/*Numerico*/
let edad = 21 // Entero
let estatura = 1.70 // Real

/* Boolean */
let esVerdad = false
let esMentira = true

/*Undefined*/
let valorIndefinido

/*Null*/
let valorNulo = null

/*Symbol*/
let miSimbolo = Symbol("nombresimbolo")

/*Bigint*/
let miGranEntero = BigInt(10000000000000000000000000)
let miGranEntero2 = 10000000000000000000000000n

/*Mostrar tipo de dato*/
typeof texto 
console.log(typeof texto)