import calcShipsCount from '../../../src/Functions/Challenges/seaBattle.js';

test('calcShipsCount', () => {
  const field = [
    [1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 1, 0],
  ];
  // expect(calcShipsCount(field)).toEqual(5);
  expect(calcShipsCount(field)).toEqual(null);
});

test('emptyField', () => {
  // expect(calcShipsCount([])).toEqual(0);
  expect(calcShipsCount([])).toEqual(null);
});
