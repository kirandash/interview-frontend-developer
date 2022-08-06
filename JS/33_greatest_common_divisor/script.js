// greatest common divisor of two numbers
// 4,6 === 2
// 2,3 === 1

/**
 * Pseudocode
 * Find min and max of both numbers
 * If max is divisible by min then min is GCD
 * else start from mid of max and keep going down till 0 to check all numbers and find num divisible by max and min
 */
 const findGCD = (num1, num2) => {
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    if (max % min === 0) {
      return min;
    } else {
      const mid = Math.floor((max + min) / 2);
      for (let i = mid; i >= 0; i--) {
        if (max % i === 0 && min % i === 0) {
          return i;
        }
      }
    }
    return -1;
  };
  
  console.log(findGCD(4, 6));
  console.log(findGCD(2, 3));
  