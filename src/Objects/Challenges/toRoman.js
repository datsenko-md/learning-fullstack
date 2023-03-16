// https://ru.hexlet.io/challenges/js_objects_to_roman_exercise
/* eslint no-restricted-syntax: [off, ForOfStatement] */

const toRoman2 = (num) => {
  if (num >= 1000) {
    return 'M' + toRoman(num - 1000);
  } if (num >= 900) {
    return 'CM' + toRoman(num - 900);
  } if (num >= 500) {
    return 'D' + toRoman(num - 500);
  } if (num >= 400) {
    return 'CD' + toRoman(num - 400);
  } if (num >= 100) {
    return 'C' + toRoman(num - 100);
  } if (num >= 90) {
    return 'XC' + toRoman(num - 90);
  } if (num >= 50) {
    return 'L' + toRoman(num - 50);
  } if (num >= 40) {
    return 'XL' + toRoman(num - 40);
  } if (num >= 10) {
    return 'X' + toRoman(num - 10);
  } if (num >= 9) {
    return 'IX' + toRoman(num - 9);
  } if (num >= 5) {
    return 'V' + toRoman(num - 5);
  } if (num >= 4) {
    return 'IV' + toRoman(num - 4);
  } if (num >= 1) {
    return 'I' + toRoman(num - 1);
  } if (num === 0) {
    return '';
  }
};

const arabicMap = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

const sortedMap = Object.entries(arabicMap).sort().reverse();

const toRoman = (num) => {
  const result = [];
  let digit = num;
  for (let [arabic, roman] of Object.entries(sortedMap)) {
    const repetitonsCount = Math.floor(digit / arabic);
    digit -= repetitonsCount * arabic;
    result.push(roman.repeat(repetitonsCount));
  }

  return result.join('');
};

const falsyRoman = [
  'IIII',
  'XXXX',
  'CCCC',
  'MMMM',

  'VV',
  'LL',
  'DD',

  'IVIV',
  'IXIX',
  'XCXC',
  'CDCD',
  'CMCM',

  'VX',
  'VL',
  'VC',
  'VD',
  'VM',

  'IL',
  'IC',
  'ID',
  'IM',

  'XD',
  'XM',
];

const toArabic = (romanNum) => {
  if (romanNum === '') {
    return 0;
  }

  for (const falsy of falsyRoman) {
    if (romanNum.startsWith(falsy)) {
      return false;
    }
  }

  for (const [arabic, roman] of Object.entries(arabicMap).sort().reverse()) {
    if (romanNum.startsWith(roman)) {
      return Number(arabic) + Number(toArabic(romanNum.slice(roman.length)));
    }
  }
};

export { toRoman, toArabic };
