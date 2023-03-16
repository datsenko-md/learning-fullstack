// https://ru.hexlet.io/courses/js-objects/lessons/hash-table/exercise_unit

/* eslint-disable no-param-reassign */

import crc32 from 'crc-32';

// BEGIN (write your solution here)
const make = () => ({});
const getIndex = (key) => Math.abs(crc32.str(key, 0)) % 1000;
const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [innerKey] = map[index];
  return innerKey !== key;
};

const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }

  map[index] = [key, value];
  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }

  const [, value] = map[index];
  return value;
};

export { make, set, get };
// END
