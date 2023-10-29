/*
Это задание хоть и небольшое, но хитрое, его иногда задают на собеседованиях.
Если не получится его решить сразу – не сдавайтесь. Оно стоит того, чтобы
разобраться. Посмотрите обсуждения, там будет множество подсказок в других формулировках.

magic.js
Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

Принимает на вход любое количество аргументов и возвращает функцию, которая,
в свою очередь, принимает на вход любое количество аргументов и так до
бесконечности (привет, рекурсия ;)).
Аргументами могут быть только числа.
Результат вызова этой функции при проверке на равенство должен быть равен сумме
всех аргументов всех подфункций.
import magic from './magic.js';

magic() == 0; // true
magic(5, 2, -8) == -1; // true
magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true
magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true
Подсказки
Объекты в JS по умолчанию имеют метод valueOf(), который вызывается автоматически
в тех местах, где требуется преобразование к числовому значению (контекст
  арифметических операций и операций нестрогого сравнения). В ситуации выше, во
  время сравнения, JS вызовет valueOf() для нашей функции. Этим можно
  воспользоваться для того, чтобы возвращать сумму через valueOf().

const obj = {}
obj + 3; // '[object Object]3'
obj.valueOf = () => 3;
obj + 7; // 10
Алгоритм
Для решения задачи вам понадобится создать внутри ещё одну функцию.
Возврат функции из функции позволит сохранять результат предыдущих вычислений.
Функции — это объекты, используйте данную особенность. Она позволит отдавать
результат вычислений только в нужный момент.
Внимательно изучите теорию и примените подходы из неё для этой практики.
*/

// @ts-check
// BEGIN (write your solution here)
export default function magic(...args) {
  const sum = args.reduce((acc, item) => acc + item, 0);
  const inner = (...params) => magic(sum, ...params);
  inner.valueOf = () => sum;
  return inner;
}

// END
