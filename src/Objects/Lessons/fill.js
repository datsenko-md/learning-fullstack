// https://ru.hexlet.io/courses/js-objects/lessons/merging/exercise_unit

import _ from 'lodash';

export default (source, keys, data) => {
  const dataToMerge = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(source, dataToMerge);
};
