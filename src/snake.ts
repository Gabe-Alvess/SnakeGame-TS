import { getInputDirection } from "./input.js";

export const SNAKE_SPEED: number = 125;

const snakeHead = { x: 5, y: 10 };

export function update() {
  const inputDirection = getInputDirection();

  snakeHead.x += inputDirection.x;
  snakeHead.y += inputDirection.y;
}

export function draw(gameBoard: HTMLElement): void {
  const snake = document.createElement("div");

  snake.classList.add("snake");

  snake.style.gridArea = `${snakeHead.y} / ${snakeHead.x}`;

  gameBoard.append(snake);
}
