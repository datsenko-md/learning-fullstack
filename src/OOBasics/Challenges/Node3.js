/*
В данном испытании мы будем использовать двоичное дерево, и выполнять агрегацию данных.

Node.js
Реализуйте следующие методы в классе:

getCount() — возвращает количество узлов в дереве.
getSum() — возвращает сумму всех ключей дерева.
toArray() — возвращает одномерный массив содержащий все ключи.
toString() — возвращает строковое представление дерева.
every(fn) — проверяет, удовлетворяют ли все ключи дерева условию, заданному в передаваемой функции.
some(fn) - проверяет, удовлетворяет ли какой-либо ключ дерева условию, заданному
в передаваемой функции.
При обходе дерева нужно использовать порядок слева-направо. То есть вначале
обрабатываем ключ узла, затем ключ левого ребёнка, после чего ключ правого ребёнка.

Примеры
const tree = new Node(9,
  new Node(4,
    new Node(8),
    new Node(6,
      new Node(3),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      null,
      new Node(20))));

tree.getCount() // 9
tree.getSum(); // 96
tree.toArray(); // [9, 4, 8, 6, 3, 7, 17, 22, 20]
tree.toString(); // '(9, 4, 8, 6, 3, 7, 17, 22, 20)'

tree.every((key) => key <= 22); // true
tree.every((key) => key < 22); // false
tree.some((key) => key < 4); // true
tree.some((key) => key > 22); // false
Подсказки
Двоичное дерево
Для реализации каждого из методов потребуется выполнить обход всех узлов дерева.
Вспомните принцип работы метода reduce для массивов.
*/

// @ts-check

export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  // BEGIN (write your solution here)
  reduce(fn, initValue) {
    let acc = fn(initValue, this.key);

    if (this.left !== null) {
      acc = this.left.reduce(fn, acc);
    }

    if (this.right !== null) {
      acc = this.right.reduce(fn, acc);
    }

    return acc;
  }

  getCount() {
    return this.reduce((acc) => acc + 1, 0);
  }

  getSum() {
    return this.reduce((acc, key) => acc + key, 0);
  }

  toArray() {
    return this.reduce((acc, key) => [...acc, key], []);
  }

  toString() {
    return `(${this.toArray().join(', ')})`;
  }

  every(fn) {
    return this.reduce((acc, key) => acc && fn(key), true);
  }

  some(fn) {
    return this.reduce((acc, key) => acc || fn(key), false);
  }
  // END
}
