function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    let spaces = ' '.repeat(nFloors - i);
    let stars = '*'.repeat(i * 2 - 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}

// Example usage:
console.log(towerBuilder(3));
// Outputs:
// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// For string
// function towerBuilder(nFloors) {
//   let tower = [];
//   for (let i = 1; i <= nFloors; i++) {
//     let spaces = ' '.repeat(nFloors - i);
//     let stars = '*'.repeat(i * 2 - 1);
//     tower.push(spaces + stars + spaces);
//   }
//   return tower.join('\n');
// }

// function towerBuilder(nFloors) {
//     let tower = [];
//     for (let i = 1; i <= nFloors; i++) {
//       let spaces = '';
//       let stars = '';

//       // Construct spaces
//       for (let j = 0; j < nFloors - i; j++) {
//         spaces += ' ';
//       }

//       // Construct stars
//       for (let j = 0; j < (i * 2) - 1; j++) {
//         stars += '*';
//       }

//       // Construct the current floor string and add to the tower array
//       tower.push(spaces + stars + spaces);
//     }
//     return tower.join('\n');
//   }

//   // Example usage:
//   console.log(towerBuilder(3));
//   // Outputs:
//   //   *
//   //  ***
//   // *****
