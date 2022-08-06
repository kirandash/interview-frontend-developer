// Get Max and Min sum combinations in an array after removing each item
const inputArr = [1, 2, 3, 4];
// If 1 removed - sum = 9, for 2: 8, 3: 7, 4: 6
// sum array = [9,8,7,6]
// output = [6,9]

// O(n^2), O(n)
const findSol = (arr) => {
  const sumArr = [];
  arr.forEach((item) => {
    sumArr.push(arr.reduce((acc, val) => acc + val) - item);
  });
  return [Math.min.apply(Math, sumArr), Math.max.apply(Math, sumArr)];
};

console.log(findSol(inputArr));

// O(n)
/**
 * Pseudocode
 * Find max number
 * Find min number
 * Find array sum
 * max sum = arr sum - min number
 * min sum = arr sum - max number
 */
const findSol2 = (arr) => {
  const maxNumber = Math.max.apply(null, arr);
  const minNumber = Math.min.apply(null, arr);
  const sum = arr.reduce((acc, item) => acc + item);
  const maxSum = sum - minNumber;
  const minSum = sum - maxNumber;
  return [minSum, maxSum];
};
console.log(findSol2(inputArr));
