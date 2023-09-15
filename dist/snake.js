import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 6;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = Object.assign({}, snakeBody[i]);
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snake = document.createElement("div");
        snake.classList.add("snake");
        snake.style.gridRowStart = `${segment.y}`;
        snake.style.gridColumnStart = `${segment.x}`;
        gameBoard.appendChild(snake);
    });
}
export function expandSnake(amount) {
    newSegments += amount;
}
export function onSnake(position, ignoreHead = false) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0)
            return false;
        return equalPositions(segment, position);
    });
}
export function getSnakeHead() {
    return snakeBody[0];
}
export function snakeHitTail() {
    return onSnake(snakeBody[0], true);
}
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push(Object.assign({}, snakeBody[snakeBody.length - 1]));
    }
    newSegments = 0;
}
