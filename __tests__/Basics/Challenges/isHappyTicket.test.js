import isHappyTicket from '../../../src/Basics/Challenges/isHappyTicket.js';

test('isHappyTicket', () => {
  expect(isHappyTicket('123321')).toBe(true);
  expect(isHappyTicket('123221')).toBe(false);
  expect(isHappyTicket('1230')).toBe(true);
  expect(isHappyTicket('1231')).toBe(false);
});
