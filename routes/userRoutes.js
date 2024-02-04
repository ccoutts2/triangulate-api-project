const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));

router.post("/signup", async (req, res) => {
  const { user_name, address, email, password } = req.body;

  if (!user_name || !address || !email || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  const hashedPassword = bcrypt.hashSync(password.toString(), 6);

  const newUser = {
    user_name,
    address,
    email,
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
    console.log(error);
    res.status(400).send("Invalid auth token");
  }
});

module.exports = router;
