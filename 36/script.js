(function(){
    // Make your own reduce function
    console.log([1,2,3].reduce((c,v) => c + v));
    // Solution
    Array.prototype.myReduce = function(fn, init){
        // If init is not defined, reduce uses the first item as init
        var b = 0;
        if(typeof init === 'undefined'){
            b = 1;
            init = this[0];
        }
        let current = init || 0;
        for(let i=b; i<this.length; i++){
            current = fn(this[i], current);
        }
        return current;
    }
    console.log([1,2,3].myReduce((c,v) => c + v,0));
    console.log([1,2,3,5].myReduce((c,v) => c + v));
})();