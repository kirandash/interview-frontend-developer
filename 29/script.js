(function(){
    // 29. sort an array with setTimeout
    const arr = [5,120,15,21];
    for(let i = 0; i<arr.length; i++){
        setTimeout(() => {
            console.log(`Index: ${i} , element: ${arr[i]}`);
        }, arr[i]);
    }
    // Index 0 , element 5, Index 2 , element 15, Index 3 element 21, Index 1 element 120
})();