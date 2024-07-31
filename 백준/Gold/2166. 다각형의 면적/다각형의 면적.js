const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, datas) {
  let answer;
  let a = 0,
    b = 0;
  for (let i = 0; i < N - 1; i++) {
    a += datas[i][0] * datas[i + 1][1];
    b += datas[i][1] * datas[i + 1][0];
  }
  a += datas[N - 1][0] * datas[0][1];
  b += datas[N - 1][1] * datas[0][0];

  answer = (0.5 * Math.abs(a - b)).toFixed(1);
  return answer;
}

const N = parseInt(input[0]);
const datas = input.slice(1, N + 1).map((v) => v.split(" "));

console.log(solution(N, datas));
