// Remove Property from Object
// Implement the removeProperty function which takes an object and property name, and does the following: <br>If the object obj has a property prop, the function removes the property from the object and returns new object; in all other cases it returns false.
const removeProp = (obj, prop) => {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return obj;
  }
  return false;
};

const obj1 = {
  name: 'test',
  age: 25,
  height: 1.45,
};

console.log(removeProp(obj1, 'age')); // mutates the original
console.log(obj1);

// Solution without mutating original
const removeProp2 = (obj, prop) => {
  if (obj.hasOwnProperty(prop)) {
    const { [prop]: myprop, ...newObj } = obj;
    console.log(myprop)
    return newObj;
  }
  return false;
};

const obj2 = {
  name: 'test',
  age: 25,
  height: 1.45,
};

console.log(removeProp2(obj2, 'age')); // doesn't mutate the original
console.log(obj2);
