/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const flatten = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  let result = [];
  for (const item of arr) {
    result = Array.isArray(item) ? [...result, ...item] : [...result, item];
  }

  return result;
};

export { flatten };
