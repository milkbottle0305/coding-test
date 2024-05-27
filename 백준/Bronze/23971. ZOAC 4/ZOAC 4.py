def solution(H, W, N, M):
    height_count = (H // (N + 1)) + (1 if  (H % (N + 1)) else 0)
    width_count = (W // (M + 1)) + (1 if  (W % (M + 1)) else 0)
    print(height_count * width_count)

if __name__ == "__main__":
    H, W, N, M = map(int, input().split())
    solution(H, W, N, M)