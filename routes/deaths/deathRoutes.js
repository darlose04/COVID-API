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
router.get("/states/:name", (req, res) => {
  knex("usa")
    .where({
      State: req.params.name,
    })
    .innerJoin("deaths", "usa.uid", "deaths.uid")
    .then((items) => res.json(items));
});

module.exports = router;
