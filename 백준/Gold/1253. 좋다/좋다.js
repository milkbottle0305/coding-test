const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const datas = input[1].split(" ").map((value)=>parseInt(value));

function solution(N, datas) {
  let answer = 0;
  datas.sort((a, b) => a - b);
  datas.forEach((value, index) => {
    let start = 0;
    let end = N -1;
    while (start < end) {
      let sum = datas[start] + datas[end];
      if (value === sum) {
        if (start === index)
          start++;
        else if (end === index)
          end--;
        else {
          answer++;
          break;
        }
      } else if (value < sum)
        end--;
      else
        start++;
    }
  });
  return answer;
}

console.log(solution(N, datas));