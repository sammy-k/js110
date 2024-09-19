const sequence = num => {
  let nums = [];
  for (let idx = 1; idx <= num; idx += 1) {
    nums.push(idx);
  }
  return nums;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]