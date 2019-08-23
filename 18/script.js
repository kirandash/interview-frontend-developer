(function(){
    const a = [1,2,5,7,9];
    const b = [2,5,7,12,100];
    // const c = [1,2,2,5,5,7,7,12,100];

    // Solution 1 : Concat and sort
    let c = b.concat(a).sort(function(a,b){
        return a - b; // Ascending sort
    }); // Note: Sorting will take much time if large arrays - performance
    console.log(c);
    
    // Solution 2 : Faster way
})();