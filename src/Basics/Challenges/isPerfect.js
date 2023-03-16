// https://ru.hexlet.io/challenges/js_basics_perfect_numbers_exercise

const isPerfect = (n) => {
  if (n <= 1) {
    return false;
  }

  let sumOfDivisors = 0;
  for (let i = 1; i <= n / 2; i += 1) {
    if (n % i === 0) {
      sumOfDivisors += i;
    }
  }

  return sumOfDivisors === n;
};

export default isPerfect;
