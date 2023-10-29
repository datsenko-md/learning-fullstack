/*
Особенность структуры двоичного дерева даёт хороший прирост к эффективности при
поиске нужного значения. Для этого нужно, чтобы двоичное дерево было
сбалансированным. То есть необходимо построить дерево так, чтобы общее количество
узлов в левом и правом поддеревьях было примерно одинаковым для любого узла дерева.

Node.js
Реализуйте метод isBalanced(), который проверяет дерево на сбалансированность.
Он возвращает true, если количество узлов в левом и правом поддеревьях каждого
узла отличается не более, чем на 2. В ином случае метод должен вернуть false.

Сбалансированное дерево

Сбалансированное двоичное дерево поиска

Несбалансированное дерево

Несбалансированное двоичное дерево поиска

В узле 5 количество узлов в левом поддереве равно 4, а в правом — 1. Разница
составляет 3. Это больше, чем максимально допустимая разница по условию задачи (2).

Примеры
const tree1 = new Node(4,
  new Node(3,
    new Node(2)));

tree1.isBalanced(); // true

const tree2 = new Node(4,
  new Node(3,
    new Node(2,
      new Node(1))));

tree2.isBalanced(); // false

*/

// @ts-check

export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  // BEGIN (write your solution here)
  reduce(fn, initialValue) {
    let acc = fn(initialValue, this.key);

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

  isBalanced() {
    const leftCount = this.left === null ? 0 : this.left.getCount();
    const rightCount = this.right === null ? 0 : this.right.getCount();

    const isBalancedCurrent = leftCount - rightCount <= 2;
    const isBalancedLeft = this.left === null ? true : this.left.isBalanced();
    const isBalancedRight = this.right === null ? true : this.right.isBalanced();

    return isBalancedCurrent && isBalancedLeft && isBalancedRight;
  }
  // END
}
