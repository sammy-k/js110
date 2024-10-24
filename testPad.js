// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0. -- Sam

const countTriples = arr => {
  // create variable for sum or all triples, and initialize to zero
  let triples = 0;

   // set variables for odds and evens, and initialize both to zero
  let odds = 0;
  let evens = 0;

  // loop through array and grab an initial number
  while (arr.length >= 3) {
    for (let idx = 0; idx < arr.length; idx += 1) {
      // test is first num is odd or even and increment appropriate variable
     if (arr[idx] % 2 === 0) {
       evens += 1;
     } else {
       odds += 1;
     }
 
    
     // // loop through remaining numbers in array
     // for (let j = 1; j < arr.length; j += 1) {
     //   if (arr[j] % 2 === 0) {
     //     evens += 1;
     //   } else {
     //     odds += 1;
     //   }
     // }
 
    
     
   }
   console.log(odds, evens);
   if (odds === 2 && evens === 1) {
    triples += 1;
  }
  odds = 0;
  evens = 0;
   arr = arr.slice(1);
  }
  

  // return total of all triples
  if (triples !== 0) {
    return triples;
  }
  return -1;
}

// Test cases
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9


// rememner combination pattern below



function countTriples(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
          for (let k = j + 1; k < arr.length; k++) {
              let oddCount = [arr[i], arr[j], arr[k]].filter(num => num % 2 !== 0).length;
              if (oddCount === 2) count++;
          }
      }
  }

  return count > 0 ? count : -1;
}