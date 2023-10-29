/* eslint-disable no-undef */
// @ts-nocheck
/* eslint-disable no-param-reassign */

import uniqueId from 'lodash/uniqueId.js';

// BEGIN (write your solution here)
const renderTasks = (state, elements) => {
  elements.tasksContainer.innerHTML = '';

  const filteredTasks = state.tasks.filter(({ listId }) => listId === state.activeListId);

  if (filteredTasks.length === 0) {
    return;
  }

  const ulForTasks = document.createElement('ul');
  filteredTasks.forEach(({ name }) => {
    const li = document.createElement('li');
    li.textContent = name;
    ulForTasks.append(li);
  });

  elements.tasksContainer.append(ulForTasks);
};

const renderLists = (state, elements) => {
  elements.listsContainer.innerHTML = '';
  const ulForLists = document.createElement('ul');

  state.lists.forEach(({ id, name }) => {
    const li = document.createElement('li');
    let channelNameElement;

    if (id === state.activeListId) {
      channelNameElement = document.createElement('b');
      channelNameElement.textContent = name;
    } else {
      channelNameElement = document.createElement('a');
      channelNameElement.setAttribute('href', `#${name.toLowerCase()}`);
      channelNameElement.textContent = name;
      channelNameElement.addEventListener('click', (e) => {
        e.preventDefault();
        state.activeListId = id;
        renderLists(state, elements);
        renderTasks(state, elements);
      });
    }

    li.append(channelNameElement);
    ulForLists.append(li);
  });

  elements.listsContainer.append(ulForLists);
};

export default () => {
  const defaultChannelId = uniqueId();
  const state = {
    activeListId: defaultChannelId,
    lists: [{ id: defaultChannelId, name: 'General' }],
    tasks: [],
  };

  const elements = {
    listsContainer: document.querySelector('[data-container="lists"]'),
    tasksContainer: document.querySelector('[data-container="tasks"]'),
  };

  const newListForm = document.querySelector('[data-container="new-list-form"]');
  const newTaskForm = document.querySelector('[data-container="new-task-form"]');

  newListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listName = formData.get('name');
    const exist = state.lists.find((list) => list.name === listName);
    if (exist) {
      return;
    }
    const list = { id: uniqueId, name: listName.trim() };
    form.reset();
    form.querySelector('input').focus();
    state.lists.push(list);
    renderLists(state, elements);
  });

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskName = formData.get('name');
    const task = { id: uniqueId, name: taskName.trim(), listId: state.activeListId };
    form.reset();
    form.querySelector('input').focus();
    state.tasks.push(task);
    renderTasks(state, elements);
  });

  renderLists(state, elements);
  renderTasks(state, elements);
};
// END
