// https://ru.hexlet.io/courses/js-arrays/lessons/aggregation/exercise_unit

const calculateSum = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
};

export default calculateSum;
