// https://ru.hexlet.io/courses/js-arrays/lessons/isset/exercise_unit

const get = (arr, index, defaultValue = null) => {
  if (index < 0 || index >= arr.length) {
    return defaultValue;
  }

  return arr[index];
};

export default get;
