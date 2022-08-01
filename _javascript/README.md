# JS

## Challenges
### 01.01 Remove duplicates [Easy]
- use Set to preserve order or keys which will loose order

### 01.02 Find indexes in array [Easy]
- reduce

### 01.03 Second and third largest in array [Easy]
- `array.sort()` or `Math.max.apply(Math, arr)` and `arr.splice()`

### 01.03b Second and third largest in array with dups [Easy]
- `array.sort()` and `Set()` or `Math.max.apply(Math, arr)` and `arr.splice()` and for loop to remove

### 01.04 First non repeating char in string [Easy]
- `if (str.slice(i + 1).includes(char) === false) return char;`
- or `if (str.indexOf(char, i + 1) == -1) return char;`

### 01.05 Sort string numerically [Easy]
- `const sortStringNumerically = (str) => str.split("").sort((a, b) => a - b).join("");`

### 01.06 Curried Sum [Easy]

### 01.07 Filter array using obj prop [Very Easy]

### 01.08 is Palindrome string and number [Easy]
