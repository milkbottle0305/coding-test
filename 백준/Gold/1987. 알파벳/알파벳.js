const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const datas = [];
for (let i = 0; i < R; i++) {
  datas.push(input[1 + i]);
}

function solution(R, C, datas) {
  let answer = 0;
  let taken = new Set();
  taken.add(datas[0][0]);
  DFS(0, 0, 1);

  function DFS(x, y, distance) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    answer = Math.max(answer, distance);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      if (taken.has(datas[nx][ny])) continue;
      taken.add(datas[nx][ny]);
      DFS(nx, ny, distance + 1);
      taken.delete(datas[nx][ny]);
    }
  }

  return answer;
}

console.log(solution(R, C, datas));
