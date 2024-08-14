const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, M, datas) {
  let start = 1n;
  let end = BigInt(M * Math.min(...datas));
  while (start <= end) {
    let mid = BigInt((start + end) / 2n);
    let temp = 0n;
    datas.forEach((v) => {
      temp += mid / BigInt(v);
    });
    if (temp >= M) {
      end = mid - 1n;
    } else {
      start = mid + 1n;
    }
  }
  return String(start);
}

const [N, M] = input[0].split(" ").map((v) => parseInt(v));
const datas = input.slice(1).map((v) => parseInt(v));
datas.sort((a, b) => a - b);
console.log(solution(N, M, datas));
