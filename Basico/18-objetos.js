/*Objetos*/
/*Declaración*/
let gato = {
    nombre: "Camelia",
    pelaje: "blanco",
    edad: 4
}

/*Acceso atributos*/
console.log(`${gato.nombre} tiene pelaje ${gato["pelaje"]}`)

/*Modificar atributos*/
gato.edad = 5
console.log(`${gato.nombre} tiene ${gato.edad} años`)

/*Eliminar atributos*/
delete gato.edad
console.log(gato)

/*Agregar atributos*/
gato["edad"] = 5
console.log(gato)

/*Agregar metodos*/
gato.ronronear = () => {
    console.log(`${gato.nombre} esta ronroneando...`)
}
gato.ronronear()

/*Agregar objeto*/
let juguete = {
    forma: "bola",
    material: "estambre"
}
gato["juguete"] = juguete

console.log(gato)

/*Iterar*/
for(valor in gato){
    console.log(`${valor} : ${gato[valor]}`)
}

/*This*/
let gato2 = {
    nombre: "Camila",
    juguete: {
        nombre: "bola de estambre",
        propiedad: function(){
            console.log(`La ${this.nombre} es de ${gato2.nombre}`)
        }
    }
}

gato2.juguete.propiedad()

/* Objetos como funciones */
function Gato(nombre,pelaje){ //  Debe convertirse en una clase
    this.nombre = nombre
    this.pelaje = pelaje
}

let gato3 = new Gato("Babi","Pinto")

console.log(gato3)