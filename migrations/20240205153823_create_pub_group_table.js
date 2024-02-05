/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pub_group", (table) => {
    table.increments("id").primary();
    table.integer("group_id").references("id").inTable("group").notNullable();
    table.integer("pub_id").references("id").inTable("pubs").notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pub_group");
};
