def solution(N, datas):
    minimum = 1e12
    case_liquid = []

    first = 0
    second = N - 1
    min_liquid = abs(datas[first] + datas[second])
    first_liquid = datas[first]
    second_liquid = datas[second]
    while first < second:
        sum_liquid = datas[first] + datas[second]
        if min_liquid >= abs(sum_liquid):
            min_liquid = abs(sum_liquid)
            first_liquid = datas[first]
            second_liquid = datas[second]
        if sum_liquid < 0:
            first += 1
        else:
            second -= 1

    print(f"{first_liquid} {second_liquid}")

if __name__ == "__main__":
    N = int(input())
    datas = list(map(int, input().split()))
    solution(N, datas)