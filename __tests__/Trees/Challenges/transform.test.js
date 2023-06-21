/* eslint-disable no-multi-spaces */
import transform, { getAdjecencyList, getTree, setNewRoot } from '../../../src/Trees/Challenges/transform.js';

test('transform', () => {
  const tree = ['A', [ //     A
    ['B', [            //    / \
      ['D'],           //   B   C
    ]],                //  /   / \
    ['C', [            // D   E   F
      ['E'],
      ['F'],
    ]],
  ]];
  // ['B', [           //   B
  //   ['D'],          //  / \
  //   ['A', [         // D   A
  //     ['C', [       //      \
  //       ['E'],      //       C
  //       ['F'],      //      / \
  //     ]],           //     E   F
  //   ]],
  // ]];

  const expected = ['B', [
    ['D'],
    ['A', [
      ['C', [
        ['E'],
        ['F'],
      ]],
    ]],
  ]];

  expect(transform(tree, 'B')).toEqual(expected);
});

test('getAdjecencyList', () => {
  const tree = ['A', [ //     A
    ['B', [            //    / \
      ['D'],           //   B   C
    ]],                //  /   / \
    ['C', [            // D   E   F
      ['E'],
      ['F'],
    ]],
  ]];

  const adjecencyList = {
    A: [null, ['B', 'C']],
    B: ['A', ['D']],
    D: ['B', []],
    C: ['A', ['E', 'F']],
    E: ['C', []],
    F: ['C', []],
  };

  expect(getAdjecencyList(tree)).toEqual(adjecencyList);
});

test('getTree', () => {
  const tree = ['A', [ //     A
    ['B', [            //    / \
      ['D'],           //   B   C
    ]],                //  /   / \
    ['C', [            // D   E   F
      ['E'],
      ['F'],
    ]],
  ]];

  const adjecencyList = {
    A: [null, ['B', 'C']],
    B: ['A', ['D']],
    D: ['B', []],
    C: ['A', ['E', 'F']],
    E: ['C', []],
    F: ['C', []],
  };

  expect(getTree(adjecencyList)).toEqual(tree);
});

test('setNewRoot', () => {
  const adjecencyList = {
    A: [null, ['B', 'C']],
    B: ['A', ['D']],
    D: ['B', []],
    C: ['A', ['E', 'F']],
    E: ['C', []],
    F: ['C', []],
  };
  // ['B', [           //   B
  //   ['D'],          //  / \
  //   ['A', [         // D   A
  //     ['C', [       //      \
  //       ['E'],      //       C
  //       ['F'],      //      / \
  //     ]],           //     E   F
  //   ]],
  // ]];

  const expected = {
    B: [null, ['D', 'A']],
    A: ['B', ['C']],
    D: ['B', []],
    C: ['A', ['E', 'F']],
    E: ['C', []],
    F: ['C', []],
  };

  expect(setNewRoot(adjecencyList, 'B')).toEqual(expected);
});
