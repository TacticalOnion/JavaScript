// 4. Crea una excepción personalizada
class ColorError extends Error{
    constructor(mensaje,color){
        super(mensaje)
        this.color = color
    }

    notificarError(){
        console.log(`Camila no es de color ${this.color}`)
    }
}

function validarDatosCamila(color,edad){
    
    if(Number.isNaN(edad)){
        throw new TypeError("La edad debe ser un numero")
    }

    // 3. Lanza una excepción genérica
    if(!(Number.isInteger(edad))){
        throw new Error("La edad debe ser un numero entero")
    }

    if(color != 'naranja'){
        throw new ColorError("Color equivocado",color)
    }

    console.log(`Camila es de color ${color} y tiene ${edad} anios`)
}

// 1. Captura una excepción utilizando try-catch
// 2. Captura una excepción utilizando try-catch y finally
try{
    console.log(`Validar datos camila`)
    let color = 'naranja'
    let edad = 12.2

    validarDatosCamila(color,edad)

}catch(error){
    // 6. Lanza varias excepciones según una lógica definida
    // 7. Captura varias excepciones en un mismo try-catch
    if(error instanceof TypeError){
        console.log(`Error : `,error.message)
    }else if(error instanceof Error){
        console.log(`Error : `,error.message)
    }
    // 5. Lanza una excepción personalizada
    if(error instanceof ColorError){
        error.notificarError()
    }
    
    
}finally{
    console.log(`Fin del programa`)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
function transformarFloat(valores){
    for(let indice = 0; indice < valores.length; indice++){

        if(typeof valores[indice] !== "number"){
            throw new Error(`El valor ${valores[indice]} no es un numero`)
        }

        valores[indice] = parseFloat(valores[indice])
    }
}

try{
    const valores = [1,2,1.99]
    console.log(valores)
    transformarFloat(valores)
    console.log(valores)
}catch(error){
    console.log('Error : ', error.message)
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class AtributoError extends Error{
    constructor(mensaje){
        super(mensaje)
    }

    notificarError(){
        console.log(`El color no esta definido`)
    }
}

function validarObjeto(objeto){
    if(objeto.color === undefined){
        throw new AtributoError("El objeto no tiene color")
    }
    
    console.log(`El objeto es de color ${objeto.color}`)
}

try{
    let objeto = {
        tamanio : 'mediano'
    }

    validarObjeto(objeto)

}catch(error){
    console.log('Error : ',error.message)
    error.notificarError()
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function adivinarNumero(numeroSecreto, valores, intentos){
    for(let intento = 0; intento < intentos; intento++){
        let valor = valores[intento]

        console.log(`[${intento+1}/${intentos}] ¿Es ${valor} el numero secreto?`)

        if(valor == numeroSecreto){
            console.log(`Si, adivinaste el numero :D`)
            break
        }

        if(valor != numeroSecreto){
            console.log(`No, no adivinaste el numero :c`)
        }

        if(valor > intentos){
            throw new Error('ya no hay mas intentos...')
        }
        
        if(Number.isNaN(valor)){
            throw new Error('el valor no es un numero')
        }

        if(valor === undefined){
            throw new Error('no hay ningun valor')
        }

    }
}

try{
    let valores = [1,3,2]
    adivinarNumero(2,valores,1)
}catch(error){
    console.log(`Error : `, error.message)
}