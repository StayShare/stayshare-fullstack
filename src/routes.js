const express = require('express');
const userController = require('./controllers/user');
const listController = require('./controllers/listing');
const bookController = require('./controllers/booking');
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
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);

// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me', userController.showMe);
// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/users/:id', checkAuthentication, userController.update);

// Delete
Router.delete('/users/logout', userController.logout);

// Listings Routes
Router.get('/listings', listController.list);
Router.post('/listings', listController.create);
Router.patch('/listings/:id', listController.update);
Router.delete('/listings/:id', listController.destroy);

// Bookings Routes 
Router.get('/booking', bookController.list);
Router.post('/booking', bookController.create);
Router.delete('/booking/:id', bookController.destroy);

module.exports = Router;
