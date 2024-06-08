import sys
input = sys.stdin.readline

def solution(N: int, initial: list, goal: list):
    gap = []
    for i in range(N):
        if initial[i] == goal[i]:
            gap.append(False)
        else:
            gap.append(True)
    
    do = [True, True] + [False] * (N - 2)
    undo = [False, False] + [False] * (N - 2)
    
    count_do = 1
    count_undo = 0
    for i in range(1, N - 1):
        if do[i - 1] != gap[i - 1]:
            count_do += 1
            do[i - 1] = not do[i - 1]
            do[i] = not do[i]
            do[i + 1] = not do[i + 1]
        if undo[i - 1] != gap[i - 1]:
            count_undo += 1
            undo[i - 1] = not undo[i - 1]
            undo[i] = not undo[i]
            undo[i + 1] = not undo[i + 1]
    if do[N - 2] != gap[N - 2]:
        count_do += 1
        do[N - 2] = not do[N - 2]
        do[N - 1] = not do[N - 1]
    if undo[N - 2] != gap[N - 2]:
        count_undo += 1
        undo[N - 2] = not undo[N - 2]
        undo[N - 1] = not undo[N - 1]
    
    is_do_correct = do == gap
    is_undo_correct = undo == gap
    if is_do_correct and not is_undo_correct:
        print(count_do)
    elif not is_do_correct and is_undo_correct:
        print(count_undo)
    elif is_do_correct and is_undo_correct:
        print(min(count_do, count_undo))
    else:
        print(-1)
 
if __name__ == "__main__":
    N = int(input())
    initial = list(input().strip())
    goal = list(input().strip())
    solution(N, initial, goal)