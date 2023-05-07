const createUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, password, name },
  } = req;

  console.log(username, password, name)

  const user = await User.create(username, password, name);
  session.userId = user.id;

  res.send(user);
};

module.exports = createUser;
