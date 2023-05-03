const express = require('express');
const userController = require('./controllers/user');
const listController = require('./controllers/listing')
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post('/api/users', userController.create);
Router.post('/api/users/login', userController.login);

// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/api/me', userController.showMe);
// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/api/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/api/users/:id', checkAuthentication, userController.update);

// Delete
Router.delete('/api/users/logout', userController.logout);

// Listings Routes
Router.get('/listings', listController.list)
Router.post('/listings', listController.create);


module.exports = Router;
