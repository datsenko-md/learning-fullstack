/*
dates.js
Реализуйте и экспортируйте по умолчанию функцию, которая переводит
входные данные в удобный для построения графика формат.

На вход эта функция принимает три аргумента: массив данных; дата начала
периода; дата конца периода. Данные представлены в формате объекта вида
{ value: 14, date: '02.08.2018' }, а даты диапазона в формате 'yyyy-MM-dd'.

Диапазон дат задаёт размер выходного массива, который должна сгенерить
реализуемая функция. Правила формирования итогового массива:

он заполняется записями по всем дням из диапазона begin - end.
если во входном массиве нет данных для какого-то дня из диапазона, то
в свойство value записи этого дня установить значение 0.
import buildRange from './dates.js';

const dates = [
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
];
const beginDate = '2018-08-01';
const endDate = '2018-08-04';

buildRange(dates, beginDate, endDate);
// [
//   { value: 0, date: '01.08.2018' },
//   { value: 14, date: '02.08.2018' },
//   { value: 43, date: '03.08.2018' },
//   { value: 0, date: '04.08.2018' },
// ]
Подсказки
Документация по функциям для работы с датами:

https://date-fns.org/v2.16.1/docs/eachDayOfInterval
https://date-fns.org/v2.16.1/docs/format
*/

import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';
import has from 'lodash/has';

// BEGIN (write your solution here)
// const buildRange = (data, beginDate, endDate) => {
//   const groupByDate = (acc, { value, date }) => ({ ...acc, [date]: { value, date } });
//   const range = eachDayOfInterval({ start: new Date(beginDate), end: new Date(endDate) })
//     .map((date) => format(date, 'dd.MM.yyyy'))
//     .map((date) => ({ value: 0, date }))
//     .reduce(groupByDate, {});
//   const dates = data.reduce(groupByDate, {});
//   return Object.values({ ...range, ...dates });
// };

const buildRange = (dates, start, end) => {
  const valuesByDate = dates.reduce((acc, { value, date }) => ({ ...acc, [date]: value }), {});
  const period = eachDayOfInterval({ start: new Date(start), end: new Date(end) });
  return period.map((date) => {
    const formattedDate = format(date, 'dd.MM.yyyy');
    const value = has(valuesByDate, formattedDate) ? valuesByDate[formattedDate] : 0;
    return { value, date: formattedDate };
  });
};

export default buildRange;
// END
