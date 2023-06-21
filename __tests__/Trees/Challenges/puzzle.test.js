/* eslint-disable no-multi-spaces */
import combine from '../../../src/Trees/Challenges/puzzle.js';

test('combine', () => {
  const branch1 = ['A', [ //   A
    ['B', [               //   |
      ['C'],              //   B
      ['D'],              //  / \
    ]],                   // C   D
  ]];

  const branch2 = ['B', [ //   B
    ['D', [               //   |
      ['E'],              //   D
      ['F'],              //  / \
    ]],                   // E   F
  ]];

  const branch3 = ['I', [ //   I
    ['A', [               //   |
      ['B', [             //   A
        ['C'],            //   |
        ['H'],            //   B
      ]],                 //  / \
    ]],                   // C   H
  ]];

  const expected = ['A', [      //     A
    ['B', [                     //    / \
      ['C'],                    //   B   I
      ['D', [                   //  /|\
        ['E'],                  // C D H
        ['F'],                  //  / \
      ]],                       // E   F
      ['H'],
    ]],
    ['I'],
  ]];

  expect(combine(branch1, branch2, branch3)).toEqual(expected);
});
