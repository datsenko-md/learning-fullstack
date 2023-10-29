/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import app from './application.js';

const companies = [
  { id: 1, name: 'Hexlet', description: 'online courses' },
  { id: 2, name: 'Google', description: 'search engine' },
  { id: 3, name: 'Facebook', description: 'social network' },
];

app(companies);
