(function () {
  // Sol 1: With sort - but order is changed
  function findDuplicates(array) {
    // 10. Find duplicates of an array
    array.sort();
    let output = [];
    let len = array.length;
    for (i = 0; i < len; i++) {
      if (array[i] === array[i - 1] && output.indexOf(array[i]) < 0)
        output.push(array[i]);
      // After sequencing if in array, current and last index has same elments, and if the item is not present in the out put array already than push the item to output array
    }
    return output;
  }
  console.log(findDuplicates([2, 1, 2, 9, 1, 3, 4, 1, 2, 0, 1]));
  // Sol 2 : Without effectng order - forEach or reduce etc
  function findDuplicates2(array) {
    let output = [];
    array.forEach(function (el, idx, arr) {
      if (arr.indexOf(el) !== idx && output.indexOf(el) < 0) output.push(el);
      // If the item's index is not the current index and is not present in the out put array already than push the item to output array
    });
    return output;
  }
  console.log(findDuplicates2([2, 1, 2, 9, 1, 3, 4, 1, 2, 0, 9, 1]));

  // Find duplicates in an array
  const findDuplicate3 = (arr) => {
    const [acc1, acc2] = arr.reduce(
      (acc, item) => {
        if (acc[0].includes(item) ? acc[1].push(item) : acc[0].push(item));
        return acc;
      },
      [[], []]
    );
    return acc2;
  };

  console.log(findDuplicate3([2, 1, 2, 9, 1, 3, 4, 1, 2, 0, 1]));
})();
