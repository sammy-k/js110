
// PROBLEM 1
// INPUT: array of numbers
// OUTPUT: array of numbers

// const smallerNumbersThanCurrent = arr => {
//   // declare variable and initialize with an empty array, this array will take the count of now many numbers are smaller than each number in the array argument
//   let smallerNumberCounts = [];

//   // loop through array and grab each number
//   arr.forEach((num, idx) => {
//     // create variable to store smaller numbers and initialize to empty array
//     let smallerCount = [];
//     // loop through array and compare each number to number being evaluated in outer loop
//     for (let j = 0; j < arr.length; j += 1) {
//       // for each number, if it is smaller than number being evaluated, add to smallerCount array (only count unique values)
//       if (arr[j] < num  && !smallerCount.includes(arr[j])) {
//         smallerCount.push(arr[j]);
//       }
//     }
//     // push count length to result array
//     smallerNumberCounts.push(smallerCount.length);
//   })
    
//   // return array of all smaller number counts
//   return smallerNumberCounts;
// }

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));



// PROBLEM 2
// INPUT: array of integers
// OUTPUT: number (smallest sum of 5 consecutive numbers)

// const minimumSum = arr => {
//   // if array cotains fewer than 5 nums, return null
//   if (arr.length < 5) return null;
//   // declare variable for min sum count and initialize to sum of first 5 nums in array
//   let minSum = arr.slice(0, 5).reduce((accum, num) => accum + num, 0)
//   // starting at index 1 and while there are 5 nums remaining in array, calculate sum of the first 5 nums being evaluated
//   for (let idx = 1; idx < arr.length; idx += 1) {
//     if (arr.slice(idx).length >= 5) {
//       let sumOfFive = arr.slice(idx, idx + 5).reduce((accum, num) => accum + num, 0);
//       if (sumOfFive < minSum) minSum = sumOfFive;
//     } else  {
//       break;
//     }
//   }
//   // return smallest minium sum count
//   return minSum;

// }

// const p = console.log;
// // p(minimumSum([1, 2, 3, 4]) === null);
// // p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// // p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// // p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// // p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);



// PROBLEM 3
// INPUT: string
// OUTPUT: new string

// const toWeirdCase = str => {
//   let counter = 0
//   return str.split(' ').map((word, idx) => {
//     counter += 1;
//     if (counter === 3) {
//       counter = 0;
//       return word.split('').map((letter, idx) => {
//         if (idx % 2 === 0) {
//           return letter;
//         } else {
//           return letter.toUpperCase();
//         }
//       }).join('');
//     }
//     return word;
//   }).join(' ');
// }



// const p = console.log;
// let original = 'Lorem Ipsum is simply dummy text of the printing world';
// let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
// p(toWeirdCase(original) === expected);

// original = 'It is a long established fact that a reader will be distracted';
// expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
// p(toWeirdCase(original) === expected);

// p(toWeirdCase('aaA bB c') === 'aaA bB c');

// original = "Mary Poppins' favorite word is " +
//            "supercalifragilisticexpialidocious";
// expected = "Mary Poppins' fAvOrItE word is " +
//            "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
// p(toWeirdCase(original) === expected);



// PROBLEM 4
// INPUT: array of numbers
// OUTPUT: array of two numbers that are closest together in value

// EXPLICIT: if two pairs are equally close, return whatever pair that occurs first

// HELPER
// const numDistance = (num1, num2) => Math.max(num1 - num2, num2 - num1)

// const closestNumbers = arr => {
//   // declare variable representing the two closest numbers from the passed in array
//   let closestNums = [arr[0], arr[1]];
//   // declare a variable containing the value of the closest distance between two numbers and assign value of closeness between first two numbers in array (will create helper function for the comparison)
//   let closestDistance = numDistance(arr[0], arr[1]);
//   //loop through array and assign each number to a variable for comparison
//   arr.forEach((num, idx) => {
//     let firstNum = num;
//     // loop through array starting at 1 index higher than index of outer array, and assign current number to a variable
//     for (let j = idx + 1; j < arr.length; j += 1) {
//       let secondNum = arr[j];
//       // call helper on number1 and number2 and if return value is smaller than closest distance variable, reassign that variable this value
//       if (numDistance(firstNum, secondNum) < closestDistance) {
//         closestDistance = numDistance(firstNum, secondNum);
//         // if closest distance was reassigned, assign the two nums to the closest numbers array
//         closestNums = [firstNum, secondNum];
//       }
//     }
//   })   
//   // return two closet numbers array
//   return closestNums;
// }

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));



