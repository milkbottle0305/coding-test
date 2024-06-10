function solution(numbers) {
    let answer;
    let nums = numbers.split(''); 
    
    const primeSet = new Set();
    
    const isPrimeNum = (num) => {
         if (num <= 1) return false;
         if (num === 2) return true;
         for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
         }
         return true;
    }
    
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed + arr[i];
                const copyArr = arr.slice();
                copyArr.splice(i, 1);
                
                if (!primeSet.has(parseInt(newFixed)) && isPrimeNum(parseInt(newFixed))){
                    primeSet.add(parseInt(newFixed))
                }
                getPermutation(copyArr, newFixed);
            }
        }
    }
    
    getPermutation(nums, '');
     
    answer = primeSet.size
    return answer;
}