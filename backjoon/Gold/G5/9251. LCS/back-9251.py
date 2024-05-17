def solution(first, second):
    length_first = len(first)
    length_second = len(second)
    dp = [[0 for _ in range(length_second + 1)] for _ in range(length_first + 1)]
    for i in range(1, length_first + 1):
        for j in range(1, length_second + 1):
            if first[i - 1] == second[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[-1][-1]

    
if __name__ == "__main__":
    first = input()
    second = input()
    print(solution(first, second))