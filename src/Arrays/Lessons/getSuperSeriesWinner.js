// https://ru.hexlet.io/courses/js-arrays/lessons/nested-arrays/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getSuperSeriesWinner = (scores) => {
  let balance = 0;
  for (const score of scores) {
    const canadaWashersCount = score[0];
    const ussrWashersCount = score[1];
    balance += Math.sign(canadaWashersCount - ussrWashersCount);
  }

  if (balance > 0) {
    return 'canada';
  } if (balance < 0) {
    return 'ussr';
  }

  return null;
};

export default getSuperSeriesWinner;
