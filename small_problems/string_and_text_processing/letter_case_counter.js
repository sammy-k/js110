const isLetter = char => 'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase());

const letterCaseCount = str => {
  let result = {lowercase: 0, uppercase: 0, neither: 0}

  str.split('').forEach(char => {
    if (!isLetter(char)) {
      result.neither += 1;
    } else if (char === char.toUpperCase()) {
      result.uppercase += 1;
    } else {
      result.lowercase += 1
    }
  })

  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }