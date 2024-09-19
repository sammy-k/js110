const readline = require('readline-sync');

let nums = [];

const num1 = readline.question('Enter the 1st number: ');
nums.push(num1);

const num2 = readline.question('Enter the 2nd number: ');
nums.push(num2);

const num3 = readline.question('Enter the 3rd number: ');
nums.push(num3);

const num4 = readline.question('Enter the 4th number: ');
nums.push(num4);

const num5 = readline.question('Enter the 5th number: ');
nums.push(num5);

const lastNum = readline.question('Enter the last number: ');

nums.includes(lastNum) ? 
  console.log(`The number ${lastNum} appears in ${nums.join(',')}`) :
  console.log(`The number ${lastNum} does not appear in ${nums.join(',')}`);