def solution(S, T):
    if len(S) == len(T):
        if S == T:
            yield 1
        else:
            yield 0
    elif len(S) < len(T):
        if T[len(T) - 1] == "A":
            T1 = T[0: len(T) - 1]
            yield from solution(S, T1)
        if T[0] == "B":
            T2 = T[1:]
            T2 = T2[::-1]
            yield from solution(S, T2)
        yield 0
    else:
        yield 0

if __name__ == "__main__":
    S = input()
    T = input()
    for i in solution(S, T):
        if i == 1:
            print(1)
            exit()
    print(0)