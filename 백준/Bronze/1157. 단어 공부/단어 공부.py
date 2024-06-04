def solution(data: str):
    data = data.upper()
    letter_counts = dict()
    for letter in data:
        if letter in letter_counts:
            letter_counts[letter] += 1
        else:
            letter_counts[letter] = 1
    sorted_letter_counts = sorted(letter_counts.items(), key=lambda item:item[1], reverse=True)
    if len(sorted_letter_counts) > 1 and sorted_letter_counts[0][1] == sorted_letter_counts[1][1]:
        print('?')
    else:
        print(sorted_letter_counts[0][0])
if __name__ == "__main__":
    data = input()
    solution(data)