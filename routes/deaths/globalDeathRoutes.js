const express = require("express");
const router = express.Router();
const knex = require("../../config/database");

// get all death statistics
router.get("/", (req, res) => {
  knex
    .from("global")
    .innerJoin("global_deaths", "global.id", "global_deaths.id")
    .then((items) => res.json(items));
});

// get death stats for a specific country
router.get("/countries/:country", (req, res) => {
  knex("global")
    .where({
      Country: req.params.country,
    })
    .innerJoin("global_deaths", "global.id", "global_deaths.id")
    .then((items) => res.json(items));
});

module.exports = router;
