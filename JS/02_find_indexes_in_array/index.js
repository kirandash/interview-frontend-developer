/**
 * Indexes of a character in array - reduce
 * Given an array with repeated elements/numbers, return an array of its index occurences.
 * Ex: Input = [1, 3, 1, 6, 1, 8, 2, 1, 0]; Search for element = 1; Output = [0, 2, 4, 7];
 */

const findIndexes = (arr, num) =>
  arr.reduce((acc, item, idx) => {
    if (item === num) acc.push(idx);
    return acc;
  }, []);

console.log(findIndexes([1, 3, 1, 6, 1, 8, 2, 1, 0], 1)); // [0, 2, 4, 7]
