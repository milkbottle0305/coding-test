const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, L, K] = input[0].split(" ").map((value) => parseInt(value));
const datas = [];
for (let i = 0; i < K; i++) {
  datas.push(input[1 + i].split(" ").map((value) => parseInt(value)));
}

function solution(N, M, L, K, datas) {
  let answer = 0;
  for (let i = 0; i < K; i++) {
    for (let j = 0; j < K; j++) {
      let x = datas[i][0];
      let y = datas[j][1];
      let cnt = 0;
      for (const dt of datas) {
        if (dt[0] >= x && dt[0] <= x + L && dt[1] >= y && dt[1] <= y + L) {
          cnt++;
        }
      }
      answer = Math.max(cnt, answer);
    }
  }
  return K - answer;
}

console.log(solution(N, M, L, K, datas));
