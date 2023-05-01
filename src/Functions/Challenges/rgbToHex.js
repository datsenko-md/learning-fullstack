// https://ru.hexlet.io/challenges/js_functions_rgb_hex_conversion_exercise

import chunk from 'lodash/chunk.js';

// const hexToRgb = (hexColor) => {
//   const [rHex, gHex, bHex] = chunk(hexColor.slice(1).split(''), 2);
//   return {
//     r: parseInt(rHex.join(''), 16),
//     g: parseInt(gHex.join(''), 16),
//     b: parseInt(bHex.join(''), 16),
//   };
// };

const hexToRgb = (hex) => {
  const [r, g, b] = chunk(hex.slice(1), 2)
    .map((channel) => channel.join(''))
    .map((channel) => parseInt(channel, 16));
  return { r, g, b };
};

// const rgbToHex = (r, g, b) => {
//   let rHex = r.toString(16);
//   let gHex = g.toString(16);
//   let bHex = b.toString(16);
//   rHex = rHex.length === 2 ? rHex : `0${rHex}`;
//   gHex = gHex.length === 2 ? gHex : `0${gHex}`;
//   bHex = bHex.length === 2 ? bHex : `0${bHex}`;
//   return `#${rHex}${gHex}${bHex}`;
// };

const rgbToHex = (r, g, b) => {
  const hex = [r, g, b]
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
};

export { hexToRgb, rgbToHex };
