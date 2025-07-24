/*Try catch*/
let objeto

try {
    console.log(objeto.color)
    console.log(`Ejecucion sin errores`)
} catch (error){
    console.log(`Hubo 1 error : `,error.message)
} finally{
    console.log(`Fin del programa`)
}

class SumaCeroError extends Error{
    constructor(mensaje,a,b){
        super(mensaje)
        this.a = a
        this.b = b
    }

    imprimirValores(){
        console.log(`a : ${this.a} | b : ${this.b}`)
    }
}

let suma = (a,b) => {

    /*Valida si los parametros son numeros*/
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError('Solo se suman numeros')
    }

    /*Valida si ambos numeros son enteros*/
    if(!(Number.isInteger(a) && Number.isInteger(b))){
        throw new Error('Solo se suman enteros')
    }

    if(a == 0 || b == 0){
        throw new SumaCeroError("Uno de los valores es cero",a,b)
    }
    return a+b
} 

try{
    console.log(`SUMA DE NUMEROS`)
    console.log(suma(0,2))
}catch (error){
    if(error instanceof SumaCeroError){
        console.log(`Error (Suma cero) : `,error.message)
        error.imprimirValores(ñ)
    }
    
    if (error instanceof TypeError){
        console.log('Error (Type error) : ', error.message)
    }else if(error instanceof Error){
        console.log('Error (Error) : ', error.message)
    }
}
