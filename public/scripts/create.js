/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  if (user) return window.location.assign('/user.html');

  // setNav();
  document.querySelector('#sign-up-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      signupAndLoginHandler('/api/users', event.target);
    });
};

main();
