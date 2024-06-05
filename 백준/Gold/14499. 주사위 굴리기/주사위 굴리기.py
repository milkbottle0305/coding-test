import sys
from collections import deque
input = sys.stdin.readline

def solution(N: int, M: int, x: int, y: int, board: list, command_list: list):
    dx = [0, 0, -1, 1]
    dy = [1, -1, 0, 0]
    dice = [0, 0, 0, 0, 0, 0] # dice[0] 밑칸 dice[1] 뒷칸 dice
    if board[x][y] != 0:
        dice[0] = board[x][y]
        board[x][y] = 0
    for cmd in command_list:
        if cmd == 1 and 0 <= x + dx[0] < N and 0 <= y + dy[0] < M:
            x = x + dx[0]
            y = y + dy[0]
            tmp1 = dice[0]
            tmp2 = dice[2]
            tmp3 = dice[5]
            tmp4 = dice[3]
            dice[0] = tmp2
            dice[2] = tmp3
            dice[5] = tmp4
            dice[3] = tmp1
            if board[x][y] != 0:
                dice[0] = board[x][y]
                board[x][y] = 0
            else:
                board[x][y] = dice[0]
            print(dice[5])
        elif cmd == 2 and 0 <= x + dx[1] < N and 0 <= y + dy[1] < M:
            x = x + dx[1]
            y = y + dy[1]
            tmp1 = dice[0]
            tmp2 = dice[3]
            tmp3 = dice[5]
            tmp4 = dice[2]
            dice[0] = tmp2
            dice[3] = tmp3
            dice[5] = tmp4
            dice[2] = tmp1
            if board[x][y] != 0:
                dice[0] = board[x][y]
                board[x][y] = 0
            else:
                board[x][y] = dice[0]
            print(dice[5])
        elif cmd == 3 and 0 <= x + dx[2] < N and 0 <= y + dy[2] < M:
            x = x + dx[2]
            y = y + dy[2]
            tmp1 = dice[0]
            tmp2 = dice[4]
            tmp3 = dice[5]
            tmp4 = dice[1]
            dice[0] = tmp2
            dice[4] = tmp3
            dice[5] = tmp4
            dice[1] = tmp1
            if board[x][y] != 0:
                dice[0] = board[x][y]
                board[x][y] = 0
            else:
                board[x][y] = dice[0]
            print(dice[5])
        elif cmd == 4 and 0 <= x + dx[3] < N and 0 <= y + dy[3] < M:
            x = x + dx[3]
            y = y + dy[3]
            tmp1 = dice[0]
            tmp2 = dice[1]
            tmp3 = dice[5]
            tmp4 = dice[4]
            dice[0] = tmp2
            dice[1] = tmp3
            dice[5] = tmp4
            dice[4] = tmp1
            if board[x][y] != 0:
                dice[0] = board[x][y]
                board[x][y] = 0
            else:
                board[x][y] = dice[0]
            print(dice[5])
                
if __name__ == "__main__":
    N, M, x, y, K = map(int, input().split())
    board = []
    command = []
    for i in range(N):
        board.append(list(map(int, input().split())))
    command_list = list(map(int, input().split()))
    solution(N, M, x, y, board, command_list)