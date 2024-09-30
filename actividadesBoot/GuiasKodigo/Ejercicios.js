/*EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. 
Utilizar para la condición el operador ternario.

function edades(){
    let edad = Number;
    edad = prompt("Introduzca su edad: ")

    if(edad > 17){
        console.log("Es mayor de edad");
    }else{
        console.log("Es menor de edad! ");
        
    }
}

edades()*/


//--------------------------------------------------------------------------------------------------------------



/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:

Examen =20%

tareas = 40%

asistencia = 10%

investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/



/*function notaFinal(){
    let nombre, carnet=Number;
    let exa =Number, tar=Number, asis=Number, inves=Number, notaFi=Number;

    console.log("Programa de calculo de notas.");
    

    nombre = prompt("Digite el nombre de el alumno: ")
    carnet = prompt("Digite su carnet: ")
    exa = prompt("Digite la Nota de examen equivalente al 20%")
    tar = prompt("Digite la Nota de la tarea equivalente al 40%")
    asis = prompt("Digite la Nota de la asistencia equivalente al 10%")
    inves = prompt("Digite la Nota de investigacion equivalente al 30%")

    exa =  exa * 0.2
    tar = tar * 0.40
    asis = asis * 0.10
    inves = inves * 0.30

    notaFi = exa + tar + asis + inves;

    console.log("El alumno " + nombre + " con carnet " + carnet + " tiene de nota final: " + notaFi);
    
}

notaFinal()*/



//-------------------------------------------------------------------------------------------------------------------------
/*Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.*/

/*let nombre, salario, categoria, aumento;

nombre = prompt("Escriba el nombre de el empleado: ")
categoria = prompt("Escriba la categoria de el empleado las cuales son: \nA \nB \nC \nD");
let mayuscula = categoria.toUpperCase

if (categoria == "A"){
    console.log("Eres un empleado categoria A \nTu salario es de $500");
    
    aumento = 0.15 * 500;
    salario = aumento + 500;
}else if(categoria == "B"){
    console.log("Eres un empleado categoria B \nTu salario es de $900");

    aumento = 0.30 * 900;
    salario = aumento + 900
}else if(categoria == "C"){
    console.log("Eres un empleado tipo C \nTu salario es de $300");

    aumento = 0.10 * 300;
    salario = aumento + 300;
}else{
    console.log("Eres un empleado tipo D \nTu salario es $400");

    aumento = 0.20 * 400;
    salario = aumento + 400;
    
}

console.log("Estimado/a " + nombre + " su aumento salarial equivale a: " + aumento + " \nPor lo tanto su salario sera de $"+ salario);*/



//---------------------------------------------------------------------------------------------------------------------------------


/*Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.*/

/*function numerosEnteros(){
    let numeroA, numeroB;

    numeroA = prompt("Ingrese el primer numero: ")
    numeroB = prompt("Ingrese el segundo numero: ")

    if (numeroA> numeroB){
        console.log("El primer numero es mayor!! ");
        
    }else {
        console.log("El segundo numero es mayor!! ");
        
    }
}

numerosEnteros()*/


//----------------------------------------------------------------------------------------------------------------------------------------------------
/*Realizar una función para una tienda de coches en donde se deberá calcular: Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario.*/

/*function descuentoCar(){
    
    let coche, descuento, compra;

    coche = prompt("Elige uno de nuestros coches: \nFORD FIESTA \nFORD FOCUS \nFORD ESCAPE")

    switch(coche){
        case "FORD FIESTA":
            compra = 10000
            descuento = compra * 0.05;
            compra = descuento + compra
            break

        case "FORD FOCUS":
            compra = 20000
            descuento = compra * 0.05;
            compra = descuento + compra
            break

        case "FORD ESCAPE":
            compra = 30000
            descuento = compra * 0.20;
            compra = descuento + compra
            break
    }

    console.log("Su auto elegido es: " + coche + " y el descuento a recibir es de: " + descuento + " EL TOTAL DE SU COMPRA ES:" + compra);
    
}

descuentoCar()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.*/

/*function viajes(){
    
    let destino, descuento;



    destino = prompt("Cual sera tu destino turistico? \nCOSTA DEL SOL \nPANCHIMALCO \nPUERTO EL TRIUNFO").toUpperCase();
  
    if (destino == "COSTA DEL SOL"){
        descuento = "5%"
        console.log('Su descuento es de el: ' + descuento);
        
    }else if(destino == "PANCHIMALCO"){
        descuento = "10%";
        console.log('Su descuento es de el: ' + descuento);

    }else if(destino =="PUERTO EL TRIUNFO"){
        descuento = "15%"
        console.log('Su descuento es de el: ' + descuento);
    }else{
        console.log("Lo sentimos su destino no aplica descuento");
        
    }
        
}

viajes()*/



