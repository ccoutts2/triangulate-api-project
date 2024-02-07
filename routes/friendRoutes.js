const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const axios = require("axios");

// GET /friends

router.get("/", async (req, res) => {
  try {
    const usersData = await knex("user");

    const formattedUsersData = usersData.map((user) => ({
      id: user.id,
      user_name: user.user_name,
      address: user.address,
      favourite_drink: user.favourite_drink,
      latitude: user.latitude,
      longitude: user.longitude,
    }));

    res.status(200).json(formattedUsersData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
