import binarySearch, { binarySearchF } from '../../src/Algorithms/binarySearch.js';

test('binarySearch', () => {
  expect(binarySearch([1, 3, 7, 10, 11], 7)).toEqual(2);
});

test('binarySearch not found', () => {
  expect(binarySearch([1, 3, 7, 10, 11], 100)).toBeNull();
});

test('binarySearchF', () => {
  expect(binarySearchF([1, 3, 7, 10, 11], 7)).toEqual(2);
});
