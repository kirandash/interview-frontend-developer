(function(){
    // 40. Prototypal Inheritance Example
    let c1 = function(){
        this.pay = true;
    }
    c1.prototype.getPay = function(){
        // Call constructor
        c1.call(this);
        return this.pay;
    }
    let c2 = function(){
        this.salary = 1000;
    }
    c2.prototype = Object.create(c1.prototype); // Inherit c1 prototype to c2 prototype
    c2.prototype.getSalary = function(){
        c2.call(this);
        return this.salary;
    }
    let man1 = new c1();
    let man2 = new c2();
    console.log(man1.getPay());
    console.log(man2.getPay());
    console.log(man2.getSalary());
    // console.log(man1.getSalary());

    // Main Object - prototype
    Object.prototype.getName = function(name){
        return name;
    }
    console.log(man1.getName('Kiran'));
    console.log(man2.getName('Kiran'));
})();