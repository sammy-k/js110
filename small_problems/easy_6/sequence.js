const sequence = ((num1, num2) => {
  let result = [];
  let arrNum = num2;
  for (let num = 1; num <= num1; num += 1) {
    result.push(arrNum);
    arrNum += num2;
    
  }
  return result;
});

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []