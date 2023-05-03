import bubbleSort from '../../../src/Arrays/Lessons/bubbleSort.js';

test('bubbleSort', () => {
  expect(bubbleSort([1, 2, 3, 4, 5, 6, 0])).toEqual([0, 1, 2, 3, 4, 5, 6]);
  expect(bubbleSort([])).toEqual([]);
});
