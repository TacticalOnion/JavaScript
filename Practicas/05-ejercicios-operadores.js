// 1. Crea una variable para cada operación aritmética
let a = 1
let b = 1

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

let incremento = a++
console.log(incremento)

let decremento = a--
console.log(decremento)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
a = 2
a += 2
a -= 2
a *= 2
a /= 2

b %= 1
b **= 1

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(true != false)
console.log(true == true)
console.log(1 == "1")
console.log(1 === 1)
console.log(1 !== "1")


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(true != true)
console.log(true == false)
console.log(1 == 2)
console.log(1 === "1")
console.log(1 !== 1)


// 5. Utiliza el operador lógico and
console.log(true && false)

// 6. Utiliza el operador lógico or
console.log(true || false)

// 7. Combina ambos operadores lógicos
console.log(true && false || true == true)

// 8. Añade alguna negación
console.log(!true)

// 9. Utiliza el operador ternario
verdadero = true
verdadero ? console.log("Es verdadero") : console.log("Es falso")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(1 +  1 == 2 && 1 + 1 === 2 )
