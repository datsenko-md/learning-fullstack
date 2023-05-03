import reverse from '../../../src/Arrays/Lessons/reverse.js';

test('reverse', () => {
  const arr = ['one', 'two', 'three'];
  reverse(arr);
  expect(arr).toEqual(['three', 'two', 'one']);
});
