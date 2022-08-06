// const ary = [1-100]; // one number is missing in sequence, find the missing number

// Solution
const missingNum = (arr) => {
  for (i = 1; i <= 10; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
};
const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(missingNum(arr));

// Solution 2
const missingNum2 = (arr) => {
  const n = 10;
  // IMPORTANT
  const mathTotal = (n * (n + 1)) / 2;
  const arrTotal = arr.reduce((acc, item) => acc + item, 0);
  return mathTotal - arrTotal;
};

console.log(missingNum2(arr));
