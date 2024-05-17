from collections import deque

def solution(N, M, data):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    q = deque()
    q.append((0, 0))

    while q:
        current = q.popleft()
        x = current[0]
        y = current[1]
        if x == N - 1 and y == M - 1:
            break
        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y
            if 0 <= nx < N and 0 <= ny < M:
                if data[nx][ny] == 1:
                    q.append((nx, ny))
                    data[nx][ny] = data[x][y] + 1
    
    print(data[N - 1][M - 1])

if __name__ == "__main__":
    N, M = map(int, input().split())

    data = [list(map(int, input().rstrip())) for i in range(N)]
    solution(N, M, data)