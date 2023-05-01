// https://ru.hexlet.io/challenges/js_functions_count_by_years_exercise

import _ from 'lodash';

const getMenCountByYear = (users) => users
  .filter(({ gender }) => gender === 'male')
  .map(({ birthday }) => birthday.slice(0, 4))
  .reduce((acc, year) => ({ ...acc, [year]: _.get(acc, year, 0) + 1 }), {});

export default getMenCountByYear;
