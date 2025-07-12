/*
var
    * scope : función
    * re-declarar : ✅
    * re-asignación : ✅
    * hoisting : ✅ pero inicializada con `undefined`
*/

var hellowWorldVar = "Hola mundo con var"

/*
let
    * scope : bloque
    * re-declarar : ❌
    * re-asignación : ✅
    * hoisting : ✅ no se puede usar antes de declarar
*/

let helloWorldLet  = "Hola mundo con let"

/*
const
    * scope : bloque
    * re-declarar : ❌
    * re-asignación : ❌ debe asignarse al declararse
    * hoisting : ✅ pero acceso antes lanza error
    * inmutabilidad : ✅
*/

const helloWorldConst = "Hola mundo con const"