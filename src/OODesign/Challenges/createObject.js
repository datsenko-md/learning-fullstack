/*
Объекты JavaScript позволяют обращаться к собственным свойствам. При обращении
к свойству, которое не было установлено, возвращается undefined:

const obj = {
  key: 'value',
  key2: {
    key3: 'value3',
  },
};

obj.key2 // { key3: 'value3' }
obj.key2.key1 // undefined
obj.key2.key1.key0 // Uncaught TypeError: Cannot read property 'key0' of undefined
В этом испытании мы реализуем особый объект, позволяющий обращаться к несуществующим
свойствам, не получая ошибки.

object.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и позволяет
получать из него свойства по любому имени. При обращении к несуществующему свойству не
должно выбрасываться исключений или возвращаться undefined. Функция должна возвращать объект Proxy.

import createObject from './object.js';

const obj = createObject({
  key: 'value',
  key2: {
    key3: 'value3',
  },
});

obj.key2 // { key3: 'value3' }

// код корректно продолжает работу:
obj.key2.key1
obj.key2.key1.key0
obj.obj.obj
Подсказки
Урок "Прокси"
Документация по Proxy на MDN
*/

// import isObject from 'lodash/isObject';

// BEGIN (write your solution here)
// const handler = {
//   get: (target, key) => target[key] ?? ,
// }
// const createObj = (obj) => {
//   const handler = {
//     get: (target, key) => new Proxy(target, handler),
//   };
//   const objectHandler = {
//     get: (target, key) => {
//       if (isObject(target[key])) {
//         return new Proxy(target[key], objectHandler)
//       }

//       const obj = new Object(target[key]);
//       return new Proxy(obj, handler);
//     }
//   };

//   return new Proxy(obj, objectHandler);
// }
// new Proxy(obj, handler);
import isObject from 'lodash/isObject';

const createObj = (obj) => {
  const handler = {
    get: (target, key) => {
      if (!(key in target)) {
        return createObj({});
      }
      const value = target[key];
      return isObject(value) ? createObj(value) : value;
    },
  };
  return new Proxy(obj, handler);
};

export default createObj;

// END
