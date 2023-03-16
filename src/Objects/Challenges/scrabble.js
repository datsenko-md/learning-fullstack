// https://ru.hexlet.io/challenges/js_objects_scrabble_exercise
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const scrabble = (str, word) => {
  const wordChars = {};
  for (const char of word.toLowerCase()) {
    wordChars[char] = (wordChars[char] ?? 0) + 1;
  }
  const strChars = {};
  for (const char of str.toLowerCase()) {
    strChars[char] = (strChars[char] ?? 0) + 1;
  }

  for (const [key, value] of Object.entries(wordChars)) {
    if (!Object.hasOwn(strChars, key) || strChars[key] < value) {
      return false;
    }
  }

  return true;
};

export default scrabble;
