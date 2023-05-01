// https://ru.hexlet.io/challenges/js_functions_bar_chart_exercise

import _ from 'lodash';

const barChart = (numbers) => {
  const maxDistance = Math.abs(_.max(numbers));
  const minDistance = Math.abs(_.min(numbers));
  const totalDistance = maxDistance + minDistance;
  const lines = numbers
    .map((number) => {
      let bar;
      let line;
      const absNum = Math.abs(number);
      if (number > 0) {
        bar = '*';
        line = bar.repeat(absNum).padEnd(maxDistance, ' ').padStart(totalDistance, ' ');
      } else {
        bar = '#';
        line = bar.repeat(absNum).padStart(minDistance, ' ').padEnd(totalDistance, ' ');
      }

      return line;
    });

  const rotated = _.zip(...lines).reverse();
  console.log(rotated);
};

export default barChart;
