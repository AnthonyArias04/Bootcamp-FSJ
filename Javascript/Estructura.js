//ESTRUCTURAS DE CONTROL -> CONDICIONALES


//IF -> EVALUA CASOS VERDADEROS
//IF ELSE -> EVALUA CASOS VERDADEROS Y FALSOS

let condicion = 10 === "10";
if (condicion) {
    console.log('ESTE CODIGO SE EJECUTA EN CASO TRUE');
    
} else {
    console.log("ESTE CODIGO SE EJECUTA SI ES FALSE");
    
}



/*

    MAYOR QUE  >
    MENOR QUE  <
    MENOR O IGUAL   <=
    MAYOR O IGUAL   >=

*/

if (10 < 20) {
    console.log("AFIRMATIVO 104");
} else {
    console.log("MEGATIVO 3312");
    
}


//Operador Ternario -> ES UN REEMPLAZO DE SINTAXIS PARA EL IF ELSE
//CONDICION ? CODIGO TRUE : CODIGO FALSE

10 < 10 ? console.log("AFIRMATIVO CABALLO") : console.log("NEGATIVO MARIACHI");


//IF ELSE IF

let varableIF = 5
if (varableIF == 10) {
    console.log("AFIRMATIVO");
} else if (varableIF > 3) {
    console.log("Si es mayor");
} else {
    console.log("NO CUMPLIO LAS ESPECTATIVAS");
}

//USANDO DE UNA AMBAS OPCIONES
if (varableIF<10 && varableIF >=5) {
    console.log("Afirmativo");
} else {
    console.log("NEGATIVO");
    
}

let cadena = " anthonyarias.com "

if ("anthonyarias.com" == cadena.trim()) {
    console.log("Es true");
} else {
    console.log("Es false");
    
}



//ESTRUCTURAS REPETITIVAS O BUCLES

//WHILE -> MIENTRAS

while (nume<10) {
    console.log(nume);
    nume++;
}


//DO WHILE
// HACE MIENTRAS

let nume = 1
do {
    console.log(nume);
    nume++
}while(nume < 10 && nume>=2)
    
    
    
    
    //FOR (INICIALIZACION; CONDICION DE CORTE; INCREMENTO/DECREMENTO){CODIGO A EJECUTAR}
    
for (let nume = 10; nume > 0; nume--){
    console.log(nume);
    
}

// FASE 1 = INICIALIZACION + CONDICION DE CORTE + EJECUTAR + INCREMENTO/DECREMENTO
//FASE 2 = CONDICION DE CORTE + EJECUTAR + INCREMENTO/DECREMENTO


//ESTRUCTURAS DE DATOS COMPLEJAS

let variable1 = "Arias"

let fsj25 = ["Arias", "Valeria", "Jairo", "Karla", "Brayan"];

console.log(variableCompleja);
console.log(fsj25);


//METODOS DE ARRAYS - AGREGAR UN VALOR A UN ARRAY

let variableCompleja = [];
variableCompleja.push("Bootcamp");
variableCompleja.push(26);
console.log(variableCompleja);

//METODOS DE ARRAY - ELIMINAR UN VALOR A UN ARRAY

let datoEliminado = variableCompleja.pop()
console.log(variableCompleja);


//AGREGAR UN VALOR AL PRINCIPIO DE UN ARRAY
variableCompleja.unshift(50.5);
console.log(variableCompleja);

 //ELIMINA EL VALOR DE EL PRINCIPIO DEL ARRAY
 variableCompleja.shift();
 console.log(variableCompleja);

 //PROPIEDADES DE EL ARRAY
 //AVERIGUAR EL LARGO DE UN ARRAY

 console.log("-----LARGO DE UN ARRAY--------");
 
 let largor = variableCompleja.length
 console.log(largor);
  
 

 