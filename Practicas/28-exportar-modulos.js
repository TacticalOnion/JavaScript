// Funciones
export function saludar(nombre,alias){
    console.log(`Hola ${nombre} tu alias es ${alias} :D`)
}

// Propiedades
export const nombre = 'Jose'
export let alias = 'Pepe'

// Default
export default function despedida(){ /*Solo se puede usar una vez*/
    console.log(`Adios :c`)
}

export class Gatito{
    constructor(nombre){
        this.nombre = nombre
    }

    ronronear(){
        console.log(`${this.nombre} esta ronroneando :3`)
    }
}