const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = [];
for (let i = 0; i < N; i++) {
  board.push(input[1 + i].trim().split(" "));
}

let answer = Infinity;

const cctvData = [];
board.forEach((line, i) =>
  line.forEach((data, j) => {
    if (data === "0" || data === "6") return;
    else cctvData.push({ type: data, pos: [i, j] });
  })
);
recursion(board, 0);
console.log(answer);

function toUp(board, x, y) {
  for (let i = x - 1; i >= 0; i--) {
    if (board[i][y] !== "6") {
      board[i][y] = "#";
    } else {
      break;
    }
  }
}

function toDown(board, x, y) {
  for (let i = x + 1; i < N; i++) {
    if (board[i][y] !== "6") {
      board[i][y] = "#";
    } else {
      break;
    }
  }
}

function toLeft(board, x, y) {
  for (let j = y - 1; j >= 0; j--) {
    if (board[x][j] !== "6") {
      board[x][j] = "#";
    } else {
      break;
    }
  }
}

function toRight(board, x, y) {
  for (let j = y + 1; j < M; j++) {
    if (board[x][j] !== "6") {
      board[x][j] = "#";
    } else {
      break;
    }
  }
}

function recursion(board, index) {
  if (index === cctvData.length) {
    let temp = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === "0") {
          temp++;
        }
      }
    }
    answer = Math.min(answer, temp);
    return;
  }
  if (cctvData[index].type === "1") {
    let copyBoard = [...board.map((row) => [...row])];
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);
  } else if (cctvData[index].type === "2") {
    let copyBoard = [...board.map((row) => [...row])];
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);
  } else if (cctvData[index].type === "3") {
    let copyBoard = [...board.map((row) => [...row])];
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);
  } else if (cctvData[index].type === "4") {
    let copyBoard = [...board.map((row) => [...row])];
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);

    copyBoard = [...board.map((row) => [...row])];
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);
  } else if (cctvData[index].type === "5") {
    let copyBoard = [...board.map((row) => [...row])];
    toUp(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toRight(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toDown(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    toLeft(copyBoard, cctvData[index].pos[0], cctvData[index].pos[1]);
    recursion(copyBoard, index + 1);
  }
}
