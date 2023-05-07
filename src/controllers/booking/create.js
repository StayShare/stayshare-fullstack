const createBooking = async (req, res) => {
    const {
      db: { Booking },
      body: { user_id, listing_id, start_date, end_date },
    } = req;
    console.log(req.body)
  
    const booking = await Booking.create(user_id, listing_id, start_date, end_date);

    res.send(booking);
  };
  
  module.exports = createBooking;