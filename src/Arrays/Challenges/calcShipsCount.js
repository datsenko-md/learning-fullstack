// https://ru.hexlet.io/challenges/js_arrays_sea_battle_exercise

/* eslint-disable no-param-reassign */

// const isAlreadyRegisteredShip = (field, row, col) => {
//   if ((typeof field[row - 1] !== 'undefined'
//       && (field[row - 1][col - 1] === 'x'
//           || field[row - 1][col] === 'x'
//           || field[row - 1][col + 1] === 'x'))
//     || field[row][col - 1] === 'x'
//     || field[row][col + 1] === 'x'
//     || (typeof field[row + 1] !== 'undefined'
//         && (field[row + 1][col - 1] === 'x'
//             || field[row + 1][col] === 'x'
//             || field[row + 1][col + 1] === 'x'))
//   ) {
//     return true;
//   }

//   return false;
// };

// const calcShipsCount = (field) => {
//   let shipsCount = 0;
//   const size = field.length;
//   for (let row = 0; row < size; row += 1) {
//     for (let col = 0; col < size; col += 1) {
//       if (field[col][row] === 1) {
//         if (!isAlreadyRegisteredShip(field, col, row)) {
//           shipsCount += 1;
//         }
//         field[col][row] = 'x';
//         // console.log(field);
//       }
//     }
//   }

//   return shipsCount;
// };

const calcShipsCount = (field) => {
  let shipsCount = 0;
  const size = field.length;
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      if (field[row][col] && !field[row][col - 1]) {
        if (!field[row - 1] || !field[row - 1][col]) {
          shipsCount += 1;
        }
      }
    }
  }

  return shipsCount;
};

const isValidField = (field) => {
  const size = field.length;
  for (let i = 0; i < size - 1; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (field[i][j] && (field[i + 1][j - 1] === 1 || field[i + 1][j + 1] === 1)) {
        return false;
      }
    }
  }

  return true;
};

export { calcShipsCount, isValidField };
