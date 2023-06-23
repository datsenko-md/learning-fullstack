/* eslint-disable no-extend-native */

/*
Добавьте в Function.prototype функцию wrap(),
которая работает согласно примеру:

function speak(name) {
   return `Hello ${name}`;
}

const newSpeak = speak.wrap((original, yourName, myName) => {
  const greeting = original(yourName);
  return `${greeting}, my name is ${myName}`;
});

newSpeak('Mary', 'Kate'); // Hello Mary, my name is Kate
*/

Function.prototype.wrap = function wrap(fn) {
  // return fn.bind(null, this);
  return (...args) => fn(this, ...args);
};
