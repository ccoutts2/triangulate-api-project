require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { PORT, BACKEND_URL } = process.env;

const mapRoutes = require("./routes/mapRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use((req, res, next) => {
  console.log("Logging request from middleware.");
  next();
});

app.use("/maps", mapRoutes);

app.listen(PORT, () => {
  console.log(`Server started on ${BACKEND_URL}${PORT}`);
});
