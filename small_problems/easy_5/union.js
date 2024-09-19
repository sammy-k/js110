const union = (arr1, arr2) => {
  let combined = arr1;
  arr2.forEach(num => {
    if (!combined.includes(num)) {
      combined.push(num);
    }
  })
  return combined;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]