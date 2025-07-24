// 9. Exporta una función, una constante y una clase desde una carpeta
export function funcionExterna(){
    console.log(`Hola soy una funcion externa :D`)
}

export const constanteExterna = 'Hola soy una constante extenerna :D'

export class ClaseExterna{
    constructor(numero){
        this.numero = numero
    }

    static presentar(){
        console.log(`Hola soy una clase externa :D`)
    }
}