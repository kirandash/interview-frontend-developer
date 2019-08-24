(function(){
    // const ary = [1-100]; // one number is missing
    // Solution
    const ary = [1,2,3,4,5,6,7,9,10];
    const final = 10;
    for(i=1; i<= final; i++){
        if(ary.indexOf(i) === -1) console.log(i);
    }

    // Solution 2 with algorithm
    const ary2 = [1,2,3,4,5,6,7,9,10];
    let len = ary2.length;
    let n = 10;
    let total = n*(n+1)/2;
    let aryTotal = ary2.reduce((sum, val) => sum + val);
    console.log(total - aryTotal);
})();