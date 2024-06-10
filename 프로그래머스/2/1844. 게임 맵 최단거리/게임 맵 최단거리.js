function solution(maps) {
    const maxX = maps.length;
    const maxY = maps[0].length;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const queue = [[0, 0]];
    while (queue.length) {
        [x, y] = queue.shift();
        for(let i=0; i<4; i++){
            nx = x + dx[i];
            ny = y + dy[i];
            
            if(0<=nx && nx < maxX && 0<=ny && ny < maxY && maps[nx][ny] === 1) {
                queue.push([nx, ny]);
                maps[nx][ny] = maps[x][y] + 1
            }
        }
    }
    return maps[maxX - 1][maxY - 1] === 1 ? -1 : maps[maxX - 1][maxY - 1];
}