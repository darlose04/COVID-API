const express = require("express");
const router = express.Router();
const knex = require("../../config/database");

// get all case statistics
router.get("/", (req, res) => {
  knex
    .from("global")
    .innerJoin("global_cases", "global.id", "global_cases.id")
    .then((items) => res.json(items));
});

// get case stats for a specific country
router.get("/countries/:country", (req, res) => {
  knex("global")
    .where({
      Country: req.params.country,
    })
    .innerJoin("global_cases", "global.id", "global_cases.id")
    .then((items) => res.json(items));
});

module.exports = router;
