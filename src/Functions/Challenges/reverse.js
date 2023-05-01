// https://ru.hexlet.io/challenges/js_basics_reverse_string_exercise

const reverse = (str) => {
  if (str.length === 0) {
    return '';
  }

  return reverse(str.slice(1)) + str[0];
};

export default reverse;
