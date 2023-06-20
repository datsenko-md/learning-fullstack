/* eslint-disable no-restricted-syntax */
const findSmallest = (coll) => {
  let [smallest] = coll;
  let smallestIndex = 0;
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] < smallest) {
      smallest = coll[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  const size = arr.length;
  const newArr = [];
  for (let i = 0; i < size; i += 1) {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return newArr;
};

export default selectionSort;
