import { getInputDirection } from "./input.js";

export const SNAKE_SPEED: number = 6;

const snake = [{ x: 15, y: 15 }];

let newSegments = 0;

export function update() {
  addSegments();

  const inputDirection = getInputDirection();

  for (let i = snake.length - 2; i >= 0; i--) {
    snake[i + 1] = { ...snake[i] };
  }

  snake[0].x += inputDirection.x;
  snake[0].y += inputDirection.y;
}

export function draw(gameBoard: HTMLElement): void {
  snake.forEach((segment) => {
    if (segment.x === getSnakeHead().x && segment.y === getSnakeHead().y) {
      const snakeHead = document.createElement("div");

      snakeHead.className = "snake";
      snakeHead.id = "head";

      snakeHead.style.gridRowStart = `${segment.y}`;
      snakeHead.style.gridColumnStart = `${segment.x}`;

      gameBoard.appendChild(snakeHead);
    } else if (segment.x === snake[snake.length - 1].x && segment.y === snake[snake.length - 1].y) {
      const snakeTail = document.createElement("div");

      snakeTail.className = "snake";
      snakeTail.id = "tail";

      snakeTail.style.gridRowStart = `${segment.y}`;
      snakeTail.style.gridColumnStart = `${segment.x}`;

      gameBoard.appendChild(snakeTail);
    } else {
      const snakeBody = document.createElement("div");

      snakeBody.className = "snake";

      snakeBody.style.gridRowStart = `${segment.y}`;
      snakeBody.style.gridColumnStart = `${segment.x}`;

      gameBoard.appendChild(snakeBody);
    }
  });
}

export function expandSnake(amount: number) {
  newSegments += amount;
}

export function onSnake(position: { x: number; y: number }, ignoreHead: boolean = false) {
  return snake.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snake[0];
}

export function snakeHitTail() {
  return onSnake(snake[0], true);
}

function equalPositions(pos1: { x: number; y: number }, pos2: { x: number; y: number }) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snake.push({ ...snake[snake.length - 1] });
  }

  newSegments = 0;
}
