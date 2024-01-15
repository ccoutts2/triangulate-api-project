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
    id: pub.id,
    pub: pub.pub,
    address: pub.address,
  }));

  res.json(pubList);
});

// POST /maps

router.post("/", (req, res) => {
  // const geoForwardUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  // // const accessToken = process.env.MAPBOX_ACCESS_TOKEN;

  // const geocodeAddress = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${geoForwardUrl}${encodeURIComponent(
  //         address
  //       )}.json?access_token=${accessToken}`
  //     );

  //     const coordinates = response.data.features[0].geometry.coordinates;
  //   } catch (error) {
  //     console.error(`Error geocoding ${address}: ${error.message}`);
  //   }
  // };

  // geocodeAddress();

  const newPub = {
    id: crypto.randomUUID(),
    pub: req.body.pub,
    address: req.body.address,
  };

  if (!newPub.id) {
    return res.status(400).json({ error: "Please provide a pub id" });
  }

  const pubData = JSON.parse(fs.readFileSync("./data/pubs.json"));

  pubData.push(newPub);

  fs.writeFileSync("./data/pub.json", JSON.stringify(pubData));

  res.status(201).json(pubData);
});

module.exports = router;
