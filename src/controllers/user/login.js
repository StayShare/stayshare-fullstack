const loginUser = async (req, res) => {
  const {
    session,
    db: { User },
    body: { username, password },
  } = req;

  console.log(username, password)
  
  const user = await User.findByUsername(username);
  console.log(user)
  if (!user) return res.sendStatus(404);

  const isPasswordValid = await user.isValidPassword(password);
  if (!isPasswordValid) return res.sendStatus(401);

  session.userId = user.id;
  res.send(user);
};

module.exports = loginUser;
