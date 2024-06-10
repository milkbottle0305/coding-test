function solution(numbers) {
    var answer = 0;
    const primeSet = new Set();
    const numberList = numbers.split("")
    let candidateList = [];
    for(let i =1;i<numbers.length+1;i++){
        candidateList = candidateList.concat(permutation(numberList,i));
    }
    const joinList = candidateList.map((candidate) => parseInt(candidate.join("")));
    console.log(joinList);
    joinList.forEach((join) => {if(isPrime(join)) primeSet.add(join);})
    
    answer = primeSet.size;
    
    return answer;
}

function permutation(arr, num){
  const res = [];
  if(num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
    const permutations = permutation(rest, num-1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  })
  return res;
}



function isPrime(num) {
	if(num === 0 || num === 1) return false; 
 	for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
  		if(num % i === 0) return false;
	} 
    return true; 
}