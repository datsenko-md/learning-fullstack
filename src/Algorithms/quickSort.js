const quickSort = (coll) => {
  if (coll.length < 2) {
    return coll;
  }

  const [pivot, ...rest] = coll;
  const less = rest.filter((item) => item <= pivot);
  const greater = rest.filter((item) => item > pivot);
  return [...quickSort(less), pivot, ...quickSort(greater)];
};

export default quickSort;
