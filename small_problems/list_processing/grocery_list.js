const buyFruit = arrOfArrs => {
  let allFruit = [];
  arrOfArrs.forEach(arr => {
    let num = arr[1];
    while (num) {
      allFruit.push(arr[0]);
      num -= 1;
    }
  })
  return allFruit;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]