/*[ARREGLOS AVANZADOS] --------------------------------------------------------------*/
/*[ARREGLOS] Metodos funcionales ----------------------------------------------------*/
/*  Los metodos funcionales son funciones de orden superior
    por que reciben una funcion y devuelven una funcion. 
*/
/* for - each 
    Accede a cada valor 
*/
let numeros = [10,20,30]

numeros.forEach(valor => console.log(valor))

/* map 
    Retorna un arreglo tratando cada valor
*/
numerosPorDiez = numeros.map(valor => valor*10)

console.log(numeros)
console.log(numerosPorDiez)

/* filter 
    Retorna un arreglo con los valores que cumplan una condicion
*/
let nombres = ['Pepe','Pedro','Pablo','Sospechoso']
let sospechoso = nombres.filter(nombre => nombre == 'Sospechoso')
console.log(sospechoso)
nombres.pop(sospechoso)

/* reduce 
    Retorna los valores que resultan de 
    utilizar el valor previo y actual de un arreglo
*/
let saludo = nombres.reduce((previo,actual) => previo + ' ' + actual)
console.log(`Hola ${saludo}`)

/*[ARREGLOS] Manipulación -----------------------------------------------------------*/

/*Flat
    Aplana un arreglo con una profundidad especifica
*/

let arregloAnidado = ['Primer nivel',1,2,['Segundo nivel',3,4,['Tercer nivel',5,6]]]
console.log(arregloAnidado)
let arregloAplanado = arregloAnidado.flat(2)
console.log(arregloAplanado)
console.log(`Arreglo anidado tamanio : ${arregloAnidado.length}`)
console.log(`Arreglo aplanao tamanio : ${arregloAplanado.length}`)

/*FlatMap
    Aplana un arreglo que cumplen una condicion 
*/

let csv = ['1;Gato bonito','2;Taco grasoso']
let valores = csv.flatMap(fila => fila.split(','))
console.log(valores)

/*Sort
    Ordena un arreglo en base a un criterio de ordenacion
*/

let numerosDesordenados = [6,2,5,1,3,4]
console.log(`Desordenados : ${numerosDesordenados}`)

let numerosMenorAMayor = numerosDesordenados.sort((a,b) => a - b)
console.log(`Menor a mayor : ${numerosMenorAMayor}`)

let numerosMayorAMenor = numerosDesordenados.sort((a,b) => b - a)
console.log(`Mayor a menor : ${numerosMayorAMenor}`)

/* Reverse
    Ordena al reves un arreglo
*/
let letras = ['c','d','a','b']
console.log(letras)
letras.sort()
console.log(letras)
letras.reverse()
console.log(letras)

/* Includes
    Busca si existe un elemento o no en un arreglo
*/
let elementoABuscar = 'b'
console.log(`${elementoABuscar} esta en el arreglo : `,letras.includes(elementoABuscar))

/* Find
    Busca el primer elemento que cumple una condicion
*/

let arregloNumeros = [11,22,31,41,50,70]
let primerMultiploDiez = arregloNumeros.find(numero => numero % 10 == 0)
console.log(primerMultiploDiez)

/* FindIndex
    Devuelve el indice del primer elemento que 
    cumple una condicion
*/

let indiceMultiploTres = arregloNumeros.findIndex(numero => numero % 3 == 0)
console.log(indiceMultiploTres)

/*[SET AVANZADOS] --------------------------------------------------------------------------*/
/*[SET] Operaciones ----------------------------------------------------------------------- */
// Eliminar duplicados
let arregloGatos = ['gato negro','gato naranja','gato gris','gato naranja']
let arregloGatosSinDuplicados = [...new Set(arregloGatos)]
console.log(arregloGatosSinDuplicados)

// Union
let conjuntoA = new Set([1,2,3])
let conjuntoB = new Set([5,6,3])
console.log(`A : ${[...conjuntoA]}`)
console.log(`B : ${[...conjuntoB]}`)

let union = new Set([...conjuntoA,...conjuntoB])
console.log(`AUB : ${[...union]}`)

// Interseccion
let interseccion = new Set([...conjuntoA].filter(elemento => conjuntoB.has(elemento)))
console.log(`AnB: ${[...interseccion]}`)

// Diferencia 
let diferenciaAB = new Set([...conjuntoA].filter(elemento => !conjuntoB.has(elemento)))
console.log(`A-B: ${[...diferenciaAB]}`)


let diferenciaBA = new Set([...conjuntoB].filter(elemento => !conjuntoA.has(elemento)))
console.log(`B-A: ${[...diferenciaBA]}`)

// Conversion
// Conjunto a arreglo
let arregloA = [...conjuntoA]
console.log(`Arreglo A : ${arregloA}`)

/*[SET] Iteraciones ----------------------------------------------------------------------- */

// for each
console.log('Elementos del conjunto A : ')
conjuntoA.forEach(elemento => console.log(elemento))

/*[MAPAS AVANZADOS] --------------------------------------------------------------*/
/*[MAPAS] Iteracion  ----------------------------------------------------*/
let mapaGatuno = new Map([
    ['nombre','camila'],
    ['edad',14],
    ['color','naranja']
])

console.log(mapaGatuno)
console.log('Datos de camila : ')
mapaGatuno.forEach((valor, clave) => console.log('*',clave,'-',valor))

// Conversion
// Mapa a arreglo
let arregloGatuno = Array.from(mapaGatuno)
console.log(arregloGatuno)

// Mapa a objeto
let objetoGatuno = Object.fromEntries(mapaGatuno)
console.log(objetoGatuno)

// Objeto a mapa
let mapaGatuno2 = new Map(Object.entries(objetoGatuno))
console.log(mapaGatuno2)