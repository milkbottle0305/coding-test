const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, X] = input[0].split(" ").map((value) => parseInt(value));
const graph1 = {};
const graph2 = {};
for (let i = 0; i < M; i++) {
  const [s, e, w] = input[1 + i].split(" ").map((value) => parseInt(value));
  if (!graph1[s]) {
    graph1[s] = [];
  }
  if (!graph2[e]) {
    graph2[e] = [];
  }
  graph1[s].push({ node: e, weight: w });
  graph2[e].push({ node: s, weight: w });
}

function solution(N, M, X, graph1, graph2) {
  let come = dijkstra(X, graph1);
  let go = dijkstra(X, graph2);
  let distances = [];
  for (const key in come) {
    distances.push(come[key] + go[key]);
  }
  return distances.sort((a, b) => a - b).pop();
}

function dijkstra(start, graph) {
  const distances = {};
  const visited = new Set();
  const pq = [];

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  pq.push({ node: start, distance: 0 });
  while (pq.length) {
    pq.sort((a, b) => a.distance - b.distance);
    const { node: currentNode } = pq.shift();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    for (const { node: neighbor, weight } of graph[currentNode] || []) {
      const newDistance = distances[currentNode] + weight;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        pq.push({ node: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}

console.log(solution(N, M, X, graph1, graph2));
