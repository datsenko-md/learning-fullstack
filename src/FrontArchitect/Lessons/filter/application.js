/* eslint-disable no-undef */
// BEGIN (write your solution here) (write your solution here)
const getPredicate = (predicate) => {
  switch (predicate) {
    case 'eq':
      return (filterValue) => (propertyValue) => String(propertyValue) === String(filterValue);
    case 'gte':
      return (filterValue) => (propertyValue) => propertyValue >= Number(filterValue);
    case 'lte':
      return (filterValue) => (propertyValue) => propertyValue <= Number(filterValue);
    default:
      throw new Error(`Unknown predicate: ${predicate}`);
  }
};

const filterItems = (items, query) => {
  const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
  return items.filter((item) => activeFilters.every(([filterName, filterValue]) => {
    const [propertyName, predicate] = filterName.split('_');
    const match = getPredicate(predicate);
    const propertyValue = item[propertyName];
    return match(filterValue)(propertyValue);
  }));
};

const render = (state) => {
  const resultElement = document.querySelector('.result');
  resultElement.innerHTML = '';
  const filtered = filterItems(state.laptops, state.filter);

  if (filtered.length === 0) {
    return;
  }

  const ul = document.createElement('ul');
  const liItems = filtered.map(({ model }) => {
    const li = document.createElement('li');
    li.textContent = model;
    return li;
  });
  ul.append(...liItems);
  resultElement.append(ul);
};

const inputsConfigs = {
  processor_eq: 'change',
  memory_eq: 'change',
  frequency_gte: 'input',
  frequency_lte: 'input',
};

export default (laptops) => {
  const state = {
    laptops,
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_gte: null,
      frequency_lte: null,
    },
  };

  Object.entries(inputsConfigs).forEach(([inputName, eventName]) => {
    const input = document.querySelector(`[name="${inputName}"]`);
    input.addEventListener(eventName, ({ target }) => {
      state.filter[inputName] = target.value === '' ? null : target.value;
      render(state);
    });
  });

  render(state);
};
// END
