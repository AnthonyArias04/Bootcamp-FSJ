//4 Pilares POO 
/*
Herencia
Polimorfismo

Encasuplamiento
Abstraccion
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
    return person;
}());
var personita = new person("Anthony Arias", 20, "06598850-2");
personita.age = 15;
console.log(personita);
