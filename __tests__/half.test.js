import { test, expect } from '@jest/globals';
import half from '../index.js';

test('half', () => {
  expect(half(6)).toBe(3);
});
