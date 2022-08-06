function ensure(value) {
    // Your code goes here
    if(value === undefined){
        throw new Error('No value assigned!');
    }
    return value;
}

try {
    console.log(ensure(25));
    console.log(ensure([1,2,3,4]));
    console.log(ensure());
} catch(err) {
    console.log(err);
}