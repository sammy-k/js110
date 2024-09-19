const doubleConsonants = str => {
  const consonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi;
  let doubled = '';
  str.split('').forEach(elem => {
    if (elem.match(consonants)) {
      doubled += elem;
      doubled += elem;
    } else {
      doubled += elem;
    }
  })
  return doubled;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""