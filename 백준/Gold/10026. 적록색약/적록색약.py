import sys
from collections import deque
input = sys.stdin.readline

def solution(N, picture):
    result = 0

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    visit = [[False for _ in range(N)] for _ in range(N)]

    for i in range(N):
        for j in range(N):
            if visit[i][j] == True:
                continue
            q = deque()
            q.append((i, j))
            visit[i][j] = True
            while(q):
                x, y = q.popleft()
                color = picture[x][y]
                for k in range(4):
                    nx = x + dx[k]
                    ny = y + dy[k]
                    if 0 <= nx < N and 0 <= ny < N and not visit[nx][ny]:
                        ncolor = picture[nx][ny]
                        if color == ncolor:
                            visit[nx][ny] = True
                            q.append((nx, ny))
            result += 1
    
    print(result)

if __name__ == "__main__":
    N = int(input())
    normal_picture = []
    abnormal_picture = []
    for i in range(N):
        row = input().rstrip()
        normal_picture.append(row)
        abnormal_picture.append(row.replace('G', 'R'))
    solution(N, normal_picture)
    solution(N, abnormal_picture)