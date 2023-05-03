import getSameParity from '../../../src/Arrays/Lessons/getSameParity.js';

test('getSameParity', () => {
  expect(getSameParity([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  expect(getSameParity([2, 7, 4, 5, 10])).toEqual([2, 4, 10]);
  expect(getSameParity([])).toEqual([]);
  expect(getSameParity([1, 2, -3])).toEqual([1, -3]);
});
