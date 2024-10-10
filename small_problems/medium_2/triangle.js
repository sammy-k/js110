const triangle = (side1, side2, side3) => {
  let sides = [side1, side2, side3];
  let sorted = sides.sort((a, b) => b - a)
  
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return 'invalid';
  } else if ((sorted[1] + sorted[2] <= sorted[0])) {
    return 'invalid';
  } else if (side1 === side2 && side2 === side3 && side1 === side3) {
    return 'equilateral';
  } else if (((side1 === side2) && (side1 !== side3)) || ((side1 === side3) && (side1 !== side2)) || ((side2 === side3) && (side2 !== side1))) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"