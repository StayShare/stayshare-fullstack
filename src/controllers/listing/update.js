const update = async (req, res) => {
    const {
        db: { Listing },
        body: { location, img, price },
    } = req;
  const listUpdate = await Listing.updateListing(Number(id), location, img, price);
  if (!listUpdate) return res.sendStatus(404);
  res.send(listUpdate);
};

module.exports = update;
