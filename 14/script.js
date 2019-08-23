(function(){
    let obj = {
        a:1,
        b:2,
        getA(){
            console.log(this.a);
        },
        getB(){
            console.log(this.b);
        }
    }
    // obj.getA().getB();
    // Modify the object above to console log a and b with obj.getA().getB();
    let obj1 = {
        a:1,
        b:2,
        getA(){
            console.log(this.a);
            return this; // this now has access point of object again
        },
        getB(){
            console.log(this.b);
        }
    }
    obj1.getA().getB();
})();