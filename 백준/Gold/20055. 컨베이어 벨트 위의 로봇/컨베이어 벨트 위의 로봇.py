from collections import deque

def solution(N: int, K: int, A_list: deque) :
    result = 0
    robot_list = deque([False] * N)
    while True:
        A_list.rotate(1)
        robot_list.rotate(1)
        robot_list[-1] = False
        for i in range(N - 2, -1, -1):
            if A_list[i + 1] >= 1 and robot_list[i + 1] == False and robot_list[i] == True:
                robot_list[i + 1] = True
                robot_list[i] = False
                A_list[i + 1] -= 1
        robot_list[-1] = False
        if A_list[0] >= 1:
            robot_list[0] = True
            A_list[0] -= 1
        result += 1
        if A_list.count(0) >= K:
            break
    print(result)

if __name__ == "__main__":
    N, K = map(int, input().split())
    A_list = deque(map(int, input().split()))
    solution(N, K, A_list)