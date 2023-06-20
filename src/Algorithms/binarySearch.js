const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
};

const binarySearchF = (list, item) => {
  const low = 0;
  const high = list.length - 1;
  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];
  if (guess === item) {
    return mid;
  }

  return guess < item
    ? binarySearchF(list.slice(mid + 1), item)
    : binarySearchF(list.slice(mid), item);
};

export default binarySearch;
export { binarySearchF };
