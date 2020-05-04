const express = require("express");
const router = express.Router();
const knex = require("../../config/database");

// get all death statistics
router.get("/", (req, res) => {
  knex
    .from("usa")
    .innerJoin("deaths", "usa.uid", "deaths.uid")
    .then((items) => res.json(items));
});

// get stats for specific states
router.get("/states/:state", (req, res) => {
  knex("usa")
    .where({
      State: req.params.state,
    })
    .innerJoin("deaths", "usa.uid", "deaths.uid")
    .then((items) => res.json(items));
});

// get stats for specific counties in specific states
router.get("/states/:state/county/:county", (req, res) => {
  knex("usa")
    .innerJoin("deaths", "usa.uid", "deaths.uid")
    .where({
      County: req.params.county,
      State: req.params.state,
    })
    .then((items) => res.json(items));
});

module.exports = router;
