(function(){
    // Get Max and Min sum combinations in an array after removing each item
    const arr = [1,2,3,4];
    // If 1 removed - sum = 9, for 2: 8, 3: 7, 4: 6
    // array = [9,8,7,6]
    // output = [6,9]
    // Solution
    let sumArray = [];
    arr.forEach((val,idx, array) => {
        // Remove current index
        let clone = [...array];
        clone.splice(idx, 1);
        // Sum remaining items in array
        let total = clone.reduce(function(sum, val, idx, arraynew){
            return sum + val;
        }, 0);
        sumArray.push(total);
    });
    let output = [];
    console.log(sumArray); // [9,8,7,6]
    output.push(Math.min.apply(null, sumArray), Math.max.apply(null, sumArray));
    console.log(output); // [6,9]

    // Solution 2: Minimum and maximum number can be found amount by removing the max and min number respectively and making a sum of it all
    let minNumber = Math.min.apply(null, arr);
    let maxNumber = Math.max.apply(null, arr);
    let arraySum = arr.reduce(function(acc, val){
        return acc + val;
    }, 0);
    let minSum = arraySum - maxNumber;
    let maxSum = arraySum - minNumber;
    let output2 = [];
    output2.push(minSum, maxSum);
    console.log(output2);
})();