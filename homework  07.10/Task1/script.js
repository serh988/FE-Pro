class Person {
    static oldestPerson = null;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        
        if (Person.oldestPerson === null || age > Person.oldestPerson.age) {
            Person.oldestPerson = this;
        }
    }

    static compareAge(person1, person2) {
        return Math.abs(person1.age - person2.age);
    }
}

const person1 = new Person("John", "Doe", 25);
const person2 = new Person("Jane", "Smith", 40);
const person3 = new Person("Mike", "Johnson", 35);

// Проверяем самого старого человека
console.log(`Самый старый человек: ${Person.oldestPerson.firstName} ${Person.oldestPerson.lastName}, возраст: ${Person.oldestPerson.age}`);

// Сравниваем возраст двух людей
const ageDifference = Person.compareAge(person1, person2);
console.log(`Разница в возрасте между ${person1.firstName} и ${person2.firstName}: ${ageDifference} лет.`);
