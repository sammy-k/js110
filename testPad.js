const isPalindrome = str => str === str.split('').reverse().join('');

const palindromeSubstrings = str => {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    let firstLetter = str[idx];
    let testStr = firstLetter;
    for (let j = idx + 1; j < str.length; j += 1) {
      testStr += str[j];
      
      if (isPalindrome(testStr)) result.push(testStr);
    }
    
    testStr = '';
  }

  return result;

}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]

console.log(palindromeSubstrings("abcddcbA"))
// // should return: ["bcddcb", "cddc", "dd"]

console.log(palindromeSubstrings("palindrome"))
// // should log: []

console.log(palindromeSubstrings(""))
// // should log: []