const diamond = num => {
  let result = '';
  let count = num;

  while (count) {
    result += `${'*'.repeat(num)}\n`;
    count -= 1;
  }

  return result;
}

console.log(diamond(3));
// logs
//  *
// ***
//  *