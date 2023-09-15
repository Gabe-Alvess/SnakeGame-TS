import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
const gameBoard = document.getElementById("game-board");
function gameInit() {
    update();
    draw();
}
setInterval(gameInit, SNAKE_SPEED);
function update() {
    updateSnake();
}
function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
}
