// https://ru.hexlet.io/courses/js-objects/lessons/destructuring/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getSortedNames = (users) => {
  const names = [];
  for (const { name } of users) {
    names.push(name);
  }

  return names.sort();
};

export default getSortedNames;
