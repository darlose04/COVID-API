require("dotenv").config();
const knex = require("knex");

const knexDB = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "zach",
    password: process.env.DBPASSWD,
    database: "covid19",
  },
});

module.exports = knexDB;
