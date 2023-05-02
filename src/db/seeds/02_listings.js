/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('listings').insert([
    {id: 1, location: 'NY', availability: true, images: "", user_id: 1},
    {id: 2, location: 'BK', availability: true, images: "", user_id: 2},
    {id: 3, location: 'Bronx', availability: true, images: "", user_id: 2}
  ]);
};
