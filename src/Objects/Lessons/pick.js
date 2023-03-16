// https://ru.hexlet.io/courses/js-objects/lessons/for-of/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// const pick = (data, keys) => {
//   const result = {};
//   const entries = Object.entries(data);
//   for (const [key, value] of entries) {
//     if (keys.includes(key)) {
//       result[key] = value;
//     }
//   }

//   return result;
// };

const pick = (data, keys) => {
  const result = {};
  for (const key of keys) {
    if (Object.hasOwn(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
};

export default pick;
