const rotateRightmostDigits = (num, digits) => {
  let numArr = String(num).split('');
  let rotated = numArr.splice(-digits, 1);
  numArr.push(rotated);
  return Number(numArr.join(''));
}



console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917