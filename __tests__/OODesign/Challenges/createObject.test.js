/* eslint-disable dot-notation */
import util from 'util';
import createObject from '../../../src/OODesign/Challenges/createObject.js';

const getSourceObject = () => ({
  key: 'value',
  key2: {
    key3: 'value3',
  },
});

test('Using Proxy', () => {
  const obj = createObject(getSourceObject());
  expect(util.types.isProxy(obj)).toBe(true);
});

test('Existing properties', () => {
  const sourceObject = getSourceObject();
  const obj = createObject(sourceObject);
  expect(obj.key).toEqual(sourceObject.key);
  expect(obj['key']).toEqual(sourceObject.key);
  expect(obj.key2).toEqual({ ...sourceObject.key2 });
  expect(obj.key2.key3).toEqual(sourceObject.key2.key3);
});

test('Set properties', () => {
  const sourceObject = getSourceObject();
  const obj = createObject(sourceObject);
  obj['key1'] = 5;
  obj.key2.key1 = [];
  expect(obj.key1).toEqual(5);
  expect(obj['key2'].key1).toEqual([]);
});

test('Not existing properties', () => {
  const sourceObject = getSourceObject();
  const obj = createObject(sourceObject);
  expect(() => obj.undefinedKey).not.toThrow();
  expect(() => obj['key1']['key2']).not.toThrow();
  expect(() => obj.key2.key1.key0).not.toThrow();
  expect(obj['key1']).not.toBeUndefined();
  expect(obj.obj.obj).not.toBeUndefined();
});
