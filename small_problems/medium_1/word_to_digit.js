const wordToDigit = sentence => {
  let nums = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10};

  let numArray = Object.keys(nums);

  return sentence.split(' ').map(word => {
    if (numArray.includes(word.slice(0, word.length - 1))) {
      return nums[word.slice(0, word.length - 1)] + word.slice(word.length - 1);
    } else if (numArray.includes(word)) {
      return nums[word];
    } else {
      return word;
    }
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."