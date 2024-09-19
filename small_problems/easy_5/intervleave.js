// const interleave = (arr1, arr2) => {
//   let combined = [];
//   for (let idx = 0; idx < arr1.length; idx += 1) {
//     combined.push(arr1[idx], arr2[idx]);
//   }
//   return combined;
// }


// using forEach
// const interleave = (arr1, arr2) => {
//   let combined = [];
//   arr1.forEach((elem, idx) => {
//     combined.push(elem, arr2[idx]);
//   })
//   return combined;
// }


// using map
// const interleave = (arr1, arr2) => {
//   let combined = arr1.map((elem, idx) => {
//     return [elem, arr2[idx]];
//   })
//   return combined.flat();
// }


// using reduce
const interleave = (arr1, arr2) => {
  return arr1.reduce((accum, elem, idx) => {
    accum.push(elem, arr2[idx]);
    return accum;
  }, [])
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]