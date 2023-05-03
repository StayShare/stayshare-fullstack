/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('listings', (table) => {
        table.increments('id').primary();
        table.string('location');
        table.string('availability');
        table.string('images');
        table.integer('price');
        table.integer('user_id').references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('listings');
};