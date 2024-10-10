const featured = num => {
  for (let numToTest = num + 1; numToTest < 9876543201; numToTest += 1) {
    
    if (numToTest % 2 === 1 && numToTest % 7 === 0) {
      let counts = {};
      let numArray = String(numToTest).split('');
      
      for (let idx = 0; idx < numArray.length; idx += 1) {
        if (!counts[numArray[idx]]) {
          counts[numArray[idx]] += 1;
        } else if (counts[numArray[idx] === 1]) {
          counts = {};
          break;
        }
        
      }
      return numToTest;
      
    }
    
  }
  return "There is no possible number that fulfills those requirements."
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."