const reverseWords = str => {
  let reversed = [];
  str.split(' ').forEach(word => {
    let reversedWord = word.split('').reverse().join('');
    if (word.length >= 5) {
      reversed.push(reversedWord);
    } else {
      reversed.push(word);
    }
  })
  return reversed.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"