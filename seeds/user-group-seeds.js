/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_group").del();
  await knex("user_group").insert([
    { group_id: 1, user_id: 1 },
    { group_id: 1, user_id: 2 },
    { group_id: 1, user_id: 3 },
    { group_id: 1, user_id: 4 },
    { group_id: 1, user_id: 5 },
    { group_id: 1, user_id: 6 },
    { group_id: 1, user_id: 7 },
    { group_id: 2, user_id: 1 },
    { group_id: 2, user_id: 2 },
    { group_id: 2, user_id: 3 },
  ]);
};
