import magic from '../../../src/Prototypes/Lessons/magic.js';

test('magic', () => {
  expect(magic(1, 2, 3) + 0).toEqual(6);
});

test('magic without arguments', () => {
  expect(magic() + 0).toEqual(0);
});

test('magic multiple call', () => {
  expect(magic(1, 2, 3)(1)(2, 3, 4) + 0).toEqual(16);
});
