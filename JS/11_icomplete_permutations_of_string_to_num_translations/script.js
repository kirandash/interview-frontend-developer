(function(){
    function findTranslations(number){
        // 11. Find all permutations of number to string translation
        let charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let combindations = [];
        let output = [];
        let arr = number.toString().split("");
        let len = arr.length;
        for(let i=0; i<len; i++){
            if(charArray[arr[i] - 1]) {
                output.push(charArray[arr[i] - 1]);
            }else{
                output.length = 0;
                break;
            }
        }
        if(output.length) combindations.push(output.join(""));
        return combindations;
    }
    console.log(findTranslations(12258));
    // abbeh 1,2,2,5,8
    // aveh 1,22,5,8
    // abyh 1,5,25,8
    // lbeh 12,2,5,8
    // lyh 12,25,8
})();