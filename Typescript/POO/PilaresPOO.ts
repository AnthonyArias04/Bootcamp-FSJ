//4 Pilares POO 

/*
Herencia
Polimorfismo

Encasuplamiento -> Podemos limitar el acceso a algo a traves de MODIFICADORES DE ACCESO
Abstraccion -> Nos da herramientas para interactuar con lo que este limitado de una clase.
*/ 

/*
MODIFICADORES DE ACCESO:

    public -> Accesos que todo el mundo puede tener.
    private -> Algo que solo ella la misma clase tendra acceso (algo privado)
    protected -> Va a tener acceso la misma clase y sus hijos

*/ 

class person{
    private name: string;
    private age: number;
    private dui: string;

    constructor(nameParam: string, ageParam: number, duiParam: string){
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    private respirar(){
        console.log("afff");
        
    }

    //Getters y setters
    getName():string{
        return this.name
    }

    setAge(ageParam):number{
        this.age = ageParam
    }
}

let personita = new person("Anthony Arias", 20, "06598850-2");

//personita.age = 15;
console.log(personita);

