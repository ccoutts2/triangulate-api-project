/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      user_name: "Aly",
      address: "122 Chapman Street, Tower Hamlets, London, E1 2PH, United Kingdom",
      email: "aly@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Andy",
      address: "The Danny Fiszman Bridge, London, England N7 7EZ, United Kingdom",
      email: "andy@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Euan",
      address: "1 Bank End, Southwark, London, SE1 9BU, United Kingdom",
      email: "euan@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Ben",
      address: "26 Mitchison Road, Islington, London, N1 3NG, United Kingdom",
      email: "ben@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Andrew",
      address: "40 Duncan Terrace, Islington, London, N1 8AL, United Kingdom",
      email: "andrew@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Afyq",
      address: "75 Clissold Crescent, Hackney, London, N16 9AR, United Kingdom",
      email: "afyq@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Natasha",
      address: "11 New North Road, Hackney, London, N1 6JB, United Kingdom",
      email: "natasha@example.com",
      password: "password123",
      role: "user",
    },
  ]);
};
