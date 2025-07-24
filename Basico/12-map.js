/*
Map 
Es un diccionario de elementos clave-valor
*/

let mapa = new Map([ // Inicializar mapa
    [1,"Palabra 1"],
    [2,"Palabra 2"],
    ["Tres", 3],
    [true, "Verdadero"]
])

mapa.set(false,"Falso") // Agregar elementos
mapa.get(true) // Accede al elemento mediante la clave
mapa.delete(true) // Elimina elemento
mapa.clear() // Limpia todo el mapa
mapa.keys() // Lista las claves
mapa.values() // Lista los valores
mapa.size // Muestra el tamanio del mapa
mapa.entries // Lista claves y valores