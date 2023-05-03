/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('listings').insert([
    {availability: 'true', id: 1, images: "", price: 138, location: "BK", user_id: 1}
  ]);
};
