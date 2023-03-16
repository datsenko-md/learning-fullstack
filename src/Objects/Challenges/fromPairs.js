// https://ru.hexlet.io/challenges/js_objects_from_pairs_exercise
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const fromPairs = (pairs) => {
  const obj = {};
  for (const [key, value] of pairs) {
    obj[key] = value;
  }

  return obj;
};

export default fromPairs;
