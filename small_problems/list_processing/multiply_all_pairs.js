const multiplyAllPairs = (arr1, arr2) => {
  let products = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    let firstNum = arr1[idx];
    for (let j = 0; j < arr2.length; j += 1) {
      let secondNum = arr2[j];
      products.push(firstNum * secondNum);
    }
  }
  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));  // [2, 4, 4, 6, 8, 8, 12, 16]
