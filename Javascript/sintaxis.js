console.log("HOLIWIS IMPRIMIMOS EN LA CONSOLA");

// ----------OPERADORES MATEMATICOS----------

let suma = 2 + 2;
let resta = 5 - 3;
let division = 500 / 5;
let multiplicacion = 1354 * 1356;
let residuo = 528 % 10;

console.log(suma);
console.log(resta);
console.log(division);
console.log(multiplicacion);
console.log(residuo);

// CONCATENACION -> UNIR DOS VALORES QUE TIENEN QUE SER EL DATO DE TIPO (STRING)
//Al unir dos valores y cualquiera de los dos es un string transformara todo a string EJEMPLO:

let sumaFalsa = 2 + "2";
console.log(sumaFalsa);

// --------- OPERADORES LOGICOS -----------
// EJECUTAMOS COMPARACIONES PUEDEN SER DE IGUALDAD O DESIGUALDAD

let igualdad = 10 == "10";
console.log(igualdad);

// IGUALDAD ESTRICTA === COMPARA EL VALOR DE LAS COSAS Y SUS TIPOS DE DATOS

let igualdadEstricta = 10 === "10";
console.log(igualdadEstricta);

// DESIGUALDAD != COMPARAMOS QUE LOS VALORES SON DIFERENTES

let desigualdad = 10 != "10";
console.log(desigualdad);

let desigualdadEstricta = 10 !== "10";
console.log(desigualdadEstricta);

let operadorAND = 10 == "10" && 10 === "10";
console.log(operadorAND);

let operadorOR = 10 == "10" || 10 === "10";
console.log(operadorOR);



//Funciones

//una funcion es una porcion de codigo que hace algo en concreto
//Ventaja -> SE VUELVE REUTILIZABLE

//Declaracion de funcion
//ESPRESADO:
function nombreFuncion(){
    console.log("Hola te saludo desde la funcion");
    
}

//Las funciones son llamadas para ejecutarlas
nombreFuncion();

//TIPOS DE FUNCIONES
//Tipo Void -> vacio
function tipoVoid(){
console.log("Soy una funcion tipo void");
}

tipoVoid();
console.log(tipoVoid());

//Tipo Return -> Devuelve el valor
function tipoReturn() {
    console.log("Holiwis como andas?");
    
    return "Soy una funcion return"
}

tipoReturn();
console.log(tipoReturn());

//DIFERENCIA ENTRE LAS FUNCIONES VOID Y RETURN
let ejecucion2 = tipoReturn();
console.log(ejecucion2);
let ejecucion1 = tipoVoid();
console.log(ejecucion1);



//FUNCIONES CON PARAMETROS -> FUNCIONES QUE TRABAJAN CON DATOS QUE VIENEN DE FUERA
//NaN ES NO ES UN NUMERO

function sumar(num1,num2) {
    return num1+num2;
}

let resultado = sumar(15,5);
console.log(resultado);



//FUNCION FLECHA DECLARACION:

/*
SE EXPRESA DE LA SIGUIENTE MANERA:
CONSTANTE nombreFuncion asignamos flecha llaves CODIGO A EJECUTAR
const       funcionFlecha       =           ()          =>          {           log            }
*/
const funcionFlecha = (num1, num2) => {
    return num1 - num2;
}

//callback => RECIBE UNA FUNCION PARA PONERLA A EJECUTAR
function funcionCallback(arias) {
    //RECIBI UNA FUNCION POR LO TANTO LA EJECUTO
    arias()
}
 

function funcionAuxiliar() {
    console.log("Estoy funcionando pero desde el callback");
}

funcionCallback(funcionAuxiliar);

//Funcion Callback von funcion Flecha ANONIMA

funcionCallback( () => { console.log("Te saludo desde la funcion flecha anonima");
});

funcionCallback( function() {console.log("Holiwis desde la funcion ANONIMA EXPRESADA");
})

