// 1. Crea un función que utilice error correctamente
function validar(valor){
    if(valor == false){
        console.error('Hubo un error...', new Error('La validacion es falsa'))
    }
}

try{
    validar(false)
}catch(error){
    console.log(`Error : `,error.message)
}

// 2. Crea una función que utilice warn correctamente
// 3. Crea una función que utilice info correctamente
function validarArreglo(arreglo){
    for(let valor of arreglo){
        if(valor == false){
            console.warn(`Ten cuidado uno de los valores, es falso!`)
        }
        if(valor){
            console.info(`Valor verdadero...`)
        }
    }
}

let arreglo = [true,true,false,true]
validarArreglo(arreglo)

// 4. Utiliza table
let tabla = [
    {taco : 'tripa', cantidad : 3},
    {taco : 'pastor', cantidad : 2},
    {taco : 'suadero', cantidad : 5}
]

console.table(tabla)

// 5. Utiliza group
console.group('Mis gatos : ')
console.log(`Camila`)
console.log('Camelia')
console.log('Babi')
console.groupEnd()

// 6. Utiliza time
console.time('Contador')
console.log(`Iniciando contador...`)
for(let indice = 1; indice <= 1000; indice++){
    if(indice == 1000){
        console.log(`El contador llego hasta 1000`)
    }
}
console.timeEnd('Contador')

// 7. Valida con assert si un número es positivo
let numero = 0
console.assert(numero >! 0,`El numero ${numero} no es positivo`)

// 8. Utiliza count
for(let indice=1; indice <= 5; indice++){
    console.count('Contador')
}

// 9. Utiliza trace
function ping(){
    console.log(`ping...`)
    pong()
}

function pong(){
    console.log(`pong...`)
    console.trace()
}

ping()

// 10. Utiliza clear
console.clear(); /*No funciona en el codespace*/
