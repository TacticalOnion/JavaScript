/*[CLASES AVANZADAS]*/
/*[Clase]--------------------------------*/
console.log('==================[Clase]')

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludo(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const persona = new Persona('Pepe',22)

console.log(persona)

persona.mostrarEdad = function (){
    console.log(`Tengo ${this.edad} años`)
}

persona.saludo()

console.log(persona)
persona.mostrarEdad()

/*[Abstraccion]--------------------------------*/
console.log('==================[Clases abstractas]')

class Animal {
    constructor(nombre){
        if(new.target === Animal){
            throw new Error('No se puede instanciar una clase abstracta')
        }

        this.nombre = nombre
    }

    emitirSonido(){
        throw new Error('Este metodo pertenece a una clase abstracta')
    }

}

// Arroja error porque implementa una clase abstracta
// const animal = new Animal('Gato','carne') 

/*[Polimorfismo]--------------------------------*/
console.log('==================[Polimorfismo]')

class Gato extends Animal{
    emitirSonido(){
        console.log(`${this.nombre} (gato) : Miau`)
    }
}

class Perro extends Animal{
    emitirSonido(){
        console.log(`${this.nombre} (perro) : Guau!`)
    }
}

const perro = new Perro('Rocky')
const gato = new Gato('Camila')

perro.emitirSonido()
gato.emitirSonido()

/*[Mixins]--------------------------------
    Tecnica para compartir funcionalidad entre diferentes clases
    pero sin herencia
*/
console.log('==================[Mixins]')

const VolarMixin = {
    volar(){
        console.log(`${this.nombre} esta volando...`)
    }
}

class Pajaro extends Animal{}

class Dragon extends Animal{}

Object.assign(Pajaro.prototype,VolarMixin)
Object.assign(Dragon.prototype,VolarMixin) 
const pajaro = new Pajaro('Loreto')
const dragon = new Dragon('MataCaballeros')

pajaro.volar()
dragon.volar()

/*[Singleton]--------------------------------
    Es un patron se asegura de que una clase se instancia 
    solo una vez
*/
console.log('==================[Singleton]')

class Sesion{
    constructor(usuario){
        if(Sesion.instancia){
            return Sesion.instancia
        }

        this.usuario = usuario
        Sesion.instancia = this // Guardamos la instancia
    }
}

const sesion1 = new Sesion('Pepe')
console.log('Sesion 1',sesion1.usuario)

const sesion2 = new Sesion() // No le pasamos el nombre
console.log('Sesion 2',sesion2.usuario)

// No se puede cambiar el nombre por que retorna la instancia almacenada
const sesion3 = new Sesion('Pedro') 
console.log('Sesion 3',sesion2.usuario)

/*[Symbol]--------------------------------
    Identificador unico e inmutable
*/
console.log('==================[Symbol]')
const ID = Symbol('id')

class Usuario {
    constructor(nombre){
        this.nombre = nombre
        this[ID] = Math.random()
    }
}

const usuario = new Usuario('Pepe')
console.log(usuario)

// No puedes acceder asi a un symbol, es semi privado
//usuario.ID = 1
console.log(usuario.ID)

// Puedes acceder asi
usuario[ID] = 1
console.log(usuario[ID])

/*[Instanceof]--------------------------------
    Comprueba una instancia
*/
console.log('==================[Instanceof]')

class Carro {}

const camioneta = new Carro()

console.log(`¿Camioneta es una instancia de Carro?`,camioneta instanceof Carro)

/*[Create]--------------------------------
    Crea un objeto a partir de un prototipo
*/
console.log('==================[Create]')

const carrito = Object.create(Carro.prototype)

console.log(`¿Carrito es una instancia de Carro?`,carrito instanceof Carro)


/*[Proxy]--------------------------------
    Un proxy sirve para inteerceptar y personalizar el 
    comportamiento de una clase
*/
console.log('==================[Proxy]')

const proxy = {

    get(target, propiedad) {
        console.log(`Accedes a la propiedad : ${propiedad}`)
        return target[propiedad]
    },

    set (target, propiedad, valor) {
        
        console.log(`Modificas la propiedad : ${propiedad}`)

        if(propiedad === 'saldo' && valor < 0){
            throw new Error('El saldo no puede ser negativo')
        }

        target[propiedad] = valor
        console.log('Propiedad actualizada : ',target[propiedad])
    }
}

class cuentaBanco{
    constructor(saldo){
        this.saldo = saldo
    }
}

// Forma normal
// const cuenta = new cuentaBanco(100)
// console.log('Saldo de cuenta : ', cuenta.saldo)

// Proxy
const cuenta = new Proxy(new cuentaBanco(100),proxy)
console.log(cuenta.saldo)
//cuenta.saldo = -1
cuenta.saldo = 200


