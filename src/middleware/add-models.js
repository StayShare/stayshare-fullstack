const User = require('../db/models/user');
const Listing = require('../db/models/listing');

const addModels = (req, res, next) => {
  req.db = {
    User,
    Listing,
  };
  next();
};

module.exports = addModels;
