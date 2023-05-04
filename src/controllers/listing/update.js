const update = async (req, res) => {
  const {
    db: { Listing },
    params: { id },
    body: { price, location, images },
  } = req;

  const listing = await Listing.find(id);
  if (!listing) return res.sendStatus(404);

  // const listUpdate = await Listing.update(
  //   id,
  //   Number(price),
  //   location,  
  //   images
  // );

  const listUpdate = await listing.update(
    Number(price),
    location,  
    images
  );

  if (!listUpdate) return res.sendStatus(404);
  res.send(listUpdate);
};

module.exports = update;
