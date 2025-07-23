// 1. Crea un objeto con 3 propiedades
let pizza = {
    ingredientes: ["peperoni","queso"],
    tamanio: "grande",
    precio: 119
}

// 2. Accede y muestra su valor
for(valor in pizza){
    console.log(`${valor} - ${pizza[valor]}`)
}

// 3. Agrega una nueva propiedad
pizza["condimentos"] = ["Catsup","Salsa inglesa"]
console.log(pizza)

// 4. Elimina una de las 3 primeras propiedades
delete pizza["tamanio"]
console.log(pizza)

// 5. Agrega una función e invócala
pizza["descuento"] = function (descuento){
    this.precio = this.precio - (this.precio*descuento)
    console.log(`Ahora la pizza cuesta ${this.precio}`)
}

pizza.descuento(0.15)

// 6. Itera las propiedades del objeto
for(valor in pizza){
    console.log(`${valor} - ${pizza[valor]}`)
}

// 7. Crea un objeto anidado
pizza["pizzeria"] = pizzeria = {
    calle: "Boloniesa",
    colonia: "Italiana"
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(pizza)

// 9. Comprueba si los dos objetos creados son iguales
let objeto1 = {
    atributo: "x",
    atributo2: "x"
}

let objeto2 = {
    atributo: "x",
    atributo2: "x"
}

console.log(`Los objetos son iguales : ${objeto1 == objeto2}`)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(`Los atributos son iguales : ${objeto1.atributo == objeto1.atributo2}`)