(function(){
    // 39. call, apply and bind()
    // All three are used to attach method to an object with some properties
    // Call and apply are same - they execute a function by taking another object as reference. call takes comma separated values while apply takes array of values
    // bind returns a function and need to be executed separately
    let myObj = { num: 2 };
    // Function to be attached to above object
    let sum = function(a, b, c){
        return this.num + a + b + c;
    }
    // Call : fn.call(obj, args) - executes and returns value
    console.log(sum.call(myObj, 1,2,3));
    
    // apply : fn.apply(obj, [args]) - executes and returns value
    console.log(sum.apply(myObj, [1,2,3]));
    sum.bind(myObj);

    // bind : fn.apply(obj) - returns a function, need to call separately
    let bindVar = sum.bind(myObj);
    console.log(bindVar(1,2,3));
})();