// https://ru.hexlet.io/challenges/js_basics_fizzbuzz_exercise

// @ts-check

/* eslint-disable no-console */

// const fizzBuzz = (begin, end) => {
//   for (let i = begin; i <= end; i += 1) {
//     const multipleOfThree = i % 3 === 0;
//     const multipleOfFive = i % 5 === 0;

//     if (multipleOfThree && multipleOfFive) {
//       console.log('FizzBuzz');
//     } else if (multipleOfFive) {
//       console.log('Buzz');
//     } else if (multipleOfThree) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// export default fizzBuzz;

const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0 ? 'Fizz' : '';
    const hasBuzz = i % 5 === 0 ? 'Buzz' : '';
    console.log(`${hasFizz}${hasBuzz}` || i);
  }
};

export default fizzBuzz;
