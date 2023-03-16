// https://ru.hexlet.io/courses/js-functions/lessons/spread-operator/exercise_unit
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const convert = (...params) => {
  const dates = [];
  for (const param of params) {
    dates.push(new Date(...param).toDateString());
  }

  return dates;
};

export default convert;
