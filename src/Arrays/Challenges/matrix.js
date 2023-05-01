// https://ru.hexlet.io/challenges/js_arrays_matrix_rotation_exercise

const transposition = (matrix) => {
  const rowsCount = matrix.length;
  const colsCount = matrix[0].length;
  const transposed = [];

  for (let i = 0; i < rowsCount; i += 1) {
    for (let j = 0; j < colsCount; j += 1) {
      if (!transposed[j]) {
        transposed[j] = [];
      }
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
};

const rotateLeft = (matrix) => transposition(matrix).reverse();
const rotateRight = (matrix) => transposition(matrix.reverse());

export { rotateLeft, rotateRight };
