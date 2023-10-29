/* eslint-disable no-undef */
import axios from 'axios';

const routes = {
  randomQuotePath: () => '/api/quotes/random',
};

export default () => {
  // BEGIN (write your solution here)
  const button = document.querySelector('button');
  const quote = document.querySelector('blockquote');

  button.addEventListener('click', async () => {
    const response = await axios.get(routes.randomQuotePath());
    quote.textContent = response.data.quote;
  });
  // END
};
