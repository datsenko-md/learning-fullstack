/* eslint-disable no-param-reassign */

const addPrefix = (words, prefix) => {
  const result = [];
  for (let i = 0; i < words.length; i += 1) {
    result.push(`${prefix} ${words[i]}`);
  }

  return result;
};

export default addPrefix;