// PROBLEM 5
// INPUT: string
// OUTPUT: string, single character
// EXPLICIT RULES: 
  // if multiple characters have greatest frequency, return the one that appears first in the string
  // not case sensitive

// const mostCommonChar = str => {
//   // since case doesnt matter, reassign str to value of string to lower case
//   str = str.toLowerCase();
//   // create object to count frequency of characters and initialize to empty object
//   let charFrequency = {};
//   // create a variable for most common character count and initialize to 0
//   let mostCommonCharCount = 0;
//   // create a variable for most common character
//   let mostCommonChar;
//   // create a variable for index of most common character
//   let mostCommonCharIdx;
//   // loop through characters in input string
//   str.split('').forEach(char => {
//     // add each character to object and increment value by 1
//     if (charFrequency[char] > 0) {
//       charFrequency[char] += 1;
//     } else {
//       charFrequency[char] = 1;
//     }
//   })
  
//   // loop through object keys and if value for key is greater than most common count, assign that key to most common character and assign the count to most common character count, also assign the index of that character to index of most common variable
//   Object.keys(charFrequency).forEach(key => {
//     if (charFrequency[key] > mostCommonCharCount) {
//       mostCommonChar = key;
//       mostCommonCharCount = charFrequency[key];
//       mostCommonCharIdx = str.indexOf(key);
//       // if count of current character being evaluated is equal to most common character, resassign most common character to this character of index of character is smaller than index of most common character
//     } else if (charFrequency[key] === mostCommonCharCount) {
//       if (str.indexOf(key) < mostCommonCharIdx) {
//         mostCommonChar = key;
//         mostCommonCharCount = charFrequency[key];
//         mostCommonCharIdx = str.indexOf(key);
//       }
//     }
//   })
  
//   // return most common character
//   return mostCommonChar;
// }


// const p = console.log;
// p(mostCommonChar('Hello World') === 'l');
// p(mostCommonChar('Mississippi') === 'i');
// p(mostCommonChar('Happy birthday!') === 'h');
// p(mostCommonChar('aaaaaAAAA') === 'a');

// let myStr = 'Peter Piper picked a peck of pickled peppers.';
// p(mostCommonChar(myStr) === 'p');

// myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
// p(mostCommonChar(myStr) === 'e');



// PROBLEM 6
// INPUT: string
// OUTPUT: object with keys representing lowercase letters in string and their frequency

// // HELPER to determine if char is a lowercase letter
// const isLowerCaseLetter = char => 'abcdefghijklmnopqrstuvwxyz'.includes(char);

// const countLetters = str => {
//   // create variable for letter frequency and initialize to empty object
//   let lowerCaseFrequency = {};
//   // loop through characters in string
//   str.split('').forEach(char => {
//     // pass character to isLowerCaseLetter function and if true
//     if (isLowerCaseLetter(char)) {
//       // if frequency obj contains this key, increment the value of the key by 1
//       // if obj does not contain key, set key value equal to 1
//       if (lowerCaseFrequency[char] >= 1) {
//         lowerCaseFrequency[char] += 1;
//       } else {
//         lowerCaseFrequency[char] = 1;
//       }
//     }
//   })
  
//   // return freq object
//   return lowerCaseFrequency;
// }

// const p = console.log;
// const objeq = function(obj1, obj2) {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (! keys2.includes(key)) {
//       return false;
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
// p(objeq(countLetters('woebegone'), expected));

// expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
//             'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
// p(objeq(countLetters('lowercase/uppercase'), expected));

// expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
// p(objeq(countLetters('W. E. B. Du Bois'), expected));

// p(objeq(countLetters('x'), {'x': 1}));
// p(objeq(countLetters(''), {}));
// p(objeq(countLetters('!!!'), {}));



// PROBLEM 7
// INPUT: array of integers
// OUTPUT: number (representing count of identical pairs in array)

// EXPLICIT RULES
// if array length is 1 or less, RETURN 0

// HELPER to sort nums
// const sortNums = arr => arr.sort((a, b) => Number(a) - Number(b));

