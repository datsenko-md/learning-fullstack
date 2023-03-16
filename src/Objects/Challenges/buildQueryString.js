// https://ru.hexlet.io/challenges/js_objects_query_string_exercise
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const buildQueryString = (params) => {
  const keys = Object.keys(params);
  keys.sort();
  const parts = [];
  for (const key of keys) {
    parts.push(`${key}=${params[key]}`);
  }

  return parts.join('&');
};

export default buildQueryString;
