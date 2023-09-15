import { getInputDirection } from "./input.js";

export const SNAKE_SPEED: number = 1;

const snakeBody = [{ x: "12", y: "11" }];

export function update() {
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard: HTMLElement): void {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");

    snakeElement.style.gridRowStart = "1" //segment.y; Hier ziet het probleem 
    snakeElement.style.gridColumnStart = "1" //segment.x; Hier ziet het probleem

    snakeElement.classList.add("snake");

    gameBoard.append(snakeElement);
  });
}
