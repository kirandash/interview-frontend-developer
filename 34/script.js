(function(){
    // n kids are sitting in a circle
    // k toys available to distribute
    // i position to start from
    // who will get last toy?
    // 3,5,1 => 2
    function lastToy(kids, toys, start){
        if(toys > kids){
            return start + (toys % kids) - 1;
        }else{
            return start + kids - 1;
        }
    }
    console.log(lastToy(3,6,3));
})();