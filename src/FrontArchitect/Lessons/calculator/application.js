/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

// BEGIN (write your solution here)
const render = (form, input, result, data) => {
  form.reset();
  input.focus();
  result.textContent = data.sum;
};

export default () => {
  const state = {
    sum: 0,
  };

  const form = document.querySelector('form');
  const resetButton = document.querySelector('[type="reset"]');
  const result = document.querySelector('#result');
  const input = document.querySelector('[name="number"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const number = parseInt(formData.get('number'), 10);
    state.sum += number;
    render(form, input, result, state);
  });

  resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    state.sum = 0;
    render(form, input, result, state);
  });

  render(form, input, result, state);
};
// END
