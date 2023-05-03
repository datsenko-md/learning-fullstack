/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */

import _ from 'lodash';

const tree2 = ['Moscow', [
  ['Smolensk'],
  ['Yaroslavl'],
  ['Voronezh', [
    ['Liski'],
    ['Boguchar'],
    ['Kursk', [
      ['Belgorod', [
        ['Borisovka'],
      ]],
      ['Kurchatov'],
    ]],
  ]],
  ['Ivanovo', [
    ['Kostroma'], ['Kineshma'],
  ]],
  ['Vladimir'],
  ['Tver', [
    ['Klin'], ['Dubna'], ['Rzhev'],
  ]],
]];

const makeFlat = (tree, dictionary, parent = null) => {
  const [node, branches = []] = tree;
  const children = [];
  dictionary[node] = [parent, children];
  for (const branch of branches) {
    children.push(makeFlat(branch, dictionary, node));
  }
  return node;
};

const flat = {};
makeFlat(tree2, flat);
// console.log(flat);
const getPath = (cities, city, path = []) => {
  const [parent] = cities[city];
  if (parent === null) {
    return [city, ...path];
  }
  return getPath(cities, parent, [city, ...path]);
};

const itinerary = (tree, startCity, finishCity) => {
  const cities = {};
  makeFlat(tree, cities);
  const startPath = getPath(cities, startCity, []);
  const endPath = getPath(cities, finishCity, []);
  const sameCities = _.intersection(startPath, endPath);
  const sameCity = _.last(sameCities);
  const resultPath = [
    ..._.difference(startPath, endPath).reverse(),
    sameCity,
    ..._.difference(endPath, startPath),
  ];
  return resultPath;
};

export default itinerary;
// console.log(itinerary(tree2, 'Borisovka', 'Kurchatov'));
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']
