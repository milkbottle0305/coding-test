function solution(r1, r2) {
    var answer = 0;
    let y1 = 0, y2 = 0;
    for(let i=1;i<=r2;i++)
    {
        y2 = Math.sqrt(Math.pow(r2, 2) - Math.pow(i, 2));
        y1 = Math.sqrt(Math.pow(r1, 2) - Math.pow(i, 2));
        if(isNaN(y1)) y1 = 0;
        answer += ((Math.floor(y2) - Math.ceil(y1)) + 1);
    }
    return answer*4;
    return answer;
}