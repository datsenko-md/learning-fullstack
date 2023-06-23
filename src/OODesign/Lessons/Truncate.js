/*
Для работы с текстом в вебе бывает полезна функция truncate(),
которая обрезает слишком длинный текст и ставит в конце многоточие:

truncate('long text', { length: 3 }); // lon...
solution.js
Реализуйте в классе Truncater конструктор и метод truncate(). Метод принимает
текст и следующие опции:

separator - символ, заменяющий обрезанную часть строки
length - максимальная длина исходной строки. Если строка не длинне, чем эта опция,
то возвращается исходная строка.
Конфигурацию по умолчанию можно переопределить через конструктор класса и вторым аргументом
метода truncate(). Оба способа можно комбинировать.

const truncater = new Truncater();
truncater.truncate('one two'); // 'one two'
truncater.truncate('one two', { 'length': 6 }); // 'one tw...'

const truncater = new Truncater({ 'length': 6 });
truncater.truncate('one two', { 'separator': '.' }); // 'one tw.'
truncater.truncate('one two', { 'length': 3 }); // 'one...'
Подсказки
Опции по умолчанию заданы, как статическое свойство класса. Обратите на это внимание
при объединении исходных опций с пользовательскими.
*/

export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  // BEGIN (write your solution here)
  constructor(options = {}) {
    this.options = { ...this.constructor.defaultOptions, ...options };
  }

  truncate(str, tmpOptions = {}) {
    const { length, separator } = { ...this.options, ...tmpOptions };
    return str.length > length ? str.substring(0, length).concat(separator) : str;
  }
  // END
}
