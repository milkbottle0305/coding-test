function solution(cards) {
    var answer = 0;
    let visited = Array(cards.length).fill(false);
    const group = [];
    for (let i=0;i<cards.length;i ++){
        if(visited[i] === true) continue;
        const stack = [i];
        visited[i] = true;
        const temp = [i];
        while(stack.length){
            const x = stack.pop();
            const nx = cards[x] - 1;
            if(visited[nx] === false){
                stack.push(nx);
                visited[nx] = true;
                temp.push(nx);
            }
        }
        group.push(temp);
    }
    if (group.length >= 2){
        group.sort((a ,b) => (b.length - a.length));
        answer = group[0].length * group[1].length;
    } else {
        answer = 0;
    }
    return answer;
}