const express = require("express");
const cors = require("cors");
const compression = require("compression");
const knex = require("./config/database");

// require db, will come from config directory

const app = express();
app.use(cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("<h1>COVID-19 API</h1>");
});

// Routes for death statistics
app.use("/api/usa/coronadeaths", require("./routes/deaths/deathRoutes"));

module.exports = app;
