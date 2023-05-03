import isPerfect from '../../../src/Basics/Challenges/isPerfect.js';

test('isPerfect', () => {
  expect(isPerfect(6)).toBe(true);
  expect(isPerfect(7)).toBe(false);
  expect(isPerfect(0)).toBe(false);
  expect(isPerfect(-6)).toBe(false);
});
