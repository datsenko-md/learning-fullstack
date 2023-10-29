/*
Двоичное дерево — иерархическая структура данных, в которой каждый узел
имеет не более двух потомков (детей). Как правило, первый называется
родительским узлом, а дети называются левым и правым наследниками.

В данном испытании мы будем использовать подвид двоичного дерева — двоичное
дерево поиска. Правильное дерево не содержит повторяющихся ключей, и для
каждого узла гарантируется, что в левом поддереве все значения меньше
текущего, а в правом — больше.

Двоичное дерево поиска

Node.js
Реализуйте и экспортируйте по умолчанию класс, который реализует представление
узла.

Класс должен содержать:

Геттер getKey() — возвращает ключ.
Геттеры getLeft(), getRight() — возвращают соответственно левого и правого
ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.
Метод insert(key) — выполняет добавление узла, формируя правильное двоичное
дерево.
Примеры
const tree = new Node();
tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);

tree.getKey(); // 9
tree.getLeft().getKey(); // 4
tree.getRight().getKey(); // 17
tree.getLeft().getLeft().getKey(); // 3
tree.getLeft().getRight().getKey(); // 6
Подсказки
Двоичное дерево
Двоичное дерево поиска
*/

// @ts-check
/* eslint lines-between-class-members: ["error", "always", { exceptAfterSingleLine: true }] */

// BEGIN (write your solution here)
export default class Node {
  constructor() {
    this.key = null;
    this.left = null;
    this.right = null;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  insert(value) {
    if (this.key === null) {
      this.key = value;
    }
    if (value < this.key) {
      if (this.left === null) {
        this.left = new Node();
      }
      this.left.insert(value);
    }
    if (value > this.key) {
      if (this.right === null) {
        this.right = new Node();
      }
      this.right.insert(value);
    }
  }
}
// END