// const pairs = arr => {
//   let countOfPairs = 0;
//   // helper to sort array in ascending order
//   let sortedArr = sortNums(arr);
//   // declare a variable to take count of individual pairs and initialize to 1 representing the first element in the array
//   let currentPairCounter = 1;
//   // loop through sorted array starting at index 1
//   for (let idx = 1; idx < sortedArr.length; idx += 1) {
//     if (sortedArr[idx] === sortedArr[idx - 1]) {
//       currentPairCounter += 1;
//       if (currentPairCounter === 2) {
//         countOfPairs += 1;
//         currentPairCounter = 0;
//       }
//     } else if (sortedArr[idx] !== sortedArr[idx - 1]) {
//         currentPairCounter = 1;
//     }
//   }
//   return countOfPairs;
// }

// const p = console.log;
// p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
// p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
// p(pairs([]) === 0);
// p(pairs([23]) === 0);
// p(pairs([997, 997]) === 1);
// p(pairs([32, 32, 32]) === 1);
// p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);




// PROBLEM 8
// INPUT: string (non empty and all lowercase alphabetical characters)
// OUTPUT: number representing length of longest vowel substring

// HELPER function to determine if character is a vowel
// const isVowel = char => 'aeiou'.includes(char);

// const longestVowelSubstring = str => {
//   // declare variable for longest vowel substring length and initialize to 0
//   let lengthOfLongest = 0;
//   // set variable for current substring and initialize to empty string
//   let currentSub = '';
//   // loop through string
//   str.split('').forEach(letter => {
  
//     // test if character is a vowel
//     if (isVowel(letter)) {
//       // if character is a vowel, concatenate it to substring variable
//       currentSub += letter;
//     } else {
//       // if not a vowel, compare length of substring variable to variable containing length of longest vowel substring, and if longer reassign the variable to this number
//       if (currentSub.length > lengthOfLongest) {
//         lengthOfLongest = currentSub.length;
//       }
//       // assign substring variable to empty string
//       currentSub = '';
//     } 
//   })

//   // run comparison one more time to account for strings that are all vowels
//   if (currentSub.length > lengthOfLongest) {
//     lengthOfLongest = currentSub.length;
//   }
    
//   // return longest vowel substring length
//   return lengthOfLongest;
// }

// const p = console.log;
// p(longestVowelSubstring('cwm') === 0);
// p(longestVowelSubstring('many') === 1);
// p(longestVowelSubstring('launchschoolstudents') === 2);
// p(longestVowelSubstring('eau') === 3);
// p(longestVowelSubstring('beauteous') === 3);
// p(longestVowelSubstring('sequoia') === 4);
// p(longestVowelSubstring('miaoued') === 5);



// PROBLEM 9
// INPUT: two strings (second string will never be empty)
// OUTPUT: number representing number of times second string occurs in first string




// PROBLEM 10
// INPUT: string of digits
// OUTPUT: number (count of even numbered substrings that can be formed)

// RULES: 
// - if a substring occurs more than once, count each individual occurence

// HELPER to determine if even
// const isEven = str => Number(str) % 2 === 0;

// const evenSubstrings = str => {
//   // declare variable for count of even subs and initialize to 0
//   let countOfEvens = 0;
//   // use nested loop (two layers) to loop through elements in string and create substrings
//   for (let idx = 0; idx < str.length; idx += 1) {
//     // use helper to test if current number in outler loop is even and if so, increment count of evens
//     if (isEven(str[idx])) countOfEvens += 1;
//     // declare a variable for a substring and initialize to current numString
//     let sub = str[idx];
//     for (let j = idx + 1; j < str.length; j += 1) {
//       // increment substring variable with current numString
//       sub += str[j];
//       // use helper function to coerece substring to a number and determine if its even
//       // if even, increment count of evens by 1
//       if (isEven(sub)) countOfEvens += 1;
//     }
//   }
//   // return count of even substrings
//   return countOfEvens;
// }

// const p = console.log;
// p(evenSubstrings('1432') === 6);
// p(evenSubstrings('3145926') === 16);
// p(evenSubstrings('2718281') === 16);
// p(evenSubstrings('13579') === 0);
// p(evenSubstrings('143232') === 12);



// PROBLEM 11

// PROBLEM 17



// PROBLEM 18
// INPUT: array of integers
// OUTPUT: number

