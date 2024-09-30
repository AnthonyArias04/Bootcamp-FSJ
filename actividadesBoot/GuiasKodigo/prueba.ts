class CabeceraPagina {
    public titulo:string;
    public color:string;
    public fuente:string;
    public alineacion:string;
    
    constructor(titulo, color, fuente) {
    

        this.titulo = titulo;   // Título de la página
        this.color = color;     // Color de la página
        this.fuente = fuente;   // Fuente de la página
        this.alineacion = "izquierda";  // Alineación por defecto
    }

    // Método para obtener el título, color y fuente
    obtenerPropiedades() {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    // Método para establecer la alineación del título
    alinearTitulo(ubicacion) {
        const posicionesValidas = ["izquierda", "derecha", "centrado"];
        if (posicionesValidas.includes(ubicacion)) {
            this.alineacion = ubicacion;
        } else {
            console.log("Posición no válida. Usa 'izquierda', 'derecha' o 'centrado'.");
        }
    }

    // Método para imprimir todas las propiedades de la cabecera
    imprimirPropiedades() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación del título: ${this.alineacion}`);
    }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina("Mi Página", "Azul", "Arial");

// Obtener propiedades
console.log(cabecera.obtenerPropiedades());  // {titulo: "Mi Página", color: "Azul", fuente: "Arial"}

// Establecer alineación del título
cabecera.alinearTitulo("centrado");

// Imprimir todas las propiedades
cabecera.imprimirPropiedades();
// Resultado:
// Título: Mi Página
// Color: Azul
// Fuente: Arial
// Alineación del título: centrado
