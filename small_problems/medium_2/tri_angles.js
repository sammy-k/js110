const triangle = (side1, side2, side3) => {

  // test for triangle validity
  if (Math.min(side1, side2, side3) <= 0 || (side1 + side2 + side3) !== 180) {
    return 'invalid';
  }

  if (Math.max(side1, side2, side3) < 90) {
    return 'acute';
  } else if (side1 === 90 || side2 === 90 || side3 === 90) {
    return 'right';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));  // "acute"
console.log(triangle(30, 90, 60));  // "right"
console.log(triangle(120, 50, 10));  // "obtuse"
console.log(triangle(0, 90, 90));  // "invalid"
console.log(triangle(50, 50, 50));  // "invalid"