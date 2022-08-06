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

### 01.09 Repeated chars in string [Easy]

### 01.10 Duplicate items from array [Easy]

### 01.14 this context in obj [Easy]

### 01.15 Array Prototype [Easy]

### 01.16 Inheritance for obj with call [Medium]
- using `a1.call(this, x)`

### 01.17 Shallow and deep clone [Medium]

### 01.18 Merge array sort [Easy]

### 01.19 this that arrow call [Easy]

### 01.20 Sum array values [Easy]

### 01.21 Missing number in sequence (Algo) [Easy]

### 01.22 Fn Declaration vs Fn Expression [Easy]

### 01.25 Get Max and Min Sum combinations in array (Algo) [Medium]
 * Pseudocode
    * Find max number
    * Find min number
    * Find array sum
    * max sum = arr sum - min number
    * min sum = arr sum - max number

### 01.26 Length of number without converting to string [Medium]
- `while (num >= 10) { length++; num = Math.floor(num / 10); }`
- sol 2: `Math.ceil(Math.log10(num))`

### 01.30 Convert time to military format [Easy]
- str.includes()
- +char for number conversion and String() for string conversion
- str.padStart()
### 01.32 Number to Hex, Binary [Medium]
- num to hex: `toString(16)`
- hex to num: `parseInt(num, 16)`
- num to binary: `toString(2)`

### 01.33 Greatest common Divisor [Medium] (Algo)
 * Pseudocode
 * Find min and max of both numbers
 * If max is divisible by min then min is GCD
 * else start from mid of max and keep going down till 0 to check all numbers and find num divisible by max and min

### 01.34 Distribute items in Circle [Medium] (Algo)
- `kids - start + 1` is number of positions before we reach beginning of circle. If toys is less than this value, then we can simply return `(toys + start -1)th` position
- reamaining toys: `toys = toys - (kids - start + 1);`
- `return toys % kids == 0 ? kids : toys % kids;`

### 01.35 Sum of perimeter in matrix [Medium]
 * Pseudocode
 * Sum of all entries on first row
 * Sum of all entries on last row
 * Sum of all entries on first col
 * Sum of all entries on last col
 * Result = Add all - (all entries on edges)

### 01.40 Prototypal Inheritance [Medium]
