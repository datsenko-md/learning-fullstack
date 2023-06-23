/* eslint-disable no-extend-native */

/*
Добавьте в Object.prototype функцию hash(), которая позволяет извлекать
вложенные значения из объекта.

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

obj.hash('car'); // undefined
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

// Object.prototype.hash = function hash(key) {
//   const [currentKey, ...rest] = key.split('.');
//   const currentValue = this[currentKey];
//   if (currentValue === undefined) {
//     return undefined;
//   }
//   return rest.length > 0 ? hash.call(currentValue, rest.join('.')) : currentValue;
// };

Object.prototype.hash = function hash(path) {
  const keys = path.split('.');
  return keys.reduce((acc, item) => (acc === undefined ? acc : acc[item]), this);
};
