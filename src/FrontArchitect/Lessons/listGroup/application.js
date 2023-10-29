/* eslint-disable no-undef */
import onChange from 'on-change';

// BEGIN (write your solution here)

export default () => {
  const state = {};
  const activeTabs = document.querySelectorAll('[role="tab"].active');
  activeTabs.forEach((tab) => {
    state[tab.parentElement.id] = tab.id;
  });

  const watchedState = onChange(state, (listId, tabId, activeTabId) => {
    const activeTab = document.getElementById(activeTabId);
    const activeContent = document.querySelector(`#${activeTab.getAttribute('aria-controls')}`);
    const tab = document.getElementById(tabId);
    const content = document.querySelector(`#${tab.getAttribute('aria-controls')}`);

    activeTab.classList.remove('active');
    activeContent.classList.remove('active', 'show');
    tab.classList.add('active');
    content.classList.add('active', 'show');
  });

  const tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      watchedState[tab.parentElement.id] = tab.id;
    });
  });
};
// END
