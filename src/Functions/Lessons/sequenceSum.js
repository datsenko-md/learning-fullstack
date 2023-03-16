// https://ru.hexlet.io/courses/js-functions/lessons/recursion/exercise_unit

const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  }

  if (begin === end) {
    return begin;
  }

  return begin + sequenceSum(begin + 1, end);
  // END
};

export default sequenceSum;
