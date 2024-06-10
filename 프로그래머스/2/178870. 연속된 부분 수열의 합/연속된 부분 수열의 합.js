function solution(sequence, k) {
  var answer = [0, 0];
  var left = 0;
  var right = 0;
  var minLength = 1e9;
  var sum = 0;
  while (right <= sequence.length) {
    if (sum < k) {
      sum += sequence[right++];
    } else if (sum > k) {
      sum -= sequence[left++];
    } else {
      if (right - left < minLength) {
        minLength = right - left;
        answer[0] = left;
        answer[1] = right - 1;
      }
      sum -= sequence[left++];
    }
  }
  return answer;
}