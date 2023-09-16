let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
window.addEventListener("keydown", (e) => {
    const snakeHead = document.querySelector("#head");
    const snakeTail = document.querySelector("#tail");
    switch (e.key) {
        case "ArrowUp":
            if (lastInputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: -1 };
            snakeHead.style.borderRadius = "7px 7px 0px 0px";
            if (snakeTail !== null) {
                snakeTail.style.borderRadius = "0px 0px 7px 7px";
            }
            break;
        case "ArrowDown":
            if (lastInputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: 1 };
            snakeHead.style.borderRadius = "0px 0px 7px 7px";
            if (snakeTail !== null) {
                snakeTail.style.borderRadius = "7px 7px 0px 0px";
            }
            break;
        case "ArrowLeft":
            if (lastInputDirection.x !== 0)
                break;
            inputDirection = { x: -1, y: 0 };
            snakeHead.style.borderRadius = "7px 0px 0px 7px";
            if (snakeTail !== null) {
                snakeTail.style.borderRadius = "0px 7px 7px 0px";
            }
            break;
        case "ArrowRight":
            if (lastInputDirection.x !== 0)
                break;
            inputDirection = { x: 1, y: 0 };
            snakeHead.style.borderRadius = "0px 7px 7px 0px";
            if (snakeTail !== null) {
                snakeTail.style.borderRadius = "7px 0px 0px 7px";
            }
            break;
    }
});
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
