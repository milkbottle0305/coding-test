def solution(N, M, T, datas):
    for i in range(T):
        mask = [[0 for _ in range(M)] for _ in range(N)]
        cleaner = []
        for i in range(N):
            for j in range(M):
                if datas[i][j] == -1:
                    cleaner.append((i, j))
                elif datas[i][j] != 0:
                    subtract = datas[i][j] // 5
                    # 상 하 좌 우 탐색
                    if i - 1 >= 0 and datas[i - 1][j] != -1:
                        mask[i - 1][j] += subtract
                        mask[i][j] -= subtract
                    if i + 1 < N and datas[i + 1][j] != -1:
                        mask[i + 1][j] += subtract
                        mask[i][j] -= subtract
                    if j - 1 >= 0 and datas[i][j - 1] != -1:
                        mask[i][j - 1] += subtract
                        mask[i][j] -= subtract
                    if j + 1 < M and datas[i][j + 1] != -1:
                        mask[i][j + 1] += subtract
                        mask[i][j] -= subtract
        for i in range(N):
            for j in range(M):
                datas[i][j] += mask[i][j]
        # 위쪽공기청정기 반시계
        for i in range(cleaner[0][0] - 1, 0, -1):
            datas[i][0] = datas[i - 1][0]
        for i in range(0, M - 1, 1):
            datas[0][i] = datas[0][i + 1]
        for i in range(0, cleaner[0][0], 1):
            datas[i][M - 1] = datas[i + 1][M - 1]
        for i in range(M - 1, 1, -1):
            datas[cleaner[0][0]][i] = datas[cleaner[0][0]][i - 1]
        datas[cleaner[0][0]][1] = 0
        # 아래쪽공기청정기 시계
        for i in range(cleaner[1][0] + 1, N - 1, 1):
            datas[i][0] = datas[i + 1][0]
        for i in range(0, M - 1, 1):
            datas[N - 1][i] = datas[N - 1][i + 1]
        for i in range(N - 1, cleaner[1][0], -1):
            datas[i][M - 1] = datas[i - 1][M - 1]
        for i in range(M - 1, 1, -1):
            datas[cleaner[1][0]][i] = datas[cleaner[1][0]][i - 1]
        datas[cleaner[1][0]][1] = 0

    # 미세먼지 합
    answer = 0
    for i in range(N):
        for j in range(M):
            answer += datas[i][j]

    return answer + 2

if __name__ == "__main__":
    N, M, T = map(int, input().split())
    datas = []
    for i in range(N):
        datas.append(list(map(int,input().split())))
    print(solution(N, M, T,  datas))