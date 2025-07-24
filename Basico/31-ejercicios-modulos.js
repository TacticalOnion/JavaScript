// 4. Importa una función
// 5. Importa una constante
// 6. Importa una clase
import funcionPorDefecto, { funcion, constante,Clase } from "./31-ejercicios-modulos-exportar.js";
funcion()
console.log(constante)
Clase.presentar()


// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// funcionPorDefecto()
funcionPorDefecto()



// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { funcionExterna, constanteExterna, ClaseExterna } from "./ModulosExternos/modulo-externo.js";

funcionExterna()
console.log(constanteExterna)
ClaseExterna.presentar()