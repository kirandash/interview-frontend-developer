// Inheritance with objects using a1.call(this, x)
const a = function (x) {
    // Constructor or Super
    this.x = x;
  };
  const b = function (y) {
    this.y = y;
  };
  const newB = new b('x', 'y');
  // newB.getX();
  // newB.getY(); // Use inheritance so that these returns x and y from b function
  
  const a1 = function (x) {
    // Constructor or Super
    this.x = x;
    this.getX = function () {
      return this.x;
    };
  };
  const b1 = function (x, y) {
    this.y = y;
    a1.call(this, x); // Executes a1 function and inherits everything from a1 and makes it available via this to b1
    this.getY = function () {
      return this.y;
    };
  };
  const newA1 = new a1('straight x');
  console.log(newA1.getX());
  
  const newB1 = new b1('inherited x', ' straight y');
  console.log(newB1.getX());
  console.log(newB1.getY());
  