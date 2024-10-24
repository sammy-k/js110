const merge = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  
  let sorted = [...arr1];

  for (let idx = 0; idx < arr2.length; idx += 1) {
    let currentNum = arr2[idx];
    for (let j = 0; j < sorted.length; j += 1) {
      if (currentNum <= sorted[j]) {
        sorted.splice(j, 0, currentNum);
        break;
      } 
    }
  }


  return sorted;
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]