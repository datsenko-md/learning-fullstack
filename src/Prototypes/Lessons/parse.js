/*
Текущая версия htmlBuilder должна уметь работать с одиночными тегами. Список тегов, которые
являются одиночными, находится в singleTagsList.

Пример:
// <br>
['br'];

// <img src="/path">
['img', { src: '/path' }];
solution.js
Реализуйте и экспортируйте функции parse() и render().

Функция render() принимает на вход ast и возвращает строковое представление.
Функция parse() принимает на вход исходную структуру и возвращает представление в виде ast.
Пример:
const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);

{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]}
*/
import identity from 'lodash/identity';

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const propertyActions = [
  {
    name: 'body',
    check: (param) => typeof param === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: (param) => param instanceof Array,
    process: (children, fn) => children.map(fn),
  },
  {
    name: 'attributes',
    check: (param) => param instanceof Object,
    process: identity,
  },
];

const getPropertyAction = (param) => propertyActions.find(({ check }) => check(param));

const parse = (data) => {
  const [tagName, ...properties] = data;

  const root = {
    name: tagName,
    attributes: {},
    body: '',
    children: [],
  };

  const ast = properties.reduce((acc, property) => {
    const { name, process } = getPropertyAction(property);
    return { ...acc, [name]: process(property, parse) };
  }, root);

  return ast;
};

const buildAttrLine = (attributes) => Object.entries(attributes)
  .map(([key, value]) => ` ${key}="${value}"`).join('');

const render = (data) => {
  const {
    name,
    attributes,
    body,
    children,
  } = data;
  const attrLine = buildAttrLine(attributes);

  if (singleTagsList.has(name)) {
    return `<${name}${attrLine}>`;
  }

  const content = children.length > 0 ? children.map(render).join('') : body;
  return `<${name}${attrLine}>${content}</${name}>`;
};

export { render, parse };
