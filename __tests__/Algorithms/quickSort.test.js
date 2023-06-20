import quickSort from '../../src/Algorithms/quickSort.js';

test('quickSort', () => {
  expect(quickSort([5, 3, 6, 2, 10])).toEqual([2, 3, 5, 6, 10]);
});
