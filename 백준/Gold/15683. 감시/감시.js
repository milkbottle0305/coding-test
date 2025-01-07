const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.trim().split(" "));
let answer = Infinity;

// CCTV의 위치와 타입 저장
const cctvData = [];
board.forEach((line, x) =>
  line.forEach((value, y) => {
    if (value !== "0" && value !== "6") {
      cctvData.push({ type: parseInt(value, 10), pos: [x, y] });
    }
  })
);

// 방향 벡터 정의 (상, 우, 하, 좌)
const directions = [
  [-1, 0], // 상
  [0, 1], // 우
  [1, 0], // 하
  [0, -1], // 좌
];

// CCTV별 감시 방향 조합
const cctvDirections = {
  1: [[0], [1], [2], [3]], // 한 방향
  2: [
    [0, 2],
    [1, 3],
  ], // 두 방향 (반대)
  3: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ], // 두 방향 (직각)
  4: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 1],
  ], // 세 방향
  5: [[0, 1, 2, 3]], // 네 방향
};

// 감시 처리 함수
function monitor(board, directions, x, y) {
  const newBoard = board.map((row) => [...row]);
  directions.forEach((dir) => {
    let nx = x;
    let ny = y;
    while (true) {
      nx += dir[0];
      ny += dir[1];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M || newBoard[nx][ny] === "6") {
        break;
      }
      if (newBoard[nx][ny] === "0") {
        newBoard[nx][ny] = "#";
      }
    }
  });
  return newBoard;
}

// 재귀 함수
function dfs(board, index) {
  if (index === cctvData.length) {
    const uncovered = board.flat().filter((cell) => cell === "0").length;
    answer = Math.min(answer, uncovered);
    return;
  }

  const { type, pos } = cctvData[index];
  const [x, y] = pos;
  cctvDirections[type].forEach((dirs) => {
    const monitoredBoard = monitor(
      board,
      dirs.map((d) => directions[d]),
      x,
      y
    );
    dfs(monitoredBoard, index + 1);
  });
}

// DFS 시작
dfs(board, 0);
console.log(answer);
