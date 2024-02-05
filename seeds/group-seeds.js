/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("group").del();
  await knex("group").insert([
    { id: 1, name: "london-pubs" },
    { id: 2, name: "glasgow-pubs" },
  ]);
};
