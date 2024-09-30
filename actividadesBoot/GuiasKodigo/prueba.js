var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo; // Título de la página
        this.color = color; // Color de la página
        this.fuente = fuente; // Fuente de la página
        this.alineacion = "izquierda"; // Alineación por defecto
    }
    // Método para obtener el título, color y fuente
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    // Método para establecer la alineación del título
    CabeceraPagina.prototype.alinearTitulo = function (ubicacion) {
        var posicionesValidas = ["izquierda", "derecha", "centrado"];
        if (posicionesValidas.includes(ubicacion)) {
            this.alineacion = ubicacion;
        }
        else {
            console.log("Posición no válida. Usa 'izquierda', 'derecha' o 'centrado'.");
        }
    };
    // Método para imprimir todas las propiedades de la cabecera
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n del t\u00EDtulo: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Ejemplo de uso
var cabecera = new CabeceraPagina("Mi Página", "Azul", "Arial");
// Obtener propiedades
console.log(cabecera.obtenerPropiedades()); // {titulo: "Mi Página", color: "Azul", fuente: "Arial"}
// Establecer alineación del título
cabecera.alinearTitulo("centrado");
// Imprimir todas las propiedades
cabecera.imprimirPropiedades();
// Resultado:
// Título: Mi Página
// Color: Azul
// Fuente: Arial
// Alineación del título: centrado
