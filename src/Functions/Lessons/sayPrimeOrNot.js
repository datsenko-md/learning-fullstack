// https://ru.hexlet.io/courses/js-functions/lessons/pure-functions/exercise_unit

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const sayPrimeOrNot = (num) => console.log(isPrime(num) ? 'yes' : 'no');

export default sayPrimeOrNot;
