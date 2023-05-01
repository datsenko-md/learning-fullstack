// https://ru.hexlet.io/challenges/js_arrays_hamming_weight_exercise

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const hammingWeight = (num) => {
  const binaryNum = num.toString(2);
  let sum = 0;
  for (const digit of binaryNum) {
    sum += Number(digit);
  }

  return sum;
};

export default hammingWeight;
