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

/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
•
La cantidad de valores negativos ingresados.
•
La cantidad de valores positivos ingresados.
•
La cantidad de múltiplos de 15.
•
El valor acumulado de los números ingresados que son pares.*/

function valores (array){
    let numeros = []
    let negativos =0, positivos = 0, multiquin = 0, acumulapar = 0;

    for (i = 0; i<10; i++){
        let num = parseInt(prompt("Ingrese 10 numeros enteros (" + (i +1) + "de 10"))
        numeros.push(num)
    }
}