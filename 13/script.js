(function(){
    let x = "hi";
    // Ouput "ih"
    const reverseString = (str) => { return str.split("").reverse().join(""); }
    console.log(reverseString(x));
    console.log(reverseString('Variety'));
})();