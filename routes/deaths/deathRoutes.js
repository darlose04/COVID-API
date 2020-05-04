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

// get all counties that have a greater population than the passed parameter
router.get("/population/:countypopulation", (req, res) => {
  knex("usa")
    .innerJoin("deaths", "usa.uid", "deaths.uid")
    .andWhere("Population", ">", req.params.countypopulation)
    .then((items) => res.json(items));
});

// get counties that have a population greater than the passed parameter
router.get("/states/:state/:countypopulation", (req, res) => {
  knex("usa")
    .innerJoin("deaths", "usa.uid", "deaths.uid")
    .where({
      State: req.params.state,
    })
    .andWhere("Population", ">", req.params.countypopulation)
    .then((items) => res.json(items));
});

/*
POSSIBLY ADD ROUTES THAT GET INFORMATION BASED ON DATE. NOT SURE IF NEEDED THOUGH
*/

module.exports = router;
