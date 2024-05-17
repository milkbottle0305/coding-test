import sys
input = sys.stdin.readline

def dfs(pos):
    dp[pos] = 1
    for i in adj_list[pos]:
        if dp[i] == 0:
            dp[pos] += dfs(i)
    result += int(N * (N - 1) / 2 - (N - dp[pos]) * (N - dp[pos] - 1) / 2)
    return dp[pos]

if __name__ == "__main__":
    N = int(input())
    adj_list = {}
    dp = [0] * (N + 1)
    result = 0
    for i in range(N-1):
        x, y = map(int, input().split())
        if x not in adj_list:
            adj_list[x] = []
        if y not in adj_list:
            adj_list[y] = []

        adj_list[x].append(y)
        adj_list[y].append(x)

    dfs(1)

    print(int(result - (N * (N - 1) / 2)))