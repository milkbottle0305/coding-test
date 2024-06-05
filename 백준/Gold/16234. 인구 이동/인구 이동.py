import sys
from collections import deque
input = sys.stdin.readline

def solution(N: int, L: int, R: int, board: list):
    result = 0
    while True:
        visited = set()
        is_move = False
        for i in range(N):
            for j in range(N):
                if (i, j) not in visited:
                    if bfs(i, j, N, L, R, board, visited):
                        is_move = True
        if is_move:
            result += 1
        else:
            break
    print(result)
                
def bfs(i: int, j: int, N: int, L: int, R: int, board: list, visited: set) -> bool:
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]
    temp_visited = set()
    q = deque([(i, j)])
    temp_visited.add((i, j))
    visited.add((i, j))
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and (nx, ny) not in visited:
                if L <= abs(board[x][y] - board[nx][ny]) <= R:
                    q.append((nx, ny))
                    temp_visited.add((nx, ny))
                    visited.add((nx, ny))
    if len(temp_visited) > 1:
        sum = 0
        for v in temp_visited:
            sum += board[v[0]][v[1]]
        avg = int(sum / len(temp_visited))
        for v in temp_visited:
            board[v[0]][v[1]] = avg
        return True
    else:
        return False

if __name__ == "__main__":
    N, L, R = map(int, input().split())
    board = []
    for _ in range(N):
        board.append(list(map(int, input().split())))
    solution(N, L, R, board)