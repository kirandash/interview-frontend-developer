(function(){
    // Sol 1: Using for in loop
    let x = {
        a: 1,
        b: 2
    };
    // Output: arr = [1,2]
    let arr = [];
    for(key in x){
        if(Object.prototype.hasOwnProperty.call(x, key))
        arr.push(x[key]);
    }
    console.log(arr);

    // Sol 2: Using entries (Incomplete)
    const arr2 = Object.entries(x);
    console.log(arr2); //{[a,1], [b,2]}
})();