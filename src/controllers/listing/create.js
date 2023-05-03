const createListing = async (req, res) => {
    const {
      db: { Listing },
      body: { location, userID, img, price },
    } = req;
  
    const listing = await Listing.create(location, userID, img, price);

    res.send(listing);
  };
  
  module.exports = createListing;