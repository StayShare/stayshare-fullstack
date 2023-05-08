import {
    fetchLoggedInUser,
    logOutHandler,
} from './global.js';
  

const main = async () => {
    const user = await fetchLoggedInUser();
    if (!user) return redirectToLogin();
  
    const logout = document.querySelector('#logout');
  
    logout.addEventListener('click', async (event) => {
      event.preventDefault();
      logOutHandler();
    });
};

main();