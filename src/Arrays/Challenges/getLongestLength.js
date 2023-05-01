// https://ru.hexlet.io/challenges/js_arrays_longest_substring_exercise

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// const getLongestLength = (str) => {
//   let maxSubstrLength = 0;
//   let [...arr] = str;
//   let substr = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (!substr.includes(arr[i])) {
//       substr.push(arr[i]);
//       i += 1;
//     } else {
//       maxSubstrLength = substr.length > maxSubstrLength ? substr.length : maxSubstrLength;
//       substr = [];
//       i = 0;
//       arr = arr.slice(arr.indexOf(arr[i]) + 1);
//     }
//   }

//   if (substr.length > maxSubstrLength) {
//     maxSubstrLength = substr.length;
//   }

//   return maxSubstrLength;
// };

const getLongestLength = (str) => {
  let maxLength = 0;
  let sequence = [];

  for (const char of str) {
    const index = sequence.indexOf(char);
    sequence.push(char);

    if (index !== -1) {
      sequence = sequence.slice(index + 1);
    }

    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      maxLength = sequenceLength;
    }
  }

  return maxLength;
};

export default getLongestLength;
