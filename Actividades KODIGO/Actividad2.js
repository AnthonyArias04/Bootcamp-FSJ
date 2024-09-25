function ingresandoEdad() {

    let edad = prompt("Ingresa tu edad: ");
    edad= Number(edad)
    

    if (edad => 18){
        console.log("Es mayor de edad");
    }
        else{
            console.log("Es menor de edad");
            
        }
        
    
}

const readline = require('readline');

// Crear una interfaz para la entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para verificar si la persona es mayor o menor de edad
function verificarEdad(edad) {
    return (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
}

// Pedir al usuario que ingrese su edad
rl.question("¿Cuál es tu edad? ", (respuesta) => {
    const edad = parseInt(respuesta); // Convertir la respuesta a un número
    if (isNaN(edad)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        const mensaje = verificarEdad(edad);
        console.log(mensaje);
    }
    rl.close(); // Cerrar la interfaz
});
