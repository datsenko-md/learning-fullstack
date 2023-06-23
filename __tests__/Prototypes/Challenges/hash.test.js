import '../../../src/Prototypes/Challenges/hash.js';

test('hash', () => {
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

  expect(obj.hash('car')).toBeUndefined();
  expect(obj.hash('person.history.bio')).toEqual({ funFact: 'I like fishing.' });
  expect(obj.hash('person.history.homeStreet')).toBeUndefined();
  expect(obj.hash('person.animal.pet.needNoseAntEater')).toBeUndefined();
});
