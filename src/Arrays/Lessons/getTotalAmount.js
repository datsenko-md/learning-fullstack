// https://ru.hexlet.io/courses/js-arrays/lessons/control-statements/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getTotalAmount = (money, desiredCurrency) => {
  let sum = 0;
  for (const banknote of money) {
    const banknoteCurrency = banknote.slice(0, 3);
    if (banknoteCurrency === desiredCurrency) {
      const denomination = Number(banknote.slice(4));
      sum += denomination;
    }
  }

  return sum;
};

export default getTotalAmount;
