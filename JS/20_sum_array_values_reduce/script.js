(function(){
    let ary = [1,2,5,7];
    // Sum ary
    let len = ary.length;
    let total = ary.reduce(function(sum, val, idx, array){
        return sum += val;
    }, 0);
    console.log(total);
})();