// 1. Класс BankAccount
class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.error("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.error("Invalid withdraw amount");
        }
    }

    checkBalance() {
        return this.balance;
    }
}

// Создаем экземпляр BankAccount
const myAccount = new BankAccount(123456);

// Функции для взаимодействия с HTML
function deposit() {
    myAccount.deposit(100);
    document.getElementById('accountBalance').textContent = myAccount.checkBalance();
}

function withdraw() {
    myAccount.withdraw(50);
    document.getElementById('accountBalance').textContent = myAccount.checkBalance();
}

function checkBalance() {
    alert(`Account Balance: ${myAccount.checkBalance()}`);
}

// 2. Класс Student
class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.grades = [];
    }

    addGrade(grade) {
        if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.error("Grade must be a number between 0 and 100");
        }
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
}

// Создаем экземпляр Student
const student = new Student("John Doe", 20, "john.doe@example.com");

// Функции для взаимодействия с HTML
function addStudentGrade() {
    const gradeInput = document.getElementById('gradeInput').value;
    student.addGrade(Number(gradeInput));
}

function getAverage() {
    document.getElementById('averageGrade').textContent = student.getAverageGrade().toFixed(2);
}

// 3. Класс ShoppingCart
class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(item) {
        if (item && typeof item.name === 'string' && typeof item.price === 'number' && item.price > 0) {
            this.items.push(item);
            this.totalPrice += item.price;
        } else {
            console.error("Invalid item");
        }
    }

    removeItem(itemName) {
        const itemIndex = this.items.findIndex(item => item.name === itemName);
        if (itemIndex > -1) {
            this.totalPrice -= this.items[itemIndex].price;
            this.items.splice(itemIndex, 1);
        } else {
            console.error("Item not found");
        }
    }

    getTotalPrice() {
        return this.totalPrice;
    }
}

// Создаем экземпляр ShoppingCart
const cart = new ShoppingCart();

// Функции для взаимодействия с HTML
function addItemToCart() {
    const item = { name: "Apple", price: 5 };
    cart.addItem(item);
    document.getElementById('totalPrice').textContent = cart.getTotalPrice();
}

function removeItemFromCart() {
    cart.removeItem("Apple");
    document.getElementById('totalPrice').textContent = cart.getTotalPrice();
}
