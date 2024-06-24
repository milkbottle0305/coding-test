const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const students = input[1].split(" ").map((value) => parseInt(value));

function solution(N, students) {
  const stack = [];
  let minimum = 1;
  while (students.length || stack.length) {
    if (students[0] === minimum) {
      minimum++;
      students.shift();
    } else if ([...stack].pop() === minimum) {
      minimum++;
      stack.pop();
    } else if (students.length === 0 && [...stack].pop() !== minimum) {
      return "Sad";
    } else {
      stack.push(students.shift());
    }
  }
  return "Nice";
}

console.log(solution(N, students));
