(function(){
    // 28. Count of maximum numbers
    const x = [1,2,2,4,2,4];
    // Output: 2
    const maxNum = Math.max.apply(null, x);
    console.log(maxNum);
    let count = 0;
    x.forEach((val) => {
        if(val === maxNum) count++;
    })
    console.log(count);

    // Solution 2 with filter
    const maxVal = Math.max(...x);
    console.log(maxVal);
    let y = x.filter((val) => val === maxVal);
    console.log(y.length);
})();