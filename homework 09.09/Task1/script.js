// Сложный объект
const complexObject = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "traveling", "gaming"],
    address: {
        street: "123 Main Str",
        city: "Rostock",
        country: "Deutschland"
    },
    isActive: true,
    scores: [95, 85, 88],
    additionalInfo: {
        occupation: "Developer",
        languages: ["JavaScript", "Python", "Java"]
    },
    createdDate: new Date(),
    nullValue: null,
    method: function() {
        return "This is a method!";
    }
};

// Преобразуем объект в строку JSON и сохраняем в localStorage
const jsonString = JSON.stringify(complexObject);
localStorage.setItem("complexObject", jsonString);

// Извлекаем строку JSON из localStorage и преобразуем обратно в объект
const retrievedJsonString = localStorage.getItem("complexObject");
const parsedObject = JSON.parse(retrievedJsonString);

// Вывод объекта в консоль
console.log(parsedObject);
