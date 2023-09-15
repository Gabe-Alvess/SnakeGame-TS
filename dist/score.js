const scoreBoard = document.getElementById("score");
const highScoreBoard = document.getElementById("high-score");
let score = 0;
let highScore = localStorage.getItem("high-score") || "0";
highScoreBoard.innerText = highScore;
export function updateScoreBoards() {
    score++;
    scoreBoard.innerText = `${score}`;
    highScore = score >= parseInt(highScore) ? `${score}` : highScore;
    localStorage.setItem("high-score", `${highScore}`);
    highScoreBoard.innerText = highScore;
}
