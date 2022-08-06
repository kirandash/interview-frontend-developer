const a = [1, 2, 5, 7, 9];
const b = [2, 5, 7, 12, 100];
// const c = [1,2,2,5,5,7,7,9, 12,100];

const mergeSort = (a, b) => a.concat(b).sort((x, y) => x - y);
console.log(mergeSort([1, 2, 5, 7, 9], [2, 5, 7, 12, 100]));
