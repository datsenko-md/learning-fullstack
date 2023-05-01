// https://ru.hexlet.io/courses/js-arrays/lessons/references/exercise_unit

/* eslint-disable no-param-reassign */

const reverse = (arr) => {
  for (let i = 0, j = arr.length - 1; i < j; i += 1, j -= 1) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
};

export default reverse;
