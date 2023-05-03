const destroy = async (req, res) => {
    const { 
        db: { Listing }, 
        params: { id }
    } = req;
    const result = await Listing.delete(Number(id));
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroy;
  