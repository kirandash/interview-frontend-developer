(function(){
    // 31. Method chaining in object
    let x = {
        a(){
            console.log('a called');
            return this;
        },
        b(){
            console.log('b called');
            return this;
        }
    };
    x.a().b().a().a();
})();