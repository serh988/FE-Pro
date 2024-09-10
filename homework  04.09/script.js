const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

counterElement.innerText = counter;

// Функция для обновления счётчика на странице и сохранения в localStorage
function updateCounter() {
    counterElement.innerText = counter;
    localStorage.setItem('counter', counter); // Сохранение значения счётчика в localStorage
}

increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
});
