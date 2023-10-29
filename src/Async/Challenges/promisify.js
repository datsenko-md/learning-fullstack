/*
promisify.js
Реализуйте и экспортируйте по умолчанию функцию, которая "промисифицирует"
асинхронные функции с колбеками.

import promisify from '../promisify.js';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const filepath = '/tmp/myfile';

writeFile(filepath, 'content')
  .then(() => readFile(filepath))
  .then(console.log);
Реализация этой функции опирается на тот факт, что колбек в асинхронных
функциях всегда передается последним параметром.

Подсказка
Вам понадобятся rest и spread операторы
*/

// BEGIN (write your solution here)
// import { promisify } from 'util';
// export default (f) => promisify(f)
export default (f) => (...params) => new Promise((resolve, reject) => {
  f(...params, (err, data) => (err ? reject(err) : resolve(data)));
});
// END
