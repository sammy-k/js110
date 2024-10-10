const isLetter = char => 'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase());

const staggeredCase = str => {
  let upperCase = false;
  return str.split('').map((char) => {
    if (isLetter(char) && !upperCase) {
      upperCase = true;
      return char.toUpperCase();
    } else if (isLetter(char) && upperCase) {
      upperCase = false;
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);