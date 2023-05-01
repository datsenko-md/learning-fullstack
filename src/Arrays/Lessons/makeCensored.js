// https://ru.hexlet.io/courses/js-arrays/lessons/strings/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const makeCensored = (sentence, stopWords) => {
  const separatot = ' ';
  const words = sentence.split(separatot);
  const censoredWords = [];
  const replacement = '$#%!';
  for (const word of words) {
    censoredWords.push(stopWords.includes(word) ? replacement : word);
  }

  return censoredWords.join(separatot);
};

export default makeCensored;
