(function(){
    // 27. this inside Object
    const profile = {
        name: 'Kiran Dash',
        getName: () => {
            console.log(this.name); // Arrow function does not have it's own this so it will go to parent which is window object in this case
        }
    }
    profile.getName();
    // output = ?
    // Solution 1: replace arrow function with normal function
    const profile1 = {
        name: 'Kiran Dash',
        getName: function(){
            console.log(this.name);
        }
    }
    profile1.getName();

    // Solution 2: without replacing fat arrow fn
    const profile2 = {
        name: 'Kiran Dash',
        getName: () => {
            console.log(this.name);
        }
    }
})();