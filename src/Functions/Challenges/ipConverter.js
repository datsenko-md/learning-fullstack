// https://ru.hexlet.io/challenges/js_functions_ip_converter_exercise
import chunk from 'lodash/chunk.js';

const ipToInt = (ip) => {
  const hex32Bit = ip
    .split('.')
    .map((item) => Number(item).toString(16).padStart(2, 0))
    .join('');
  return parseInt(hex32Bit, 16);
};

const intToIp = (int) => {
  const hex = int.toString(16).padStart(8, '0');
  return chunk(hex, 2)
    .map((octet) => parseInt(octet.join(''), 16))
    .join('.');
};

export { ipToInt, intToIp };
