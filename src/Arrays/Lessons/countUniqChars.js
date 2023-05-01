// https://ru.hexlet.io/courses/js-arrays/lessons/set-theory/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const countUniqChars = (text) => {
  const uniqChars = [];
  for (const char of text) {
    if (!uniqChars.includes(char)) {
      uniqChars.push(char);
    }
  }

  return uniqChars.length;
};

export default countUniqChars;
