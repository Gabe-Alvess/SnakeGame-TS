import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";

let lastRenderTime: number = 0;
const gameBoard: HTMLElement = document.getElementById("game-board")!;

function main(currentTime: number): void {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update(): void {
  updateSnake();
}

function draw(): void {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
