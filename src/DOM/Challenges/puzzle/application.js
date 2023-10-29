/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import _ from 'lodash';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default (randomize = _.shuffle) => {
  // BEGIN (write your solution here)
  const size = 4;
  const generateField = () => {
    const randomized = randomize(values);
    const chunked = _.chunk(randomized, 4);
    const field = _.zip(...chunked);
    field[size - 1][size - 1] = null;
    return field;
  };

  const render = (state, container) => {
    container.innerHTML = '';
    const table = document.createElement('table');
    table.classList.add('table-bordered');
    const tbody = document.createElement('tbody');
    const rows = state.field.map((row) => {
      const tr = document.createElement('tr');
      const cells = row.map((num) => {
        const td = document.createElement('td');
        td.classList.add('p-3');
        if (!num) {
          td.classList.add('table-active');
        }
        td.textContent = num ?? '';
        return td;
      });
      tr.append(...cells);
      return tr;
    });
    tbody.append(...rows);
    table.append(tbody);
    container.append(table);
  };

  // eslint-disable-next-line consistent-return
  const getEmptyPosition = (field) => {
    for (let row = 0; row < size; row += 1) {
      const coll = field[row].indexOf(null);
      if (coll >= 0) {
        return { row, coll };
      }
    }
  };

  const isSwapable = (position, direction) => {
    const mapping = {
      up: ({ row }) => row !== 0,
      down: ({ row }) => row !== size - 1,
      left: ({ coll }) => coll !== 0,
      right: ({ coll }) => coll !== size - 1,
    };
    return mapping[direction](position);
  };

  const swap = (field, oldPosition, direction) => {
    const mapping = {
      up: ({ row, coll }) => ({ row: row - 1, coll }),
      down: ({ row, coll }) => ({ row: row + 1, coll }),
      left: ({ row, coll }) => ({ row, coll: coll - 1 }),
      right: ({ row, coll }) => ({ row, coll: coll + 1 }),
    };

    const newPosition = mapping[direction](oldPosition);
    const oldPath = `${oldPosition.row}.${oldPosition.coll}`;
    const newPath = `${newPosition.row}.${newPosition.coll}`;
    const value = _.get(field, newPath);
    _.set(field, newPath, null);
    _.set(field, oldPath, value);
  };

  const mapDirection = {
    ArrowUp: 'down',
    ArrowDown: 'up',
    ArrowRight: 'left',
    ArrowLeft: 'right',
  };

  const field = generateField();
  const state = { field };
  const container = document.querySelector('.gem-puzzle');
  render(state, container);

  document.addEventListener('keyup', (e) => {
    const position = getEmptyPosition(field);
    const direction = mapDirection[e.key];
    if (!isSwapable(position, direction)) {
      return;
    }
    swap(field, position, direction);
    render(state, container);
  });
  // END
};

const defaultCellIndex = 3;
const defaultRowIndex = 3;
let currentPosition = { cellIndex: defaultCellIndex, rowIndex: defaultRowIndex };
const root = document.querySelector('.gem-puzzle');
const tableEl = document.createElement('table');
tableEl.className = 'table-bordered';
document.addEventListener('keyup', (e) => {
  let newPosition;
  const { cellIndex, rowIndex } = currentPosition;
  switch (e.key) {
    case 'ArrowLeft':
      newPosition = { ...currentPosition, cellIndex: cellIndex + 1 };
      break;
    case 'ArrowUp':
      newPosition = { ...currentPosition, rowIndex: rowIndex + 1 };
      break;
    case 'ArrowRight':
      newPosition = { ...currentPosition, cellIndex: cellIndex - 1 };
      break;
    case 'ArrowDown':
      newPosition = { ...currentPosition, rowIndex: rowIndex - 1 };
      break;
    default:
      return;
  }
  const row = tableEl.rows.item(newPosition.rowIndex);
  if (row) {
    const cell = row.cells.item(newPosition.cellIndex);
    if (cell) {
      const point = tableEl.rows.item(rowIndex).cells.item(cellIndex);
      point.textContent = cell.textContent;
      point.classList.remove('table-active');
      cell.textContent = '';
      cell.classList.add('table-active');
      currentPosition = newPosition;
    }
  }
});
root.append(tableEl);
const randomValues = randomize(values);
for (let i = 0; i < 4; i += 1) {
  const row = tableEl.insertRow();
  for (let j = 0; j < 4; j += 1) {
    const cell = row.insertCell();
    cell.className = 'p-3';
    if (i === defaultCellIndex && j === defaultRowIndex) {
      cell.classList.add('table-active');
    }
    cell.textContent = randomValues[i + (j * 4)];
  }
}
