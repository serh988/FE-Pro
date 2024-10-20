const data = [
    { title: 'javascript', amount: 150000 },
    { title: 'python', amount: 140000 },
    { title: 'golang', amount: 130000 },
    { title: 'java', amount: 120000 }
];

const canvas = document.getElementById("histogramCanvas");
const ctx = canvas.getContext("2d");

// Устанавливаем параметры для гистограммы
const barWidth = 80;
const maxBarHeight = 300;
const maxAmount = Math.max(...data.map(item => item.amount));
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
const margin = 50;

let x = margin;

data.forEach((item) => {
    const barHeight = (item.amount / maxAmount) * maxBarHeight;
    
    // Рисуем столбец
    ctx.beginPath();
    ctx.rect(x, canvasHeight - barHeight - margin, barWidth, barHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.font = "14px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(item.title, x + barWidth / 4, canvasHeight - margin + 20);

    ctx.fillText(item.amount, x + barWidth / 4, canvasHeight - barHeight - margin - 10);

    x += barWidth + 30;
});
