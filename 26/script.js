(function(){
    // 26. Find the length of an integer without converting it into a string
    let x = 1234;
    // ouput = 4
    
    // Soution 1 : By converting to string
    console.log(x.toString().length);
    
    // Solution 2 : Without converting to string Math.ceil and Math.log10
    console.log(Math.ceil(Math.log10(x + 1)));

    // Solutin 3 : with division by 10
    function findLength(number){
        let length = 0;
        while(Math.floor(number) > 0){
            number = number/10;
            length++;
        }
        return length;
    }
    console.log(findLength(x));

    // Solution 4: Binary search
    // Max length in JS is 16
    let num = 123456;
    function findLength2(number){
        let maxJSnumber = Number.MAX_SAFE_INTEGER;
        // Incomplete
    }
    console.log(findLength2(num));
})();