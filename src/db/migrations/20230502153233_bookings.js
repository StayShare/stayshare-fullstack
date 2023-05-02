/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('bookings', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users')
        table.integer('listing_id').references('id').inTable('listings');
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('bookings');
};
