import sys
from collections import deque
input = sys.stdin.readline

def solution(N: int, datas: list):
    stack = deque()
    result = [0] * N
    for i, data in enumerate(datas):
        while stack:
            if data > stack[-1][1]:
                stack.pop()
            else:
                result[i] = stack[-1][0] + 1
                break
        stack.append((i, data))
    print(*result)

if __name__ == "__main__":
    N = int(input())
    datas = list(map(int, input().rstrip().split()))
    solution(N, datas)