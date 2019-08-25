(function(){
    // Algorithm
    console.log(f(1)(2)(3)); // 9
    console.log(f(2)(2)(1)); // 4
    console.log(f(2,2,1)); // 4
    f(); // 0
    // Solution
    // Algorithm: (a + b) * c
    function f(a,b,c){
        if(b === undefined && c === undefined){
            return function(d, e){
                if(e === undefined){
                    return function(f){
                        return (a+d) * f;
                    }
                }
                return (a+d) * e;
            }
        }
        return (a+b)*c;
    }
})();