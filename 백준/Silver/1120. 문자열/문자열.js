const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ");

function solution(a, b) {
  var answer = 100;
  for (let i = 0; i < b.length - a.length + 1; i++) {
    let temp = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j] != b[i + j]) {
        temp++;
      }
    }
    answer = Math.min(answer, temp);
  }

  return answer;
}

console.log(solution(a, b));
