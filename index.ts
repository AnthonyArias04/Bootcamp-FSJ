//Programacion Orientada a Objetos
//Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos

//Conceptos principales de POO -> Clases y los objetos 
//Clases -> Molde para generar algo.
//Objeto -> Lo que podemos crear a base de ese molde.

//DECLARACION DE CLASES

class   Auto{
    //Pensar primero en las caracteristicas generales de todos los autos -> SE LE LLAMA: Propiedades o Atributos

    numChasis: number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    cantidadKilometro:string;
    cantPasajros:number;
    frenos:string;
    modelo:string;
    añoFab: number;

    //Metodos -> Acciones
    encender():void {
        console.log("brum re brum");
        
    }
    apagar():void{
        console.log("Chaito");
        
    }

    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
constructor(numChasisParam:number, motorParam:string) {
    this.numChasis = numChasisParam;
    this.motor = motorParam;
}

}

//Instanciar objetos a traves de una clase -> Crear un objeto

let autito:Auto = new Auto(145671, "V4");

console.log(autito);

//Asignamos una propiedad al objeto
autito.modelo = "Tesla";

console.log(autito);

