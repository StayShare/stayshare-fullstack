/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 *    table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users')
        table.integer('listing_id').references('id').inTable('listings');
        table.date('start_date')
        table.date('end_date')
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries

  await knex('bookings').insert([
    {id: 1, user_id: 1, listing_id: 1, start_date: "03/04/2020", end_date: "04/07/21"},
    // {id: 2, user_id: 2, listing_id: 1, start_date: "03/04/2020", end_date: "04/07/21"}
  ]);
};
