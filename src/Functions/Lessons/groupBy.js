// https://ru.hexlet.io/courses/js-functions/lessons/reduce/exercise_unit

// export default (coll, prop) => coll.reduce((acc, item) => {
//   if (!Object.hasOwn(acc, item[prop])) {
//     acc[item[prop]] = [];
//   }

//   acc[item[prop]].push(item);
//   return acc;
// }, {});
export default (coll, prop) => coll.reduce((acc, item) => {
  const groupName = item[prop];
  const group = acc[groupName] ?? [];
  return { ...acc, [groupName]: group.concat(item) };
}, {});
