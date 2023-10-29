/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

// BEGIN (write your solution here) (write your solution here)
const render = (state, element) => {
  const elementName = element.dataset.editableTarget;
  element.innerHTML = '';

  const buildText = () => {
    if (state.value === '') {
      const i = document.createElement('i');
      i.textContent = elementName;
      return i;
    }

    return document.createTextNode(state.value);
  };

  const buildForm = () => {
    const form = document.createElement('form');
    const label = document.createElement('label');
    label.classList.add('sr-only');
    label.setAttribute('for', elementName);
    label.textContent = elementName;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', elementName);
    input.setAttribute('name', elementName);
    input.setAttribute('value', state.value);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', `Save ${elementName}`);
    form.append(label, input, submit);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const value = formData.get(elementName).trim();
      state.value = value;
      state.mode = 'text';
      render(state, element);
    });

    return { form, input };
  };

  switch (state.mode) {
    case 'text':
      const text = buildText();
      element.append(text);
      break;

    case 'form':
      const { form, input } = buildForm();
      element.append(form);
      input.select();
      break;

    default:
      throw new Error(`Unknown state: ${state.mode}`);
  }
};

export default () => {
  const elements = document.querySelectorAll('[data-editable-target]');

  elements.forEach((element) => {
    const state = {
      mode: 'text',
      value: '',
    };

    element.addEventListener('click', () => {
      if (state.mode === 'text') {
        state.mode = 'form';
        render(state, element);
      }
    });
  });
};
// END
