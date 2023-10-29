/* eslint-disable no-undef */
// @ts-nocheck
/* eslint-disable no-param-reassign, no-console  */

import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

// urls нельзя хардкодить: https://ru.hexlet.io/blog/posts/izbavlyaytes-ot-strok
const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required('email must be a valid email').email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required('password confirmation is a required field')
    .oneOf(
      [yup.ref('password'), null],
      'password confirmation does not match to password',
    ),
});

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// Используйте эту функцию для выполнения валидации
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

// BEGIN (write your solution here)
const handleProcessState = (elements, processState) => {
  switch (processState) {
    case 'sent':
      elements.container.innerHTML = 'User Created';
      break;

    case 'error':
      elements.submitBtn.disable = false;
      break;

    case 'sending':
      elements.submitBtn.disable = true;
      break;

    case 'filling':
      elements.submitBtn = false;
      break;

    default:
      throw new Error(`Unknown state: ${processState}`);
  }
};

const handleProcessError = () => {};

const renderError = (fieldElement, error) => {
  const feedbackElement = fieldElement.nextElementSibling;
  if (feedbackElement) {
    feedbackElement.textContent = error.message;
    return;
  }

  fieldElement.classList.add('is-invalid');
  const newFeedbackElement = document.createElement('div');
  newFeedbackElement.classList.add('invalid-feedback');
  newFeedbackElement.textContent = error.message;
  fieldElement.after(newFeedbackElement);
};

const renderErrors = (elements, errors, prevErrors, state) => {
  Object.entries(elements.fields).forEach(([fieldName, fieldElement]) => {
    const error = errors[fieldName];

    const fieldHadError = has(prevErrors, fieldName);
    const fieldHasError = has(errors, fieldName);

    if (!fieldHadError && !fieldHasError) {
      return;
    }

    if (fieldHadError && !fieldHasError) {
      fieldElement.classList.remove('is-invalid');
      fieldElement.nextElementSibling.remove();
      return;
    }

    if (state.form.fieldsUi.touched[fieldName] && fieldHasError) {
      renderError(fieldElement, error);
    }
  });
};

const render = (elements, initialState) => (path, value, prevValue) => {
  switch (path) {
    case 'signupProcess.processState':
      handleProcessState(elements, value);
      break;

    case 'signupProcess.processError':
      handleProcessError();
      break;

    case 'form.valid':
      elements.submitBtn.disabled = !value;
      break;

    case 'form.errors':
      renderErrors(elements, value, prevValue, initialState);
      break;

    default:
      break;
  }
};

export default () => {
  const elements = {
    container: document.querySelector('[data-container="sign-up"]'),
    form: document.querySelector('[data-form="sign-up"]'),
    fields: {
      name: document.getElementById('sign-up-name'),
      email: document.getElementById('sign-up-email'),
      password: document.getElementById('sign-up-password'),
      passwordConfirmation: document.getElementById('sign-up-password-confirmation'),
    },
    submitBtn: document.querySelector('input[type="submit"]'),
  };

  const initialState = {
    signupProcess: {
      processState: 'filling',
      processError: null,
    },
    form: {
      valid: true,
      errors: {},
      fields: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      fieldsUi: {
        touched: {
          name: false,
          email: false,
          password: false,
          passwordConfirmation: false,
        },
      },
    },
  };

  const state = onChange(initialState, render(elements, initialState));

  Object.entries(elements.fields).forEach(([fieldName, fieldElement]) => {
    fieldElement.addEventListener('input', (e) => {
      const { value } = e.target;
      state.form.fields[fieldName] = value;
      state.form.fieldsUi.touched[fieldName] = true;
      const errors = validate(state.form.fields);
      state.form.errors = errors;
      state.form.valid = isEmpty(errors);
    });
  });

  elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    state.signupProcess.processState = 'sending';
    state.signupProcess.processError = null;

    try {
      const data = {
        name: state.form.fields.name,
        email: state.form.fields.email,
        password: state.form.fields.password,
      };
      await axios.post(routes.usersPath(), data);
      state.signupProcess.processState = 'sent';
    } catch (err) {
      state.signupProcess.processState = 'error';
      state.signupProcess.processError = errorMessages.network.error;
      throw err;
    }
  });
};
// END
