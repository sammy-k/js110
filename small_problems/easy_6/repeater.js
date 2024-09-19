const repeater = str => {
  let doubled = '';
  str.split('').forEach(char => {
    doubled += char;
    doubled += char;
  })
  return doubled;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""