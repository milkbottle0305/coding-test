def solution(board):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    queue = []

    for i in range(N):
        for j in range(M):
            if board[i][j] == 'R':
                red = (i, j)
            elif board[i][j] == 'B':
                blue = (i, j)

    queue.append((red, blue, 0))
    

if __name__ == "__main__":
    N, M = map(int, input().split())
    board = [list(input()) for _ in range(N)]
    solution(board)