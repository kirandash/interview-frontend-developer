var inputArr = [
  { id: 20, year: 2017, marks: 555 },
  { id: 60, year: 2014, marks: 456 },
  { id: 69, year: 2014, marks: 456 },
  { id: 32, year: 2018, marks: 369 },
  { id: 128, year: 2014, marks: 456 },
  { id: 129, year: 2014, marks: 456 },
  { id: 130, year: 2014, marks: 456 },
  { id: 11, year: 2014, marks: 456 },
];

var inputArr2 = inputArr.slice(0); // Clone an array - fastest way by adding 0
console.log(inputArr);

for (var i = 0; i < inputArr.length; i++) {
  if (inputArr[i]["id"] % 2 != 0 || inputArr[i]["id"] < 50) {
    inputArr.splice(i, 1);
    i--;
  }
}

console.log(inputArr);

// 2nd Approach using Filter
console.log(inputArr2);
console.log(inputArr2.filter((i) => i["id"] % 2 == 0 && i["id"] > 50));
