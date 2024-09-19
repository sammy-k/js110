let nums = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}

const stringToInteger = str => {
  let num = 0;
  let mult = 1;
  str.split('').reverse().forEach(numString => {
    num += (nums[numString] * mult);
    mult *= 10;
    console.log(num, mult);
  })
  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true