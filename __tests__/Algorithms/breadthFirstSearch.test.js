import breadthFirstSearch from '../../src/Algorithms/breadthFirstSearch.js';

test('breadthFirstSearch', () => {
  const graph = {
    you: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['tom', 'jonny'],
    anuj: [],
    peggy: [],
    tom: [],
    jonny: [],
  };

  expect(breadthFirstSearch('you', graph)).toEqual('tom');
});
