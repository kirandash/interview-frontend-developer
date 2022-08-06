// Sum of perimeter in a matrix
const matrix1 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
// Output: 8

// Solution
/**
 * Pseudocode
 * Sum of all entries on first row
 * Sum of all entries on last row
 * Sum of all entries on first col
 * Sum of all entries on last col
 * Result = Add all - (all entries on edges)
 */
const findSum = (matrix) => {
  let result = null;
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Sum of all entries on first row
  for (let i = 0; i < cols; i++) {
    result += matrix[0][i];
  }

  // Sum of all entries on last row
  for (let i = 0; i < cols; i++) {
    result += matrix[rows - 1][i];
  }

  // Sum of all entries on first col
  for (let i = 0; i < rows; i++) {
    result += matrix[i][0];
  }

  // Sum of all entries on last col
  for (let i = 0; i < rows; i++) {
    result += matrix[i][cols - 1];
  }

  // Result = Add all - (all entries on edges)
  result =
    result -
    (matrix[0][0] +
      matrix[0][cols - 1] +
      matrix[rows - 1][cols - 1] +
      matrix[rows - 1][0]);

  return result;
};

console.log(findSum(matrix1)); // 8
const matrix2 = [
  [4, 5, 3],
  [13, 1, 2],
  [11, 9, 6],
];
console.log(findSum(matrix2)); // 53
