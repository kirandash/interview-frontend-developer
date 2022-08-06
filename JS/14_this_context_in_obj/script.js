// Modify the object below to console log a and b with obj.getA().getB();
let obj = {
    a: 1,
    b: 2,
    getA() {
      console.log(this.a);
    },
    getB() {
      console.log(this.b);
    },
  };
  
  // obj.getA().getB(); this should work
  
  // Solution:
  let obj1 = {
    a: 1,
    b: 2,
    getA() {
      console.log(this.a);
      return this;
    },
    getB() {
      console.log(this.b);
    },
  };
  
  obj1.getA().getB();
  