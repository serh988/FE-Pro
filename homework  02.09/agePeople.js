const agePeople = [
    { name: "John", age: 20 },
    { name: "Jane", age: 32 },
    { name: "Jack", age: 25 },
    { name: "Jill", age: 45 },
    { name: "James", age: 18 }
];

const peopleOver30 = agePeople.filter(person => person.age > 30);

console.log(peopleOver30);
// Выведет: [ { name: 'Jane', age: 32 }, { name: 'Jill', age: 45 } ]