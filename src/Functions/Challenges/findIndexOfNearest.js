// https://ru.hexlet.io/challenges/js_functions_find_nearest_exercise

const findIndexOfNearest = (coll, element) => {
  if (coll.length === 0) {
    return null;
  }

  // let nearestIndex = 0;
  // let nearestDistance = Math.abs(coll[nearestIndex] - element);
  // for (let i = 0; i < coll.length; i += 1) {
  //   const currentDistance = Math.abs(coll[i] - element);
  //   if (nearestDistance > currentDistance) {
  //     nearestDistance = currentDistance;
  //     nearestIndex = i;
  //   }
  // }

  // return nearestIndex;
  const diffs = coll.map((item) => Math.abs(item - element));

  return diffs.reduce((index, diff, curentIndex) => (diffs[index] > diff ? curentIndex : index), 0);
};

export default findIndexOfNearest;
