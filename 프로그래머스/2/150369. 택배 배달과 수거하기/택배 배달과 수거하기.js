function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let deli = 0;
    let pick = 0;
    for(let i=n-1; i>=0; i--){
        deli += deliveries[i];
        pick += pickups[i];
        while(deli > 0 || pick > 0){
            deli -= cap;
            pick -= cap;
            answer += 2 * (i + 1);
        }
    }
    return answer;
}