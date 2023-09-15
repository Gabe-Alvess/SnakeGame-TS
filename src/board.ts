const BOARD_SIZE = 30;

export function randomBoardPosition() {
  return {
    x: Math.floor(Math.random() * BOARD_SIZE) + 1,
    y: Math.floor(Math.random() * BOARD_SIZE) + 1,
  };
}

export function outsideBoard(position: { x: number; y: number }) {
  return position.x < 1 || position.x > BOARD_SIZE || position.y < 1 || position.y > BOARD_SIZE;
}
