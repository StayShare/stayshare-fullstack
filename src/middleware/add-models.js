const User = require('../db/models/user');
const Listing = require('../db/models/listing');
const Booking = require('../db/models/booking')

const addModels = (req, res, next) => {
  req.db = {
    User,
    Listing,
    Booking
  };
  next();
};

module.exports = addModels;
