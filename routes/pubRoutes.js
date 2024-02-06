const express = require("express");
const router = express.Router();
const fs = require("fs");
const cors = require("cors");
const crypto = require("crypto");
const axios = require("axios");
const knex = require("knex")(require("../knexfile"));

// GET /pubs

router.get("/", async (req, res) => {
  try {
    const pubsData = await knex("pubs");

    let pubsGeo = { type: "FeatureCollection" };
    pubsGeo.features = [];

    pubsData.forEach((pub) => {
      const feature = {
        type: "Feature",
        geometry: { type: "Point", coordinates: [pub.longitude, pub.latitude] },
        properties: {
          id: pub.id,
          pub: pub.pub,
          address: pub.address,
          rating: pub.rating,
        },
      };

      pubsGeo.features.push(feature);
    });

    res.status(200).json(pubsGeo);
  } catch (error) {
    console.log(error);
  }
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
      console.error(`Error geocoding: ${error.message}`);
    }
  };

  const foundAddress = await geocodeAddress();

  const insertedPub = await knex("pubs").insert({
    pub: req.body.pub,
    address: req.body.address,
    latitude: findCoordinates[1],
    longitude: findCoordinates[0],
    rating: req.body.rating,
  });

  const newPub = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: findCoordinates,
    },
    properties: {
      id: insertedPub[0].id,
      pub: req.body.pub,
      address: req.body.address,
      rating: req.body.rating,
    },
  };

  if (!newPub.properties.pub || !newPub.properties.address) {
    return res.status(400).send("Please enter the required fields");
  }

  res.status(201).json(newPub);
});

module.exports = router;
