//Створити телефонну книгу
//створити початковий клас Abonent, де зберігатимуться ім*я і номер
//створити set який прийматиме телефон і номер
//створити get який виводитиме данні про абонента
//створити три різних юзери
//вивести данні

class Abonent {
    constructor(name, tellNumber) {
        this.name = name;
        this.tellNumber = tellNumber;
    }

    set number(newNumber) {
        this.tellNumber = newNumber;
    }

    get info() {
        return `Name: ${this.name}, Number: ${this.tellNumber}`;
    }
}

const zorana = new Abonent("Zorana", "063-111-11-11");
const slavik = new Abonent("Slavik", "063-222-22-22");
const ira = new Abonent("Ira", "063-333-33-33");

console.log(zorana.info); 
console.log(slavik.info); 
console.log(ira.info); 
//сертер - заміна номера
zorana.tellNumber = "063-444-44-44";
console.log(zorana.info);
slavik.tellNumber = "063-555-55-55";
console.log(slavik.info);
ira.tellNumber = "063-666-66-66";
console.log(ira.info);