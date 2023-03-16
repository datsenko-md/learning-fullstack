// https://ru.hexlet.io/courses/js-functions/lessons/iterative/exercise_unit

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const iter = (divisor) => {
    if (divisor > num / 2) {
      return num;
    }
    if (num % divisor === 0) {
      return divisor;
    }

    return iter(divisor + 1);
  };

  return iter(2);
  // END
};

export default smallestDivisor;
