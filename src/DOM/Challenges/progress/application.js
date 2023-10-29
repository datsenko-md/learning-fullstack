/* eslint-disable no-undef */
// BEGIN (write your solution here) (write your solution here)

export default () => {
  const element = document.querySelector('progress');
  // eslint-disable-next-line consistent-return
  const handler = (counter = 0) => {
    if (counter <= element.getAttribute('max')) {
      element.setAttribute('value', counter);
      return setTimeout(() => handler(counter + 1), 1000);
    }
  };
  handler();
};
// END
