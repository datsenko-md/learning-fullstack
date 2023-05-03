// https://ru.hexlet.io/challenges/js_functions_ipv6_validator_exercise
/* eslint-disable: max-len */

import _ from 'lodash';

// const delimiter = ':';
// const compressedZeros = '::';
// const maxPartIntValue = 65535;
// const correctPartsNum = 8;

// const hasCompressedZeros = (ip) => ip.indexOf(compressedZeros) >= 0;
// const normalize = (ip) => {
//   const replacement = ip.startsWith(compressedZeros) ? '' : delimiter;
//   return ip.replace(compressedZeros, replacement);
// };
// const compressedMoreThanOnce = (ip) => hasCompressedZeros(normalize(ip));
// const hasWrongNumOfParts = (ip) => {
//   const ipHasCompressedZeros = hasCompressedZeros(ip);
//   const parts = ip.split(delimiter);
//   if ((ipHasCompressedZeros && parts.length > correctPartsNum)
//     || (!ipHasCompressedZeros && parts.length !== correctPartsNum)) {
//     return true;
//   }

//   return false;
// };
// const hasWrongParts = (ip) => {
//   const normalized = normalize(ip);
//   if (normalized === '') {
//     return false;
//   }
//   const parts = normalized.split(delimiter);
//   const currentIntValues = parts.map((part) =>
// parseInt(part.split('').sort().reverse().join(''), 16));
//   const correctValues = currentIntValues.filter((part) => part <= maxPartIntValue);
//   console.log(correctValues, parts);
//   return correctValues.length !== parts.length;
// };

// const isValidIPv6 = (ip) => {
//   if (ip.startsWith(delimiter) && !ip.startsWith(compressedZeros)) {
//     console.log('startDelim');
//     return false;
//   }
//   if (ip.endsWith(delimiter) && ip.length > 2) {
//     console.log('endDelim');
//     return false;
//   }
//   if (compressedMoreThanOnce(ip)) {
//     console.log('manyCompressions');
//     return false;
//   }
//   if (hasWrongNumOfParts(ip)) {
//     console.log('wrongNumOfParts');
//     return false;
//   }
//   if (hasWrongParts(ip)) {
//     console.log('wrongParts');
//     return false;
//   }

//   return true;
// };
// const isValidIPv6 = (ip) => {
//   if (ip.startsWith(delimiter)
//     || ip.endsWith(delimiter)
//     || compressedMoreThanOnce(ip)
//     || hasWrongNumOfParts(ip)
//     || hasWrongParts(ip)) {
//     return false;
//   }

//   return true;
// };

// const isValidGroup = (group) => {
//   const number = Number(`0x${group}`);
//   return group.length <= 4 || !_.isNaN(number);
// };

// const isValidIPv6 = (ip) => {
//   if (ip.indexOf('::') !== ip.lastIndexOf('::')) {
//     return false;
//   }

//   const isShort = ip.includes('::');
//   const groups = ip.split('::')
//     .filter((group) => group !== '')
//     .flatMap((group) => group.split(':'));

//   const length = isShort ? groups.length + 1 : groups.length;
//   if ((!isShort && length < 8) || length > 8) {
//     return false;
//   }

//   return groups.every(isValidGroup);
// };

const isValidGroup = (group) => {
  const number = Number(`0x${group}`);
  return group.length <= 4 && !_.isNaN(number);
};

export default (ip) => {
  if (ip.indexOf('::') !== ip.lastIndexOf('::')) {
    return false;
  }

  const isShort = ip.includes('::');
  const groups = ip.split('::')
    .filter((group) => group !== '')
    .flatMap((part) => part.split(':'));
  const length = isShort ? groups.length + 1 : groups.length;

  if ((!isShort && length < 8) || length > 8) {
    return false;
  }

  return groups.every(isValidGroup);
};

// export default isValidIPv6;
