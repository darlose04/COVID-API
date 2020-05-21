const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();
app.use(cors());
app.use(compression());

// app.get("/", (req, res) => {
//   res.send("<h1>COVID-19 API</h1>");
// });

// Routes for death statistics
app.use("/api/usa/coronadeaths", require("./routes/deaths/deathRoutes"));
// Routes for cases statistics
app.use("/api/usa/coronacases", require("./routes/cases/casesRoutes"));
// Routes for daily report
app.use(
  "/api/usa/dailyreport",
  require("./routes/dailyReports/dailyReportsRoutes")
);

module.exports = app;
