import fib from '../../../src/Basics/Challenges/fib.js';

test('fib', () => {
  expect(fib(10)).toBe(55);
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
});
