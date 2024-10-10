const leadingSubstrings = str => {
  let sub = '';
  let subStrings = [];
  str.split('').forEach(char => {
    sub += char;
    subStrings.push(sub);
  })

  return subStrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]