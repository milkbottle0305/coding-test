const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(p1, p2, p3) {
  const e1 = p1[0] * p2[1] + p2[0] * p3[1] + p3[0] * p1[1];
  const e2 = p1[1] * p2[0] + p2[1] * p3[0] + p3[1] * p1[0];

  if (e1 === e2) return 0;
  else if (e1 > e2) return 1;
  else return - 1;
}

const p1 = input[0].split(" ").map((v) => parseInt(v));
const p2 = input[1].split(" ").map((v) => parseInt(v));
const p3 = input[2].split(" ").map((v) => parseInt(v));
console.log(solution(p1, p2, p3));
