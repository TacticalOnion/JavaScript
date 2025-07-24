class Sandwich {

    #precio = 12.99 /*Atributo privato*/

    constructor(pan = 'blanco', jamon, mayonesa, mostaza){
        this.pan = pan
        this.jamon = jamon
        this.mayonesa = mayonesa
        this.mostaza = mostaza
    }

    tostar(){
        this.pan = this.pan + ' tostado'
    }

    get precio(){
        return this.#precio
    }

    set precio(nuevoPrecio){
        this.#precio = nuevoPrecio
    }
}

let sandwich = new Sandwich('integral',2,true,false)
console.log(sandwich)

/*Acceso a propiedades*/
sandwich.pan = 'centeno'
/*Meotodos*/
sandwich.tostar()

console.log(sandwich)
console.log(sandwich.precio)
sandwich.precio = 13.99
console.log(sandwich.precio)

/*Herencia*/

class Papa {

    constructor(colorOjos){
        this.colorOjos = colorOjos
    }

    bailar(){
        console.log('Bailando...')
    }

    trabajar(){
        console.log('Trabajando de carpintero...')
    }

}

class Hijo extends Papa{
    cantar(){
        console.log('Cantando...')
    }

    constructor(colorOjos,mascota){
        super(colorOjos)
        this.mascota = mascota
    }

    /*Rescritura*/
    bailar(){
        console.log(`Bailando cumbia...`)
    }

    trabajar(){
        super.trabajar()
    }
}

let hijo = new Hijo('cafe','gato')
console.log(hijo)
hijo.bailar()
hijo.cantar()
hijo.trabajar()

class Calculadora{

    static suma(a,b){
        return a + b
    }
}

console.log(Calculadora.suma(2,2))