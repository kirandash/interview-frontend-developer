// Given a numbered string like "8639412" convert it into a sorted string like "1234689"

const sortStringNumerically = (str) =>
  str
    .split('')
    .sort((a, b) => a - b)
    .join('');

console.log(sortStringNumerically('8639412'));
