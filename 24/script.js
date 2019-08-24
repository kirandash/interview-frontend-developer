(function(){
    // Cash register - money exchange
    const til = {
        penny : 12,
        nickel: 10,
        dime: 2,
        quarter: 12,
        dollar: 30
    };
    // Give exact currency for 20.47
    // Solution
    // First store equivalent cents in an object
    const value = {
        penny : 1,
        nickel: 5,
        dime: 10,
        quarter: 25,
        dollar: 100
    };
    function giveChange(total){
        // First lets get cent total
        let totalInCents = total * 100; // 2047
        let onlyCents = totalInCents % value.dollar; // 47
        let dollar = totalInCents - onlyCents; // 2000

        // Incomplete
        let arr = [];
        for(let key in til){
            arr.push(til[key]);
        }
        console.log(arr);
        console.log(Math.max.apply(null, arr));

    }
    giveChange(20.47);
})();