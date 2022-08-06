// Write a Function to detect a palindrome i.e. a string spelled same from both forward and backward, example: 'level'
const isPalindrome = (str) =>
  String(str) === String(str).split('').reverse().join('');

console.log(isPalindrome('level'));
console.log(isPalindrome('test'));
console.log(isPalindrome(12321));
console.log(isPalindrome(12322));

const isPalindrome2 = (str) => {
  str = String(str);
  let revStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
  }
  return str === revStr;
};

console.log(isPalindrome2('level'));
console.log(isPalindrome2('test'));
console.log(isPalindrome2(12321));
console.log(isPalindrome2(12322));
