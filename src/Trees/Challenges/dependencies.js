/*
Управление зависимостями - это очень важная задача при разработке программного обеспечения.
Обычно в приложениях задействовано множество сторонних компонентов, которые, в свою очередь,
тоже могут полагаться на сторонние компоненты. Одной из задач менеджера зависимостей является
подключение зависимостей в правильном порядке. Библиотеки, от которых зависят другие,
должны подключаться раньше. Определение этой последовательности сводится к задаче сортировки
графа.

sortDeps.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список зависимостей
и возвращает список (массив) отсортированных узлов.
*/
// @ts-check
// BEGIN (write your solution here)
/* eslint no-restricted-syntax: off */
const sortDeps = (deps) => {
  const add = (acc, node) => {
    const subDeps = deps[node] || [];
    const subAcc = subDeps.reduce(add, []);
    return { ...acc, ...subAcc, [node]: true };
  };

  const result = Object.keys(deps).reduce(add, {});
  return Object.keys(result);
  // const deps = { ...data };
  // const innerValue = Object.values(data).flat();
  // for (const dep of innerValue) {
  //   if (!Object.hasOwn(deps, dep)) {
  //     deps[dep] = [];
  //   }
  // }

  // const direction = Object.keys(deps);
  // let white = [...direction];
  // let black = [];
  // let grey = [];
  // const remove = (coll, value) => coll.filter((item) => item !== value);
  // const taryan = (node) => {
  //   if (black.includes(node)) {
  //     return;
  //   }

  //   if (grey.includes(node)) {
  //     return;
  //   }
  //   white = remove(white, node);
  //   grey.push(node);
  //   const children = deps[node];
  //   children.map(taryan);
  //   grey = remove(grey, node);
  //   black = [node, ...black];
  // };

  // direction.map(taryan);
  // return black.reverse();
};

export default sortDeps;
// END
