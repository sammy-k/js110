const leadingSubstrings = str => {
  let sub = '';
  let leadSubs = [];
  str.split('').forEach(char => {
    sub += char;
    leadSubs.push(sub);
  })

  return leadSubs;
}

const substrings = str => {
  let subStrings = [];

  while (str.length) {
    let subGroup = leadingSubstrings(str);
    subStrings.push(subGroup)
    str = str.slice(1);
  }

  return subStrings.flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]