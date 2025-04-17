#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <stack>
using namespace std;

int N, R1, R2;
unordered_map<int, vector<pair<int, int>>> graph;
unordered_set<int> visited;

struct Node {
  int node;
  int max_tongro_length;
  int distance;
};

int dfs(int start, int end) {
  stack<Node> s;
  s.push({start, 0, 0});
  visited.insert(start);
  while (!s.empty()) {
    auto [node, max_len, dist] = s.top(); s.pop();
    if (node == end) return dist - max_len;

    for (auto& [next, weight] : graph[node]) {
      if (visited.count(next)) continue;

      visited.insert(next);
      s.push({next, max(max_len, weight), dist + weight});
    }
  }
  return -1;
}

int main() {
  cin >> N >> R1 >> R2;
  
  int u, v, w;
  while (cin >> u >> v >> w) {
    graph[u].push_back({v, w});
    graph[v].push_back({u, w});
  }

  if (R1 == R2 || graph[R1].empty()) {
    cout << 0 << '\n';
  } else {
    cout << dfs(R1, R2) << '\n';
  }
  return 0;
}
