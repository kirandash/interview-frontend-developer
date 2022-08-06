(function(){
    // Make your own promise function
    /*
        Promise:
        var promise = new Promise((resolve, reject) => {

        });
        promise.then({

        });
    */
   // Incomplete solution
   // https://medium.com/nerd-for-tech/implement-your-own-promises-in-javascript-68ddaa6a5409
   let MyPromise = function(fn) {
       fn();
       return { then: (onSuccess, onError) => {
        
       }};
   };

   var myPromise = new MyPromise((res, reject) => {
        if(){
            res(val);
        }else{
            reject(e);
        }
   });

})();