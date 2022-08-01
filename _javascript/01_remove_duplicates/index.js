/**
 * Remove duplicate members from an array using Javascript without using any inbuilt functions
 */

 const removeDuplicates = (arr) => [...new Set(arr)];

 // without set but order is lost
 const removeDuplicates2 = (arr) => {
   const map = {};
   arr.forEach((i) => (map[i] = true));
   return Object.keys(map);
 };
 
 console.log(removeDuplicates([1, 3, 1, 2, 6, 1, 8, 2, 1, 0]));
 console.log(removeDuplicates2([1, 3, 1, 2, 6, 1, 8, 2, 1, 0]));
 