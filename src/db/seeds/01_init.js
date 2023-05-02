const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await knex('bookings').del()
  await knex('listings').del()

  await User.create('cool_cat', 'password1');
  await User.create('l33t-guy', 'password1');
};
