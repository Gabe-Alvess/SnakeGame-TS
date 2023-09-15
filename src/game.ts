import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeHitTail } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideBoard } from "./board.js";

const gameBoard = document.getElementById("game-board") as HTMLElement;

let lastRenderTime = 0;
let gameOver = false;

function gameInit(currentTime: number) {
  if (gameOver) {
    if (confirm("You lost the game! Press ok to restart.")) {
      location.reload();
    }
    return;
  }

  window.requestAnimationFrame(gameInit);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(gameInit);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideBoard(getSnakeHead()) || snakeHitTail();
}
