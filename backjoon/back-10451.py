def solution(N, datas):
    answer = 0
    visited = [False for i in range(N+1)]
    for num in datas:
        if visited[num]:
            continue
        visited[num] = True
        next_num = datas[num - 1]
        answer += 1
        while not visited[next_num]:
            visited[next_num] = True
            next_num = datas[next_num - 1]
    
    print(answer)

if __name__ == "__main__":
    T = int(input())
    for i in range(T):
        N = int(input())
        data = list(map(int, input().split()))
        solution(N, data)