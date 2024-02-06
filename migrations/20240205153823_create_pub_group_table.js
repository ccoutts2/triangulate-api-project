/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pub_group", (table) => {
    table.increments("id").primary();
    table
      .integer("pubs_id")
      .unsigned()
      .references("pubs.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("group_id")
      .unsigned()
      .references("group.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
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
