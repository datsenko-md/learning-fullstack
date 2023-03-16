// https://ru.hexlet.io/challenges/js_basics_happy_numbers_exercise

const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const happyNumbers = (n) => {
  const tryCounter = 10;
  const iter = (num, counter) => {
    if (counter > tryCounter) {
      return false;
    }

    const sum = sumOfSquareDigits(num);
    return sum === 1 ? true : iter(sum, counter + 1);
  };
  return iter(n, 1);
};

export default happyNumbers;
