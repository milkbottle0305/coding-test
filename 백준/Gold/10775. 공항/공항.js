const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const G = parseInt(input[0]);
const P = parseInt(input[1]);
const datas = input.slice(2, input.length).map((e) => parseInt(e));

function solution(G, P, datas) {
  let answer = 0;
  const parents = [0];
  for (let i = 1; i <= G; i++) parents.push(i);
  for (let i = 0; i < P; i++) {
    const emptyGate = getParent(parents, datas[i]);
    if (emptyGate === 0) break;
    answer++;
    union(
      parents,
      getParent(parents, emptyGate),
      getParent(parents, emptyGate - 1)
    );
  }

  return answer;
}

function getParent(parents, x) {
  if (parents[x] === x) return x;
  return (parents[x] = getParent(parents, parents[x]));
}

function union(parents, a, b) {
  a = getParent(parents, a);
  b = getParent(parents, b);
  if (a != b) parents[a] = b;
}

console.log(solution(G, P, datas));
