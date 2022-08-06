// Toys distribution in loop
// n kids are sitting in a circle
// k toys available to distribute
// i position to start from
// who will get last toy?
// 3,5,1 => 2

// Sol
// https://www.geeksforgeeks.org/distributing-m-items-circle-size-n-starting-k-th-position/
const lastToy = (kids, toys, start) => {
    // kids - start + 1 is number of
    // positions before we reach
    // beginning of circle.
    // If toys is less than this value,
    // then we can simply return
    // (toys + start -1)th position
    if (toys <= kids - start + 1) return toys + start - 1;
  
    // Let us compute remaining items
    // before we reach beginning.
    toys = toys - (kids - start + 1);
  
    // We compute toys % kids to skip
    // all complete rounds. If we
    // reach end, we return kids
    // else we return toys % kids
    return toys % kids == 0 ? kids : toys % kids;
  };
  
  console.log(lastToy(3, 5, 1)); // 2
  console.log(lastToy(3, 2, 1)); // 2
  console.log(lastToy(3, 2, 3)); // 1
  