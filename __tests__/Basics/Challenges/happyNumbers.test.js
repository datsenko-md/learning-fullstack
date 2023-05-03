import happyNumbers from '../../../src/Basics/Challenges/happyNumbers.js';

test('happyNumbers', () => {
  expect(happyNumbers(7)).toBe(true);
  expect(happyNumbers(8)).toBe(false);
});
