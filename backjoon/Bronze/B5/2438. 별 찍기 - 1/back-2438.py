def solution(N):
    for i in range(N):
        for j in range(i + 1):
            print('*', end='')
        print()
        
if __name__ == "__main__":
    N = int(input())
    solution(N)