// const equalSumIndex = arr => {
//   // declare a variable for index between equal sums
//   let indexBetween;
//   // declare a variable for sum of sums for sums that were used to determine variable assigned to index variable
//   let sumOfSums;
//   // declare a variable for the sum on numbers to the left and initialize to 0
//   let sumOfLeft = 0;
//   // declare a variable for the sum of numbers to the right and initialize to 0
//   let sumOfRight = 0;
//   // loop through array 
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     let currentNum = arr[idx];
//      // for each number, call reduce on both the numbers before and after, if both sums are equal assign that number to index variable, and sum to sum variable
//      sumOfLeft = arr.slice(0, idx).reduce((accum, num) => {
//       return accum + num; 
//      }, 0);
//      sumOfRight= arr.slice(idx + 1).reduce((accum, num) => {
//       return accum + num; 
//      }, 0)
//      if (sumOfLeft === sumOfRight) {
//       indexBetween = idx;
//       sumOfSums = sumOfLeft + sumOfRight;
//      }
//   }
//   // if no index has been assigned to index variable, reutrn -1
//   // return index variable
//   return indexBetween === undefined ? -1 : indexBetween;
// }

// const p = console.log;
// p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
// p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
// p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
// p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// // The following test case could return 0 or 3. Since we're
// // supposed to return the smallest correct index, the correct
// // return value is 0.
// p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);


// PROBLEM 19
// INPUT: array of integers
// OUTPUT: integer that appears an odd number of times

// const oddFellow = arr => {
//   // loop through array
//   for (let idx = 0; idx < arr.length; idx += 1) {
//      // for each iteration of loop, call filter on entire array and filter for numbers that match current number
//      let numOfTimes = arr.filter(num => num === arr[idx]).length;
//       // if length of the returned filter call is odd, return the current number
//       if (numOfTimes % 2 === 1) return arr[idx];
//   } 
// }

// const p = console.log;
// p(oddFellow([4]) === 4);
// p(oddFellow([7, 99, 7, 51, 99]) === 51);
// p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
// p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
// p(oddFellow([0, 0, 0]) === 0);



// BONUS
// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0.

// INPUT: array of numbers
// OUTPUT: number representing count of 'triples' of numbers with two odds

// RULES: 
  // all numbers in array are greater than 0

// HELPER to filter for odd numbers
// const filterForOdds = (n1, n2, n3) => [n1, n2, n3].filter(num => num % 2 === 1);

// const countTriples = arr => {
//   // declare a variable for count of triples and initialize to 0
//   let tripleCount = 0;
//   // evaluate groups of three numbers using nested loops
//   // loop through array up to the length of the array - 2
//   for (let idx = 0; idx < arr.length - 2; idx += 1) {
//     // assign number to variable 
//     let num1 = arr[idx];
//     // loop through the array starting at 1 index higher than outer loop, and up to 1 less than the array length
//     for (let j = idx + 1; j < arr.length - 1; j += 1) {
//       // assign number to variable
//       let num2 = arr[j];
//       // loop one more time through the array starting at 1 index higher than immediate outer loop, and through length of the array
//       for (let k = j + 1; k < arr.length; k += 1) {
//         // assign number to variable
//         let num3 = arr[k];
//         // call filter on three number array and filter for odds
//         let result = filterForOdds(num1, num2, num3);
//         // if length of filtered array is 2, increment count of triples variable by 1
//         if (result.length === 2) tripleCount += 1;
//       }
//     }
//   }
//   // return count of triples or -1 if no triples
//   return tripleCount === 0 ? -1 : tripleCount;
// }

// // Test cases
// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9





















// PROBLEM 1

// const smallerNumbersThanCurrent = arr => {
//   // create array to collect all smaller numbers than current number being evaluated
//   let allSmallerNumbers = [];
//   // loop through numbers in array
//   arr.forEach((num, idx) => {
//     // create an array to collect unique numbers smaller than current number
//     let smallerThanCurrent = [];
//     // loop through remaining numbers in array to compare against current number
//     for (let i = 0; i < arr.length; i += 1) {
//       // if current number is not present in array AND is smaller than number to compare, add to array
//       if (arr[i] < num && !smallerThanCurrent.includes(arr[i])) {
//         smallerThanCurrent.push(arr[i]);
//       }
//     }
//     // get length of result and add to allSmallerNumbers array
//     allSmallerNumbers.push(smallerThanCurrent.length);
//   })
//   // return array of smaller numbers
//   return allSmallerNumbers;
// }

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));



// PROBLEM 2

// // helper function for sum of five consecutive elements in an array
// const sumOfFive = arr => arr.slice(0, 5).reduce((accum, elem) => {
//   return accum + elem;
// }, 0);

// const minimumSum = arr => {
//   // Guard Clause: if arr < 5, result should be assigned null
//   if (arr.length < 5) return null;

