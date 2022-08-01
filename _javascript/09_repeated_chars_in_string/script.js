// Repeated characters in a string
(function(){
    function repeatation(char, string){
        // Repeated characters in a string
        let input = string.toString().toLowerCase().split("");
        let count = 0;
        for(i=0; i<input.length; i++){
            if(input[i] === char.toLowerCase()) count++;
        }
        return count;
    }
    console.log(repeatation('S', 'Salsas!'));
})();