// https://ru.hexlet.io/courses/js-arrays/lessons/removing/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const remainder = Math.abs(coll[0]) % 2;
  const result = [];
  for (const item of coll) {
    if (Math.abs(item) % 2 === remainder) {
      result.push(item);
    }
  }

  return result;
};

export default getSameParity;
