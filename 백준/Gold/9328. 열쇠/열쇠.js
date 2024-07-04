const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0])
let temp = 0;
for(let i=0;i<T;i++){
  const [N, M] = input[temp + 1].split(" ").map((value)=>parseInt(value));
  const map = [];
  for(let j=0;j<N;j++){
    map.push(input[temp + 2 + j].split(""));
  }
  const keys = new Set();
  input[temp + 2 + N].split("").forEach((value)=>keys.add(value));
  temp += (N + 2);
  console.log(solution(N, M, map, keys));
}

function solution(N, M, map, keys) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let answer = 0;
  
  for(let i=0; i<N;i++){
    map[i].unshift(".");
    map[i].push(".");
  }
  map.unshift(Array(M+2).fill("."));
  map.push(Array(M+2).fill("."));

  while(true) {
    let key_count = 0;
    const q = [[0, 0]];
    const visited = Array.from(Array(N+2), () => Array(M+2).fill(false));
    visited[0][0] = true;
    while(q.length) {
      const [cx, cy] = q.shift();
      for(let i=0;i<4;i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if(nx < 0 || nx >= N+2 || ny < 0 || ny >= M+2) continue;
        if(map[nx][ny] === "*") continue;
        if(visited[nx][ny] === true) continue;
        if(map[nx][ny] === ".") {
          q.push([nx, ny]);
          visited[nx][ny] = true;
        } else if(map[nx][ny] === "$") {
          q.push([nx, ny]);
          visited[nx][ny] = true;
          answer++;
          map[nx][ny] = ".";
        } else if(map[nx][ny] === map[nx][ny].toUpperCase()) {
          for(let key of  keys) {
            if(map[nx][ny] === key.toUpperCase()) {
              q.push([nx, ny]);
              visited[nx][ny] = true;
              map[nx][ny] = ".";
            }
          }
        } else if(map[nx][ny] === map[nx][ny].toLowerCase()) {
          q.push([nx, ny]);
          visited[nx][ny] = true;
          keys.add(map[nx][ny]);
          key_count++;
          map[nx][ny] = ".";
        }
      }
    }
    if(key_count === 0) break;
  }
  return answer;
}
