import calculateSum from '../../../src/Arrays/Lessons/calculateSum.js';

test('calculateSum', () => {
  expect(calculateSum([1, 2, 3, 4, 5, 6])).toEqual(9);
  expect(calculateSum([1, 2, 7, 4, 5, 10])).toEqual(0);
  expect(calculateSum([])).toEqual(0);
});
