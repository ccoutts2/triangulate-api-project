const express = require("express");
const router = express.Router();
const fs = require("fs");
const cors = require("cors");
const crypto = require("crypto");

// GET /friends

router.get("/", (req, res) => {
  const friendsFile = fs.readFileSync("./data/friends.json");
  const friends = JSON.parse(friendsFile);

  const friendsList = friends.map((friend) => ({
    id: friend.id,
    name: friend.name,
    homeAddress: friend.homeAddress,
    favouriteDrink: friend.favouriteDrink,
  }));

  res.json(friendsList);
});

module.exports = router;
