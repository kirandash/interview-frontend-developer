(function(){
    // 33. Find the greatest common divisor of two numbers
    // 4,6 === 2
    // 2,3 === 1
    function findDivisor(num1, num2){
        let min = Math.min(num1, num2);
        let max = Math.max(num1, num2);
        let divisor = 1;
        // Algorithm: If max number is divisible by min number then min number is greatest common divisor
        if(max % min == 0) {
            return min; // 5,15 => 5
        }else{
            // Algorithm: Else go to the mid of maximum number and start decreasing the numbers from there one by one. wherever both the number are divisible - return it
            let mid = Math.floor(max/2);
            for(let i=mid; i>0; i--){
                if(max%i == 0 && min%i == 0){
                    return i;
                }
            }
        }
        
        return divisor;
    }
    console.log(findDivisor(4, 6));
    console.log(findDivisor(2, 3));
    console.log(findDivisor(30, 20));
})();