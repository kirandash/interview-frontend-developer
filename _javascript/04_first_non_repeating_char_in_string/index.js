// Find the first non-repeating char in the given string without using any inbuilt functions. string = "asif shaik". Output = "f".

const firstNonRepeatingChar = (str) => {
  for (let i = 0; i <= str.length; i++) {
    const char = str.charAt(i);
    if (str.slice(i + 1).includes(char) === false) return char;
  }
  return null;
};

console.log(firstNonRepeatingChar('asif shaik'));

const firstNonRepeatingChar2 = (str) => {
  for (let i = 0; i <= str.length; i++) {
    const char = str.charAt(i);
    if (str.indexOf(char, i + 1) == -1) return char;
  }
  return null;
};

console.log(firstNonRepeatingChar2('asif shaik'));
