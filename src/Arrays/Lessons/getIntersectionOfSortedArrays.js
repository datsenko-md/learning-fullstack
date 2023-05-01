// https://ru.hexlet.io/courses/js-arrays/lessons/big-o/exercise_unit

const getIntersectionOfSortedArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const intersection = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      j += 1;
    } else if (arr1[i] < arr2[j]) {
      i += 1;
    } else {
      if (!intersection.includes(arr1[i])) {
        intersection.push(arr1[i]);
      }
      i += 1;
      j += 1;
    }
  }

  return intersection;
};

export default getIntersectionOfSortedArrays;
