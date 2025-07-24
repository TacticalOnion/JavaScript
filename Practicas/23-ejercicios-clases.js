// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 4. Añade un método estático a la primera clase

class Gato {
    constructor(color,pelaje){
        this.color = color
        this.pelaje = pelaje
    }

    describir(){
        console.log(`El gato tiene el pelo ${this.pelaje} y es de color ${this.color}`)
    }

    static ronronear(){
        console.log(`El gato esta ronroneando...`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let gatoNaranja = new Gato('naranja','corto')
gatoNaranja.describir()

// 5. Haz uso del método estático
Gato.ronronear()

// 6. Crea una clase que haga uso de herencia
// 10. Sobrescribe un método de una clase que utilice herencia 
class GatoGigante extends Gato{
    constructor(color,pelaje){
        super(color,pelaje)
        this.tamanio = 'gigante'
    }

    describir(){
        console.log(`Este gato es ${this.color} y es ${this.tamanio}`)
    }

}

let gatote = new GatoGigante('negro','largo')
gatote.describir()

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Usuario {
    #usuario
    #contrasenia

    constructor(usuario,contrasenia){
        this.#usuario = usuario
        this.#contrasenia = contrasenia
    }

    get usuario(){
        return this.#usuario
    }

    set contrasenia(nuevaContrasenia){
        this.#contrasenia = nuevaContrasenia
        console.log(`Contrasenia actualizada...`)
    }
}


let usuario = new Usuario('pepe','1234')
// 9. Utiliza los get y set y muestra sus valores
console.log(usuario.usuario)
usuario.contrasenia = '1000'



