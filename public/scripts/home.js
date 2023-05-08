import {
    fetchLoggedInUser,
    logOutHandler,
    // fetchLoggedInUser,
    getFetchOptions,
    handleFetch,
    setNav
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

const getListing = async () => {
  let data = await handleFetch('api/listings');
  console.log(data[0]);
  return data[0];
  
}

addEventListener("DOMContentLoaded", async (event) => {
  let listings = await getListing();
  const cardWrapper = document.querySelector(".card-wrapper")

  for (const listing of listings) {
    console.log(listing.id.images)
    const card = document.createElement('div');
    card.setAttribute("class", "card");
    const img = document.createElement('div');
    img.setAttribute("class", "img");
    img.style.backgroundImage = `url(${listing.id.images})`
    const text = document.createElement('div');
    text.setAttribute("class", "text");
    const cardTitle = document.createElement('h4');
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = listing.id.location;
    const cardPrice = document.createElement('h5');
    cardPrice.setAttribute("class", "card-price");
    cardPrice.innerText = `$${listing.id.price}`;

    text.append(cardTitle);
    text.append(cardPrice);
    card.append(img);
    card.append(text);
    cardWrapper.append(card)
  }
})


main();