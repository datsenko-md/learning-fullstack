// https://ru.hexlet.io/courses/js-arrays/lessons/for-of/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const calculateAverage = (temperatures) => {
  if (temperatures.length === 0) {
    return null;
  }

  let sum = 0;
  for (const temperature of temperatures) {
    sum += temperature;
  }

  return sum / temperatures.length;
};

export default calculateAverage;
