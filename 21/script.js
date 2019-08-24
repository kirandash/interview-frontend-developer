(function(){
    // add(1,2) and add(1)(2) should both return 3
    // Solution
    let add = function(a,b){
        if(b === undefined){
            return function(c) {
                return a + c;
            }
        }
        return a + b;
    }
    console.log(add(1,2));
    console.log(add(1)(2));
})();