const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
function solution(N) {
  const result = Array(10).fill(0);
  let digit = N.length;
  for (let i = 0; i < digit; i++) {
    const currentDigit = parseInt(N[i]);

    let count;
    if (i === digit - 1) count = 0;
    else count = parseInt(N.slice(i + 1));

    result[currentDigit] += count + 1;

    temp = 10 ** (digit - i - 1);
    if (i === 0) {
      for (let j = 1; j < currentDigit; j++) result[j] += temp;
      continue;
    }
    for (let j = 0; j < currentDigit; j++) result[j] += temp;
    for (let j = 1; j < 10; j++) result[j] += temp;
    for (let j = 0; j < 10; j++)
      result[j] += (parseInt(N.slice(0, i)) - 1) * temp;
  }
  let answer = "";
  result.forEach((e) => {
    answer += e + " ";
  });
  return answer;
}

console.log(solution(N));
