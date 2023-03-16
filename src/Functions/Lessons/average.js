// https://ru.hexlet.io/courses/js-functions/lessons/rest-operator/exercise_unit
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

export default (...numbers) => (numbers.length === 0 ? null : _.sum(numbers) / numbers.length);
