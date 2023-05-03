import addPrefix from '../../../src/Arrays/Lessons/addPrefix.js';

test('addPrefix', () => {
  const arr = ['one', 'two', 'three'];

  const actual1 = addPrefix(arr, 'num');
  const expected1 = ['num one', 'num two', 'num three'];
  expect(actual1).toEqual(expected1);

  const actual2 = addPrefix(arr, 'num2');
  const expected2 = ['num2 one', 'num2 two', 'num2 three'];
  expect(actual2).toEqual(expected2);
});
