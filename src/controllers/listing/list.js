const Listing = require('../../db/models/listing')
const allListings = async (req, res) => {
    const data = await Listing.list()
    res.send(data)
}

module.exports = allListings