// https://ru.hexlet.io/challenges/js_arrays_reverse_polish_notation_exercise

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const calcInPolishNotation = (symbols) => {
  const stack = [];
  const operators = ['+', '-', '*', '/'];
  for (const symbol of symbols) {
    if (operators.includes(symbol)) {
      const b = stack.pop();
      const a = stack.pop();
      switch (symbol) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        default:
          if (b === 0) {
            return null;
          }
          stack.push(a / b);
      }
    } else {
      stack.push(symbol);
    }
  }

  return stack.pop();
};

export default calcInPolishNotation;
