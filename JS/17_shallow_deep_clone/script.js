// clone object
// Shallow copy
const copyObj = (obj) => {
    const copiedObj = {};
    for (key in obj) {
      copiedObj[key] = obj[key];
    }
    return copiedObj;
  };
  
  const copyObj2 = (obj) => {
    return { ...obj };
  };
  
  const copyObj3 = (obj) => Object.assign({}, obj);
  
  const a = {
    x: 1,
    y: 2,
    z: 3,
  };
  const b = copyObj(a);
  const c = copyObj2(a);
  const d = copyObj2(a);
  b.y = 4;
  c.y = 5;
  d.y = 6;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  
  console.log('===DEEP COPY===');
  // Deep copy
  const deepCopy = (obj) => {
    // handle primitive data types (number, string) - return immediately
    if (typeof obj !== 'object' || !obj) return obj;
  
    // run recursion for array
    if (Array.isArray(obj)) {
      const copy = [];
      for (key in obj) {
        copy[key] = deepCopy(obj[key]);
      }
      return copy;
    }
  
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
      return obj;
    }
  
    // run recursion for object
    const copy = {};
    for (key in obj) {
      copy[key] = deepCopy(obj[key]);
    }
    return copy;
  };
  
  const u = {
    x: 1,
    y: {
      test: 1,
      new: [
        { m: 1, n: 2 },
        { m: 3, n: 4 },
      ],
    },
    z: 3,
    z1: 'something nice',
  };
  
  const v = deepCopy(u);
  v.y.test = 2;
  v.z1 = 'something very nice';
  v.y.new[0].m = 2;
  console.log(JSON.stringify(u, null, 2));
  console.log(JSON.stringify(v, null, 2));
  