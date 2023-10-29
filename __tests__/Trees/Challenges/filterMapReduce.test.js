import {
  mkdir, mkfile, getName, isDirectory,
} from '@hexlet/immutable-fs-trees';
import { filter, map, reduce } from '../../../src/Trees/Challenges/filterMapReduce.js';

let tree;

beforeEach(() => {
  tree = mkdir('/', [
    mkdir('eTc', [
      mkfile('config.json'),
    ]),
  ]);
});

test('map', () => {
  const expected = {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'ETC',
        type: 'directory',
        meta: {},
        children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
      },
    ],
  };

  expect(map((n) => ({ ...n, name: getName(n).toUpperCase() }), tree)).toEqual(expected);
});

test('filter', () => {
  const expected = {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'eTc',
        type: 'directory',
        meta: {},
        children: [],
      },
    ],
  };
  const actual = filter((n) => isDirectory(n), tree);
  expect(actual).toEqual(expected);
});

test('reduce', () => {
  expect(reduce((acc) => acc + 1, tree, 0)).toEqual(3);
});
