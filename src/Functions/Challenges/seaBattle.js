import _ from 'lodash';

const calcShipsCount = (field) => {
  const parts = field.map((line) => _.chunk(line, 2));
  return parts.length;
};

export default calcShipsCount;
