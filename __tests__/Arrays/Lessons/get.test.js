import get from '../../../src/Arrays/Lessons/get.js';

test('get', () => {
  expect(get(['one', 'two', 'three'], 1)).toEqual('two');
  expect(get(['one', 'two', 'three'], 10, 'def')).toEqual('def');
  expect(get(['one', 'two', 'three'], 1, 'def')).toEqual('two');
  expect(get(['one', 'two', 'three'], -10, 'def')).toEqual('def');
  expect(get(['one', 'two', 'three'], 10)).toEqual(null);
  expect(get(['one', 'two', 'three'], 3, 'def')).toEqual('def');
});
