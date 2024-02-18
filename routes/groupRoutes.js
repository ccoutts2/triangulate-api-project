const express = require("express");
const router = express.Router();
const axios = require("axios");
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

// GET groups

router.get("/groups", async (req, res) => {
  try {
    const groups = await knex("group");
    res.json(groups);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch list of groups" });
  }
});

// Get details about group

router.get("/groups/:groupId", async (req, res) => {
  const requestedGroupId = req.params.groupId;

  try {
    const groupDetails = await knex("group").where({ id: requestedGroupId }).first();

    if (!groupDetails) {
      res.status(404).json({ message: "Group not found" });
      return;
    }

    res.json(groupDetails);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch details of this group" });
  }
});

// GET users in a group

router.get("/users/:groupId", async (req, res) => {
  const requestedGroupId = req.params.groupId;

  try {
    const usersInGroup = await knex("user_group")
      .where({ "user_group.group_id": requestedGroupId })
      .join("user", "user_group.user_id", "user.id")
      .select(
        "user.user_name",
        "user.latitude",
        "user.longitude",
        "favourite_drink"
      );

    res.json(usersInGroup);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch list of users" });
  }
});

// Get groups a user in is

router.get("/users/groups/:userId", async (req, res) => {
  const requestedUserId = req.params.userId;

  try {
    const userInGroups = await knex("user_group")
      .where({ "user_group.user_id": requestedUserId })
      .join("group", "user_group.group_id", "group.id")
      .select("group.group_name");
    res.json(userInGroups);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch groups of user" });
  }
});

// GET pubs in a group

router.get("/meet/:groupId/pubs", async (req, res) => {
  const requestedGroupId = req.params.groupId;

  try {
    const pubsInGroup = await knex("pub_group")
      .where({
        "pub_group.group_id": requestedGroupId,
      })
      .join("pubs", "pub_group.pubs_id", "pubs.id")
      .select("*");

    let pubsGeo = { type: "FeatureCollection" };
    pubsGeo.features = [];

    pubsInGroup.forEach((pub) => {
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

    res.json(pubsGeo);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch list of pubs" });
  }
});

// Create a new group

router.post("/groups", async (req, res) => {
  try {
    const newGroupId = await knex("group").insert({
      ...req.body,
    });

    // Get the new group

    const newGroup = await knex("group").where({ id: newGroupId[0] }).first();

    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ message: "Can't create group" });
  }
});

// Add user to a group

router.post("/groups/:groupId/add", async (req, res) => {
  const requestedGroupId = req.params.groupId;

  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Please log in" });
  }

  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);

    if (decoded.id === req.body.user_id) {
      return res.status(400).json({ message: "Cannot add yourself to the group" });
    }

    // Check if the user is already in the group
    const isInGroup = await knex("user_group")
      .where({
        user_id: decoded.id,
        group_id: requestedGroupId,
      })
      .first();

    if (isInGroup) {
      return res.status(400).json({ message: "User is already in this group!" });
    }

    // Add the user to the group
    await knex("user_group").insert({
      user_id: decoded.id,
      group_id: requestedGroupId,
    });

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid auth token" });
  }
});

module.exports = router;
