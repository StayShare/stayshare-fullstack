const Listing = require('../../db/models/listing')
const allBookings = async (req, res) => {
    const data = await Booking.list()
    res.send(data)
}

module.exports = allBookings