/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// BEGIN (write your solution here)
const render = (state, { form, input, tasksContainer }) => {
  form.reset();
  input.focus();
  tasksContainer.innerHTML = '';
  state.tasks.forEach(({ name }) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = name;
    tasksContainer.append(li);
  });
};

export default async () => {
  const response = await axios.get(routes.tasksPath());
  const state = {
    tasks: response.data.items,
  };
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const tasksContainer = document.querySelector('#tasks');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const task = { name: formData.get('name').trim() };
    await axios.post(routes.tasksPath(), task);
    state.tasks.unshift(task);
    render(state, { form, input, tasksContainer });
  });

  render(state, { form, input, tasksContainer });
};
// END
