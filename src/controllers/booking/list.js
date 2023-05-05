const Booking = require('../../db/models/booking')
const allBookings = async (req, res) => {
    const data = await Booking.list()
    res.send(data)
}

module.exports = allBookings