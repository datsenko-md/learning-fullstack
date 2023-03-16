// https://ru.hexlet.io/courses/js-objects/lessons/nested-objects/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const get = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (Object.hasOwn(current, key)) {
      current = current[key];
    } else {
      return null;
    }
  }

  return current;
};

export default get;
