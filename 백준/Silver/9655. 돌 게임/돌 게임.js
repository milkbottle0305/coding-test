const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
function solution(N) {
  // 1 SK
  // 1-1 CY
  // 3 SK
  // 1-3 or 3-1 SK
  // 3-1-1 or 1-3-1 CY
  // 3-3 SK
  let answer = "";
  if (N % 2 === 0) {
    answer = "CY";
  } else {
    answer = "SK";
  }
  return answer;
}

console.log(solution(N));
