(function(){
    // 32. Convert number to hex
    let x = 23457;
    console.log(x.toString(16).toUpperCase());
    // 16 is base here

    // Convert hex to number
    let y = 'FF';
    console.log(parseInt(y, 16));

    // Convert to binary
    console.log(x.toString(2));
    // 2 is base here

    console.log(x.toString(10));
    // 10 is base here
})();