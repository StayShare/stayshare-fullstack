const createBooking = async (req, res) => {
    const {
      db: { Booking },
      body: { listing_id, start_date, end_date },
    } = req;
    console.log(req.body)
  
    const booking = await Listing.create(listing_id, start_date, end_date);

    res.send(booking);
  };
  
  module.exports = createBooking;