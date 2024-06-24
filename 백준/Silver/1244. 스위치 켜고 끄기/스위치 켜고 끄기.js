const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const switches = input[1].split(" ").map((value) => parseInt(value));
const K = parseInt(input[2]);
const students = [];
for (let i = 0; i < K; i++) {
  students.push(input[3 + i].split(" ").map((value) => parseInt(value)));
}

function solution(N, switches, K, students) {
  let answer = "";
  for (let i = 0; i < K; i++) {
    const [gender, num] = students[i];
    if (gender === 1) {
      for (let j = num - 1; j < N; j += num) {
        switches[j] = switches[j] === 0 ? 1 : 0;
      }
    } else {
      index = num - 1;
      switches[index] = switches[index] === 0 ? 1 : 0;
      for (let j = 1; j < N; j++) {
        if (index - j < 0 || index + j >= N) break;
        if (switches[index - j] === switches[index + j]) {
          switches[index - j] = switches[index - j] === 0 ? 1 : 0;
          switches[index + j] = switches[index + j] === 0 ? 1 : 0;
        } else {
          break;
        }
      }
    }
  }
  switches.forEach((value, index) => {
    answer += value + " ";
    if ((index + 1) % 20 === 0) {
      answer += "\n";
    }
  });
  return answer;
}

console.log(solution(N, switches, K, students));
