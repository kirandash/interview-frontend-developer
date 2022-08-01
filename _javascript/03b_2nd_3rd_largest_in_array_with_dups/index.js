// 2nd and 3rd largest numbers in the given array with duplicates. For ex: input = [3, 6, 2, 9, 1, 32, 97, 97, -1, 5]; output = 32, 9

const sol = (arr) => {
  const uniqueArr = [...new Set(arr)];
  const sortedArr = uniqueArr.sort((a, b) => b - a);
  return [sortedArr[1], sortedArr[2]];
};

console.log(sol([3, 6, 2, 9, 1, 32, 97, 97, -1, 5]));

// sol2 without sort and set
const removeItem = (arr, item) => arr.filter((i) => i !== item);
const sol2 = (arr) => {
  const max1 = Math.max.apply(Math, arr);
  // remove
  arr = removeItem(arr, max1);
  const max2 = Math.max.apply(Math, arr);
  // remove
  arr = removeItem(arr, max2);
  const max3 = Math.max.apply(Math, arr);
  // remove
  arr = removeItem(arr, max3);
  return [max2, max3];
};

console.log(sol2([3, 6, 2, 9, 1, 32, 97, 97, -1, 5]));
