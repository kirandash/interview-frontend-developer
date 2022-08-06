// Find the length of an integer without converting it into a string
const lenOfNum = (num) => {
    if (isNaN(num)) return false;
    let length = 1;
    while (num >= 10) {
      length++;
      num = Math.floor(num / 10);
    }
    return length;
  };
  
  console.log(lenOfNum(9999));
  console.log(lenOfNum(0));
  console.log(lenOfNum('t'));
  
  // Solution 2 - doesn't work for 0
  const lenOfNum2 = (num) => {
    if (isNaN(num)) return false;
    if (num === 0 || num === 1) return 1;
    return Math.ceil(Math.log10(num));
  };
  console.log(lenOfNum2(9999));
  console.log(lenOfNum2(0));
  console.log(lenOfNum2(1));
  console.log(lenOfNum2(2));
  console.log(lenOfNum2('t'));
  