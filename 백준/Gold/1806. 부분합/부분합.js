const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input[0].split(" ").map((a) => parseInt(a));
const datas = input[1].split(" ").map((a) => parseInt(a));

function solution(N, S, datas) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = 1e6;

  while (right <= N) {
    if (sum < S) {
      sum += datas[right++];
    } else {
      minLength = Math.min(minLength, right - left);
      sum -= datas[left++];
    }
  }
  return minLength === 1e6 ? 0 : minLength;
}

console.log(solution(N, S, datas));
