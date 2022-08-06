// Prototypal Inheritance
let c1 = function () {
    this.salary = 10000;
  };
  c1.prototype.getSalary = function () {
    c1.call(this);
    return this.salary;
  };
  
  let c2 = function () {
    this.bonus = 3000;
  };
  // Inheritance
  c2.prototype = Object.create(c1.prototype);
  
  c2.prototype.getBonus = function () {
    c2.call(this);
    return this.bonus;
  };
  
  let man1 = new c1();
  let man2 = new c2();
  console.log(man1.getSalary());
  console.log(man2.getBonus());
  console.log(man2.getSalary());
  