(function(){
    // Write a Function to detect a palindrome i.e. a string spelled same from both forward and backward, example: 'level'
    function checkPalindrome(value){
        let string = value.toString();
        let reverseString = string.split("").reverse().join("");
        return string === reverseString ? true : false;
    }
    console.log(checkPalindrome("level"));
    console.log(checkPalindrome("test"));
    console.log(checkPalindrome("12321"));
    console.log(checkPalindrome(12321));
    console.log(checkPalindrome(12322));
})();