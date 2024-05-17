def solution(N, M, datas):
    dx = [0, 0, -1, 1]
    dy = [1, -1, 0, 0]
    # distance 왼쪽은 블럭을 안 깬 숫자, 오른쪽은 블럭을 깬 숫자
    visited = [[[0, 0] for _ in range(M)] for _ in range(N)]  # [x][y][부쉈을 때인지 아닌지] 처음일 때는 부술수 o, 아니면 x

    bfs_queue = []

    # x y
    bfs_queue.append((0, 0, True)) #x,y,canBroken
    visited[0][0] = [1, 0]
    while len(bfs_queue) != 0:
        x, y,canBroken = bfs_queue.pop(0)
        canBrokenIndex =  1 if canBroken else 0
        currDistance = visited[x][y][canBrokenIndex]
        # nonbreak_distance = visited[x][y][0]
        # break_distance = visited[x][y][1]

        canBroken = visited[x][y]
        if x == N - 1 and y == M - 1:
            # return nonbreak_distance if nonbreak_distance > 0 else break_distance
            return currDistance
        for i in range(4):
            new_x = x + dx[i]
            new_y = y + dy[i]

            if 0 <= new_x < N and 0 <= new_y < M:
                if datas[new_x][new_y] == False:
                    visited[new_x][new_y][canBrokenIndex] = currDistance + 1
                    bfs_queue.append((new_x,new_y,canBroken))
                elif datas[new_x][new_y] == True and canBroken:
                    visited[new_x][new_y][1] = currDistance + 1
                    bfs_queue.append((new_x,new_y,False))



                    # if nonbreak_distance == 0: 
                    #     visited[new_x][new_y] = [0, break_distance + 1]
                    # else:
                    #     visited[new_x][new_y] = [nonbreak_distance + 1, 0]
                #     bfs_queue.append((new_x, new_y))
                # elif nonbreak_distance != 0:
                #     visited[new_x][new_y] = [0, nonbreak_distance + 1] 
                #     bfs_queue.append((new_x, new_y))
    return -1

if __name__ == "__main__":
    N, M = map(int, input().split())
    datas = [[False for _ in range(M)] for _ in range(N)]
    for i in range(N):
        data = input()
        for j in range(M):
            if data[j] == '1':
                datas[i][j] = True
    
    print(solution(N, M, datas))