const groupByNextNumbers = (numbers) => numbers.reduce((acc, item, index) => {
  const currentGroup = acc[item] ?? [];
  const nextItem = numbers[index + 1] ? [numbers[index + 1]] : [];
  return { ...acc, [item]: [...currentGroup, ...nextItem] };
}, {});

const getObjectFrom = (keys, values) => keys
  .reduce((acc, key, index) => ({ ...acc, [key]: values[index] }), {});

const getGroupsCounts = (groups) => Object.values(groups).map((group) => group.length);

const groupByNumbers = (items) => items.reduce((acc, item) => {
  const currentGroup = acc[item] ?? 0;
  return { ...acc, [item]: currentGroup + 1 };
}, []);

const calculateProbabilities = (numbers) => {
  const nextNumbers = groupByNextNumbers(numbers);
  const counts = getGroupsCounts(nextNumbers);

  const probabilities = Object.values(nextNumbers).map((item, index) => {
    const groupped = groupByNumbers(item);
    const values = Object.values(groupped).map((count) => count / counts[index]);
    return getObjectFrom(Object.keys(groupped), values);
  });
  return getObjectFrom(Object.keys(nextNumbers), probabilities);
};

export default calculateProbabilities;
