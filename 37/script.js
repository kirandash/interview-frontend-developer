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