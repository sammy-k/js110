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

const stringToSignedInteger = str => {
  let sign;
  if (['+', '-'].includes(str[0])) {
    sign = str.slice(0, 1);
    str = str.slice(1)
  }
  let num = 0;
  let mult = 1;
  str.split('').reverse().forEach(numString => {
    num += (nums[numString] * mult);
    mult *= 10;
  })
  return sign === '-' ? num - (num * 2) : num;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true