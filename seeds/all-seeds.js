// import seed data files, arrays of objects
const usersData = require("../seed-data/1-users-seeds");
const pubsData = require("../seed-data/2-pubs-seeds");
const groupsData = require("../seed-data/3-group-seeds");
const pubGroupData = require("../seed-data/4-pub-group-seeds");
const userGroupsData = require("../seed-data/5-user-group-seeds");

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
