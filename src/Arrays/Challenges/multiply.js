// https://ru.hexlet.io/challenges/js_arrays_matrix_multiplication_exercise

// const multiply = (matrix1, matrix2) => {
//   const rowsCount = matrix1.length;
//   const colsCount = matrix2[0].length;
//   const size = matrix2.length;
//   const result = [];
//   for (let i = 0; i < rowsCount; i += 1) {
//     for (let j = 0; j < colsCount; j += 1) {
//       let element = 0;
//       for (let k = 0; k < size; k += 1) {
//         element += matrix1[i][k] * matrix2[k][j];
//         // console.log(element);
//       }
//       if (!result[i]) {
//         result[i] = [];
//       }
//       result[i][j] = element;
//     }
//   }

//   return result;
// };

const multiply = (matrixA, matrixB) => {
  const rowsCountA = matrixA.length;
  const colsCountB = matrixB[0].length;
  const rowsCountB = matrixB.length;
  const matrixC = [];
  for (let row = 0; row < rowsCountA; row += 1) {
    matrixC[row] = [];
    for (let col = 0; col < colsCountB; col += 1) {
      let sum = 0;
      for (let i = 0; i < rowsCountB; i += 1) {
        sum += matrixA[row][i] * matrixB[i][col];
      }
      matrixC[row][col] = sum;
    }
  }

  return matrixC;
};

export default multiply;
