const express = require("express");
const router = express.Router();
const fs = require("fs");
const cors = require("cors");
const crypto = require("crypto");

// GET /maps

router.get("/", (req, res) => {
  const pubsFile = fs.readFileSync("./data/pubs.json");
  const pubs = JSON.parse(pubsFile);

  const pubList = pubs.map((pub) => ({
    PubName: pub.PubName,
    Address: pub.Address,
  }));

  res.json(pubList);
});

module.exports = router;
