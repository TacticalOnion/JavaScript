import { lstat } from "fs";
import { saludar , nombre, alias, Gatito} from "./28-exportar-modulos.js"; // Necesita el package.json
// import { saludar } from "./28-exportar-modulos.mjs" // Solo disponible en node
import adios from "./28-exportar-modulos.js"; // Exporta la funcion por defecto y le cambia el nombre (saludar())

/*Importar funcion y valores*/
saludar(nombre,alias)

/*Importacion por defecto*/
adios()

/*Importar clases*/
let gatito = new Gatito('Camila')
gatito.ronronear()

// import {Clase} from "./clases/clase.js" // importar desde otro directorio

/*Importar modulos externos*/
//const os = require("os")

//console.log(os.platform())

