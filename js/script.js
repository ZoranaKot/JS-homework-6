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

// Створення екземплярів класу Abonent
const zorana = new Abonent("Zorana", "063-111-11-11");
const ivan = new Abonent("Ivan", "063-222-22-22");
const olena = new Abonent("Olena", "063-333-33-33");

// Виведення даних про абонентів
console.log(zorana.info); // Виводить: Name: Zorana, Number: 063-111-11-11
console.log(ivan.info); // Виводить: Name: Ivan, Number: 063-222-22-22
console.log(olena.info); // Виводить: Name: Olena, Number: 063-333-33-33

// Використання сетера для оновлення номеру телефону одного з абонентів
zorana.tellNumber = "063-444-44-44";
console.log(zorana.info); // Виводить: Name: Zorana, Number: 063-444-44-44