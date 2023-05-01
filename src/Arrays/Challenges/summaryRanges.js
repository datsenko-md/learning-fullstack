// https://ru.hexlet.io/challenges/js_arrays_summary_ranges_exercise

/* eslint-disable no-param-reassign, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// const getRange = (coll, result) => {
//   console.log(coll);
//   let [head, ...tail] = coll;
//   let i = 0;
//   let current;
//   while (tail) {
//     const expected = head + 1 + i;
//     [current] = tail;
//     if (current !== expected) {
//       result = current - 1 === head ? [...result, [head, current - 1]] : result;
//       return getRange(tail, result);
//     }
//     i += 1;
//     tail = tail.slice(1);
//   }

//   return current ? [...result, [head, current]] : result;
// };

// const summaryRanges = (range) => {
//   if (range.length === 0) {
//     return [];
//   }

//   const rangesList = getRange(range, []);
//   const result = [];
//   for (const [head, tail] of rangesList) {
//     result.push(`${head}->${tail}`);
//   }

//   return result;
// };

// const summaryRanges = (coll) => {
//   if (coll.length < 2) {
//     return [];
//   }

//   const ranges = [];
//   let [head] = coll;
//   let range = [];
//   range.push(head);
//   for (let i = 1, j = 1; i < coll.length; i += 1, j += 1) {
//     const current = coll[i];
//     const expected = head + j;
//     if (current !== expected) {
//       ranges.push(range);
//       head = current;
//       range = [head];
//       j = 0;
//     } else {
//       range.push(current);
//     }
//   }
//   ranges.push(range);

//   const result = [];
//   for (const item of ranges) {
//     if (item.length > 1) {
//       const [begin] = item;
//       const end = item.at(-1);
//       result.push(`${begin}->${end}`);
//     }
//   }

//   return result;
// };

const getRange = (range) => {
  const [begin] = range;
  const end = range.at(-1);
  return `${begin}->${end}`;
};

const summaryRanges = (numbers) => {
  let sequence = [];
  const ranges = [];

  for (let index = 0; index < numbers.length; index += 1) {
    const current = numbers[index];
    const next = numbers[index + 1];
    sequence.push(current);
    if (current + 1 !== next) {
      if (sequence.length > 1) {
        ranges.push(getRange(sequence));
      }
      sequence = [];
    }
  }

  return ranges;
};

export default summaryRanges;
