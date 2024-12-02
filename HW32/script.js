
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// параметри
let circle = {
    x: 100,
    y: 100,
    radius: 40,
    color: 'blue',
    dx: 2, // швидкість по X
    dy: 2, // швидкість по Y
};

// малювання кола
function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2); // малюємо коло
    ctx.fillStyle = circle.color; // встановити колір
    ctx.fill(); // заповнення
    ctx.closePath();
}

// очищення канвасу
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// анімація
function animate() {
    clearCanvas(); // очистка
    drawCircle(); // коло
    // позицію кола
    circle.x += circle.dx;
    circle.y += circle.dy;

    // dvd
    if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
        circle.dx *= -1; // зміна напрямку
    }
    if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
        circle.dy *= -1;
    }

    // animate повтор
    requestAnimationFrame(animate);
}

// клік
canvas.addEventListener('click', () => {
    // випадковий колір
    circle.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// запуск
animate();
