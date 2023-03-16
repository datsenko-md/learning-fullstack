// https://ru.hexlet.io/courses/js-objects/lessons/property-existence/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

const countWords = (text) => {
  const normalized = text.toLowerCase();
  const result = {};
  for (const word of _.words(normalized)) {
    result[word] = (result[word] ?? 0) + 1;
  }

  return result;
};

export default countWords;
