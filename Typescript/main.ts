//Declaracion de variable en JS
let variable = "Jairo"

//Declaracion de variable + TIPO DE DATOS EN TS
let cadenaTexto: string = "Anthony";
let numero: number = 1;
let booleano: boolean = false;

//Declaracion de un array
let arraycito: String[] = ["asd", "lala", "pte"];
let arrayNumero: number[] = [11, 24, 65, 78, 55.6]

//NUNCA UTILIZAR ESTO
let arrayMalo:any[] = ["asd", 24, false];

//Array numerico o string
let arrayNumString: number[] | string[] =["AD"]

//Declaracion de tuplas
//Es un array con indices limitados y con sus tipo de dato declarado previamente
let datosusuarios:[string, number];
datosusuarios = ["Jairo", 75]
datosusuarios[1];

//Funciones en TS
function tipoVoid():void{
    console.log("Chauchis");
}

function sumar(): number{
    return 2+2;
}

function sumarOConcatenar(): number | string{
    return 3+5;
}

//Funciones con parametros
function hola(nombre:string):string{
    console.log("Hola como estas");
    //Template string -> Plantillas literales -> Ingresar un dato de JS en un STRING
    //"HOLA COMO ESTAS?"+nombre;
    return `Hola como estas? ${nombre}`
}

console.log("Holiwias");
