/*[OBJETOS AVANZADOS]*/
/*[Prototipos]--------------------------------------------------------
    !- Actualmente estan en desuso
*/

console.log('==================[PROTOTIPOS]')
let persona = {
    nombre : 'Pepe',
    edad: 28,
    saludo(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

console.log(persona.__proto__) // Base de propiedades
console.log(Object.getPrototypeOf(persona)) // Permite heredar atributos

persona.mostrarEdad = function(){
    console.log(`Tengo ${this.edad} años`)
}

console.log(persona)
persona.mostrarEdad()

/*[Herencia]--------------------------------------------------------*/
console.log('==================[HERENCIA]')

// Crea un objeto a partir del que ya existe
let programador = Object.create(persona) 
programador.lenguaje = 'JavaScript'

programador.saludo()
programador.mostrarEdad()

console.log('Programador : ',programador.lenguaje)
console.log('Persona : ',persona.lenguaje)

/*[Metodos estaticos y de instancia]--------------------------------*/
console.log('====[ESTATICOS Y DE INSTANCIA]')

// Forma antigua de manejar objetos
function Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludo = function(){
    console.log(`Hola soy ${this.nombre}`)
}

let nuevaPersona = new Persona('Pepe',31)
nuevaPersona.saludo()

/*[METODOS AVANZADOS]*/
/*[Assign]--------------------------------
    Copiar las propiedades de 1 o mas objetos que son la fuente
    para un ojeto destino
*/
console.log('==================[ASSIGN]')
let personaBase = {
    nombre : 'Jose'
}
let personaDetallado = {
    edad : 21,
    alias : 'Pepe'
}

let personaCompleta = Object.assign(personaBase,personaDetallado)
console.log(personaCompleta)

/*[Keys, values, entries]--------------------------------
    keys : arreglo de claves del objeto
    values : arreglo de valores del objeto
    entries : arreglo de clave valor del objeto
*/
console.log('==================[Keys,values,entries]')

console.log('Keys : ',Object.keys(personaCompleta))
console.log('Values : ',Object.values(personaCompleta))
console.log('Entries : ',Object.entries(personaCompleta))