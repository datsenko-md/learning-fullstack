// https://ru.hexlet.io/challenges/js_arrays_snail_exercise

import _ from 'lodash';

// const transposition = (matrix) => {
//   if (matrix.length === 0) {
//     return [];
//   }

//   const rowsCount = matrix.length;
//   const colsCount = matrix[0].length;
//   const transposed = [];

//   for (let i = 0; i < rowsCount; i += 1) {
//     for (let j = 0; j < colsCount; j += 1) {
//       if (!transposed[j]) {
//         transposed[j] = [];
//       }
//       transposed[j][i] = matrix[i][j];
//     }
//   }

//   return transposed;
// };

// const rotateLeft = (matrix) => transposition(matrix).reverse();

// const buildSnailPath = (matrix) => {
//   let innerMatrix = matrix.slice();
//   const path = [];
//   while (innerMatrix.length !== 0) {
//     path.push(innerMatrix[0]);
//     innerMatrix = rotateLeft(innerMatrix.slice(1));
//   }

//   return path.flat();
// };

const rotate = (matrix) => _.zip(...matrix).reverse();

// const buildSnailPath = (source) => {
//   let matrix = _.cloneDeep(source);
//   const path = [];
//   while (matrix.length > 0) {
//     const [head, ...tail] = matrix;
//     path.push(head);
//     matrix = rotate(tail);
//   }

//   return path.flat();
// };

const buildSnailPath = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  const [head, ...tail] = matrix;

  return [head, buildSnailPath(rotate(tail))].flat();
};

export default buildSnailPath;
