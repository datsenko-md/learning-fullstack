// https://ru.hexlet.io/challenges/js_objects_cloning_exercise
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import isObject from 'lodash/isObject.js';

const cloneDeep = (data) => {
  const clone = {};
  for (const [key, value] of Object.entries(data)) {
    clone[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return clone;
};

export default cloneDeep;
