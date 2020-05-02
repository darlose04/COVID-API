const express = require("express");
const cors = require("cors");
const compression = require("compression");

// require db, will come from config directory

const app = express();
app.use(cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("<h1>COVID-19 API</h1>");
});

module.exports = app;