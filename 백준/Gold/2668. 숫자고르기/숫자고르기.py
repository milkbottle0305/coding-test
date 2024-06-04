from collections import deque

def solution(N: int, graph: list):
    result = []
    for i in range(1, N + 1):
        visited = set()
        stack = deque([i])
        visited.add(i)
        while stack:
            node = stack.pop()
            for child in graph[node]:
                if child not in visited:
                    stack.append(child)
                    visited.add(child)
                elif i == child:
                    result.append(child)
    result.sort()
    print(len(result))
    for i in result:
        print(i)

if __name__ == "__main__":
    N = int(input())
    graph = [[] for _ in range(N + 1)]
    for i in range(1, N + 1):
        graph[int(input())].append(i)
    solution(N, graph)