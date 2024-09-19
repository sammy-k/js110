// Problem 1
// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a));
// console.log(arr);


// Problem 2
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// books.sort((a, b) => Number(a.published) - Number(b.published));
// console.log(books)


// Problem 3
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0].slice(0, 1));

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);


// Problem 4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1[1][1]);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2[2])

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// console.log(obj1.first[2][0]);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
// console.log(obj2.a.a[2]);


// Problem 5
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let males = Object.keys(munsters).filter(elem => munsters[elem].gender === 'male');

// let ageTotal = 0;
// Object.keys(munsters).forEach((elem) => {
//   if (males.includes(elem)) {
//     ageTotal += munsters[elem].age;
//   }
// });
// console.log(ageTotal);


// Problem 6
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// for (let prop in munsters) {
//   console.log(`${prop.slice(0, 1).toUpperCase() + prop.slice(1)} is a ${munsters[prop].age}-year-old ${munsters[prop].gender}.`);
// }


// Problem 7
// let a = 2;
// let b = [5, 8];
// let arr = [a, b]; // [2, [5, 8]]

// arr[0] += 2;  // 4
// arr[1][0] -= a;  // 3


// Problem 8
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(arr => {
//   arr.forEach(word => {
//     word.split('').forEach(letter => {
//       if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
//         console.log(letter);
//       }
//     })
//   })
// })


// Problem 9
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let ordered = arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     // we have an array of strings
//     return subArr.slice().sort();
//   } else {
//     // we have an array of numbers
//     return subArr.slice().sort((a, b) => a - b);
//   }
// });
// console.log(ordered);


// Problem 10
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let ordered = arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     // we have an array of strings
//     return subArr.slice().sort().reverse();
//   } else {
//     // we have an array of numbers
//     return subArr.slice().sort((a, b) => b - a);
//   }
// });
// console.log(ordered);


// Problem 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newArr = arr.map(obj => {
//   let incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   return incrementedObj;
// });
// console.log(newArr);


// Problem 12
// const arr = [
//   ['b', 'c', 'a'],
//   ['blue', 'black', 'green'],
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// const deepCopy = JSON.parse(JSON.stringify(arr));


// Problem 13 - COME BACK TO


// Problem 14
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let newArr = arr.map(subArr => {
//   return subArr.filter(elem => elem % 3 === 0);
// })
// console.log(newArr);


// Problem 15
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// let sortedBySum = arr.sort((a, b) => {
//   let oddSumA = a.filter(num => num % 2 === 1)
//                  .reduce((sum, next) => sum + next);
//   let oddSumB = b.filter(num => num % 2 === 1)
//                  .reduce((sum, next) => sum + next);

//   return oddSumA - oddSumB;
// });

// console.log(sortedBySum);


// Problem 16
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let filteredArr = [];

// for (let prop in obj) {
//   if (obj[prop].type === 'fruit') {
//     filteredArr.push(obj[prop].colors.map(word => word.slice(0, 1).toUpperCase() + word.slice(1)));
//   } else if (obj[prop].type === 'vegetable') {
//     filteredArr.push(obj[prop].size.toUpperCase());
//   }
// }

// console.log(filteredArr);


// Problem 17
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// });


// Problem 18
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};
arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
})

console.log(obj);


// PROBLEMS 19 - 21: COME BACK


