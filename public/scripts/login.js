/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
  handleFetch
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  if (user) return window.location.assign('/user.html');

  // setNav();
  document.querySelector('#sign-in-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log(event.target)
      signupAndLoginHandler('/api/users/login', event.target);
    });
};

main();
