function solution(array) {

    let map = new Map();
    
    // map의 key와 value 세팅
    for (i of array)
        map.set(i, (map.get(i)||0) + 1);	// or연산자는 참이 먼저 나온 값을 반환한다.
    
    // value 값으로 오름차순
    ar = [...map].sort((a,b)=>b[1]-a[1]);  
    console.log(ar);
    
    // 원소가 한 개일경우 바로 ar[0][0] return
    // ar[0][1] > ar[1][1] : 최빈값이 한 개일 경우 ar[0][0] return
    return ar.length === 1 || ar[0][1] > ar[1][1] ? ar[0][0] : -1;
}