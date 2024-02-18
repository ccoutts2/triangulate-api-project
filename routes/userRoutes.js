const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));
const axios = require("axios");

router.post("/signup", async (req, res) => {
  const { user_name, address, email, favourite_drink, password } = req.body;

  if (!user_name || !address || !email || !favourite_drink || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  const hashedPassword = bcrypt.hashSync(password.toString(), 6);

  const geoForwardUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const accessToken = process.env.MAPBOX_ACCESS_TOKEN;
  let findCoordinates = [];

  const geocodeAddress = async () => {
    try {
      const { data } = await axios.get(
        `${geoForwardUrl}${encodeURIComponent(
          req.body.address
        )}.json?access_token=${accessToken}`
      );

      console.log(req.body.address);
      const coordinates = data.features[0].geometry.coordinates;
      console.log(coordinates);
      findCoordinates = [coordinates[0], coordinates[1]];
    } catch (error) {
      console.error(`Error geocoding: ${error.message}`);
    }
  };

  const foundAddress = await geocodeAddress();
  console.log(foundAddress);

  const newUser = {
    user_name,
    address,
    email,
    favourite_drink,
    latitude: findCoordinates[1],
    longitude: findCoordinates[0],
    role: "user",
    password: hashedPassword,
  };

  try {
    await knex("user").insert(newUser);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed registration" });
  }
});

router.post("/login", async (req, res) => {
  const { user_name, password } = req.body;

  if (!user_name || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  try {
    const user = await knex("user").where({ user_name: user_name }).first();

    const passwordCorrect = bcrypt.compareSync(password.toString(), user.password);

    if (!passwordCorrect) {
      return res.status(400).send("Invalid password");
    }

    const token = jwt.sign(
      { id: user.id, password: user.password },
      `${process.env.JWT_SECRET}`,
      {
        expiresIn: "24h",
      }
    );

    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed login" });
  }
});

router.get("/add-pub", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);

    const user = await knex("user").where({ id: decoded.id }).first();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send("Invalid auth token");
  }
});

router.get("/profile", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);

    const user = await knex("user").where({ id: decoded.id }).first();

    res.json(user);
  } catch (error) {
    return res.status(401).send("Invalid auth token");
  }
});

module.exports = router;
