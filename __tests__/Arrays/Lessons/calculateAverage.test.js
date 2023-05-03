import calculateAverage from '../../../src/Arrays/Lessons/calculateAverage.js';

test('calculateAverage', () => {
  expect(calculateAverage([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  expect(calculateAverage([])).toEqual(null);
});
