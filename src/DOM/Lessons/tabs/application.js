/* eslint-disable no-undef */
export default () => {
  // BEGIN (write your solution here)
  // const navLinks = document.querySelectorAll('.nav-link');
  // navLinks.forEach((navLink) => {
  //   navLink.addEventListener('click', (event) => {
  //     const { target } = event;
  //     const tabsBox = target.closest('.row');
  //     const activeElements = tabsBox.querySelectorAll('.active');
  //     activeElements.forEach((element) => element.classList.remove('active'));
  //     const id = target.dataset.bsTarget;
  //     target.classList.add('active');
  //     const tabContent = tabsBox.querySelector(id);
  //     tabContent.classList.add('active');
  //   });
  // });
  const handle = (e, container) => {
    const targetTab = e.target;

    if (targetTab.classList.contains('active')) {
      return;
    }

    const targetTabContentId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabContentId);

    const activeTab = container.querySelector('.active');
    const activeTabContentId = activeTab.dataset.bsTarget;
    const activeTabContent = document.querySelector(activeTabContentId);

    targetTab.classList.add('active');
    targetTabContent.classList.add('active');

    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
  };

  const navs = document.querySelectorAll('.nav');
  navs.forEach((nav) => {
    const tabs = nav.querySelectorAll('[data-bs-toggle]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => handle(event, nav));
    });
  });
  // END
};
