const testForLetter = elem => /[A-Za-z]/.test(elem); 

const letterPercentages = str => {
  let totalChars = str.length;
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let neitherCount = 0;

  str.split('').forEach(char => {
    if (!testForLetter(char)) {
      neitherCount += 1;
    } else if (char === char.toLowerCase()) {
      lowerCaseCount += 1;
    } else {
      upperCaseCount += 1;
    }
  }) 

  return {
    lowercase: ((lowerCaseCount / totalChars) * 100).toFixed(2), 
    uppercase: ((upperCaseCount / totalChars) * 100).toFixed(2), 
    neither: ((neitherCount / totalChars) * 100).toFixed(2)
  }

}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }