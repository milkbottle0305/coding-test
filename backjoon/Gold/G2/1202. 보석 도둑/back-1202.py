import sys
import heapq
input = sys.stdin.readline

def solution(n, k, jem_list, c_list):
    result = 0
    pq = []
    j = 0
    for i in range(k):
        while j < n and c_list[i] >= jem_list[j][0]:
            heapq.heappush(pq, -jem_list[j][1])
            j += 1
        if len(pq) != 0:
            result += (-heapq.heappop(pq))

    print(result)

if __name__ == "__main__":
    n, k = map(int, input().split())
    jem_list = []
    c_list = []
    for i in range(n):
        m, v = map(int, input().split())
        jem_list.append((m, v))
    jem_list.sort()
    for i in range(k):
        c = int(input())
        c_list.append(c)
    c_list.sort()
    solution(n, k, jem_list, c_list)