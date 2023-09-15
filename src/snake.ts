import { getInputDirection } from "./input.js";

export const SNAKE_SPEED: number = 6;

const snakeBody = [{ x: 11, y: 11 }];

let newSegments = 0;

export function update() {
  addSegments();

  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard: HTMLElement): void {
  snakeBody.forEach((segment) => {
    const snake = document.createElement("div");

    snake.classList.add("snake");

    snake.style.gridRowStart = `${segment.y}`;
    snake.style.gridColumnStart = `${segment.x}`;

    gameBoard.appendChild(snake);
  });
}

export function expandSnake(amount: number) {
  newSegments += amount;
}

export function onSnake(position: { x: number; y: number }, ignoreHead: boolean = false) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeHitTail() {
  return onSnake(snakeBody[0], true);
}

function equalPositions(pos1: { x: number; y: number }, pos2: { x: number; y: number }) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
}
