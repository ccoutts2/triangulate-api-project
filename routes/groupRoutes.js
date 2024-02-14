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

    // await knex("user_group").insert({
    //   user_id: req.token.id,
    //   group_id: newGroupId[0],
    // });

    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ message: "Can't create group" });
  }
});

// Add user to a group

router.post("/groups/:groupId/add", async (req, res) => {
  const requestedGroupId = req.params.groupId;
  const requestedUserId = req.body.user_id;

  try {
    const user = await knex("user").where({ id: requestedUserId }).first();

    console.log(requestedGroupId);
    console.log(requestedUserId);

    const isInGroup = await knex("user_group")
      .where({
        user_id: user.id,
        group_id: requestedGroupId,
      })
      .first();

    if (isInGroup) {
      res.status(400).json({ message: "User is already in this group!" });
      return;
    }

    await knex("user_group").insert({
      user_id: requestedUserId,
      group_id: requestedGroupId,
    });

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
