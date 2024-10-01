/*Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*class cabeceraPagina{
    private titulo:string;
    public color:string;
    private fuente: string;
    public alineacion:string;

    constructor(tituloParam: string, colorParam: string, fuenteParam: string, alineacionParam: string){
        this.titulo= tituloParam;
        this.color= colorParam;
        this.fuente= fuenteParam;
        this.alineacion = alineacionParam
    }

    estrucPagina(){
        return{
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        }
    }

    ubicaTexto(){
        const texto = ["izquierda", "centro", "derecha"]
        console.log('Indique como saldra el texto:', texto);
    }

    propiedades(){
        console.log("Titulo: $this.titulo}");
        console.log("Color: $this.color}");
        console.log("Fuente: $this.fuente}");
        console.log("Alineacion: $this.Alineacion}");

    }
    
    
}

let pagina = new cabeceraPagina ("Las estrellas de Van Goo", " Celeste", "Arial", "Centro")

console.log(pagina);*/
//-----------------------------EJERCICIO 2-------------------------------------------------------------------
/*Crear una clase Calculadora que contendrá los siguientes métodos:
•
Sumar
•
Restar
•
Multiplicar
•
Dividir
•
Potencia
•
Factorial*/
/*class Calculadora{
    
    sumar(a,b){
        return a+b
    }
    restar(a,b){
        return a-b
    }
    multi(a,b){
        return a*b
    }
    dividir(a,b){
        return a/b
    }
    potencia(a,b){
        return Math.pow(a,b)
    }
    factor(a){
        
        if (a<0){
            console.log("Error un numero factorial no puede ser menor que 0");
        }
        if (a == 0 || a == 1){
            return 1
        }
        let cont = 1
        for(let i =2; i<=a; i++){
            cont *=i
        }
        return cont
    }
}

let calcu = new Calculadora

console.log("Suma (5,10): ",calcu.sumar(5,10));
console.log("restar (5,10): ",calcu.restar(5,10));
console.log("multi (5,10): ",calcu.multi(5,10));
console.log("dividir (5,10): ",calcu.dividir(5,10));
console.log("Potencia (5,10): ",calcu.potencia(5,10));
console.log("Factor (10): ",calcu.factor(10));*/
//----------------------------------------EJERCICIO 3.------------------------------------------------------------------------------------ 
/*Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
•
Crear un constructor que reciba como parámetros el título y género de la canción.
•
Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
•
Crea un método para mostrar los datos de la canción.*/
/*class cancion{
    public titulo: string
    public genero: string
    private autor: string

    constructor(tituloParam:string, generoParam:string, autorParam:string){
        this.autor= autorParam;
        this.genero=generoParam;
        this.titulo=tituloParam;
    }

    parameCancion(){
        return{
        Titulo: this.titulo,
        Genero: this.genero,
        Autor: this.autor
    }
    }
    setAutor(   ){
        return this.autor
    }
    getAutor(){
        return this.autor
    }
    datosCan(){

        console.log("Titulo: $this.titulo}");
        console.log("Genero: $this.genero}");
        console.log("Autor: $this.autor}");
        
        
    }
}

let cancioncita = new cancion ("Billionare", "Pop", "Bruno Mars")
console.log(cancioncita);
cancioncita.getAutor
cancioncita.datosCan*/
//--------------------------------------EJERCICIO 4-----------------------------------------------------------------------
/*Crea una clase llamada Cuenta y va contener lo siguiente:

Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
•
Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
•
Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
•
Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
•
Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
•
Define un objeto de la clase Cuenta y llama sus métodos.*/
/*class cuenta{
    public nombre:string
    public cantidad:number
    public tipoCuenta: string
    public numeroCuenta: string

    constructor(nombreParam:string, cantidadParam:number, tipoCuentaParam:string, numeroCuentaParam:string) {
        this.nombre=nombreParam
        this.cantidad=cantidadParam
        this.tipoCuenta=tipoCuentaParam
        this.numeroCuenta=numeroCuentaParam
    }

    depositar(a){
        if(a<5.00){
            console.log("El valor a depositar debe ser mayor a 5.00");
        }else{
            this.cantidad += a
            console.log(`Se ha depositado correctamente el $${a}`);
        }
    }
    retirar(valor) {
        if (valor > this.cantidad) {
          console.log("No hay suficiente dinero en la cuenta.");
        } else if (valor < 5.00) {
          console.log("El monto a retirar debe ser mayor a $5.00.");
        } else {
          this.cantidad -= valor
          console.log(`Has retirado $${valor}. Te quedan $${this.cantidad} en tu cuenta.`);
        }
      
        
    }
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}, Tipo de cuenta: ${this.tipoCuenta}, Número de cuenta: ${this.numeroCuenta}`);
      }
    }
    
    const cuenta1 = new cuenta ("Juan Pérez", 100.00, "Ahorros", "1234567890");

    // Llamar a los métodos de la clase
    cuenta1.mostrarDatos();         // Muestra los datos de la cuenta
    cuenta1.depositar(3.00);        // Intenta depositar una cantidad menor a $5.00
    cuenta1.depositar(50.00);       // Deposita una cantidad válida
    cuenta1.retirar(4.00);          // Intenta retirar una cantidad menor a $5.00
    cuenta1.retirar(70.00);         // Retira una cantidad válida
    cuenta1.retirar(200.00);        // Intenta retirar más de lo que tiene
*/
//-------------------------------------EJERCICIO 5-----------------------------------------------------
/* Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.*/
var persona = /** @class */ (function () {
    function persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direcion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    persona.prototype.mayorMenor = function (a) {
        if (a >= 18) {
            console.log("Eres una persona mayor de edad");
        }
        else {
            console.log("Eres una persona menor de edad.");
        }
    };
    persona.prototype.datosPersona = function () {
        console.log("Su nombre es: ".concat(this.nombre));
        console.log("Su apellido es: ".concat(this.apellido));
        console.log("Su direccion es: ".concat(this.direcion));
        console.log("Su telefono es: ".concat(this.telefono));
        console.log("Su edad es: ".concat(this.edad));
    };
    return persona;
}());
var humanito = new persona("Julio Anthony", "Reyes Perez", "Casa La Palma el Zonte", "58749968", 30);
//console.log(humanito);
humanito.mayorMenor(30);
humanito.datosPersona();
var empleado = /** @class */ (function (_super) {
    __extends(empleado, _super);
    function empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    empleado.prototype.cargarSueldo = function (i) {
        i += this.sueldo;
    };
    empleado.prototype.imprimirSueldo = function () {
        console.log("Su sueldo es: ".concat(this.sueldo));
    };
    empleado.prototype.datosGeneral = function () {
        console.log("Su nombre es: ".concat(this.nombre));
        console.log("Su apellido es: ".concat(this.apellido));
        console.log("Su direccion es: ".concat(this.direcion));
        console.log("Su telefono es: ".concat(this.telefono));
        console.log("Su edad es: ".concat(this.edad));
        console.log("Su salario es: $ ".concat(this.sueldo));
    };
    return empleado;
}(persona));
console.log("SEGUNDO INFORME DE CLASE 2");
var empleadito = new empleado("Julio Anthony", "Reyes Perez", "Casa La Palma el Zonte", "58749968", 30, 500);
empleadito.datosGeneral();
