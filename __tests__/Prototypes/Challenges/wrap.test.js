import '../../../src/Prototypes/Challenges/wrap.js';

test('wrap', () => {
  function speak(name) {
    return `Hello ${name}`;
  }

  const newSpeak = speak.wrap((original, yourName, myName) => {
    const greeting = original(yourName);
    return `${greeting}, my name is ${myName}`;
  });

  expect(newSpeak('Mary', 'Kate')).toEqual('Hello Mary, my name is Kate'); // Hello Mary, my name is Kate
});
