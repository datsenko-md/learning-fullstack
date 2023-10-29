/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

// BEGIN (write your solution here) (write your solution here)
const render = (state, container) => {
  container.innerHTML = '';
  state.companies.forEach((company) => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = company.name;
    button.addEventListener('click', () => {
      state.uiState.visibleId = state.uiState.visibleId === company.id
        ? null : company.id;
      render(state, container);
    });
    container.append(button);
  });

  if (state.uiState.visibleId !== null) {
    const visibleCompany = state.companies.find((c) => c.id === state.uiState.visibleId);
    const div = document.createElement('div');
    div.textContent = visibleCompany.description;
    container.append(div);
  }
};

export default (companies) => {
  const state = {
    companies,
    uiState: {
      visibleId: null,
    },
  };

  const container = document.querySelector('.container');
  render(state, container);
};
// END
