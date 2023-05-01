// https://ru.hexlet.io/challenges/js_functions_vertical_histogram_exercise

import _ from 'lodash';

const bar = '#';

const displayHistogram = (roundsCount, rollDie) => {
  const numbers = _.times(roundsCount, rollDie);
  const sides = _.range(1, 7);
  const lines = sides
    .map((side) => {
      const count = numbers.filter((num) => num === side).length;
      const percent = Math.round((count / roundsCount) * 100);
      let percentPart1 = '';
      let percentPart2 = '';
      let percentPart3 = '';
      if (percent > 0) {
        [percentPart1, percentPart2, percentPart3 = ''] = `${percent}%`.split('');
      }
      const upperLine = ` -${bar.repeat(count)}${percentPart1}`.split('');
      const centerLine = `${side}-${bar.repeat(count)}${percentPart2}`.split('');
      const bottomLine = ` -${bar.repeat(count)}${percentPart3}`.split('');

      return [upperLine, centerLine, bottomLine];
    })
    .reduce((acc, line) => {
      if (acc.length === 0) {
        return [...acc, line];
      }
      return [...acc, [[' ', '-']], line];
    }, [])
    .flat();
  const maxLength = lines.reduce((acc, line) => Math.max(line.length, acc), 0);
  const normalized = lines.map((line) => line.join('').padEnd(maxLength, ' ').split('').reverse());
  const rotated = _.zip(...normalized.map((line) => line.reverse())).reverse();
  const result = rotated
    .map((line) => line.join('').trimEnd())
    .join('\n');
  console.log(result);
};

export default displayHistogram;
