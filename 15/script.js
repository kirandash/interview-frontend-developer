(function(){
    let x = [1,2];
    // x.print(); // return 1,2
    
    // Solution 1: Array.prototype and forEach
    Array.prototype.print = function(){
        // console.log(this); //this returns a reference to the array itself
        let len = this.length;
        let delimiter = '';
        let output = '';
        this.forEach(function(val, idx, arr){
            delimiter = idx === len - 1 ? '' : ',';
            output += val + delimiter;
        });
        return output;
    }
    console.log(x.print());

    // Solution 2: Array.prototype and join()
    Array.prototype.print2 = function(){
        return this.join(",");
    }
    console.log(x.print2());

    // Solution 3: Array.prototype and toString()
    Array.prototype.print3 = function(){
        return this.toString();
    }
    console.log(x.print3());
})();