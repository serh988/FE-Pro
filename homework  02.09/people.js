const people = [
    { name: "John", age: 20 },
    { name: "Jane", age: 17 },
    { name: "Jack", age: 25 },
    { name: "Jill", age: 15 },
    { name: "James", age: 18 }
];

const ageGroupCount = people.reduce((accumulator, person) => {
    if (person.age >= 18) {
        accumulator.adults++;
    } else {
        accumulator.minors++;
    }
    return accumulator;
}, { adults: 0, minors: 0 });

console.log(ageGroupCount); // Выведет: { adults: 3, minors: 2 }