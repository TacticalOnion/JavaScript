/*For*/
console.log("For normal")
for(let indice = 1; indice<=5; indice++){
    console.log(`${indice}/5`)
}

console.log("Recorrer arreglo")
let arreglo = [1,2,3,4,5]
for(let indice = 0; indice < arreglo.length; indice++){
    console.log(`${indice}/${arreglo.length}`)
}

/*While*/
let condicion = true
while(condicion){
    console.log("Soy un loop while")
    condicion = false
}

/*Do while*/
do{
    console.log("Soy un loop do-while")
    condicion = false
}while(condicion)

/*For of*/
let conjunto = new Set(["Elemento 1", "Elemento 2", "Elemento 3"])
let diccionario = new Map([
    [1,"Uno"],
    [2,"Dos"],
    [3,"Tres"]
])
let string = "Texto"

console.log("For of arreglo")
for(let valor of arreglo){
    console.log(valor)
}

console.log("For of conjunto")
for(let valor of conjunto){
    console.log(valor)
}

console.log("For of diccionario")
for(let valor of diccionario){
    console.log(valor)
}

console.log("For of string")
for(let valor of string){
    console.log(valor)
}

console.log("Break y continue")
/*Break y continue*/
for(let indice = 1; indice <=10; indice++){
    if(indice == 1 ){
        continue
    }
    if(indice == 5){
        break
    }
    console.log(`${indice}/10`)
}
