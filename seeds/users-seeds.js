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
      address: "123 Oxford Street, London W1D 1LR, UK",
      email: "aly@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Andy",
      address: "456 Regent Street, London W1B 3HH, UK",
      email: "andy@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Euan",
      address: "789 Piccadilly, London W1J 9HF, UK",
      email: "euan@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Ben",
      address: "101 Bond Street, London W1S 1RH, UK",
      email: "ben@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Andrew",
      address: "202 Carnaby Street, London W1F 7TH, UK",
      email: "andrew@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Afyq",
      address: "303 Covent Garden, London WC2E 8RF, UK",
      email: "afyq@example.com",
      password: "password123",
      role: "user",
    },
    {
      user_name: "Natasha",
      address: "404 Leicester Square, London WC2H 7NA, UK",
      email: "natasha@example.com",
      password: "password123",
      role: "user",
    },
  ]);
};
