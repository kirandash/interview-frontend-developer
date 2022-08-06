// Sum method sum(2,3); sum(2)(3) where both will return 5.
// Currying
const curry = (fn) => {
  return function f1(...myArgs) {
    const arityLength = myArgs.length;
    if (arityLength >= fn.length) {
      return fn.apply(this, myArgs);
    } else {
      return function (...moreArgs) {
        return f1.apply(this, [...moreArgs, ...myArgs]);
      };
    }
  };
};

const sum = (a, b) => a + b;

const curriedSum = curry(sum);

console.log(curriedSum(2, 3));
console.log(curriedSum(2)(3));

// Simple
function sum2(a, b) {
  if (typeof b === 'undefined') {
    return function (c) {
      return a + c;
    };
  }
  return a + b;
}

console.log(sum2(2, 3));
console.log(sum2(2)(3));
