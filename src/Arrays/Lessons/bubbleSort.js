/* eslint-disable no-param-reassign */

const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    let stepsCount = arr.length - 1;
    for (let i = 0; i < stepsCount; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }

    stepsCount -= 1;
  } while (swapped);

  return arr;
};

export default bubbleSort;
