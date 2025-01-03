const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [W, H] = input[0].split(" ").map(Number);
const datas = [];
for (let i = 0; i < H; i++) {
  datas.push(input[1 + i].trim().split(""));
}

class PQ {
  constructor() {
    this.heap = [];
  }

  length() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this._heapUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    const top = this.heap[0];
    if (this.heap.length === 1) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop();
      this._heapDown();
    }
    return top;
  }

  _heapDown() {
    let nodeIndex = 0;
    while (true) {
      let smallIndex = nodeIndex;
      const leftChildIndex = 2 * nodeIndex + 1;
      const rightChildIndex = 2 * nodeIndex + 2;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][0] < this.heap[smallIndex][0]
      ) {
        smallIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][0] < this.heap[smallIndex][0]
      ) {
        smallIndex = rightChildIndex;
      }

      if (smallIndex === nodeIndex) break;

      [this.heap[nodeIndex], this.heap[smallIndex]] = [
        this.heap[smallIndex],
        this.heap[nodeIndex],
      ];
      nodeIndex = smallIndex;
    }
  }

  _heapUp() {
    let nodeIndex = this.heap.length - 1;
    while (nodeIndex > 0) {
      const parentIndex = Math.floor((nodeIndex - 1) / 2);
      if (this.heap[nodeIndex][0] >= this.heap[parentIndex][0]) break;
      [this.heap[nodeIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[nodeIndex],
      ];
      nodeIndex = parentIndex;
    }
  }
}

function solution() {
  const startEnd = [];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (datas[i][j] === "C") startEnd.push([i, j]);
    }
  }
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const minPQ = new PQ();
  const [start, end] = startEnd;

  // 방문 체크 배열 (H x W x 4)
  const visited = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(4).fill(false))
  );

  // 초기값 (비용: -1, 시작점, 방향: -1)
  for (let i = 0; i < 4; i++) {
    minPQ.push([0, start, i]); // 비용 0, 시작점, 초기 방향
  }

  while (minPQ.length() > 0) {
    const [count, position, direction] = minPQ.pop();

    if (position[0] === end[0] && position[1] === end[1]) {
      console.log(count);
      return;
    }

    if (visited[position[0]][position[1]][direction]) continue;
    visited[position[0]][position[1]][direction] = true;

    for (let i = 0; i < 4; i++) {
      const ny = position[0] + dy[i];
      const nx = position[1] + dx[i];
      if (nx < 0 || nx >= W || ny < 0 || ny >= H) continue;
      if (datas[ny][nx] !== "." && datas[ny][nx] !== "C") continue;
      const newCount = i === direction ? count : count + 1;
      minPQ.push([newCount, [ny, nx], i]);
    }
  }
}

solution();
