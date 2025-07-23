/*Desestructuración
    Extraer valores de objetos o arreglos y asignarlos 
    a variables individuales
*/

let arreglo = [1,2,3]

let objeto = {
    nombre: "Pepe",
    clase: "real"
}

let arregloValorUno = arreglo[0]
console.log(`Primer valor del arreglo: ${arregloValorUno}`)

let objetoNombre = objeto.nombre
console.log(`Nombre del objeto : ${objetoNombre}`)

/*Desestructurar arreglo*/

let [valorUno, valorDos, valorTres , valorCuatro = 'valor por defecto'] = arreglo
console.log(`Valores : ${valorUno},${valorDos},${valorTres},${valorCuatro}`)

let [primerValor, ,ultimoValor] = arreglo
console.log(`Primer valor : ${primerValor}, y ultimo valor : ${ultimoValor}`)

/*Desestructurar objetos
    Los objetos solo se pueden desestructurar con los nombres
    de los atributos de los objetos. 
*/
let {nombre, clase} = objeto
console.log(`Nombre: "${nombre}" y clase "${clase}"`)

/*Alias*/
let {nombre: nombreOtraVez} = objeto
console.log(`Otra vez ${nombreOtraVez}`)

/*Spreading (...)*/
/*Arreglos*/
let arregloDos = [...arreglo]
console.log(`Arreglo dos : ${arregloDos}`)

let arregloTres = [4,5,6]
let arregloDosYTres = [...arregloDos, ...arregloTres]
console.log(`Arreglo dos y tres ${arregloDosYTres}`)

/*Objetos*/

let persona = {
    nombre : "pepe",
    edad : 21
}

let persona2 = {... persona, deporte:"futbol"}
console.log(persona2)