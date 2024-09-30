//4 Pilares POO 
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
var person = /** @class */ (function () {
    function person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    person.prototype.respirar = function () {
        console.log("afff");
    };
    //Getters y setters
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.setAge = function (ageParam) {
        this.age = ageParam;
    };
    person.prototype.getAge = function (ageParam) {
        this.age = ageParam;
    };
    return person;
}());
var personita = new person("Anthony Arias", 20, "06598850-2");
//personita.age = 15;
console.log(personita);
personita.getAge
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(nameParam, ageParam, duiParam, expParam, techSkillsParam, softSkillsParam, gitUserParam, areaParam, projectParam) {
        var _this = _super.call(this, nameParam, ageParam, duiParam) || this;
        _this.exp = expParam;
        _this.techSkills = techSkillsParam;
        _this.softSkills = softSkillsParam;
        _this.gitUser = gitUserParam;
        _this.area = areaParam;
        _this.projects = projectParam;
        return _this;
    }
    Developer.prototype.getArea = function () {
        return this.area;
    };
    return Developer;
}(person));
var developercito = new Developer("Anthony Arias", 20, "0205048-3", 1, "C#, JAVA, JAVASCRIPT, TYPESCRIPT, HTML, CSS, BOOSTRAP", ["Comunicacion efectiva, Proactivo, Trabajo en equipo, Liderazgo, Autocritica"], "AnthonygitUser", "Backend Developer", ["APIS"]);
developercito.getArea();
