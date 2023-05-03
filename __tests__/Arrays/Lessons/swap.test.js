import swap from '../../../src/Arrays/Lessons/swap.js';

test('swap', () => {
  expect(swap(['one'])).toEqual(['one']);
  expect(swap(['one', 'two'])).toEqual(['two', 'one']);
  expect(swap(['one', 'two', 'three'])).toEqual(['three', 'two', 'one']);
  expect(swap([])).toEqual([]);
});
