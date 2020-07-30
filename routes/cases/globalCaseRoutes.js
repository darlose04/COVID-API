const express = require("express");
const router = express.Router();
const knex = require("../../config/database");

// get all case statistics
router.get("/", (req, res) => {
  knex
    .from("global")
    .innerJoin("global_cases", "global.id", "global_Cases.id")
    .then((items) => res.json(items));
});

module.exports = router;
