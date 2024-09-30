/*Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.*/
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
var cuenta = /** @class */ (function () {
    function cuenta(nombreParam, cantidadParam, tipoCuentaParam, numeroCuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }
    cuenta.prototype.depositar = function (a) {
        if (a < 5.00) {
            console.log("El valor a depositar debe ser mayor a 5.00");
        }
        else {
            this.cantidad += a;
            console.log("Se ha depositado correctamente el $${a}");
        }
    };
    cuenta.prototype.retirar = function (valor) {
        if (valor > this.cantidad) {
            console.log("No hay suficiente dinero en la cuenta.");
        }
        else if (valor < 5.00) {
            console.log("El monto a retirar debe ser mayor a $5.00.");
        }
        else {
            this.cantidad -= valor;
            console.log("Has retirado $".concat(valor, ". Te quedan $").concat(this.cantidad, " en tu cuenta."));
        }
    };
    cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, ", Tipo de cuenta: ").concat(this.tipoCuenta, ", N\u00FAmero de cuenta: ").concat(this.numeroCuenta));
    };
    return cuenta;
}());
var cuenta1 = new cuenta("Juan Pérez", 100.00, "Ahorros", "1234567890");
// Llamar a los métodos de la clase
cuenta1.mostrarDatos(); // Muestra los datos de la cuenta
cuenta1.depositar(3.00); // Intenta depositar una cantidad menor a $5.00
cuenta1.depositar(50.00); // Deposita una cantidad válida
cuenta1.retirar(4.00); // Intenta retirar una cantidad menor a $5.00
cuenta1.retirar(70.00); // Retira una cantidad válida
cuenta1.retirar(200.00); // Intenta retirar más de lo que tiene
