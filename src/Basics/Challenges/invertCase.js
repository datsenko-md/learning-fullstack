// https://ru.hexlet.io/challenges/js_basics_invert_case_exercise

const invertCase = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i += 1) {
    const upper = text[i] === text[i].toUpperCase();
    const inverted = upper ? text[i].toLowerCase() : text[i].toUpperCase();
    result = `${result}${inverted}`;
  }

  return result;
};

export default invertCase;
