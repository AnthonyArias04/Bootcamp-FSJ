console.log("HOLIWIS");


//Agarrar un elemento del DOM
let elementoDOM = document.getElementById('saludos');
console.log(elementoDOM);

//Propiedades mas utilizadas
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);


elementoDOM.innerText = "Te cambie desde el JS"

elementoDOM.innerHTML = "<span>Te cambien otra vez XD</span>"



//AGARRAR OTRO ELEMENTO HTML

const contenido = document.querySelector("#content")


contenido.innerHTML = "<h1> Ingresando desde JS </h1>"
console.log(contenido);

/*
EJERCICIO:
REALIZA UNA FUNCION QUE RECIBA UN ARRAY NUMERICO Y RETORNE COMPLETAMENTE NUEVO 
SOLAMENTE CON LOS NUMEROS QUE SEAN MULTIPLOS DE 3 Y QUE LA SUMA DE TODOS SUS NUMEROS DE MENOS DE 100

*/

//AGARRAMOS EL BOTON
const dinamismo = document.querySelector("#boton")

dinamismo.addEventListener("click", () => {
        alert("Avada Kedavra");
        console.log("Despues del alert");
        
})



function apretandoBoton(){
        let nombre = prompt("Ingresa tu nombre")
        alert(nombre)
}

function cambiandoInput(e){
        console.log(e.target.value);
        
        console.log("Cambie");
}  
