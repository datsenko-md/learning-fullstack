// @ts-check
// BEGIN (write your solution here)
const flatten = (list) => list.reduce((acc, node) => (Array.isArray(node)
  ? [...acc, ...flatten(node)] : [...acc, node]), []);

export default flatten;
// END
