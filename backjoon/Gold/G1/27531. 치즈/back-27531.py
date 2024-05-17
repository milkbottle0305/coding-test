import sys
input = sys.stdin.readline

def solution(datas):
    answer = 0
    visited = [False for i in range(len(datas) + 1)]
    datas.sort()
    groups = []
    for data in datas:
        answer += data[2]
        group = []
        num = data[1]
        if visited[num]:
            continue
        visited[num] = True
        group.append(num)
        next_num = datas[num - 1][1]
        while not visited[next_num]:
            visited[next_num] = True
            group.append(next_num)
            next_num = datas[next_num - 1][1]
        groups.append(group)

    for group in groups:
        dp = [[0, 0] for i in range(len(group))]
        dp[0][0] = datas[group[0] - 1][2]
        for index, cheese in enumerate(group[1:]):
            index += 1
            current_price = datas[cheese - 1][2]
            dp[index][0] = dp[index - 1][1] + current_price
            dp[index][1] = dp[index - 1][0] if dp[index - 1][0] > dp[index - 1][1] else dp[index - 1][1]
        first_not = dp[len(group) - 1][1]
    
        dp = [[0, 0] for i in range(len(group))]
        for index, cheese in enumerate(group[1:]):
            index += 1
            current_price = datas[cheese - 1][2]
            dp[index][0] = dp[index - 1][1] + current_price
            dp[index][1] = dp[index - 1][0] if dp[index - 1][0] > dp[index - 1][1] else dp[index - 1][1]
        first_yes = max(dp[len(group) - 1])

        answer -= max(first_not, first_yes)
    print(answer)

if __name__ == "__main__":
    N = int(input())
    datas = []
    for i in range(N):
        a, b, p = map(int, input().split())
        datas.append([a, b, p])

    solution(datas)