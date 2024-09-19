const isPalindrome = str => str === str.split('').reverse().join('');

const isRealPalindrome = str => {
  const regex = /[A-Za-z0-9]/g;
  let cleanStr = str.match(regex).join('').toLowerCase();
  return isPalindrome(cleanStr);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true 
console.log(isRealPalindrome("Madam, I'm Adam"));     // true 
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false