/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pubs", (table) => {
    table.increments("id").primary();
    table.string("pub").notNullable();
    table.string("address");
    table.string("latitude");
    table.string("longitude");
    table.string("rating");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pubs");
};
