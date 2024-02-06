const express = require("express");
const router = express.Router();
const fs = require("fs");
const cors = require("cors");
const crypto = require("crypto");
const axios = require("axios");

// GET /pubs

router.get("/", (req, res) => {
  const pubsFile = fs.readFileSync("./data/pubsgeo.json");
  const pubs = JSON.parse(pubsFile);

  res.json(pubs);
  console.log(pubs);
});

// POST / pubs;

router.post("/", async (req, res) => {
  const geoForwardUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const accessToken = process.env.MAPBOX_ACCESS_TOKEN;
  let findCoordinates = [];
  const geocodeAddress = async () => {
    try {
      const response = await axios.get(
        `${geoForwardUrl}${encodeURIComponent(
          req.body.address
        )}.json?access_token=${accessToken}`
      );
      const coordinates = response.data.features[0].geometry.coordinates;
      findCoordinates = [coordinates[0], coordinates[1]];
    } catch (error) {
      console.error(`Error geocodin: ${error.message}`);
    }
  };

  const foundAddress = await geocodeAddress();

  const newPub = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: findCoordinates,
    },
    properties: {
      id: crypto.randomUUID(),
      pub: req.body.pub,
      address: req.body.address,
      rating: req.body.rating,
    },
  };

  if (!newPub.properties.pub || !newPub.properties.address) {
    return res.status(400).send("Please enter the required fields");
  }

  const pubData = JSON.parse(fs.readFileSync("./data/pubsgeo.json"));

  pubData.features.push(newPub);

  fs.writeFileSync("./data/pubsgeo.json", JSON.stringify(pubData));

  res.status(201).json(pubData);
});

module.exports = router;
