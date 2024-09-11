//Declaracion de variable en JS
var variable = "Jairo";
//Declaracion de variable + TIPO DE DATOS EN TS
var cadenaTexto = "Anthony";
var numero = 1;
var booleano = false;
//Declaracion de un array
var arraycito = ["asd", "lala", "pte"];
var arrayNumero = [11, 24, 65, 78, 55.6];
//NUNCA UTILIZAR ESTO
var arrayMalo = ["asd", 24, false];
//Array numerico o string
var arrayNumString = ["AD"];
//Declaracion de tuplas
//Es un array con indices limitados y con sus tipo de dato declarado previamente
var datosusuarios;
datosusuarios = ["Jairo", 75];
datosusuarios[1];
//Funciones en TS
function tipoVoid() {
    console.log("Chauchis");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 3 + 5;
}
//Funciones con parametros
function hola(nombre) {
    console.log("Hola como estas");
    //Template string -> Plantillas literales -> Ingresar un dato de JS en un STRING
    //"HOLA COMO ESTAS?"+nombre;
    return "Hola como estas? ".concat(nombre);
}
console.log("Holiwias");
