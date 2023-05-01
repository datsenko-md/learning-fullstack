// https://ru.hexlet.io/challenges/js_functions_nrzi_exercise

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// const nrzi = (signal) => {
//   const stack = [];
//   const result = [];
//   for (const symbol of signal) {
//     if (symbol === '|') {
//       stack.push(1);
//     } else {
//       result.push(stack.pop() ?? 0);
//     }
//   }

//   return result.join('');
// };

const nrzi = (signal) => signal
  .split('')
  .map((element, index, arr) => {
    if (element === '|') {
      return '';
    }
    return arr[index - 1] === '|' ? 1 : 0;
  })
  .join('');

export default nrzi;
