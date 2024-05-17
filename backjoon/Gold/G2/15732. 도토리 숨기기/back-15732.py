def find(pos):
    cnt = 0
    for input in input_list:
        if pos < input[0]:
            continue
        end = min(pos, input[1])
        cnt += (end - input[0]) // input[2] + 1
    return cnt

if __name__ == "__main__":
    N, K, D = map(int, input().split())
    input_list = []
    for i in range(K):
        A, B, C = map(int, input().split())
        input_list.append([A, B, C])

    low = 0
    high = N
    while(low < high):
        mid = (low + high) // 2
        if(find(mid) < D):
            low = mid + 1
        else:
            high = mid

    print(low)