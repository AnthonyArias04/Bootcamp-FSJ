//4 Pilares POO 

/*
Herencia -> Es la capacidad de una subclase de obtener todo de su clase PADRE
Polimorfismo ->  

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

    setAge(ageParam:number){
        this.age = ageParam
    }

    getAge(ageParam:number){
        this.age = ageParam;
    }
}

let personita = new person("Anthony Arias", 20, "06598850-2");

//personita.age = 15;
console.log(personita);

class Developer extends person{
    private exp:number;
    private techSkills:string;
    private softSkills:string[];
    private gitUser:string; 
    private area:string;
    private projects:string[];

    constructor(nameParam:string, ageParam:number, duiParam:string, expParam: number, techSkillsParam:string, softSkillsParam:string[], gitUserParam: string, areaParam: string, projectParam:string[]){
        super(nameParam, ageParam, duiParam)

        this.exp = expParam;
        this.techSkills = techSkillsParam;
        this.softSkills = softSkillsParam;
        this.gitUser = gitUserParam;
        this.area = areaParam;
        this.projects = projectParam;
    }
    getArea(){
        return this.area;
    }

}

let developercito = new Developer("Anthony Arias", 20, "0205048-3", 1, "C#, JAVA, JAVASCRIPT, TYPESCRIPT, HTML, CSS, BOOSTRAP",["Comunicacion efectiva, Proactivo, Trabajo en equipo, Liderazgo, Autocritica"], "AnthonygitUser", "Backend Developer", ["APIS"]);
developercito.getArea();