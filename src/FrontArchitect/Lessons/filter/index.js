/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import app from './application.js';

const laptops = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];

app(laptops);
