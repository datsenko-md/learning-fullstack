/* eslint-disable no-param-reassign */

// https://ru.hexlet.io/courses/js-arrays/lessons/modification/exercise_unit

const swap = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const indexOfLast = arr.length - 1;
  const indexOfFirst = 0;
  const tmp = arr[indexOfFirst];
  arr[indexOfFirst] = arr[indexOfLast];
  arr[indexOfLast] = tmp;

  return arr;
};

export default swap;
