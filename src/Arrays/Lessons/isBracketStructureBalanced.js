// https://ru.hexlet.io/courses/js-arrays/lessons/stack/exercise_unit

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const isBracketStructureBalanced = (sequence) => {
  const stack = [];
  const openingBrackets = ['[', '{', '<', '('];
  const closingBrackets = [']', '}', '>', ')'];
  for (const bracket of sequence) {
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (openingBrackets.indexOf(stack.pop()) !== closingBrackets.indexOf(bracket)) {
      return false;
    }
  }

  return stack.length === 0;
};

export default isBracketStructureBalanced;
