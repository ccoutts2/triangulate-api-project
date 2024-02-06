/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary();
    table.string("user_name").notNullable();
    table.string("address");
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("favourite_drink").notNullable();
    table.string("role");
    table.decimal("latitude", 10, 6);
    table.decimal("longitude", 10, 6);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