//-------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
•
La cantidad de valores negativos ingresados.
•
La cantidad de valores positivos ingresados.
•
La cantidad de múltiplos de 15.
•
El valor acumulado de los números ingresados que son pares.*/


/*function valores(){
let cantidadNegativos = 0;
let cantidadPositivos = 0;
let cantidadMultiplos15 = 0;
let sumaPares = 0;

// Cargamos 10 valores
for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt(`Ingrese el valor entero ${i + 1}:`));
    
    // Contamos los negativos y positivos
    if (valor < 0) {
        cantidadNegativos++;
    } else if (valor > 0) {
        cantidadPositivos++;
    }
    
    // Contamos los múltiplos de 15
    if (valor % 15 === 0) {
        cantidadMultiplos15++;
    }
    
    // Acumulamos los números pares
    if (valor % 2 === 0) {
        sumaPares += valor;
    }
}
console.log(`Cantidad de valores negativos: ${cantidadNegativos}`);
console.log(`Cantidad de valores positivos: ${cantidadPositivos}`);
console.log(`Cantidad de múltiplos de 15: ${cantidadMultiplos15}`);
console.log(`Suma de los números pares: ${sumaPares}`);

}

valores()*/


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario*/

/*let multi, num;
num = parseInt(prompt("Elige una tabla de multiplicar entre la del 1 al 10: "))

for (i=1; i<=10;i++){
    console.log(num + "x" + i + "=" + num*i);
    
}   */


    //------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”*/

/*let temperatura, faren;

temperatura = parseInt(prompt("Digite la temperatura C°: "));
faren = temperatura * 9 / 5 + 32;
console.log(faren);


if (faren >= 14 && faren <= 32){
    console.log("Temperatura baja");
} else if(faren > 32 && faren <= 68 ){
    console.log("Temperatura adecuada");   
} else if (faren > 68 && faren < 96) {
    console.log("Temperatura alta");
    
    
}else{
    console.log("error");

}*/



/*let temperaturaCelsius, temperaturaFahrenheit;

// Solicitar la temperatura en Celsius
temperaturaCelsius = parseInt(prompt("Digite la temperatura en Celsius: "));

// Convertir la temperatura a Fahrenheit
temperaturaFahrenheit = temperaturaCelsius * 9 / 5 + 32;
console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit}`);

if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit <= 32) {
    console.log("Temperatura baja");
} else if (temperaturaFahrenheit > 32 && temperaturaFahrenheit <= 68) {
    console.log("Temperatura adecuada");
} else if (temperaturaFahrenheit > 68 && temperaturaFahrenheit < 96) {
    console.log("Temperatura alta");
} else {
    console.log("Temperatura desconocida");
}*/



//---------------------------------------------------------------------------------------------------------------------------------------------------------------
/*EJERCICIO 10:
Se cuenta con la siguiente información:
•
Las edades de 5 estudiantes del turno mañana.
•
Las edades de 6 estudiantes del turno tarde.
•
Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
•
Obtener el promedio de las edades de cada turno (tres promedios).
•
Imprimir dichos promedios (promedio de cada turno).
•
Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor.*/


function calcularPromedio(edades) {
    let suma = edades.reduce((a, b) => a + b, 0);
    return suma / edades.length;
}


function obtenerEdades(cantidad, turno) {
    let edades = [];
    for (let i = 0; i < cantidad; i++) {
        let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno ${turno}:`));
        edades.push(edad);
    }
    return edades;
}


let edadesManana = obtenerEdades(5, "mañana");
let edadesTarde = obtenerEdades(6, "tarde");
let edadesNoche = obtenerEdades(11, "noche");


let promedioManana = calcularPromedio(edadesManana);
let promedioTarde = calcularPromedio(edadesTarde);
let promedioNoche = calcularPromedio(edadesNoche);


console.log(`Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}`);
console.log(`Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}`);
console.log(`Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}`);


if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
    console.log("El turno mañana tiene el mayor promedio de edades.");
} else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
    console.log("El turno tarde tiene el mayor promedio de edades.");
} else {
    console.log("El turno noche tiene el mayor promedio de edades.");
}