/* eslint-disable no-undef */
// @ts-check
/* eslint no-param-reassign: ["error", { "props": false }] */

import i18n from 'i18next';
import onChange from 'on-change';
import resources from './locales/index.js';

// BEGIN (write your solution here)
const renderInit = (state, container) => {
  const selectLangContainer = document.createElement('div');
  selectLangContainer.setAttribute('role', 'group');
  selectLangContainer.classList.add('btn-group');

  Object.entries(resources).forEach(([lang, t]) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-lang', lang);
    button.classList.add('btn', 'mb-3', state.lang === lang ? 'btn-primary' : 'btn-outline-primary');
    button.textContent = t.translation.langName;
    selectLangContainer.append(button);
  });

  const incButton = document.createElement('button');
  incButton.setAttribute('type', 'button');
  incButton.classList.add('btn', 'btn-info', 'mb-3', 'align-self-center');
  incButton.textContent = i18n.t('click', { count: state.counter });

  const resetButton = document.createElement('button');
  resetButton.setAttribute('type', 'button');
  resetButton.classList.add('btn', 'btn-warning');
  resetButton.textContent = i18n.t('reset');

  container.append(selectLangContainer, incButton, resetButton);
  return { incButton, resetButton, selectLangContainer };
};

const setLang = async (lang) => {
  await i18n.init({
    lng: lang,
    resources: {
      [lang]: resources[lang],
    },
  });
};

const changeLang = async (state, elements, lang, prevLang) => {
  await setLang(state.lang);
  elements.incButton.textContent = i18n.t('click', { count: state.counter });
  elements.resetButton.textContent = i18n.t('reset');
  const prevActive = elements.langs[prevLang];
  const active = elements.langs[lang];
  prevActive.classList.add('btn-outline-primary');
  prevActive.classList.remove('btn-primary');
  active.classList.add('btn-primary');
  active.classList.remove('btn-outline-primary');
};

const render = async (elements, state) => async (path, value, prevValue) => {
  switch (path) {
    case 'counter':
      elements.incButton.textContent = i18n.t('click', { count: state.counter });
      break;

    case 'lang':
      await changeLang(state, elements, value, prevValue);
      break;

    default:
      break;
  }
};

export default async () => {
  const initState = {
    counter: 0,
    lang: 'en',
  };
  await setLang(initState.lang);

  const container = document.querySelector('.container');
  const elements = renderInit(initState, container);
  elements.langs = {};
  const { incButton, resetButton, selectLangContainer } = elements;

  const state = onChange(initState, await render(elements, initState));

  incButton.addEventListener('click', () => {
    state.counter += 1;
  });

  resetButton.addEventListener('click', () => {
    state.counter = 0;
  });

  Array.from(selectLangContainer.children).forEach((langButton) => {
    langButton.addEventListener('click', (e) => {
      const { lang } = e.target.dataset;
      state.lang = lang;
      elements.langs[lang] = langButton;
    });
  });
};
// END
