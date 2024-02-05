/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pub_group").del();
  await knex("pub_group").insert([
    { group_id: 1, pub_id: 1 },
    { group_id: 1, pub_id: 2 },
    { group_id: 1, pub_id: 3 },
    { group_id: 1, pub_id: 4 },
    { group_id: 1, pub_id: 5 },
    { group_id: 1, pub_id: 6 },
    { group_id: 1, pub_id: 7 },
    { group_id: 1, pub_id: 8 },
    { group_id: 1, pub_id: 9 },
    { group_id: 1, pub_id: 10 },
    { group_id: 1, pub_id: 11 },
    { group_id: 1, pub_id: 12 },
    { group_id: 1, pub_id: 13 },
    { group_id: 1, pub_id: 14 },
    { group_id: 1, pub_id: 15 },
    { group_id: 1, pub_id: 16 },
    { group_id: 1, pub_id: 17 },
    { group_id: 1, pub_id: 18 },
    { group_id: 1, pub_id: 19 },
    { group_id: 1, pub_id: 20 },
    { group_id: 1, pub_id: 21 },
    { group_id: 1, pub_id: 22 },
    { group_id: 1, pub_id: 23 },
    { group_id: 1, pub_id: 24 },
    { group_id: 1, pub_id: 25 },
    { group_id: 1, pub_id: 26 },
    { group_id: 1, pub_id: 27 },
    { group_id: 1, pub_id: 28 },
    { group_id: 1, pub_id: 29 },
    { group_id: 1, pub_id: 30 },
    { group_id: 1, pub_id: 31 },
    { group_id: 2, pub_id: 1 },
    { group_id: 2, pub_id: 2 },
    { group_id: 2, pub_id: 3 },
    { group_id: 2, pub_id: 4 },
    { group_id: 2, pub_id: 5 },
    { group_id: 2, pub_id: 6 },
    { group_id: 2, pub_id: 7 },
    { group_id: 2, pub_id: 8 },
    { group_id: 2, pub_id: 9 },
    { group_id: 2, pub_id: 10 },
    { group_id: 2, pub_id: 11 },
  ]);
};
