// https://ru.hexlet.io/courses/js-objects/lessons/using/exercise_unit

/* eslint-disable: no-confusing-arrow */

// const normalize = (url) => (url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`);

// const getDomainInfo = (link) => {
//   const [scheme, name] = normalize(link).split('://');
//   return { scheme, name };
// };

const getDomainInfo = (domain) => {
  let scheme = '';
  if (domain.startsWith('https://')) {
    scheme = 'https';
  } else {
    scheme = 'http';
  }

  const name = domain.replace(`${scheme}://`, '');

  return { scheme, name };
};

export default getDomainInfo;
