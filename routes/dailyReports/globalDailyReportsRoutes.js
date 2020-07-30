const express = require("express");
const router = express.Router();
const knex = require("../../config/database");

// get all global daily reports from table
router.get("/", (req, res) => {
  knex
    .select()
    .table("global_daily_report")
    .then((items) => res.json(items));
});

module.exports = router;
