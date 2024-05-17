# from collections import deque
# def solution(N, prices, money):
#     bfs_deque = deque()
#     candidates = []
#     for i in range(N):
#         if prices[i] <= money:
#             bfs_deque.append((str(i), money - prices[i]))
#             candidates.append(str(i))
#     while len(bfs_deque) != 0:
#         num, remain_money = bfs_deque.popleft()
#         if remain_money < 0:
#             continue
#         for i in range(N):
#             if prices[i] <= remain_money:
#                 if i == 0:
#                     if num == '0':
#                         continue
#                     bfs_deque.append((num + '0', remain_money - prices[i]))
#                     candidates.append(num + '0')
#                 else:
#                     for j in range(len(num) - 1, -1, -1):
#                         if num[j] > f'{i}':
#                             new_num = num[0:j + 1] + f'{i}' + num[j + 1:]
#                             bfs_deque.append((new_num, remain_money - prices[i]))
#                             candidates.append(new_num)
#     candidates.sort(reverse=True)
#     return candidates[0]

def solution(N, prices, money):
    # dp[돈] 은 돈에 해당하는 가장 큰 숫자를 저장함
    # ex dp[10]은 10원으로 가장 큰 숫자를 만드느 경우를 뜻함
    dp = [0 for _ in range(money + 1)]
    
    for i in range(N-1, -1, -1):
        # 방번호를 5 4 3 2 1 순으로 뽑음
        # 현재 뽑은 방번호의 가격
        price = prices[i]
        for j in range(price, money + 1):
            # dp[j] 현재 완성한 방 번호
            # i 현재 뽑은 방 번호의 숫자
            # dp[j - price] * 10 + i 현재 뽑은 방 번호에서 맨뒷자리를 버리고 그 자리에 현재 뽑은 방 번호의 숫자를 넣었을 때
            a = dp[j]
            b = i
            c =  dp[j - price] * 10 + i
            dp[j] = max(a, b, c)
    
    return dp[money]
 
    


if __name__ == "__main__":
    N = int(input())
    prices = list(map(int, input().split()))
    money = int(input())
    print(solution(N, prices, money))