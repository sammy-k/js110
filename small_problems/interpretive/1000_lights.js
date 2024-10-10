function lightsOn(switches) {
  let switchObj = {};
  let count = switches;

  // set up and round 1
  for (let num = 1; num <= switches; num += 1) {
    switchObj[num] = 'on';
  }
  count -= 1;

  // round 2
  Object.keys(switchObj).forEach(elem => {
    if (Number(elem) % 2 === 0) {
      switchObj[elem] = 'off';
    }
  })
  count -= 1;

  // round 3
  while (count) {
    Object.keys(switchObj).forEach(elem => {
      console.log(elem);
      if (Number(elem) % 3 === 0) {
        switchObj[elem] === 'off' ? 
          switchObj[elem] = 'on' :
          switchObj[elem] = 'off';
      }
      console.log(switchObj);
    })
    count -= 1;
  }

  return Object.keys(switchObj).filter(elem => {
    return switchObj[elem] === 'on';
  })
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]