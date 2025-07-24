
/*log : imprimir info por consola*/
console.log(`Hola :D`)

/*error : imprimir mensajes de error */
console.error('Mensaje de error', new Error('El programa se murio'))

/*Warning :  advertencia*/
console.warn('Cuidado, esto es pegriloso')

/*Info : Muestra mensajes*/
console.info('Tip: toma agua')

/*Tabla : Muestra matrices en formato tabla*/
let gatos = [
    {nombre : 'Camila', color : 'Naranja'},
    {nombre : 'Camelia', color : 'Blanca'}

]
console.table(gatos)

/*Group : agrupa mensajes de consola*/
console.group('Camelia')
console.log('Pelaje blanco')
console.log('4 anios')
console.groupEnd()

/*Time : tiempo de ejecucion */
console.time('Tiempo de ejecución')
for(let indice = 0; indice < 10000; indice++){

}
console.timeEnd('Tiempo de ejecución')

/*Assert :  */
let valor = false
console.assert(valor, 'Tu valor es falso')

/*Count : Cuenta la cantidad de veces que se ha llamado */
console.count('Click')
console.count('Click')
console.count('Click')
console.count('Click')
console.countReset('Click')

/*Trace*/
function A(){
    B()
}
function B(){
    console.trace()
}

A()

/*Clear */
console.clear()