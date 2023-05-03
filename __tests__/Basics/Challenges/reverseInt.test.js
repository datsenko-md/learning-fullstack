import reverseInt from '../../../src/Basics/Challenges/reverseInt.js';

test('reverseInt', () => {
  expect(reverseInt(13)).toBe(31);
  expect(reverseInt(8900)).toBe(98);
  expect(reverseInt(-25)).toBe(-52);
});
