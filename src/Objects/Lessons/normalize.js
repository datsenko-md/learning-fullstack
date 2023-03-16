// https://ru.hexlet.io/courses/js-objects/lessons/modifications/exercise_unit

/* eslint-disable no-param-reassign */

import _ from 'lodash';

// BEGIN (write your solution here)
const normalize = (lesson) => {
  lesson.name = _.capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
};

export default normalize;
// END
