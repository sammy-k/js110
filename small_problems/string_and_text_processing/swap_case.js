const swapCase = str => {
  return str.split('').map(char => {
    return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"