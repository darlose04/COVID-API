require("dotenv").config();
const Knex = require("knex");

const knexDB = Knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "zach",
    password: process.env.DBPASSWD,
    database: "covid19",
  },
});

knexDB
  .select("UID")
  .from("deaths")
  .then((rows) => {
    for (row of rows) {
      console.log(`${row["UID"]}`);
    }
  });

// module.exports = knexDB;
