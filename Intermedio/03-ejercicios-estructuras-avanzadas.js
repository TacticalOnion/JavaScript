// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let nombres = ['Ana','Pedro','Emiliano','Pablo']

// Map
let indice = 0
let nombresConIndice = nombres.map(nombre => {
    indice++
    return `${indice}-${nombre}`
})
console.log(nombresConIndice)

//Filter
let nombresConP = nombres.filter(nombre => nombre.startsWith('P'))
console.log(nombresConP)

// Reduce
let saludo = 'Saludos a ' + nombres.reduce((previo,actual,indiceActual) =>{
    if(indiceActual == nombres.length - 1){
        return previo + ' y ' + actual
    }
    return previo + ',' + actual
})
console.log(saludo)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let arregloNumeros = [1,2,3,4]
let arregloNumerosAlCubo = arregloNumeros.map((numero) => numero ** 3)
let arregloNumerosPares = arregloNumerosAlCubo.filter((numero) => numero%2 == 0)
console.log(arregloNumerosPares)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

// flat
let arregloAnidado = ['jugo','pelota',['vaso','lapiz'],['cartera',['tarjeta',['foto',['manzana','platano']],'regla'],['pluma']]]

function aplanadoraDeArreglos(arreglo){
    let arregloAplanado
    let profundidad = 1
    let tamanioAnterior = arreglo.length
    let tamanioActual

    do{
        if(tamanioActual > tamanioAnterior){
            tamanioAnterior = tamanioActual
        }

        arregloAplanado = arreglo.flat(profundidad)
        profundidad++

        tamanioActual = arregloAplanado.length

    }while(tamanioAnterior != tamanioActual)

    return arregloAplanado
}

arregloAplanado = aplanadoraDeArreglos(arregloAnidado)

console.log(`Arreglo anidado : `,arregloAnidado)
console.log(`Arreglo aplanado : `, arregloAplanado)

// flatMap
let csv = ['indice,objeto,adjetivo','1,gato,bonito','2,taco,sabroso']
let valores = csv.flatMap(fila => fila.split(','))
console.log(`csv : `,csv)
console.log(`valores : `,valores)

// 4. Ordena un array de números de mayor a menor
let numerosDesordenados = [5,6,1,2,0,4,3]
let numerosMayorMenor = numerosDesordenados.sort((anterior,actual) => actual - anterior)
console.log(numerosMayorMenor)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let conjuntoUno = new Set(['perro','gato','perico','iguana'])
let conjuntoDos = new Set(['gato','tigre','conejo','loro'])

let union = new Set([...conjuntoUno,...conjuntoDos])
// console.log(`AUB : ${[...union]}`)

let interseccion = new Set([...conjuntoUno].filter((valor) => conjuntoDos.has(valor)))
// console.log(`AnB: ${[...interseccion]}`)

let diferenciaAB = new Set([...conjuntoUno].filter((valor) => !conjuntoDos.has(valor)))
// console.log(`A-B: ${[...diferenciaAB]}`)

let diferenciaBA = new Set([...conjuntoDos].filter((valor) => !conjuntoUno.has(valor)))
// console.log(`B-A: ${[...diferenciaBA]}`)

// 6. Itera los resultados del ejercicio anterior

console.log(`=== [AUB]`)
union.forEach((elemento)=> console.log(elemento))
console.log(`=== [AnB]`)
interseccion.forEach((elemento)=> console.log(elemento))
console.log(`=== [A-B]`)
diferenciaAB.forEach((elemento)=> console.log(elemento))
console.log(`=== [B-A]`)
diferenciaBA.forEach((elemento)=> console.log(elemento))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
let usuarios = new Map([
    ['1', { nombre: 'Usuario1', edad: 21, email: 'correo1@gmail.com' }],
    ['2', { nombre: 'Usuario2', edad: 22, email: 'correo2@gmail.com' }],
    ['3', { nombre: 'Usuario3', edad: 18, email: 'correo3@gmail.com' }],
    ['4', { nombre: 'Usuario4', edad: 16, email: 'correo4@gmail.com' }]
]);

console.log('=== [USUARIOS]')
usuarios.forEach((valor) => console.log(`- ${valor.nombre} tiene ${valor.edad} años`))

// 8. Dado el mapa anterior, crea un array con los nombres
let arregloNombres = []
usuarios.forEach((valor) => arregloNombres.push(valor.nombre))
console.log(arregloNombres) 

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let arregloEmails = []
usuarios.forEach((valor)=>{
    if(valor.edad >= 18){
         arregloEmails.push(valor.email)
    }
})
conjuntoEmails = new Set(arregloEmails)
console.log(conjuntoEmails)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto 
// en un mapa con clave el email de cada usuario y como valor todos los datos 
// del usuario

let objetoUsuarios = Object.fromEntries(usuarios)
console.log(objetoUsuarios)

let mapaUsuarios = new Map()
for(let clave in objetoUsuarios){
    
    mapaUsuarios.set(objetoUsuarios[clave].email,objetoUsuarios[clave])
}

console.log(mapaUsuarios)
