// https://ru.hexlet.io/challenges/js_objects_operations_exercise
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

const genDiff = (data1, data2) => {
  const diff = {};
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const deleted = _.difference(keys1, keys2);
  const added = _.difference(keys2, keys1);
  const mutual = _.intersection(keys1, keys2);

  for (const key of deleted) {
    diff[key] = 'deleted';
  }
  for (const key of added) {
    diff[key] = 'added';
  }
  for (const key of mutual) {
    diff[key] = data1[key] === data2[key] ? 'unchanged' : 'changed';
  }

  return diff;
};

export default genDiff;
