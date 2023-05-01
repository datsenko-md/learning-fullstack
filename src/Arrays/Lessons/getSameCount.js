// https://ru.hexlet.io/courses/js-arrays/lessons/nested-loops/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

const getSameCount = (coll1, coll2) => {
  const uniq1 = _.uniq(coll1);
  const uniq2 = _.uniq(coll2);

  let sameCount = 0;
  for (const item1 of uniq1) {
    for (const item2 of uniq2) {
      if (item1 === item2) {
        sameCount += 1;
        break;
      }
    }
  }

  return sameCount;
};

export default getSameCount;
