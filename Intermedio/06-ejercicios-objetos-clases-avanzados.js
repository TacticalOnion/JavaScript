// 1. Agregega una función al prototipo de un objeto
// 3. Define un método de instancia en un objeto
console.log('============[Ejercicio 1]')
const objeto = {
    _color : 'verde', /// El '_' indica que es un propiedad "privada"
    metodoInstancia : function(){
        console.log('Este es mi metodo de instancia...')
    },
    get color(){
        console.log(`get()`)
        return this._color
    },
    set color(nuevoColor){
        console.log(`set()`)
        this._color = nuevoColor
    }
}

const prototipoObjeto = Object.create(objeto)
objeto.describir = function(){
    console.log(`Soy un objeto de color ${this.color}`)
}

objeto.describir()

// 2. Crea un objeto que herede de otro
console.log('============[Ejercicio 2]')
const objetoHijo = Object.create(objeto)

// 4. Haz uso de get y set en un objeto
console.log('============[Ejercicio 4]')
objeto.color = 'rojo'
console.log(objeto.color)


// 5. Utiliza la operación assign en un objeto
console.log('============[Ejercicio 5]')
let comida = {
    sabor : '',
    precio : 0,
    describir : function(){
        console.log(`Soy ${this.sabor} y cuesto ${this.precio}`)
    }
}

let hamburguesa = Object.assign(comida)
hamburguesa.sabor = 'sabroso'
hamburguesa.precio = 89
hamburguesa.describir()

// 6. Crea una clase abstracta
console.log('============[Ejercicio 6]')
class Vehiculo {
    constructor(color){
        if(new.target === Vehiculo){
            throw new Error('No se puede instanciar una clase abstracta')
        }
        this.color = color
    }

    mover(){
        throw new Error('Este metodo pertenece a una clase abstracta')
    }

}

// 7. Utiliza polimorfismo en dos clases diferentes
console.log('============[Ejercicio 7]')
class Carro extends Vehiculo{
    mover(){
        console.log(`Me muevo por via terrestre y soy de color ${this.color}`)
    }
}

class Avion extends Vehiculo{
    mover(){
        console.log(`Me muevo por via aerea y soy de color ${this.color}`)
    }
}

let carro = new Carro('rojo')
let avion = new Avion('blanco')

carro.mover()
avion.mover()


// 8. Implementa un Mixin
console.log('============[Ejercicio 8]')

const Descontar = {
    mostrarDescuento(){
        let precioDescuento = this.precio - (this.precio * this.descuento)
        console.log(`${this.nombre} de $${this.precio} ahora cuesta $${precioDescuento}`)
    }
}

class Producto{
    constructor(nombre,precio,descuento = 0){
        this.nombre = nombre
        this.precio = precio
        this.descuento = descuento
    }
}

class Peluche extends Producto{}
class Carrito extends Producto{}

Object.assign(Peluche.prototype,Descontar)
Object.assign(Carrito.prototype,Descontar)

const peluche = new Peluche('peluche',245.32,0.15)
const carrito = new Carrito('carrito',145,0.2)

peluche.mostrarDescuento()
carrito.mostrarDescuento()

// 9. Crea un Singleton
console.log('============[Ejercicio 9]')

class Configuracion{
    constructor(ajustes){
        if(Configuracion.instancia){
            return Configuracion.instancia
        }

        this.ajustes = ajustes
        Configuracion.instancia = this
    }

    get(clave){
        return this.ajustes[clave]
    }

    set(clave,valor){
        this.ajustes[clave] = valor
    }
}

const ajustesDefault = new Configuracion({
    'tema' : 'oscuro',
    'volumen' : 15,
})
console.log('Ajustes default : ',ajustesDefault.ajustes)

const ajustes1 = new Configuracion()
console.log('Ajustes 1 : ',ajustes1.ajustes)

ajustes1.set('tema','claro')
console.log('tema actualizado : ',ajustes1.get('tema'))

console.log('Ajustes 1 : ',ajustes1.ajustes)

// 10. Desarrolla un Proxy
console.log('============[Ejercicio 10]')

function validarNombre(valor){
    const caracteresMinimo = 3

    /*Validar tipo de dato*/
    if(typeof valor !== 'string'){
        throw new Error('El nombre debe ser texto')
    }

    /*Validar tamanio*/
    if(valor.length < caracteresMinimo){
        throw new Error('El nombre de usuario tiene que ser mayor a 3 caracteres')
    }
}

function validarEdad(valor){
    const edadMinima = 1

    if(typeof valor !== 'number'){
        throw new Error('El nombre debe ser texto')
    }

    if(valor < edadMinima ){
        throw new Error(`La edad no puede ser menor a ${edadMinima}`)
    }
}

const gestionarUsuario = {
    get(usuario,propiedad){
        return usuario[propiedad]
    },
    set(usuario, propiedad, valor){

        if(propiedad == 'nombre'){
            validarNombre(valor)
        }

        if(propiedad == 'edad'){
            validarEdad(valor)
        }

        usuario[propiedad] = valor
        console.log('Propiedad actualizada : ',usuario[propiedad])
    }
}

class Usuario{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
}

const usuario = new Proxy(new Usuario(),gestionarUsuario)


// Dan errores
// usuario.edad = 0
// usuario.nombre = 'Pe'
usuario.edad = 15
usuario.nombre = 'Pez'

console.log(
`usuario : ${usuario.nombre}
edad : ${usuario.edad}`
)
