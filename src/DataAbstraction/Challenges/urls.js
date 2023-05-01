// @ts-check
/* eslint no-param-reassign: ["error", { "props": false }] */

/*
Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:

make(url) - Конструктор. Создает урл.
setProtocol(data, protocol) - Сеттер. Меняет схему.
getProtocol(data) - Селектор (геттер). Извлекает схему.
setHost(data, host) - Сеттер. Меняет хост.
getHost(data) - Геттер. Извлекает хост.
setPath(data, path) - Сеттер. Меняет строку запроса.
getPath(data) - Геттер. Извлекает строку запроса.
setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса.
Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда,
когда в запросе не было такого параметра
toString(data) - Геттер. Преобразует урл в строковой вид.
*/

// BEGIN (write your solution here)
const make = (url) => new URL(url);
const getProtocol = (url) => url.protocol;
const setProtocol = (url, protocol) => { url.protocol = protocol; };
const getHost = (url) => url.host;
const setHost = (url, host) => { url.host = host; };
const getPath = (url) => url.pathname;
const setPath = (url, pathname) => { url.pathname = pathname; };
const setQueryParam = (url, key, value) => { url.searchParams.set(key, value); };
const getQueryParam = (url, key, defValue = null) => url.searchParams.get(key) ?? defValue;
const toString = (url) => url.toString();

export {
  make,
  getProtocol,
  setProtocol,
  getHost,
  setHost,
  getPath,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
};
// END
