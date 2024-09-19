let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

  const createObj = arr => {
    let counts = {};
    arr.forEach(elem => {
      if (counts[elem]) {
        counts[elem] += 1;
      } else {
        counts[elem] = 1;
      }
    })
    return counts;
  }

const countOccurrences = (arr) => {
  let obj = createObj(arr);
  Object.keys(obj).forEach(key => {
    console.log(`${key} => ${obj[key]}`);
  })
}

  countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1