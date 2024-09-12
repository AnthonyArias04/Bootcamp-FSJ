//Programacion Orientada a Objetos
//Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
//Conceptos principales de POO -> Clases y los objetos 
//Clases -> Molde para generar algo.
//Objeto -> Lo que podemos crear a base de ese molde.
//DECLARACION DE CLASES
var Auto = /** @class */ (function () {
    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
    function Auto(numChasisParam, motorParam, colorParam, tipoCombustibleParam, transmisionParam, cantidadKilometroParam, cantPasajerosParam, frenosParam, modeloParam, anioFabParam) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCombustibleParam;
        this.transmision = transmisionParam;
        this.cantidadKilometro = cantidadKilometroParam;
        this.cantPasajeros = cantPasajerosParam;
        this.frenos = frenosParam;
        this.modelo = modeloParam;
        this.anioFab = anioFabParam;
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
var autito = new Auto(145671, "V4", "Negro", "Super", "Automatica", "300 km/h", 6, "Frenos de disco", "Audi", 2025);
console.log(autito);
//Asignamos una propiedad al objeto
autito.modelo = "Tesla";
console.log(autito);
autito.modelo = "Tesla";
console.log(autito);
