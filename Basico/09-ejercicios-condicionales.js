// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Pablo"
console.log(`${nombre == "Pablo" ? `Tu nombre es ${nombre}` : "Tu nombre no es Pablo"}`)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const usuario = "Usuario"
const contrasenia = "123"

if(usuario == "Usuario" && contrasenia == "123"){
    console.log("Acceso permitido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -1
if(numero > 0 ){
    console.log("El numero es positivo")
}else if(numero < 0){
    console.log("El numero es negativo")
}else{
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edad = 19
if(edad >= 18){
    console.log("Puedes votar")
}

if(edad < 18 && edad >= 0){
    console.log(`No puedes votar, te falta ${18-edad} años para votar`)
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const etapaDeVida = edad >= 18 ? "Mayor" : "Menor"
console.log(`Etapa de vida : ${etapaDeVida}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1
let estacion

if(mes >= 3 && mes <= 5){
    estacion = "Primavera"
}

if(mes >= 9 && mes <= 11){
    estacion = "Otoño"
}

if(mes >= 6 && mes <= 8){
    estacion = "Verano"
}

if(mes == 12 || mes == 1 || mes == 2){
    estacion = "Invierno"
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let numeroDias
if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    numeroDias = 31
}

if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
    numeroDias = 30
}

if(mes == 2 ){
    numeroDias = 28
}

console.log(`El numero de dias de ${mes} es : ${numeroDias}`)

// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "espaniol"
let saludo
switch(idioma){
    case "espaniol":
        saludo = "Hola"
        break
    case "english":
        saludo = "Hi"
        break       
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  case 12:
  case 1:
  case 2:
    estacion = "Invierno";
    break;
  default:
    estacion = "Mes inválido";
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    numeroDias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    numeroDias = 30;
    break;
  case 2:
    numeroDias = 28;
    break;
  default:
    numeroDias = "Mes inválido";
    break;
}
