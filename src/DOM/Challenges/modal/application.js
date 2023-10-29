/* eslint-disable no-undef */

// BEGIN (write your solution here)
export default () => {
  const openHandler = (modal) => {
    modal.classList.add('show');
    // eslint-disable-next-line no-param-reassign
    modal.style.display = 'block';
  };

  const closeHandler = (modal) => {
    modal.classList.remove('show');
    // eslint-disable-next-line no-param-reassign
    modal.style.display = 'none';
  };

  const buttons = document.querySelectorAll('[data-toggle="modal"]');
  buttons.forEach((button) => {
    const id = button.dataset.target;
    const modal = document.querySelector(id);
    button.addEventListener('click', () => openHandler(modal));
    const closeButton = modal.querySelector('[ data-dismiss="modal"]');
    closeButton.addEventListener('click', () => closeHandler(modal));
  });
};
// END
