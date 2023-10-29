/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */

const render = ({ form, result, input }, state) => {
  result.textContent = state.sum;
  form.reset();
  input.focus();
};

export default () => {
  const defaultValue = 0;
  const state = {
    sum: 0,
  };

  const elements = {
    form: document.querySelector('form'),
    result: document.getElementById('result'),
    input: document.querySelector('[name="number"]'),
    resetButton: document.querySelector('[type="reset"]'),
  };

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const num = parseInt(formData.get('number'), 10);
    state.sum += num;
    render(elements, state);
  });

  elements.resetButton.addEventListener('click', () => {
    state.sum = defaultValue;
    render(elements, state);
  });

  render(elements, state);
};
