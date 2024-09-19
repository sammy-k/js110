// problem 1
// console.log([1, 2, 3].filter(num => 'hi'));

// problem 5
// console.log([1, 2, 3].every(num => {
//   return num = num * 2;
// }));

// problem 8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// const flintstonesObj = (arr) => {
//   let obj = {};
//   arr.forEach((elem, idx) => {
//     obj[elem] = idx;
//   });
//   return obj;
// }

// console.log(flintstonesObj(flintstones));

// problem 9
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// console.log(Object.values(ages).reduce((accum, elem) => {
//   return accum + elem;
// }, 0));

// problem 10
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let lowestAge = Object.values(ages).sort((a, b) => a - b)[0];
// console.log(lowestAge);

// problem 11
// let statement = "The Flintstones Rock";

// let letters = {};
// statement.split('').forEach(elem => {
//   if (letters[elem] && letters[elem] !== ' ') {
//     letters[elem] += 1;
//   } else if (letters[elem] !== ' ') {
//     letters[elem] = 1;
//   }
// });
// console.log(letters);
