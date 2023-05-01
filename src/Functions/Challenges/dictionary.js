// https://ru.hexlet.io/challenges/js_functions_dictionaries_merge_exercise

import _ from 'lodash';

// export default (...objects) => objects.reduce((acc, obj) => Object.entries(obj)
//   .reduce((result, [key, value]) => {
//     const group = result[key] ?? [];
//     if (!group.includes(value)) {
//       group.push(value);
//     }
//     return { ...result, [key]: group };
//   }, acc), {});

const cons = (list, element) => _.union(list, [element]);
export default (...objects) => _.mergeWith({}, ...objects, cons);
