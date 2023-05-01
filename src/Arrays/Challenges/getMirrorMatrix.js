// https://ru.hexlet.io/challenges/js_arrays_matrix_mirroring_exercise

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getMirrorMatrix = (matrix) => {
  const mirrored = [];
  const size = matrix.length;
  for (const oldRow of matrix) {
    const newRow = [];
    for (let i = 0, j = size - 1; i < j; i += 1, j -= 1) {
      const current = oldRow[i];
      newRow[i] = current;
      newRow[j] = current;
    }
    mirrored.push(newRow);
  }

  return mirrored;
};

export default getMirrorMatrix;
