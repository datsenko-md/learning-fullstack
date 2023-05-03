import invertCase from '../../../src/Basics/Challenges/invertCase.js';

test('invertCase', () => {
  expect(invertCase('Hello, World!')).toBe('hELLO, wORLD!');
  expect(invertCase('I loVe JS')).toBe('i LOvE js');
});
