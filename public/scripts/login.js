/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
  handleFetch
} from './global.js';

const redirectToLogin = () => window.location.assign("/login.html");

// const main = async () => {
//   const user = await fetchLoggedInUser();
//   if (!user) return redirectToLogin();
//   setNav(!!user);
// }

const main = async () => {
  const user = await fetchLoggedInUser();
  if (user) return window.location.assign('/home.html');

  // setNav();
  document.querySelector('#sign-in-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log(event.target)
      signupAndLoginHandler('/api/users/login', event.target);
    });
};

main();
