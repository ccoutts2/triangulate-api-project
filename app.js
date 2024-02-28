require("dotenv").config();
const express = require("express");
const cors = require("cors");

const pubRoutes = require("./routes/pubRoutes");

const friendRoutes = require("./routes/friendRoutes");

const userRoutes = require("./routes/userRoutes");

const groupRoutes = require("./routes/groupRoutes");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("./public"));

app.use((req, res, next) => {
  next();
});

app.use("/pubs", pubRoutes);
app.use("/friends", friendRoutes);
app.use("/api/users", userRoutes);
app.use("/", groupRoutes);

module.exports = app;
