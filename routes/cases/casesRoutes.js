const express = require("express");
const router = express.Router();
const knex = require("../../config/database");

// get all case statistics
router.get("/", (req, res) => {
  knex
    .from("usa")
    .innerJoin("cases", "usa.uid", "cases.uid")
    .then((items) => res.json(items));
});

module.exports = router;
