// https://ru.hexlet.io/challenges/js_arrays_pascals_triangle_exercise

const getElement = (row, col) => {
  if (col === 1 || row === col) {
    return 1;
  }

  return getElement(row - 1, col) + getElement(row - 1, col - 1);
};

const generate = (rowNum) => {
  const realRowNum = rowNum + 1;
  const row = [];
  for (let i = 1; i <= realRowNum; i += 1) {
    row.push(getElement(realRowNum, i));
  }

  return row;
};

export default generate;
