// 2nd and 3rd largest numbers in the given array. For ex: input = [3, 6, 2, 9, 1, 32, 97, -1, 5]; output = 32, 9

const sol = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);
  return [sortedArr[1], sortedArr[2]];
};

console.log(sol([3, 6, 2, 9, 1, 32, 97, -1, 5]));

// without sorting - using Math.max.apply
const sol2 = (arr) => {
  const max1 = Math.max.apply(Math, arr);
  arr.splice(arr.indexOf(max1), 1);
  const max2 = Math.max.apply(Math, arr);
  arr.splice(arr.indexOf(max2), 1);
  const max3 = Math.max.apply(Math, arr);
  arr.splice(arr.indexOf(max3), 1);

  return [max2, max3];
};

console.log(sol2([3, 6, 2, 9, 1, 32, 97, -1, 5]));
