// https://ru.hexlet.io/courses/js-arrays/lessons/rest-operator/exercise_unit

/* eslint-disable import/prefer-default-export, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let [max, ...rest] = arr;
  for (const item of rest) {
    if (item > max) {
      max = item;
    }
  }

  return max;
};

export { getMax };
