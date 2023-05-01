// https://ru.hexlet.io/challenges/js_functions_horisontal_histogram_exercise

import _ from 'lodash';

// const play = (roundsCount, rollDie) => {
//   const rolls = [1, 2, 3, 4, 5, 6];
//   for (let i = 0; i < roundsCount; i += 1) {
//     rolls.push(rollDie());
//   }

//   const stats = _.countBy(rolls);
//   const result = Object.entries(stats)
//     .map(([key, value]) => {
//       const valuePart = value - 1 === 0 ? '' : `${'#'.repeat(value - 1)} ${value - 1}`;
//       return `${key}|${valuePart}`;
//     })
//     .join('\n');

//   console.log(result);
// };

const play = (roundsCount, rollDie) => {
  const bar = '#';
  const numbers = _.times(roundsCount, rollDie);
  const sides = _.range(1, 7);

  const lines = sides.map((side) => {
    const count = numbers.filter((num) => num === side).length;
    const displayCount = count === 0 ? '' : ` ${count}`;
    return `${side}|${bar.repeat(count)}${displayCount}`;
  }).join('\n');

  console.log(lines);
};

export default play;
