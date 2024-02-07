const express = require("express");
const router = express.Router();
const axios = require("axios");
const knex = require("knex")(require("../knexfile"));

// GET groups

router.get("/groups", async (req, res) => {
  try {
    const groups = await knex("group");
    res.json(groups);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch list of groups" });
  }
});

// GET users in a group

router.get("/users/:groupId", async (req, res) => {
  const requestedGroupId = req.params.groupId;

  try {
    const usersInGroup = await knex("user_group")
      .where({ "user_group.group_id": requestedGroupId })
      .join("user", "user_group.user_id", "user.id")
      .select("user.user_name");

    res.json(usersInGroup);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch list of users" });
  }
});

module.exports = router;
