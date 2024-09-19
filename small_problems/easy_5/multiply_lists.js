const multiplyList = (arr1, arr2) => {
  let products = [];
  arr1.forEach((num, idx) => {
    products.push(num * arr2[idx]);
  })
  return products;
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])