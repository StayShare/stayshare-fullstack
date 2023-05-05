const destroy = async (req, res) => {
    const { 
        db: { Booking }, 
        params: { id }
    } = req;
    const result = await Booking.delete(Number(id));
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroy;
  