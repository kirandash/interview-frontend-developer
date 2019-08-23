(function(){
    let x = {
        a: {
            b: {
                c: 1
            }
        }
    }
    console.log(x.a.b.c); // 1
    // Create a clone object so that clone.a.b.c = 2; does not effect x.a.b.c
    // Answer
    const clone = Object.assign({}, x);
    clone.a.b.c = 2;
    console.log(clone.a.b.c);
    console.log(x.a.b.c); // This becomes 2 because Object.assign only clones till one level. We need to fix this by making a deep clone
    let x2 = {
        a: {
            b: {
                c: 1
            }
        }
    }
    console.log(x2.a.b.c);
    const clone2 = JSON.parse(JSON.stringify(x2)); // Once stringified, there is no more reference and then we parse it again
    clone2.a.b.c = 3;
    console.log(clone2.a.b.c);
    console.log(x2.a.b.c);
})();