// https://ru.hexlet.io/challenges/js_objects_find_where_exercise
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const findWhere = (data, search) => {
  for (const item of data) {
    let isSearchedItem = true;
    for (const [key, value] of Object.entries(search)) {
      if (item[key] !== value) {
        isSearchedItem = false;
      }
    }

    if (isSearchedItem) {
      return item;
    }
  }

  return null;
};

export default findWhere;
