(function(){
    const obj = {
        x: 1,
        getX(){
            const inner = function(){
                console.log(this.x);
            }
            inner();
        }
    };
    obj.getX(); // Output?

    //Answer: undefined. Fix
    const obj1 = {
        x: 1,
        getX(){
            const inner = () => {
                console.log(this.x); // Works because arrow does not have it's own this. It takes this from parent
            }
            inner();
        }
    };
    obj1.getX(); // 1

    //Answer: undefined. Fix - Solution 2 
    const obj2 = {
        x: 1,
        getX(){
            that = this; // lexical scoping
            const inner = function(){
                console.log(that.x); // Works because arrow does not have it's own this. It takes this from parent
            }
            inner();
        }
    };
    obj2.getX(); // 1

    //Answer: undefined. Fix - Solution 3
    const obj3 = {
        x: 1,
        getX(){
            const inner = function(){
                console.log(this.x); // Works because arrow does not have it's own this. It takes this from parent
            }
            inner.call(this);
        }
    };
    obj3.getX(); // 1

})();