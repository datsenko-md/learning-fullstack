// https://ru.hexlet.io/challenges/js_basics_reverse_integer_exercise

const reverseInt = (n) => {
  const numAsStr = String(Math.abs(n));
  let reversedStr = '';
  for (let i = 0; i < numAsStr.length; i += 1) {
    reversedStr = `${numAsStr[i]}${reversedStr}`;
  }
  const reversedModule = Number(reversedStr);

  return Number(n > 0 ? reversedModule : -reversedModule);
};

export default reverseInt;
