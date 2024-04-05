# import copy

# def solution(N, M, datas):
#     home_points = []
#     chicken_points = []
#     for i in range(N):
#         for j in range(N):
#             if datas[i][j] == 1:
#                 home_points.append((i, j))
#             elif datas[i][j] == 2:
#                 chicken_points.append((i, j ))
    
#     total_chicken_distances = []
#     dfs(len(chicken_points), M, home_points, chicken_points, total_chicken_distances)
#     return min(total_chicken_distances)


# def dfs(depth, goal_depth, home_points, chicken_points, total_chicken_distances):
#     if depth == goal_depth:
#         chicken_distances = []
#         for home_point in home_points:
#             temp_distance = 99999
#             for chicken_point in chicken_points:
#                 temp_distance = min(temp_distance, abs(home_point[0] - chicken_point[0]) + abs(home_point[1] - chicken_point[1]))
#             chicken_distances.append(temp_distance)
#         total_chicken_distances.append(sum(chicken_distances))
#         return
#     for i in range(len(chicken_points)):
#         copy_chicken_points = copy.deepcopy(chicken_points)
#         copy_chicken_points.pop(i)
#         dfs(depth - 1, goal_depth, home_points, copy_chicken_points, total_chicken_distances)
    

# if __name__ == "__main__":
#     N, M = map(int, input().split())
#     datas = []
#     for i in range(N):
#         datas.append(list(map(int, input().split())))
#     print(solution(N, M, datas))

import itertools

def solution(N, M, datas):
    home_points = []
    chicken_points = []
    for i in range(N):
        for j in range(N):
            if datas[i][j] == 1:
                home_points.append((i, j))
            elif datas[i][j] == 2:
                chicken_points.append((i, j ))
    
    total_chicken_distances = []
    for sub_chicken_points in itertools.combinations(chicken_points, M):
        chicken_distances = []
        for home_point in home_points:
            temp_distance = 2100000000
            for chicken_point in sub_chicken_points:
                temp_distance = min(temp_distance, abs(home_point[0] - chicken_point[0]) + abs(home_point[1] - chicken_point[1]))
            chicken_distances.append(temp_distance)
        total_chicken_distances.append(sum(chicken_distances))
    
    return min(total_chicken_distances)


    

if __name__ == "__main__":
    N, M = map(int, input().split())
    datas = []
    for i in range(N):
        datas.append(list(map(int, input().split())))
    print(solution(N, M, datas))