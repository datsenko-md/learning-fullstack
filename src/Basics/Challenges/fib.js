// https://ru.hexlet.io/challenges/js_basics_fib_exercise

// @ts-check

// BEGIN (write your solution here)
// const fib = (n) => {
//   if (n === 1 || n === 0) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// };

const fib = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i += 1) {
    const tmp = a;
    a += b;
    b = tmp;
  }

  return a;
};

export default fib;
// END
