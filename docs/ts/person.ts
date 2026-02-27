class Person {
    naam: string;
    achternaam: string;
    leeftijd: number;
    getrouwd: boolean;

    constructor(naam: string, achternaam: string, leeftijd: number, getrouwd: boolean   ) {
        this.naam = naam;
        this.achternaam = achternaam;
        this.leeftijd = leeftijd;
        this.getrouwd = getrouwd;
    }

    greet() {
        console.log(`Hello, my name is ${this.naam} ${this.achternaam} and I am ${this.leeftijd} years old.`);
    }
}

let person1 = new Person("John", "Doe", 30, false);
person1.greet();

let person2 = new Person("Jane", "Smith", 25, true);
person2.greet();