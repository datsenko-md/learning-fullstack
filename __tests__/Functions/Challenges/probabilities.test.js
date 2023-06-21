import calculateProbabilities from '../../../src/Functions/Challenges/probabilities.js';

test('calculateProbabilities', () => {
  const expected = {
    1: { 3: 0.5, 5: 0.5 },
    3: { 1: 1 },
    5: { 1: 1 },
  };
  const data = [1, 3, 1, 5, 1];
  expect(calculateProbabilities(data)).toEqual(expected);

  const data2 = [1, 3, 1, 5, 1, 2, 1, 6];
  const expected2 = {
    1: {
      2: 0.25,
      3: 0.25,
      5: 0.25,
      6: 0.25,
    },
    2: { 1: 1 },
    3: { 1: 1 },
    5: { 1: 1 },
    6: {},
  };
  expect(calculateProbabilities(data2)).toEqual(expected2);
});

test('calculateProbabilities Empty Data', () => {
  const data = [];
  const expected = {};
  expect(calculateProbabilities(data)).toEqual(expected);
});
