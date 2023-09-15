import { onSnake, expandSnake } from "./snake.js";
import { randomBoardPosition } from "./board.js";
import { updateScoreBoards } from "./score.js";
const EXPANSION_RATE = 1;
let food = getRandomFoodPosition();
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
        updateScoreBoards();
    }
}
export function draw(gameBoard) {
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    foodElement.style.gridArea = `${food.y} / ${food.x}`;
    gameBoard.appendChild(foodElement);
}
function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomBoardPosition();
    }
    return newFoodPosition;
}
