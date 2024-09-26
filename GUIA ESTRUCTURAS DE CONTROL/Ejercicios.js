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



function notaFinal(){
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

notaFinal()