//   // result variable: minimum sum of 5 consecutive numbers in the array (can start with sum of first 5 numbers in array)
//   let minSum = sumOfFive(arr);
  
//   // starting at index 1, loop through & sum result of that element plus the next four
//   let arrToLoop = [...arr.slice(1)];
//   // break out of loop if there are less than 5 elements remaining in array
//   while (arrToLoop.length >= 5) {
//     // assign that sum to variable and if less than minSum, assign to min Sum
//     let sum = sumOfFive(arrToLoop);
    
//     if (sum < minSum) minSum = sum;
//     arrToLoop = arrToLoop.slice(1);
//   }

//   // return minimum sum
//   return minSum;
// }


// const p = console.log;
// p(minimumSum([1, 2, 3, 4]) === null);
// p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);



// PROBLEM 3

// const toWeirdCase = str => {
//   // create new string array and set to an empty array
//   let weirdCase = [];

//   // split string into array of words and loop through each
//   str.split(' ').forEach((word, idx) => {
//     // if word is third in sequence, capitalize every second character in that word
//     if ((idx + 1) % 3 === 0) {
//       word = word.split('').map((char, idx) => {
//         if (idx % 2 === 1) {
//           return char.toUpperCase();
//         } else {
//           return char;
//         }
//       }).join('');
//     }
//     // push word to result array
//     weirdCase.push(word);
//   })

//   // return result array joined into a string
//   return weirdCase.join(' ');
// }

// let original = 'Lorem Ipsum is simply dummy text of the printing world';
// let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
// p(toWeirdCase(original) === expected);

// original = 'It is a long established fact that a reader will be distracted';
// expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
// p(toWeirdCase(original) === expected);

// p(toWeirdCase('aaA bB c') === 'aaA bB c');

// original = "Mary Poppins' favorite word is " +
//            "supercalifragilisticexpialidocious";
// expected = "Mary Poppins' fAvOrItE word is " +
//            "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
// p(toWeirdCase(original) === expected);



// PROBLEM 4

// Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.

// const p = console.log;
// const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// // helper function that returns distance between two numbers
// const closestDistance = (num1, num2) => {
//   return num1 > num2 ? num1 - num2 : num2 - num1;
// }

// const closestNumbers = arr => {
//   // declare array for two closest numbers
//   let twoClosest = [arr[0], arr[1]];

//   // declare variable for closest distance;
//   let closest = closestDistance(arr[0], arr[1]);

//   // loop through array and grab each number and assign to a variable
//   arr.forEach((num, idx) => {
//     let firstNum = num;
//     // loop through array starting at one index higher than index of outer array, and compare all numbers to firstNum
//     for (let j = idx + 1; j < arr.length; j += 1) {
//       let secondNum = arr[j];
//       // compare distance between both numbers with helper function
//       let currentDistance = closestDistance(firstNum, secondNum);

//       if (currentDistance < closest) {
//         closest = currentDistance;
//         twoClosest = [firstNum, secondNum];
//       }
//     }
//   })

//   // return the array containing the two closest numbers
//   return twoClosest;
// }

// p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
// p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
// p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));



// PROBLEM 5
// Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

// const mostCommonChar = str => {
//   // create object to log frequency of characters
//   let charFrequency = {};

//   // loop through string characters and for each  character, add as key to object and increment frequency by 1
//   for (let idx = 0; idx < str.length; idx += 1) {
//     // set variable for current character, and set to lowercase since function isn't concerned with character case
//     let currentChar = str[idx].toLowerCase();
//     // guard clause to prevent ' ' from being added to object
//     if (currentChar === ' ') continue;
//     if (charFrequency[currentChar]) {
//       charFrequency[currentChar] += 1;
//     } else {
//       charFrequency[currentChar] = 1;
//     }
//   }

//   // declare variable for most current character and set it to first element in object
//   let mostCommon = Object.keys(charFrequency)[0];

//   // loop through object and determine most common character
//   for (prop in charFrequency) {
//     if (charFrequency[prop] > charFrequency[mostCommon]) {
//       mostCommon = prop;
//     }
//   }

//   // return most common character
//   return mostCommon;
// }

// const p = console.log;
// p(mostCommonChar('Hello World') === 'l');
// p(mostCommonChar('Mississippi') === 'i');
// p(mostCommonChar('Happy birthday!') === 'h');
// p(mostCommonChar('aaaaaAAAA') === 'a');

