// https://ru.hexlet.io/courses/js-functions/lessons/high-order-functions/exercise_unit
import _ from 'lodash';

export default (users, num = 1) => _.sortBy(users, [(u) => Date.parse(u.birthday)]).slice(0, num);
