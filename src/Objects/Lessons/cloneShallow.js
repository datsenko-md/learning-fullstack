// https://ru.hexlet.io/courses/js-objects/lessons/cloning/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

export default (data) => {
  const copy = {};
  for (const [key, value] of Object.entries(data)) {
    copy[key] = value;
  }

  return copy;
};
