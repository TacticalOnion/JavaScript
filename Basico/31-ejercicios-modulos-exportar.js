// 1. Exporta una función
export function funcion(){
    console.log(`Hola soy una funcion :D`)
}

// 2. Exporta una constante
export const constante = 'Hola soy una constante :D'

// 3. Exporta una clase
export class Clase{
    constructor(numero){
        this.numero = numero
    }

    static presentar(){
        console.log(`Hola soy una clase :D`)
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function funcionPorDefecto(){
    console.log(`Hola soy una funcion por defecto :D`)
}


/*No se puede exportar una constante*/

// Solo puede haber un default
/* export default class ClasePorDefecto{

    static presentar(){
        console.log(`Hola soy una clase por defecto :D`)
    }
}  */


