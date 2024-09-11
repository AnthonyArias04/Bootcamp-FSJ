//Programacion Orientada a Objetos
//Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
//Conceptos principales de POO -> Clases y los objetos 
//Clases -> Molde para generar algo.
//Objeto -> Lo que podemos crear a base de ese molde.
//DECLARACION DE CLASES
var Auto = /** @class */ (function () {
    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
    function Auto(numChasisParam, motorParam) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
    }
    //Metodos -> Acciones
    Auto.prototype.encender = function () {
        console.log("brum re brum");
    };
    Auto.prototype.apagar = function () {
        console.log("Chaito");
    };
    return Auto;
}());
//Instanciar objetos a traves de una clase -> Crear un objeto
var autito = new Auto(145671, "V4");
console.log(autito);
//Asignamos una propiedad al objeto
autito.modelo = "Tesla";
console.log(autito);
