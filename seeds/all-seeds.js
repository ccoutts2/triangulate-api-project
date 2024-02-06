// import seed data files, arrays of objects
const pubsData = require("../seed-data/pubs-seeds");
const groupsData = require("../seed-data/group-seeds");
const usersData = require("../seed-data/users-seeds");
const userGroupsData = require("../seed-data/user-group-seeds");
const pubGroupData = require("../seed-data/pub-group-seeds");

exports.seed = async function (knex) {
  await knex("user_group").del();
  await knex("pub_group").del();
  await knex("pubs").del();
  await knex("group").del();
  await knex("user").del();
  await knex("pubs").insert(pubsData);
  await knex("group").insert(groupsData);
  await knex("user").insert(usersData);
  await knex("user_group").insert(userGroupsData);
  await knex("pub_group").insert(pubGroupData);
};
