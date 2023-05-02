/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('listings', (table) => {
        table.increments('id').primary();
        table.string('location').notNullable();
        table.string('availability').notNullable();
        table.string('images').notNullable();
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