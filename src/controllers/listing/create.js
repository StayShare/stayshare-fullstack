const createListing = async (req, res) => {
    const {
      db: { Listing },
      body: { user_id, price, location, availability, images },
    } = req;
    console.log(req.body)
  
    const listing = await Listing.create(user_id, price, location, availability, images);

    res.send(listing);
  };
  
  module.exports = createListing;