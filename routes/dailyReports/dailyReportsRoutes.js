const express = require("express");
const router = express.Router();
const knex = require("../../config/database");

// get all daily reports from table
router.get("/", (req, res) => {
  knex
    .select()
    .table("daily_report")
    .then((items) => res.json(items));
});

module.exports = router;