// let myStr = 'Peter Piper picked a peck of pickled peppers.';
// p(mostCommonChar(myStr) === 'p');

// myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
// p(mostCommonChar(myStr) === 'e');


// PROBLEM 6

// // helper function
// const isLowercase = char => {
//   return 'abcdefghijklmnopqrstuvwxyz'.includes(char) && char === char.toLowerCase();
// }

// const countLetters = str => {
//   // create object to determine frequency of lower case letters
//   let lowercaseFrequency = {};

//   // loop through characters in string
//   str.split('').forEach(char => {
//     // determine if character is a lowercase letter (helper)
//     if (isLowercase(char)) {
//       // if character is lowercase letter, add to object and increment total by 1
//       lowercaseFrequency[char] ? lowercaseFrequency[char] += 1 : lowercaseFrequency[char] = 1;
//     }
//   })
//   // return letter frequency object
//   return lowercaseFrequency;
// }

// const p = console.log;
// const objeq = function(obj1, obj2) {
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (! keys2.includes(key)) {
//       return false;
//     } else if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
// p(objeq(countLetters('woebegone'), expected));

// expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
//             'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
// p(objeq(countLetters('lowercase/uppercase'), expected));

// expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
// p(objeq(countLetters('W. E. B. Du Bois'), expected));

// p(objeq(countLetters('x'), {'x': 1}));
// p(objeq(countLetters(''), {}));
// p(objeq(countLetters('!!!'), {}));



// PROBLEM 7

// const pairs = arr => {
//   // return 0 if array length is less than 1
//   if (arr.length <= 1) return 0;
//   // create a counter variable for complete pairs and initialize to 0
//   let completePairsCounter = 0;
//   // sort array in ascending order
//   let sortedArr = arr.sort((a, b) => a - b);
//   // create variable with boolean to determine if second number being tested has been matched or not, and set to false
//   let skipIteration = false;
//   // loop through array and for each number, test if subsequent number is the same
//   for (let idx = 0; idx < sortedArr.length; idx += 1) {
//     // if an iteration is to be skipped, flip boolean back to false
//     if (skipIteration === true) {
//       skipIteration = false;
//       continue;
//     }
//     // if there is a match, increment counter variable by 1
//     if (sortedArr[idx] === sortedArr[idx + 1]) {
//       completePairsCounter += 1;
//       // also if second number is a match, set boolean to true as a flag that the next iteration will be skipped
//       skipIteration = true;
//      }
//   }
   
//   // return complete pairs counter
//   return completePairsCounter;
// }

// const p = console.log;
// p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
// p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
// p(pairs([]) === 0);
// p(pairs([23]) === 0);
// p(pairs([997, 997]) === 1);
// p(pairs([32, 32, 32]) === 1);
// p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);



// PROBLEM 8

// const isVowel = letter => 'aeiou'.includes(letter);

// const longestVowelSubstring = str => {
//   // create variable for value of longest substring and initialize to zero
//   let longestSub = 0;

//   // loop through characters in string
//   str.split('').forEach((letter, idx) => {
//     // determine if letter is a vowel (helper)
//     if (isVowel(letter)) {
//       // if vowel, initialize substring variable with letter
//       let subString = letter;
//       // loop through remaining letters in string and for each subsequent vowel, concatenate to substring variable
//       for (let j = idx + 1; j < str.length; j += 1) {
//         if (isVowel(str[j])) {
//           subString += str[j];
//           // account for last character in string being a vowel
//           if (j === str.length - 1) {
//             if (subString.length > longestSub) {
//               longestSub = subString.length;
//             }
//           }
//         } else {
//            //  once a non vowel is hit, compare length of substring to variable for longest substring and assign to variable if larger
//           if (subString.length > longestSub) {
//             longestSub = subString.length;
//           }
//           // continue to next iteration of outer loop
//           break;
//         }
//       } 
//     }      
//   })
//   // return length of longest substring
//   return longestSub;
// }

// const p = console.log;
// p(longestVowelSubstring('cwm') === 0);
// p(longestVowelSubstring('many') === 1);
// p(longestVowelSubstring('launchschoolstudents') === 2);
// p(longestVowelSubstring('eau') === 3);
// p(longestVowelSubstring('beauteous') === 3);
// p(longestVowelSubstring('sequoia') === 4);
// p(longestVowelSubstring('miaoued') === 5);



// PROBLEM 9 (COME BACK)

// const p = console.log;
// p(countSubstrings('babab', 'bab') === 1);
// p(countSubstrings('babab', 'ba') === 2);
// p(countSubstrings('babab', 'b') === 3);
// p(countSubstrings('babab', 'x') === 0);
// p(countSubstrings('babab', 'x') === 0);
// p(countSubstrings('', 'x') === 0);
// p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
// p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
// p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);



// PROBLEM 10 (COME BACK)

// const evenSubstrings = numString => {
//   // create variable for sub count and initialize to zero
//   let subCount = 0;

//   // create loop to loop through each element in string
//   numString.forEach((elem, idx) => {
//     // create varible for substring and initialize it to elem
//     let sub = elem;
//     if ()
//   })

//   // return count of substrings
//   return sunCount;
// }

// const p = console.log;
// p(evenSubstrings('1432') === 6);
// p(evenSubstrings('3145926') === 16);
// p(evenSubstrings('2718281') === 16);
// p(evenSubstrings('13579') === 0);
// p(evenSubstrings('143232') === 12);


// PROBLEM 11 (COME BACK)


// PROBLEM 12

// const isPangram = str => {
//   // create frequency object
//   let letterFrequency = {
//     a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0,
//     k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0,
//     u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
//   };

//   // loop through each element in string and add all letter counts to frequency object
//   str.split('').forEach(char => {
//     if (letterFrequency[char.toLowerCase()] >= 0) {
//       letterFrequency[char.toLowerCase()] += 1;
//     }
//   });
  
//   // determine if all object values are at least one
//   for (let prop in letterFrequency) {
//     if (letterFrequency[prop] === 0) {
//       return false;
//     }
//   }
//   // return true if all letters appear at least once
//   return true;

// }

// const p = console.log;
// p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
// p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
// p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
// p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

// let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
// p(isPangram(myStr) === true);


// PROBLEM 13

// const unscramble = (str1, str2) => {
//   // create frequency object to log occurences of chars from first string in second string
//   const secondStringFrequency = {};
//   // loop through all chars in second string and add to object as keys
//   str2.split('').forEach(letter => secondStringFrequency[letter] ? secondStringFrequency[letter] += 1 : secondStringFrequency[letter] = 1);
  
//   // loop through all letters in first string
//   str1.split('').forEach(letter => {
//     // if object contains letter, decrement that object prop by 1
//     if (secondStringFrequency[letter] > 0) {
//       secondStringFrequency[letter] -= 1;
//     }
//   })
//   // return true if all object properties equal 0, if any property is greater than zero return false
//   return Object.values(secondStringFrequency).reduce((accum, val) => {
//     return accum + val;
//   }, 0) === 0;
// }

// const p = console.log;
// p(unscramble('ansucchlohlo', 'launchschool') === true);
// p(unscramble('phyarunstole', 'pythonrules') === true);
// p(unscramble('phyarunstola', 'pythonrules') === false);
// p(unscramble('boldface', 'coal') === true);



// PROBLEM 14

// const sevenEleven = num => {
//   // create variable for sum of all mults of 7 and 11
//   let sumTotal = 0;

//   // create a loop counting down from one less than the number argument to 7 (since all positive nums below 7 are not mults and we are not counting negatives)
//   let startNum = num - 1;
//   for (startNum; startNum >= 7; startNum -= 1) {
//     if (startNum % 7 === 0 || startNum % 11 === 0) {
//       sumTotal += startNum;
//     }
//   }

//   // return sum of all mults of 7 and 11
//   return sumTotal;
// }

// const p = console.log;
// p(sevenEleven(10) === 7);
// p(sevenEleven(11) === 7);
// p(sevenEleven(12) === 18);
// p(sevenEleven(25) === 75);
// p(sevenEleven(100) === 1153);
// p(sevenEleven(0) === 0);
// p(sevenEleven(-100) === 0);



// PROBLEM 15

// // helper to get product of four num strings
// const productOfFour = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;

// const greatestProduct = numString => {
//   // initialize a variable for highest product as product of first four elements in string, each coerced to a number
//   let highestProduct = productOfFour(numString[0], numString[1], numString[2], numString[3]);
//   // loop through string starting at index 1
//   for (let idx = 1; idx < numString.length - 3; idx += 1) {
//     // for each element in loop, take that element and three consecutive elements and get product
//     let currentProduct = productOfFour(numString[idx], numString[idx + 1], numString[idx + 2], numString[idx + 3])
//     // if that product is larger than highest product, set highest product equal to that number
//     if (currentProduct > highestProduct) highestProduct = currentProduct;
//   }
//   // return highest product
//   return highestProduct;
// }

// const p = console.log;
// p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
// p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
// p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
// p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6


// PROBLEM 16

// const distinctMultiples = str => {
//   // create empty frequency object
//   let frequency = {};
//   // create variable for count of multiples and initialize to 0
//   let multipleCount = 0;
//   // loop through string (set all elements to lowercase)
//   str.toLowerCase().split('').forEach(elem => {
//     // if that property is equal to 1, increment count variable by 1
//     if (frequency[elem] === 1) multipleCount += 1;
//     // add string element as property of frequency object and increment by 1
//     frequency[elem] ? frequency[elem] += 1 : frequency[elem] = 1; 
//   })
    
  
//   // return multiples count
//   return multipleCount;
// }

// const p = console.log;
// p(distinctMultiples('xyz') === 0);              // (none)
// p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
// p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
// p(distinctMultiples('unununium') === 2);        // u, n
// p(distinctMultiples('multiplicity') === 3);     // l, t, i
// p(distinctMultiples('7657') === 1);             // 7
// p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
// p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5


// PROBLEM 17 (COME BACK)


// PROBLEM 18 (COME BACK)

// const equalSumIndex = arr => {

// }


// const p = console.log;
// p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
// p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
// p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
// p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// // The following test case could return 0 or 3. Since we're
// // supposed to return the smallest correct index, the correct
// // return value is 0.
// p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);



// PROBLEM 19 (COME BACK)

// const oddFellow = arr => {
//   // loop through array
//   arr.forEach((num, idx) => {
//     // set a counter variable and initialize to one
//     let counter = 1;
//     // loop through remaining elements in array and if element is equal to num, increment counter by 1
//     for (let i = 1; i < arr.length; i += 1) {
//       console.log(i);
//       if (arr[i] === num) counter += 1;
//     }
//     console.log(num)
//     if (counter % 2 !== 0) return num;
//   })
// }

// const p = console.log;
// p(oddFellow([4]) === 4);
// p(oddFellow([7, 99, 7, 51, 99]) === 51);
// p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
// p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
// p(oddFellow([0, 0, 0]) === 0);


// PROBLEM 20

// const whatIsDifferent = arr => {
//   // create a frequency object
//   let numFrequency = {};

//   // loop through the array and for each number, add to object as a key and increment property value by 1
//   arr.forEach(num => {
//     if (!numFrequency[num]) {
//       numFrequency[num]= 1;
//     } else {
//       numFrequency[num] += 1;
//     }
//   })

//   // loop through values in frequency object and return whatever key (coerced to a number) has a property value of 1
//   return Number(Object.keys(numFrequency).filter(key => numFrequency[key] === 1)[0]);
// }

// const p = console.log;
// p(whatIsDifferent([0, 1, 0]) === 1);
// p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
// p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
// p(whatIsDifferent([3, 4, 4, 4]) === 3);
// p(whatIsDifferent([4, 4, 4, 3]) === 3);



// BONUS
// Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there’s none return -1. All numbers in the array will be integers greater than 0.

// INPUT: array of numbers
// OUTPUT number representing count of triples

// const countTriples = arr => {
//   // declare a variable for total count of triples and initialize to 0
//   let tripleCount = 0;

//   // nest loops to get collections of three (3 loops)
//   // first loop will run through the length of the array argument - 2
//   for (let idx = 0; idx < arr.length - 2; idx += 1) {
//     let firstNum = arr[idx];
//      // second loop will run starting at index 1, and through the length of the array argument - 1
//      for (let j = idx + 1; j < arr.length - 1; j += 1) {
//       let secondNum = arr[j];
//       // third loop will run starting at index 2 and through the length of the array argument
//       for (let k = j + 1; k < arr.length; k += 1) {
//         let thirdNum = arr[k];
//         // declare an array and set to an array containing the first element in each loop
//         let triple = [firstNum, secondNum, thirdNum];
//         // if only two of the elements in the array are odd, incremeent the total count by 1
//         let odds = triple.filter(num => num % 2 === 1);
//         if (odds.length === 2) tripleCount += 1;
//       }
//     }
//   }
//   // return count of triples (if count is equal to zero return -1)
//   return tripleCount > 0 ? tripleCount : -1;
// }

// // Test cases
// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9

