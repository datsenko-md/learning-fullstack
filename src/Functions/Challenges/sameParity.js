// https://ru.hexlet.io/challenges/js_functions_same_parity_exercise

export default (coll) => {
  const [head] = coll;
  const parity = Math.abs(head) % 2;
  return coll.filter((num) => Math.abs(num) % 2 === parity);
};
