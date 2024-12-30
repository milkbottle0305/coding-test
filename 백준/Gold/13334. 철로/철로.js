const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const datas = input
  .slice(1, N + 1)
  .map((line) =>
    line
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  )
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
const D = parseInt(input[N + 1]);

class MinPQ {
  constructor() {
    this.heap = [];
  }

  length() {
    return this.heap.length;
  }

  top() {
    return this.heap[0];
  }

  pop() {
    if (this.length() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapDown();
    return top;
  }

  push(value) {
    this.heap.push(value);
    this._heapUp();
  }

  _heapUp() {
    let index = this.length() - 1;
    const node = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= node) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = node;
  }

  _heapDown() {
    let index = 0;
    const node = this.heap[index];
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < this.length() &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < this.length() &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = node;
      index = smallest;
    }
  }
}

function solution() {
  const candidates = datas.filter((data) => data[1] - data[0] <= D);
  const pq = new MinPQ();
  let answer = 0;

  candidates.forEach((candidate) => {
    pq.push(candidate[0]);
    while (pq.length() > 0 && candidate[1] - pq.top() > D) {
      pq.pop();
    }
    answer = Math.max(answer, pq.length());
  });

  console.log(answer);
}

solution();
