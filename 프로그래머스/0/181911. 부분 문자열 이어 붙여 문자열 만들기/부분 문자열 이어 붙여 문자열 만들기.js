function solution(my_strings, parts) {
    var answer = '';
    let idx = 0;
    for(part of parts){
        answer += my_strings[idx].slice(part[0], part[1] + 1);
        idx++;
    }
    return answer;
}