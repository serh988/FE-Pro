const container = document.getElementById('container');

let size = 400;

for (let i = 0; i < 10; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    container.appendChild(square);
    
    size -= 40;
}
